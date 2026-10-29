const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const sql = require('mssql');
const bcrypt = require('bcryptjs');


const DB = {
  server: 'localhost', database: 'LocalShop', user: 'sa', password: 'sapins@071',
  options: { encrypt: false, trustServerCertificate: true }
};
const C = 'Cashier', M = 'Store Manager', A = 'Super Admin';
const ALL = [C, M, A], MA = [M, A], ADMIN = [A];
let pool, session = null;
const r2 = x => Math.round(x * 100) / 100;

const SCHEMA = [
`IF OBJECT_ID('Users','U') IS NULL CREATE TABLE Users(Id INT IDENTITY PRIMARY KEY, Username NVARCHAR(50) NOT NULL UNIQUE, FullName NVARCHAR(100) NOT NULL, PasswordHash NVARCHAR(100) NOT NULL, Role NVARCHAR(20) NOT NULL CHECK (Role IN ('Cashier','Store Manager','Super Admin')), Active BIT NOT NULL DEFAULT 1, Permissions NVARCHAR(500) NULL)`,
`IF OBJECT_ID('Items','U') IS NULL CREATE TABLE Items(Id INT IDENTITY PRIMARY KEY, Name NVARCHAR(100) NOT NULL, Category NVARCHAR(50) NOT NULL, Price DECIMAL(12,2) NOT NULL, Stock INT NOT NULL DEFAULT 0, Barcode NVARCHAR(50) NULL, ImageUrl NVARCHAR(500) NULL, Active BIT NOT NULL DEFAULT 1)`,
`IF OBJECT_ID('Sales','U') IS NULL CREATE TABLE Sales(Id INT IDENTITY PRIMARY KEY, InvoiceNo NVARCHAR(30) NULL, CashierId INT NOT NULL REFERENCES Users(Id), Total DECIMAL(12,2) NOT NULL, Paid DECIMAL(12,2) NOT NULL, Balance DECIMAL(12,2) NOT NULL, PaymentMethod NVARCHAR(20) NOT NULL DEFAULT 'Cash', Discount DECIMAL(12,2) NOT NULL DEFAULT 0, CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`,
`IF OBJECT_ID('SaleItems','U') IS NULL CREATE TABLE SaleItems(Id INT IDENTITY PRIMARY KEY, SaleId INT NOT NULL REFERENCES Sales(Id), ItemId INT NOT NULL REFERENCES Items(Id), ItemName NVARCHAR(100) NOT NULL, Qty INT NOT NULL, UnitPrice DECIMAL(12,2) NOT NULL, DiscountPct DECIMAL(5,2) NOT NULL DEFAULT 0, LineTotal DECIMAL(12,2) NOT NULL)`,
`IF OBJECT_ID('Settings','U') IS NULL CREATE TABLE Settings([Key] NVARCHAR(50) PRIMARY KEY, [Value] NVARCHAR(200) NOT NULL)`,
`IF OBJECT_ID('Payments','U') IS NULL CREATE TABLE Payments(Id INT IDENTITY PRIMARY KEY, Period CHAR(7) NOT NULL, Amount DECIMAL(12,2) NOT NULL, Method NVARCHAR(20) NOT NULL, Note NVARCHAR(200) NULL, PaidAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(), RecordedBy NVARCHAR(50) NOT NULL)`,
`IF OBJECT_ID('GRNs','U') IS NULL CREATE TABLE GRNs(Id INT IDENTITY PRIMARY KEY, GrnNo NVARCHAR(50) NOT NULL UNIQUE, Supplier NVARCHAR(100) NOT NULL, InvoiceRef NVARCHAR(50) NULL, TotalCost DECIMAL(12,2) NOT NULL DEFAULT 0, Notes NVARCHAR(250) NULL, ReceivedBy NVARCHAR(100) NOT NULL, CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME())`,
`IF OBJECT_ID('GRNItems','U') IS NULL CREATE TABLE GRNItems(Id INT IDENTITY PRIMARY KEY, GrnId INT NOT NULL REFERENCES GRNs(Id) ON DELETE CASCADE, ItemId INT NOT NULL REFERENCES Items(Id), ItemName NVARCHAR(100) NOT NULL, Qty INT NOT NULL, UnitCost DECIMAL(12,2) NOT NULL DEFAULT 0, LineTotal DECIMAL(12,2) NOT NULL DEFAULT 0, BatchNo NVARCHAR(50) NULL, ExpiryDate NVARCHAR(20) NULL)`,
`IF OBJECT_ID('SubscriptionCodes','U') IS NULL CREATE TABLE SubscriptionCodes(Code NVARCHAR(50) PRIMARY KEY, Months INT NOT NULL DEFAULT 1, UsedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(), Period NVARCHAR(10) NOT NULL, UsedBy NVARCHAR(100) NOT NULL, Note NVARCHAR(200) NULL)`
];

async function initDb() {
  const boot = await new sql.ConnectionPool({ ...DB, database: 'master' }).connect();
  await boot.request().query(`IF DB_ID('${DB.database}') IS NULL CREATE DATABASE [${DB.database}]`);
  await boot.close();
  pool = await new sql.ConnectionPool(DB).connect();
  for (const s of SCHEMA) await pool.request().query(s);
  await pool.request().query(`
    IF COL_LENGTH('Sales', 'PaymentMethod') IS NULL
      ALTER TABLE Sales ADD PaymentMethod NVARCHAR(20) NOT NULL DEFAULT 'Cash';
    IF COL_LENGTH('Sales', 'Discount') IS NULL
      ALTER TABLE Sales ADD Discount DECIMAL(12,2) NOT NULL DEFAULT 0;
    IF COL_LENGTH('Items', 'ImageUrl') IS NULL
      ALTER TABLE Items ADD ImageUrl NVARCHAR(500) NULL;
    IF COL_LENGTH('Users', 'Permissions') IS NULL
      ALTER TABLE Users ADD Permissions NVARCHAR(500) NULL;
    IF OBJECT_ID('SubscriptionCodes','U') IS NULL
      CREATE TABLE SubscriptionCodes(Code NVARCHAR(50) PRIMARY KEY, Months INT NOT NULL DEFAULT 1, UsedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(), Period NVARCHAR(10) NOT NULL, UsedBy NVARCHAR(100) NOT NULL, Note NVARCHAR(200) NULL);
    UPDATE Settings SET [Value] = 'Commercial Bank' WHERE [Key] = 'bankName';
    UPDATE Settings SET [Value] = 'H.A Aman Manthira Hapuarachchi' WHERE [Key] = 'accName';
    UPDATE Settings SET [Value] = '8030194935' WHERE [Key] = 'accNumber';
    UPDATE Settings SET [Value] = 'Gampaha' WHERE [Key] = 'bankBranch';
  `);
  const q = () => pool.request();
  if (!(await q().query('SELECT COUNT(*) c FROM Users')).recordset[0].c)
    await q().input('h', sql.NVarChar, bcrypt.hashSync('admin123', 10))
      .query(`INSERT INTO Users(Username,FullName,PasswordHash,Role,Permissions) VALUES('admin','Super Admin',@h,'Super Admin','*')`);
  if (!(await q().query('SELECT COUNT(*) c FROM Items')).recordset[0].c)
    await q().query(`INSERT INTO Items(Name,Category,Price,Stock,ImageUrl) VALUES
      ('Chicken Fried Rice','Fried Rice',650,50,'assets/food/chicken-fried-rice.jpg'),
      ('Egg Fried Rice','Fried Rice',500,50,'assets/food/egg-fried-rice.jpg'),
      ('Chicken Kottu','Kottu',700,50,'assets/food/chicken-kottu.jpg'),
      ('Cheese Kottu','Kottu',850,40,'assets/food/cheese-kottu.jpg'),
      ('Fish Cutlet','Short Eats',90,100,'assets/food/fish-cutlet.jpg'),
      ('Egg Roll','Short Eats',120,100,'assets/food/chinese-egg-roll.jpg'),
      ('Vegetable Roti','Short Eats',80,100,'assets/food/vegetable-roti.jpg'),
      ('Milk Tea','Beverages',80,100,'assets/food/ceylon-milk-tea.jpg'),
      ('Lime Juice','Beverages',150,60,'assets/food/fresh-lime-juice.jpg'),
      ('Coca-Cola 400ml','Beverages',180,60,'assets/food/coca-cola.jpg')`);
  const defaults = {
    fee: '3000',
    dueDay: '25',
    installedOn: new Date().toISOString(),
    bankName: 'Commercial Bank',
    accName: 'H.A Aman Manthira Hapuarachchi',
    accNumber: '8030194935',
    bankBranch: 'Gampaha',
    bankNotes: 'Please state your store name and bill invoice ID as payment reference.',
    shopName: 'Kade POS Supermarket & Cafe',
    shopTagline: 'Fresh Quality Groceries & Food',
    shopAddress: 'No 124, High Level Road, Colombo 03',
    shopPhone: '071 234 5678 / 011 234 5678',
    shopTaxNo: 'BR-2024-99881',
    receiptHeader: 'WELCOME TO KADE POS',
    receiptFooter: 'Thank you for shopping with us! Please come again.',
    receiptPaperWidth: '80mm',
    receiptAutoPrint: '1',
    backupPath: path.join(require('os').homedir(), 'KadePOS_Backups')
  };
  for (const [k, v] of Object.entries(defaults))
    await q().input('k', sql.NVarChar, k).input('v', sql.NVarChar, v)
      .query('IF NOT EXISTS(SELECT 1 FROM Settings WHERE [Key]=@k) INSERT INTO Settings([Key],[Value]) VALUES(@k,@v)');
}

/* ---------- Subscription logic ---------- */
async function getSettings() {
  const o = {};
  (await pool.request().query('SELECT [Key] k, [Value] v FROM Settings')).recordset.forEach(x => (o[x.k] = x.v));
  return o;
}
const setSetting = (k, v) => pool.request().input('k', sql.NVarChar, k).input('v', sql.NVarChar, String(v))
  .query('IF EXISTS(SELECT 1 FROM Settings WHERE [Key]=@k) UPDATE Settings SET [Value]=@v WHERE [Key]=@k ELSE INSERT INTO Settings([Key],[Value]) VALUES(@k,@v)');
const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

async function subStatus() {
  const s = await getSettings();
  const dueDay = +s.dueDay || 25, fee = +s.fee || 3000;
  // Basic clock-rollback protection: never go behind the last date we saw.
  let now = new Date();
  const seen = s.lastSeen ? new Date(s.lastSeen) : null;
  if (seen && seen > now) now = seen; else await setSetting('lastSeen', now.toISOString());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inst = new Date(s.installedOn || now);
  const installKey = `${inst.getFullYear()}-${String(inst.getMonth() + 1).padStart(2, '0')}`;
  const installDateStr = `${inst.getFullYear()}-${String(inst.getMonth() + 1).padStart(2, '0')}-${String(inst.getDate()).padStart(2, '0')}`;
  const paid = new Set((await pool.request().query('SELECT DISTINCT Period FROM Payments')).recordset.map(r => r.Period));
  const res = {
    state: 'ok', fee, dueDay, due: null, period: null, daysLeft: null, nextDue: null, 
    freeMonth: installKey,
    installedOn: installDateStr,
    bankDetails: {
      bankName: s.bankName || 'Commercial Bank',
      accName: s.accName || 'H.A Aman Manthira Hapuarachchi',
      accNumber: s.accNumber || '8030194935',
      bankBranch: s.bankBranch || 'Gampaha',
      bankNotes: s.bankNotes || 'Please state your store name and bill invoice ID as payment reference.'
    }
  };
  for (let m = -2; m <= 3; m++) {
    const dim = new Date(today.getFullYear(), today.getMonth() + m + 1, 0).getDate();
    const d = new Date(today.getFullYear(), today.getMonth() + m, Math.min(dueDay, dim));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const diff = Math.round((d - today) / 864e5);
    // Find next upcoming due date (only for months after installation month)
    if (!res.nextDue && diff >= 0 && key > installKey) res.nextDue = ymd(d);
    // Installation month and any prior months are 100% free - customer can use system with no codes needed!
    if (paid.has(key) || key <= installKey) continue;
    if (diff <= -3) return { ...res, state: 'locked', due: ymd(d), period: key, daysLeft: diff };
    if (diff <= 7 && res.state === 'ok') Object.assign(res, { state: 'warning', due: ymd(d), period: key, daysLeft: diff });
  }
  return res;
}
const recordPayment = (period, amount, method, note, by) => pool.request()
  .input('p', sql.Char(7), period).input('a', sql.Decimal(12, 2), amount).input('m', sql.NVarChar, method)
  .input('n', sql.NVarChar, note || null).input('b', sql.NVarChar, by)
  .query('INSERT INTO Payments(Period,Amount,Method,Note,RecordedBy) VALUES(@p,@a,@m,@n,@b)');

/* ---------- IPC plumbing: auth + RBAC + subscription lock enforced here ---------- */
function hasAccess(ch, session, roles) {
  if (!session) return false;
  // Super Admin always has full access to everything
  if (session.role === A) return true;

  // users:* and sub:* are strictly restricted to Super Admin by default
  if (ch.startsWith('users:') || ch.startsWith('sub:')) {
    return false;
  }

  // Determine user permissions list
  let userPerms = [];
  if (session.permissions) {
    userPerms = session.permissions.split(',').map(s => s.trim().toLowerCase());
  } else {
    // Default fallback by role
    if (session.role === M) userPerms = ['pos', 'dashboard', 'items', 'grn', 'reports', 'receipts'];
    else if (session.role === C) userPerms = ['pos', 'dashboard'];
  }

  // Channel to permission mapping
  if (ch.startsWith('sales:')) return userPerms.includes('pos');
  if (ch.startsWith('dashboard:')) return userPerms.includes('dashboard');
  if (ch.startsWith('items:')) {
    if (ch === 'items:list') return userPerms.includes('pos') || userPerms.includes('items') || userPerms.includes('grn');
    return userPerms.includes('items');
  }
  if (ch.startsWith('grn:')) return userPerms.includes('grn');
  if (ch.startsWith('reports:')) return userPerms.includes('reports');
  if (ch.startsWith('settings:')) {
    if (ch === 'settings:getReceipt') return true;
    return userPerms.includes('receipts');
  }
  if (ch.startsWith('backup:')) {
    if (ch === 'backup:runNow' || ch === 'backup:getStatus') return true;
    return userPerms.includes('backup') || session.role === A;
  }

  return roles ? roles.includes(session.role) : true;
}

function handle(ch, roles, fn) {
  ipcMain.handle(ch, async (_e, p = {}) => {
    try {
      if (roles) {
        if (!session) throw new Error('Not logged in');
        if (!hasAccess(ch, session, roles)) throw new Error('Permission denied');
        if (!ch.startsWith('sub:') && (await subStatus()).state === 'locked') throw new Error('SYSTEM_LOCKED');
      }
      return { ok: true, data: await fn(p) };
    } catch (e) { return { ok: false, error: e.message }; }
  });
}
const rng = (p, rq) => rq.input('f', sql.VarChar, p.from).input('t', sql.VarChar, p.to);
const RANGE = 'CreatedAt >= CAST(@f AS DATE) AND CreatedAt < DATEADD(day,1,CAST(@t AS DATE))';

handle('auth:login', null, async ({ username, password }) => {
  const u = (await pool.request().input('u', sql.NVarChar, username || '')
    .query('SELECT * FROM Users WHERE Username=@u AND Active=1')).recordset[0];
  if (!u || !bcrypt.compareSync(password || '', u.PasswordHash)) throw new Error('Invalid username or password');
  session = { id: u.Id, username: u.Username, fullName: u.FullName, role: u.Role, permissions: u.Permissions || null };
  return session;
});
handle('auth:changePassword', null, async ({ currentPassword, newPassword }) => {
  if (!session) throw new Error('Not logged in');
  if (!newPassword || newPassword.trim().length < 6) throw new Error('New password must be at least 6 characters');
  const u = (await pool.request().input('id', sql.Int, session.id).query('SELECT * FROM Users WHERE Id=@id AND Active=1')).recordset[0];
  if (!u) throw new Error('User not found');
  if (!bcrypt.compareSync(currentPassword || '', u.PasswordHash)) throw new Error('Current password is incorrect');
  await pool.request()
    .input('id', sql.Int, session.id)
    .input('h', sql.NVarChar, bcrypt.hashSync(newPassword.trim(), 10))
    .query('UPDATE Users SET PasswordHash=@h WHERE Id=@id');
  return true;
});
handle('auth:logout', null, async () => { session = null; });
handle('sub:status', null, subStatus);
handle('sub:override', null, async ({ username, password }) => {
  const u = (await pool.request().input('u', sql.NVarChar, username || '')
    .query(`SELECT * FROM Users WHERE Username=@u AND Active=1 AND Role='Super Admin'`)).recordset[0];
  if (!u || !bcrypt.compareSync(password || '', u.PasswordHash)) throw new Error('Super Admin credentials required');
  const st = await subStatus();
  if (st.state === 'locked') await recordPayment(st.period, 0, 'OVERRIDE', 'Manual unlock', u.Username);
  return true;
});
handle('sub:overview', ADMIN, async () => ({
  status: await subStatus(),
  payments: (await pool.request().query('SELECT TOP 36 * FROM Payments ORDER BY Id DESC')).recordset
}));
handle('sub:save', ADMIN, async ({ fee, dueDay, installedOn }) => {
  if (!(fee >= 0) || !(dueDay >= 1 && dueDay <= 28)) throw new Error('Fee must be >= 0 and due day 1-28');
  await setSetting('fee', fee);
  await setSetting('dueDay', Math.floor(dueDay));
  if (installedOn) {
    const d = new Date(installedOn);
    if (!isNaN(d.getTime())) {
      await setSetting('installedOn', d.toISOString());
    }
  }
  return true;
});
handle('sub:saveBank', ADMIN, async ({ bankName, accName, accNumber, bankBranch, bankNotes }) => {
  await setSetting('bankName', (bankName || '').trim());
  await setSetting('accName', (accName || '').trim());
  await setSetting('accNumber', (accNumber || '').trim());
  await setSetting('bankBranch', (bankBranch || '').trim());
  await setSetting('bankNotes', (bankNotes || '').trim());
  return true;
});
handle('sub:pay', ADMIN, async ({ period, amount, method, note }) => {
  if (!/^\d{4}-\d{2}$/.test(period)) throw new Error('Period must be YYYY-MM');
  await recordPayment(period, +amount || 0, method || 'Cash', note, session.username);
});

/* ---------- Subscription Activation Codes System (50 Codes) ---------- */
const CODES_FILE = path.join(__dirname, 'subscription-codes.json');

function loadSubscriptionCodes() {
  try {
    if (fs.existsSync(CODES_FILE)) {
      return JSON.parse(fs.readFileSync(CODES_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error loading subscription-codes.json:', e.message);
  }
  return [];
}

function saveSubscriptionCodes(codes) {
  try {
    fs.writeFileSync(CODES_FILE, JSON.stringify(codes, null, 2), 'utf8');
  } catch (e) {
    console.error('Error saving subscription-codes.json:', e.message);
  }
}

handle('sub:redeemCode', null, async ({ code }) => {
  const cleanCode = (code || '').trim().toUpperCase().replace(/[\s_]/g, '-');
  if (!cleanCode) throw new Error('Please enter an activation code.');

  const codes = loadSubscriptionCodes();
  const normClean = cleanCode.replace(/-/g, '');
  const found = codes.find(c => c.code.replace(/-/g, '').toUpperCase() === normClean);

  if (!found) {
    throw new Error('Invalid activation code. Please check the code provided by your vendor.');
  }

  let isUsedInDb = false;
  try {
    const checkDb = await pool.request()
      .input('c', sql.NVarChar, found.code)
      .query('SELECT 1 FROM SubscriptionCodes WHERE Code=@c');
    if (checkDb.recordset.length > 0) isUsedInDb = true;
  } catch {}

  if (found.used || isUsedInDb) {
    throw new Error('This activation code has already been redeemed.');
  }

  const st = await subStatus();
  let targetPeriod = st.period;

  if (!targetPeriod) {
    const paid = new Set((await pool.request().query('SELECT DISTINCT Period FROM Payments')).recordset.map(r => r.Period));
    const now = new Date();
    for (let m = 0; m <= 24; m++) {
      const d = new Date(now.getFullYear(), now.getMonth() + m, 1);
      const pKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      if (!paid.has(pKey)) {
        targetPeriod = pKey;
        break;
      }
    }
  }

  if (!targetPeriod) {
    const now = new Date();
    targetPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  }

  const user = session ? session.username : 'Customer';

  try {
    await pool.request()
      .input('c', sql.NVarChar, found.code)
      .input('m', sql.Int, found.months || 1)
      .input('p', sql.NVarChar, targetPeriod)
      .input('u', sql.NVarChar, user)
      .input('n', sql.NVarChar, `Redeemed ${found.months || 1}-month activation code`)
      .query('IF NOT EXISTS(SELECT 1 FROM SubscriptionCodes WHERE Code=@c) INSERT INTO SubscriptionCodes(Code,Months,Period,UsedBy,Note) VALUES(@c,@m,@p,@u,@n)');
  } catch (err) {
    console.error('DB insert into SubscriptionCodes error:', err.message);
  }

  await recordPayment(targetPeriod, st.fee || 3000, 'ACTIVATION_CODE', `Activated via code ${found.code}`, user);

  found.used = true;
  found.usedAt = new Date().toISOString();
  found.usedPeriod = targetPeriod;
  found.usedBy = user;
  saveSubscriptionCodes(codes);

  const updatedStatus = await subStatus();
  return {
    success: true,
    code: found.code,
    period: targetPeriod,
    months: found.months || 1,
    status: updatedStatus
  };
});

handle('sub:listCodes', ADMIN, async () => {
  const codes = loadSubscriptionCodes();
  try {
    const dbCodes = (await pool.request().query('SELECT Code, UsedAt, Period, UsedBy FROM SubscriptionCodes')).recordset;
    const dbMap = new Map(dbCodes.map(d => [d.Code.toUpperCase(), d]));
    codes.forEach(c => {
      const dbItem = dbMap.get(c.code.toUpperCase());
      if (dbItem && !c.used) {
        c.used = true;
        c.usedAt = dbItem.UsedAt;
        c.usedPeriod = dbItem.Period;
        c.usedBy = dbItem.UsedBy;
      }
    });
  } catch {}

  const usedCount = codes.filter(c => c.used).length;
  return {
    total: codes.length,
    used: usedCount,
    available: codes.length - usedCount,
    codes: codes
  };
});

/* ---------- Receipt & Store Profile Settings ---------- */
handle('settings:getReceipt', ALL, async () => {
  const s = await getSettings();
  return {
    shopName: s.shopName || 'Kade POS Supermarket & Cafe',
    shopTagline: s.shopTagline || 'Fresh Quality Groceries & Food',
    shopAddress: s.shopAddress || 'No 124, High Level Road, Colombo 03',
    shopPhone: s.shopPhone || '071 234 5678 / 011 234 5678',
    shopTaxNo: s.shopTaxNo || 'BR-2024-99881',
    receiptHeader: s.receiptHeader || 'WELCOME TO KADE POS',
    receiptFooter: s.receiptFooter || 'Thank you for shopping with us! Please come again.',
    receiptPaperWidth: s.receiptPaperWidth || '80mm',
    receiptAutoPrint: s.receiptAutoPrint !== '0' ? '1' : '0'
  };
});

handle('settings:saveReceipt', MA, async (settings = {}) => {
  if (settings.shopName !== undefined) await setSetting('shopName', (settings.shopName || '').trim());
  if (settings.shopTagline !== undefined) await setSetting('shopTagline', (settings.shopTagline || '').trim());
  if (settings.shopAddress !== undefined) await setSetting('shopAddress', (settings.shopAddress || '').trim());
  if (settings.shopPhone !== undefined) await setSetting('shopPhone', (settings.shopPhone || '').trim());
  if (settings.shopTaxNo !== undefined) await setSetting('shopTaxNo', (settings.shopTaxNo || '').trim());
  if (settings.receiptHeader !== undefined) await setSetting('receiptHeader', (settings.receiptHeader || '').trim());
  if (settings.receiptFooter !== undefined) await setSetting('receiptFooter', (settings.receiptFooter || '').trim());
  if (settings.receiptPaperWidth !== undefined) await setSetting('receiptPaperWidth', settings.receiptPaperWidth === '58mm' ? '58mm' : '80mm');
  if (settings.receiptAutoPrint !== undefined) await setSetting('receiptAutoPrint', settings.receiptAutoPrint ? '1' : '0');
  return true;
});

handle('users:list', ADMIN, async () => (await pool.request().query('SELECT Id,Username,FullName,Role,Active,Permissions FROM Users ORDER BY Id')).recordset);
handle('users:save', ADMIN, async ({ id, username, fullName, password, role, active, permissions }) => {
  if (![C, M, A].includes(role)) throw new Error('Invalid role');
  if (!username?.trim() || !fullName?.trim()) throw new Error('Username and name are required');
  if (id === session.id && (role !== A || !active)) throw new Error('You cannot demote or disable yourself');
  const rq = pool.request().input('u', sql.NVarChar, username.trim()).input('n', sql.NVarChar, fullName.trim())
    .input('r', sql.NVarChar, role).input('a', sql.Bit, active ? 1 : 0)
    .input('perm', sql.NVarChar, permissions !== undefined ? permissions : null);
  if (id) {
    rq.input('id', sql.Int, id);
    if (password && password.trim()) {
      if (password.trim().length < 6) throw new Error('Password must be at least 6 characters');
      rq.input('h', sql.NVarChar, bcrypt.hashSync(password.trim(), 10));
      await rq.query('UPDATE Users SET Username=@u,FullName=@n,Role=@r,Active=@a,PasswordHash=@h,Permissions=@perm WHERE Id=@id');
    } else {
      await rq.query('UPDATE Users SET Username=@u,FullName=@n,Role=@r,Active=@a,Permissions=@perm WHERE Id=@id');
    }
  } else {
    if (!password || password.trim().length < 6) throw new Error('Password must be at least 6 characters');
    rq.input('h', sql.NVarChar, bcrypt.hashSync(password.trim(), 10));
    await rq.query('INSERT INTO Users(Username,FullName,PasswordHash,Role,Active,Permissions) VALUES(@u,@n,@h,@r,@a,@perm)');
  }
  return true;
});
handle('users:changePassword', ADMIN, async ({ id, newPassword }) => {
  if (!newPassword || newPassword.trim().length < 6) throw new Error('Password must be at least 6 characters');
  await pool.request()
    .input('id', sql.Int, id)
    .input('h', sql.NVarChar, bcrypt.hashSync(newPassword.trim(), 10))
    .query('UPDATE Users SET PasswordHash=@h WHERE Id=@id');
  return true;
});

handle('items:list', ALL, async () => (await pool.request().query('SELECT * FROM Items WHERE Active=1 ORDER BY Category,Name')).recordset);
handle('items:save', MA, async ({ id, name, category, price, stock, barcode, imageUrl }) => {
  price = +price; stock = parseInt(stock);
  if (!name?.trim() || !category?.trim()) throw new Error('Name and category are required');
  if (!(price >= 0) || !(stock >= 0)) throw new Error('Price and stock must be zero or more');
  const rq = pool.request().input('n', sql.NVarChar, name.trim()).input('c', sql.NVarChar, category.trim())
    .input('p', sql.Decimal(12, 2), price).input('s', sql.Int, stock).input('b', sql.NVarChar, barcode?.trim() || null)
    .input('img', sql.NVarChar, imageUrl?.trim() || null);
  if (id) await rq.input('id', sql.Int, id).query('UPDATE Items SET Name=@n,Category=@c,Price=@p,Stock=@s,Barcode=@b,ImageUrl=@img WHERE Id=@id');
  else await rq.query('INSERT INTO Items(Name,Category,Price,Stock,Barcode,ImageUrl) VALUES(@n,@c,@p,@s,@b,@img)');
});
handle('items:delete', MA, async ({ id }) => { // soft delete keeps sales history intact
  await pool.request().input('id', sql.Int, id).query('UPDATE Items SET Active=0 WHERE Id=@id');
});

handle('sales:checkout', ALL, async ({ lines, paid, paymentMethod, billDiscount }) => {
  if (!Array.isArray(lines) || !lines.length) throw new Error('Cart is empty');
  const tx = new sql.Transaction(pool); await tx.begin();
  try {
    let subtotal = 0; const out = [];
    for (const l of lines) { // prices come from the DB, never from the UI
      const qty = parseInt(l.qty), disc = Math.min(100, Math.max(0, +l.disc || 0));
      if (!(qty > 0)) throw new Error('Invalid quantity');
      const r = (await new sql.Request(tx).input('id', sql.Int, l.id).input('q', sql.Int, qty)
        .query('UPDATE Items SET Stock=Stock-@q OUTPUT inserted.Id,inserted.Name,inserted.Price WHERE Id=@id AND Active=1 AND Stock>=@q')).recordset[0];
      if (!r) throw new Error(`Insufficient stock or item unavailable (#${l.id})`);
      const lt = r2(r.Price * qty * (1 - disc / 100)); subtotal += lt;
      out.push({ id: r.Id, name: r.Name, price: r.Price, qty, disc, total: lt });
    }
    subtotal = r2(subtotal);
    const discAmount = r2(Math.max(0, Math.min(subtotal, +billDiscount || 0)));
    const total = r2(Math.max(0, subtotal - discAmount));

    const method = (paymentMethod || 'Cash').trim();
    paid = +paid;
    if (method === 'Card') {
      paid = total;
    } else {
      if (!(paid >= total)) throw new Error('Cash received is less than the total');
    }
    const balance = r2(Math.max(0, paid - total));

    const sale = (await new sql.Request(tx)
      .input('c', sql.Int, session.id)
      .input('t', sql.Decimal(12, 2), total)
      .input('p', sql.Decimal(12, 2), paid)
      .input('b', sql.Decimal(12, 2), balance)
      .input('m', sql.NVarChar, method)
      .input('d', sql.Decimal(12, 2), discAmount)
      .query('INSERT INTO Sales(CashierId,Total,Paid,Balance,PaymentMethod,Discount) OUTPUT inserted.Id VALUES(@c,@t,@p,@b,@m,@d)')).recordset[0].Id;
    
    const invoiceNo = 'INV-' + String(sale).padStart(6, '0');
    await new sql.Request(tx).input('i', sql.NVarChar, invoiceNo).input('id', sql.Int, sale).query('UPDATE Sales SET InvoiceNo=@i WHERE Id=@id');
    for (const l of out)
      await new sql.Request(tx).input('s', sql.Int, sale).input('i', sql.Int, l.id).input('n', sql.NVarChar, l.name)
        .input('q', sql.Int, l.qty).input('u', sql.Decimal(12, 2), l.price).input('d', sql.Decimal(5, 2), l.disc).input('t', sql.Decimal(12, 2), l.total)
        .query('INSERT INTO SaleItems(SaleId,ItemId,ItemName,Qty,UnitPrice,DiscountPct,LineTotal) VALUES(@s,@i,@n,@q,@u,@d,@t)');
    await tx.commit();
    const st = await getSettings();
    return {
      invoiceNo,
      createdAt: new Date().toISOString(),
      cashier: session.fullName,
      lines: out,
      subtotal,
      discount: discAmount,
      total,
      paid,
      balance,
      paymentMethod: method,
      shopSettings: {
        shopName: st.shopName || 'Kade POS Supermarket & Cafe',
        shopTagline: st.shopTagline || 'Fresh Quality Groceries & Food',
        shopAddress: st.shopAddress || 'No 124, High Level Road, Colombo 03',
        shopPhone: st.shopPhone || '071 234 5678 / 011 234 5678',
        shopTaxNo: st.shopTaxNo || 'BR-2024-99881',
        receiptHeader: st.receiptHeader || 'WELCOME TO KADE POS',
        receiptFooter: st.receiptFooter || 'Thank you for shopping with us! Please come again.',
        receiptPaperWidth: st.receiptPaperWidth || '80mm',
        receiptAutoPrint: st.receiptAutoPrint !== '0' ? '1' : '0'
      }
    };
  } catch (e) { await tx.rollback().catch(() => {}); throw e; }
});

handle('reports:daily', MA, async p => (await rng(p, pool.request()).query(
  `SELECT CONVERT(VARCHAR(10),CreatedAt,120) Day, COUNT(*) Bills, SUM(Total) Total, ISNULL(SUM(Discount),0) Discount FROM Sales WHERE ${RANGE} GROUP BY CONVERT(VARCHAR(10),CreatedAt,120) ORDER BY Day DESC`)).recordset);
handle('reports:items', MA, async p => (await rng(p, pool.request()).query(
  `SELECT si.ItemName Item, SUM(si.Qty) Qty, SUM(si.LineTotal) Total FROM SaleItems si JOIN Sales ON Sales.Id=si.SaleId WHERE ${RANGE} GROUP BY si.ItemName ORDER BY Total DESC`)).recordset);
handle('reports:cashiers', MA, async p => (await rng(p, pool.request()).query(
  `SELECT u.FullName Cashier, COUNT(*) Bills, SUM(Sales.Total) Total FROM Sales JOIN Users u ON u.Id=Sales.CashierId WHERE ${RANGE} GROUP BY u.FullName ORDER BY Total DESC`)).recordset);

/* ---------- Dashboard & GRN ---------- */
handle('dashboard:overview', ALL, async () => {
  const q = () => pool.request();
  
  const todayRow = (await q().query(`
    SELECT COUNT(*) bills, ISNULL(SUM(Total), 0) total, ISNULL(SUM(Discount), 0) discount
    FROM Sales
    WHERE CreatedAt >= CAST(CAST(GETDATE() AS DATE) AS DATETIME2)
  `)).recordset[0];

  const monthRow = (await q().query(`
    SELECT COUNT(*) bills, ISNULL(SUM(Total), 0) total, ISNULL(SUM(Discount), 0) discount
    FROM Sales
    WHERE CreatedAt >= DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1)
  `)).recordset[0];

  const stockRow = (await q().query(`
    SELECT 
      COUNT(*) totalItems,
      SUM(CASE WHEN Stock <= 5 THEN 1 ELSE 0 END) lowStockCount,
      ISNULL(SUM(Price * Stock), 0) totalValuation,
      ISNULL(SUM(Stock), 0) totalUnits
    FROM Items
    WHERE Active = 1
  `)).recordset[0];

  const lowStockItems = (await q().query(`
    SELECT TOP 8 Id, Name, Category, Price, Stock
    FROM Items
    WHERE Active = 1 AND Stock <= 10
    ORDER BY Stock ASC, Name ASC
  `)).recordset;

  const recentSales = (await q().query(`
    SELECT TOP 10 s.Id, s.InvoiceNo, s.Total, s.Paid, s.Balance, ISNULL(s.PaymentMethod, 'Cash') PaymentMethod, s.Discount, s.CreatedAt, u.FullName Cashier
    FROM Sales s
    JOIN Users u ON u.Id = s.CashierId
    ORDER BY s.Id DESC
  `)).recordset;

  // 14-day exact daily sales trend for fully dynamic SVG curves
  const last14Days = (await q().query(`
    WITH Dates AS (
      SELECT CAST(DATEADD(day, -v.n, CAST(GETDATE() AS DATE)) AS DATE) [Date]
      FROM (VALUES (0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13)) v(n)
    )
    SELECT 
      CONVERT(VARCHAR(10), d.[Date], 120) [Day],
      DATENAME(weekday, d.[Date]) [Weekday],
      COUNT(s.Id) Bills,
      ISNULL(SUM(s.Total), 0) Total,
      ISNULL(SUM(s.Discount), 0) Discount
    FROM Dates d
    LEFT JOIN Sales s ON CAST(s.CreatedAt AS DATE) = d.[Date]
    GROUP BY d.[Date]
    ORDER BY d.[Date] ASC
  `)).recordset;

  // Sales by Category (last 30 days)
  const categorySales = (await q().query(`
    SELECT i.Category, COUNT(DISTINCT s.Id) Bills, SUM(si.Qty) Qty, ISNULL(SUM(si.LineTotal), 0) Total
    FROM SaleItems si
    JOIN Items i ON i.Id = si.ItemId
    JOIN Sales s ON s.Id = si.SaleId
    WHERE s.CreatedAt >= DATEADD(day, -30, GETDATE())
    GROUP BY i.Category
    ORDER BY Total DESC
  `)).recordset;

  // Payment methods split (Cash vs Card)
  const paymentMethods = (await q().query(`
    SELECT ISNULL(PaymentMethod, 'Cash') Method, COUNT(*) Bills, ISNULL(SUM(Total), 0) Total
    FROM Sales
    WHERE CreatedAt >= DATEADD(day, -30, GETDATE())
    GROUP BY PaymentMethod
  `)).recordset;

  // Top 5 selling items (last 30 days)
  const topItems = (await q().query(`
    SELECT TOP 5 si.ItemName Name, SUM(si.Qty) Qty, SUM(si.LineTotal) Total
    FROM SaleItems si
    JOIN Sales s ON s.Id = si.SaleId
    WHERE s.CreatedAt >= DATEADD(day, -30, GETDATE())
    GROUP BY si.ItemName
    ORDER BY Total DESC
  `)).recordset;

  // Cashier sales summary
  const cashiers = (await q().query(`
    SELECT TOP 5 u.FullName Cashier, COUNT(s.Id) Bills, ISNULL(SUM(s.Total), 0) Total
    FROM Users u
    LEFT JOIN Sales s ON s.CashierId = u.Id AND s.CreatedAt >= DATEADD(day, -30, GETDATE())
    WHERE u.Active = 1
    GROUP BY u.FullName
    ORDER BY Total DESC
  `)).recordset;

  const totalBillsMonth = +monthRow.bills || 0;
  const totalSalesMonth = +monthRow.total || 0;
  const aov = totalBillsMonth > 0 ? r2(totalSalesMonth / totalBillsMonth) : 0;

  return {
    todaySales: r2(+todayRow.total || 0),
    todayBills: +todayRow.bills || 0,
    todayDiscount: r2(+todayRow.discount || 0),
    monthSales: r2(totalSalesMonth),
    monthBills: totalBillsMonth,
    monthDiscount: r2(+monthRow.discount || 0),
    aov,
    totalItems: +stockRow.totalItems || 0,
    lowStockCount: +stockRow.lowStockCount || 0,
    totalValuation: r2(+stockRow.totalValuation || 0),
    totalUnits: +stockRow.totalUnits || 0,
    lowStockItems,
    recentSales,
    trendDays: last14Days,
    categorySales,
    paymentMethods,
    topItems,
    cashiers
  };
});

handle('grn:list', MA, async () => (await pool.request().query(`
  SELECT g.Id, g.GrnNo, g.Supplier, g.InvoiceRef, g.TotalCost, g.Notes, g.ReceivedBy, g.CreatedAt,
         COUNT(gi.Id) ItemCount, ISNULL(SUM(gi.Qty), 0) TotalQty
  FROM GRNs g
  LEFT JOIN GRNItems gi ON gi.GrnId = g.Id
  GROUP BY g.Id, g.GrnNo, g.Supplier, g.InvoiceRef, g.TotalCost, g.Notes, g.ReceivedBy, g.CreatedAt
  ORDER BY g.Id DESC
`)).recordset);

handle('grn:get', MA, async ({ id }) => {
  const grn = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM GRNs WHERE Id=@id')).recordset[0];
  if (!grn) throw new Error('GRN not found');
  const items = (await pool.request().input('id', sql.Int, id)
    .query('SELECT * FROM GRNItems WHERE GrnId=@id ORDER BY Id ASC')).recordset;
  return { grn, items };
});

handle('grn:create', MA, async ({ grnNo, supplier, invoiceRef, notes, items }) => {
  if (!supplier?.trim()) throw new Error('Supplier name is required');
  if (!Array.isArray(items) || !items.length) throw new Error('At least one item is required in GRN');
  
  let finalGrnNo = grnNo?.trim();
  if (!finalGrnNo) {
    const pad = n => String(n).padStart(2, '0');
    const d = new Date();
    finalGrnNo = `GRN-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  const tx = new sql.Transaction(pool);
  await tx.begin();
  try {
    let totalCost = 0;
    const validated = [];
    for (const row of items) {
      const it = (await new sql.Request(tx).input('id', sql.Int, row.itemId)
        .query('SELECT Id, Name, Price FROM Items WHERE Id=@id AND Active=1')).recordset[0];
      if (!it) throw new Error(`Invalid item ID: ${row.itemId}`);
      const qty = parseInt(row.qty);
      const unitCost = Math.max(0, +row.unitCost || 0);
      if (!(qty > 0)) throw new Error(`Invalid quantity for item ${it.Name}`);
      const lineTotal = r2(qty * unitCost);
      totalCost += lineTotal;
      validated.push({
        itemId: it.Id,
        itemName: it.Name,
        qty,
        unitCost,
        lineTotal,
        batchNo: row.batchNo?.trim() || null,
        expiryDate: row.expiryDate?.trim() || null,
        updatePrice: Boolean(row.updatePrice),
        newPrice: +row.newPrice || 0
      });
    }
    totalCost = r2(totalCost);

    const grnInsert = await new sql.Request(tx)
      .input('gn', sql.NVarChar, finalGrnNo)
      .input('sup', sql.NVarChar, supplier.trim())
      .input('ref', sql.NVarChar, invoiceRef?.trim() || null)
      .input('tc', sql.Decimal(12, 2), totalCost)
      .input('not', sql.NVarChar, notes?.trim() || null)
      .input('rec', sql.NVarChar, session.fullName || session.username)
      .query('INSERT INTO GRNs(GrnNo,Supplier,InvoiceRef,TotalCost,Notes,ReceivedBy) OUTPUT inserted.Id VALUES(@gn,@sup,@ref,@tc,@not,@rec)');
    
    const grnId = grnInsert.recordset[0].Id;

    for (const v of validated) {
      await new sql.Request(tx)
        .input('gid', sql.Int, grnId)
        .input('iid', sql.Int, v.itemId)
        .input('inm', sql.NVarChar, v.itemName)
        .input('q', sql.Int, v.qty)
        .input('uc', sql.Decimal(12, 2), v.unitCost)
        .input('lt', sql.Decimal(12, 2), v.lineTotal)
        .input('bn', sql.NVarChar, v.batchNo)
        .input('ed', sql.NVarChar, v.expiryDate)
        .query('INSERT INTO GRNItems(GrnId,ItemId,ItemName,Qty,UnitCost,LineTotal,BatchNo,ExpiryDate) VALUES(@gid,@iid,@inm,@q,@uc,@lt,@bn,@ed)');

      await new sql.Request(tx)
        .input('iid', sql.Int, v.itemId)
        .input('q', sql.Int, v.qty)
        .query('UPDATE Items SET Stock = Stock + @q WHERE Id=@iid');

      if (v.updatePrice && v.newPrice > 0) {
        await new sql.Request(tx)
          .input('iid', sql.Int, v.itemId)
          .input('np', sql.Decimal(12, 2), r2(v.newPrice))
          .query('UPDATE Items SET Price = @np WHERE Id=@iid');
      }
    }

    await tx.commit();
    return { id: grnId, grnNo: finalGrnNo, totalCost, itemsCount: validated.length };
  } catch (err) {
    await tx.rollback().catch(() => {});
    throw err;
  }
});

/* ---------- Automated Database Backup Engine (Hourly / Single File Per Day) ---------- */
let backupTimer = null;
let lastBackupInfo = {
  timestamp: null,
  file: null,
  path: null,
  size: 0,
  records: 0,
  status: 'idle',
  error: null
};

async function getBackupDirectory() {
  const s = await getSettings();
  let dir = (s.backupPath || '').trim();
  if (!dir) {
    dir = path.join(require('os').homedir(), 'KadePOS_Backups');
    try {
      await setSetting('backupPath', dir);
    } catch {}
  }
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

async function performHourlyBackup(isManual = false) {
  try {
    if (!pool || !pool.connected) return { ok: false, error: 'Database not connected' };
    const dir = await getBackupDirectory();
    const d = new Date();
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const filename = `kade_pos_backup_${dateStr}.bak`;
    const fullPath = path.join(dir, filename);

    const tables = [
      'Settings',
      'Users',
      'Items',
      'Sales',
      'SaleItems',
      'GRNs',
      'GRNItems',
      'Payments',
      'SubscriptionCodes'
    ];

    const backupData = {
      app: 'Kade POS Enterprise',
      version: '2.0',
      database: DB.database,
      backupDate: dateStr,
      generatedAt: d.toISOString(),
      updatedAtFormatted: d.toLocaleString('en-LK'),
      isManualTrigger: isManual,
      tables: {}
    };

    let totalRecords = 0;
    for (const t of tables) {
      try {
        const rows = (await pool.request().query(`SELECT * FROM [${t}]`)).recordset;
        backupData.tables[t] = rows;
        totalRecords += rows.length;
      } catch {
        backupData.tables[t] = [];
      }
    }
    backupData.totalRecords = totalRecords;

    // Overwrite the single file for the day!
    fs.writeFileSync(fullPath, JSON.stringify(backupData, null, 2), 'utf8');
    const stat = fs.statSync(fullPath);

    lastBackupInfo = {
      timestamp: d.toISOString(),
      file: filename,
      path: fullPath,
      size: stat.size,
      records: totalRecords,
      status: 'ok',
      error: null
    };

    return {
      ok: true,
      file: filename,
      path: fullPath,
      size: stat.size,
      records: totalRecords,
      time: d.toISOString()
    };
  } catch (err) {
    lastBackupInfo.status = 'error';
    lastBackupInfo.error = err.message;
    return { ok: false, error: err.message };
  }
}

function initBackupScheduler() {
  clearInterval(backupTimer);
  // Perform an initial backup 4 seconds after launch to ensure today's file exists
  setTimeout(() => { performHourlyBackup().catch(() => {}); }, 4000);
  // Repeat every 1 hour (3600000 ms) to keep updating the same file for today
  backupTimer = setInterval(() => {
    performHourlyBackup().catch(() => {});
  }, 60 * 60 * 1000);
}

handle('backup:getStatus', ALL, async () => {
  const dir = await getBackupDirectory();
  const d = new Date();
  const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const todayFile = `kade_pos_backup_${dateStr}.bak`;
  const todayPath = path.join(dir, todayFile);
  let todayExists = false;
  let todaySize = 0;
  let todayModified = null;

  if (fs.existsSync(todayPath)) {
    todayExists = true;
    try {
      const stat = fs.statSync(todayPath);
      todaySize = stat.size;
      todayModified = stat.mtime.toISOString();
    } catch {}
  }

  let history = [];
  try {
    const files = fs.readdirSync(dir);
    history = files
      .filter(f => f.startsWith('kade_pos_backup_') && (f.endsWith('.bak') || f.endsWith('.json')))
      .map(f => {
        try {
          const s = fs.statSync(path.join(dir, f));
          return {
            filename: f,
            path: path.join(dir, f),
            size: s.size,
            modifiedAt: s.mtime.toISOString(),
            isToday: f === todayFile
          };
        } catch { return null; }
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.modifiedAt) - new Date(a.modifiedAt));
  } catch {}

  return {
    backupPath: dir,
    lastBackup: lastBackupInfo,
    todayFile,
    todayExists,
    todaySize,
    todayModified,
    history
  };
});

handle('backup:selectPath', ADMIN, async () => {
  const win = BrowserWindow.getFocusedWindow();
  const res = await dialog.showOpenDialog(win, {
    title: 'Select Database Backup Directory',
    properties: ['openDirectory', 'createDirectory']
  });
  if (res.canceled || !res.filePaths || !res.filePaths.length) {
    return { canceled: true };
  }
  const chosenPath = res.filePaths[0];
  await setSetting('backupPath', chosenPath);
  const backupRes = await performHourlyBackup(true);
  return { canceled: false, path: chosenPath, backup: backupRes };
});

handle('backup:setPath', ADMIN, async ({ path: newPath }) => {
  if (!newPath || !newPath.trim()) throw new Error('Path cannot be empty');
  const cleanPath = newPath.trim();
  if (!fs.existsSync(cleanPath)) {
    fs.mkdirSync(cleanPath, { recursive: true });
  }
  await setSetting('backupPath', cleanPath);
  const backupRes = await performHourlyBackup(true);
  return { path: cleanPath, backup: backupRes };
});

handle('backup:runNow', ALL, async () => {
  const res = await performHourlyBackup(true);
  if (!res.ok) throw new Error(res.error || 'Backup failed');
  return res;
});

handle('backup:openFolder', ALL, async () => {
  const dir = await getBackupDirectory();
  await shell.openPath(dir);
  return true;
});

handle('backup:restore', ADMIN, async ({ filePath }) => {
  let targetFile = filePath;
  if (!targetFile) {
    const win = BrowserWindow.getFocusedWindow();
    const res = await dialog.showOpenDialog(win, {
      title: 'Select Backup File to Restore',
      filters: [{ name: 'Kade POS Backup (*.bak, *.json)', extensions: ['bak', 'json'] }],
      properties: ['openFile']
    });
    if (res.canceled || !res.filePaths || !res.filePaths.length) return { canceled: true };
    targetFile = res.filePaths[0];
  }

  if (!fs.existsSync(targetFile)) throw new Error('Backup file not found');
  const raw = fs.readFileSync(targetFile, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error('Invalid backup file. The selected file is not a valid Kade POS backup.');
  }
  if (!data.tables) throw new Error('Backup file is missing database table structures.');

  const tx = new sql.Transaction(pool);
  await tx.begin();
  try {
    const clearOrder = ['SaleItems', 'Sales', 'GRNItems', 'GRNs', 'Items', 'Payments', 'SubscriptionCodes', 'Settings', 'Users'];
    for (const t of clearOrder) {
      if (data.tables[t]) {
        await new sql.Request(tx).query(`DELETE FROM [${t}]`);
      }
    }

    const restoreOrder = ['Users', 'Settings', 'Items', 'Sales', 'SaleItems', 'GRNs', 'GRNItems', 'Payments', 'SubscriptionCodes'];
    let count = 0;
    for (const t of restoreOrder) {
      const rows = data.tables[t] || [];
      if (!rows.length) continue;
      const hasId = ['Users', 'Items', 'Sales', 'SaleItems', 'GRNs', 'GRNItems', 'Payments'].includes(t);
      if (hasId) await new sql.Request(tx).query(`SET IDENTITY_INSERT [${t}] ON`);
      for (const row of rows) {
        const cols = Object.keys(row);
        const rq = new sql.Request(tx);
        cols.forEach((col, i) => rq.input(`p${i}`, row[col]));
        const colList = cols.map(c => `[${c}]`).join(',');
        const paramList = cols.map((_, i) => `@p${i}`).join(',');
        await rq.query(`INSERT INTO [${t}](${colList}) VALUES(${paramList})`);
        count++;
      }
      if (hasId) await new sql.Request(tx).query(`SET IDENTITY_INSERT [${t}] OFF`);
    }

    await tx.commit();
    return { ok: true, file: path.basename(targetFile), totalRecordsRestored: count };
  } catch (err) {
    await tx.rollback();
    throw new Error(`Database restore failed: ${err.message}`);
  }
});

/* ---------- Window ---------- */
function createWindow() {
  const w = new BrowserWindow({
    width: 1366, height: 820, minWidth: 1100, minHeight: 680, title: 'Kade POS',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  w.setMenuBarVisibility(false);
  w.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}
app.whenReady().then(async () => {
  try {
    await initDb();
    createWindow();
    initBackupScheduler();
  }
  catch (e) { dialog.showErrorBox('Database error', `Cannot connect to SQL Server:\n${e.message}`); app.quit(); }
});
app.on('window-all-closed', () => app.quit());
