const SHOP = 'MY SHOP';

/* ---------- i18n Dictionary: [English, Sinhala] ---------- */
const D = {
  // Common & Auth
  signInSub: ['Sign in to access your point of sale terminal', 'ඔබගේ විකුණුම් පර්යන්තයට පිවිසෙන්න'],
  username: ['Username', 'පරිශීලක නාමය'],
  password: ['Password', 'මුරපදය'],
  signIn: ['Sign In', 'පිවිසෙන්න'],
  logout: ['Log out', 'ඉවත් වන්න'],
  suspended: ['TERMINAL SUSPENDED', 'පද්ධතිය අත්හිටුවා ඇත'],
  suspendedMsg: ['Monthly software license is pending payment. Please transfer the subscription fee to the Super Admin bank account below.', 'මාසික දායකත්ව ගාස්තුව ගෙවීම ප්‍රමාද වී ඇත. කරුණාකර පහත සුපිරි පරිපාලකගේ බැංකු ගිණුමට මුදල් බැර කරන්න.'],
  overrideNote: ['Super Admin manual unlock credentials:', 'සුපිරි පරිපාලක අගුළු හැරීම:'],
  unlock: ['Verify & Unlock Terminal', 'පද්ධතිය අගුළු හරින්න'],
  unlocked: ['Terminal unlocked successfully', 'පද්ධතිය අගුළු හරින ලදී'],

  // Nav Menu
  dashboard: ['Dashboard', 'උපකරණ පුවරුව'],
  pos: ['POS Terminal', 'විකුණුම් (POS)'],
  items: ['Inventory', 'භාණ්ඩ'],
  grn: ['GRN Receiving', 'භාණ්ඩ ලැබීම් (GRN)'],
  reports: ['Reports', 'වාර්තා'],
  receipts: ['Receipt & Print', 'රිසිට්පත් සහ මුද්‍රණය'],
  users: ['Users', 'පරිශීලකයින්'],
  subs: ['Subscription', 'දායකත්වය'],

  // Receipt & Print Settings
  receiptSettings: ['Receipt Customization & Thermal Print', 'රිසිට්පත් සැකසුම් සහ මුද්‍රණය'],
  livePreview: ['Live Thermal Preview', 'සජීවී රිසිට්පත් පෙරදසුන'],
  printTest: ['Print Test Receipt', 'පරීක්ෂණ රිසිට්පත මුද්‍රණය'],
  saveReceiptSettings: ['Save Receipt Settings', 'රිසිට්පත් සැකසුම් සුරකින්න'],
  shopName: ['Store / Business Name', 'වෙළඳසැලේ නම'],
  shopTagline: ['Tagline / Header Slogan', 'පාඨය / සටහන'],
  shopAddress: ['Store Address', 'ලිපිනය'],
  shopPhone: ['Phone / WhatsApp', 'දුරකථන අංක'],
  shopTaxNo: ['Business Reg / Tax No', 'ව්‍යාපාර ලියාපදිංචි / බදු අංකය'],
  receiptHeader: ['Receipt Top Header Note', 'රිසිට්පත් ඉහළ සටහන'],
  receiptFooter: ['Receipt Bottom Footer Note', 'රිසිට්පත් පහළ සටහන'],
  paperWidth: ['Paper Width (80mm / 58mm)', 'කඩදාසි පළල (80mm / 58mm)'],
  autoPrintReceipt: ['Auto Print on Checkout', 'ගෙවීම අවසන් වූ විට ස්වයංක්‍රීයව මුද්‍රණය'],
  printOn: ['🖨️ Print: ON', '🖨️ මුද්‍රණය: සක්‍රියයි'],
  printOff: ['🖨️ Print: OFF', '🖨️ මුද්‍රණය: අක්‍රියයි'],
  cashRequiredAlert: ['Please enter cash received amount (Numbers only, minimum total)!', 'කරුණාකර ලැබුණු මුදල ඇතුළත් කරන්න (අවම එකතුවට සමාන හෝ වැඩි විය යුතුය)!'],
  selectProduct: ['Search product to add (All categories)…', 'එක් කිරීමට භාණ්ඩය සොයන්න (සියලු කාණ්ඩ)…'],
  allCategories: ['All Categories', 'සියලු වර්ග'],
  qty: ['Quantity', 'ප්‍රමාණය'],
  f1Hint: ['F1 Search', 'F1 සෙවීම'],
  arrowKeysHint: ['Arrow Keys Select', 'ඊතල යතුරු තෝරන්න'],
  enterAddHint: ['Enter Add', 'Enter එකතු කරන්න'],
  enterPayHint: ['Enter Payment', 'Enter ගෙවීම'],

  // Dashboard & Charts
  currentBalance: ['Current Balance (Today)', 'වත්මන් ශේෂය (අද)'],
  latestIncome: ['Monthly Gross Sales', 'මාසික මුළු ආදායම'],
  inventoryValuation: ['Inventory Valuation', 'තොගයේ මුළු වටිනාකම'],
  dueCalendar: ['Billing Schedule', 'බිල්පත් දින දර්ශනය'],
  revenueChartTitle: ['Revenue & Sales Overview (14-Day Live Trend)', 'දින 14ක සජීවී විකුණුම් විශ්ලේෂණය'],
  salesLegend: ['Sales Revenue (LKR)', 'විකුණුම් ආදායම (රු.)'],
  billsLegend: ['Bills Volume', 'බිල්පත් ගණන'],
  myCardsTitle: ['Super Admin Bank Card', 'සුපිරි පරිපාලකගේ බැංකු කාඩ්පත'],
  superAdminAcc: ['SUPER ADMIN BANK ACCOUNT', 'සුපිරි පරිපාලකගේ බැංකු ගිණුම'],
  dueTag: ['DUE: 25th OF MONTH', 'නියමිත දිනය: සෑම මසකම 25'],
  historyTitle: ['History', 'ඉතිහාසය'],
  upcomingPayments: ['Upcoming Subscription Payment', 'ඉදිරි දායකත්ව ගෙවීම'],
  softwareSubDue: ['POS Terminal Subscription · Due: 25th', 'මෘදුකාංග දායකත්වය · නියමිත දිනය: 25'],
  categorySales: ['Sales by Category (Last 30 Days)', 'කාණ්ඩ අනුව විකුණුම් (දින 30)'],
  paymentBreakdown: ['Payment Method Breakdown (Cash vs Card)', 'මුදල් සහ කාඩ්පත් ගෙවීම් බෙදීම'],
  staffLeaderboard: ['Cashier Sales Ranking', 'අයකැමි කාර්යසාධනය'],
  inventoryAlerts: ['Low Stock & Beverage Restock', 'අඩු තොග සහ බීම වර්ග ලැබීම්'],
  today: ['Today', 'අද'],
  aov: ['Avg Order Value (AOV)', 'සාමාන්‍ය බිල්පත් අගය'],
  totalUnits: ['Total Units in Stock', 'මුළු තොග ඒකක'],
  discountsGiven: ['Discounts Given', 'ලබා දුන් වට්ටම්'],

  // POS
  searchPos: ['Search product, category or scan barcode… (F9 Checkout)', 'භාණ්ඩය සොයන්න හෝ බාර්කෝඩ් ස්කෑන් කරන්න… (F9)'],
  all: ['All', 'සියල්ල'],
  stock: ['Stock', 'තොගය'],
  currentBill: ['Current Bill', 'වත්මන් බිල'],
  tapToAdd: ['Tap or scan an item to add to register.', 'එක් කිරීමට භාණ්ඩයක් ඔබන්න.'],
  subtotal: ['Subtotal', 'අනු එකතුව'],
  billDiscount: ['Bill Discount (LKR)', 'බිල්පත් වට්ටම (රු.)'],
  total: ['Total Payable', 'ගෙවිය යුතු මුළු මුදල'],
  paymentMethod: ['Payment Method', 'ගෙවීම් ක්‍රමය'],
  cash: ['Cash', 'මුදල්'],
  card: ['Card', 'කාඩ්පත්'],
  cashReceived: ['Cash Received', 'ලැබුණු මුදල'],
  balance: ['Balance / Change', 'ඉතිරිය'],
  shortBy: ['Short by', 'අඩුව'],
  cardReady: ['Ready for POS Card Swipe / Tap', 'කාඩ්පත් ගෙවීම් යන්ත්‍රය සූදානම්'],
  checkout: ['Complete Sale (F9)', 'බිල් කරන්න (F9)'],
  clearBill: ['Clear Bill', 'බිල හිස් කරන්න'],
  notEnough: ['Insufficient stock available', 'තොගය ප්‍රමාණවත් නොවේ'],
  cartEmpty: ['Cart is currently empty', 'බිල හිස් ය'],
  thanks: ['Thank you! Come again.', 'ස්තූතියි! නැවත එන්න.'],
  close: ['Close', 'වසන්න'],
  print: ['🖨 Print Receipt', '🖨 මුද්‍රණය'],
  cancel: ['Cancel', 'අවලංගු'],
  save: ['Save Changes', 'සුරකින්න'],
  saved: ['Successfully saved', 'සුරැකිණි'],
  deleted: ['Deleted successfully', 'මකා දමන ලදී'],
  exact: ['Exact', 'හරියටම'],

  // Items
  addItem: ['+ New Product', '+ නව භාණ්ඩයක්'],
  editItem: ['Edit Product', 'භාණ්ඩය සංස්කරණය'],
  newItem: ['Add Product', 'භාණ්ඩයක් එක් කරන්න'],
  name: ['Product Name', 'භාණ්ඩයේ නම'],
  category: ['Category', 'කාණ්ඩය'],
  price: ['Price (LKR)', 'මිල (රු.)'],
  priceLkr: ['Price (LKR)', 'මිල (රු.)'],
  stockQty: ['Stock Quantity', 'තොග ප්‍රමාණය'],
  barcode: ['Barcode / SKU', 'බාර්කෝඩ් / SKU'],
  edit: ['Edit', 'සංස්කරණය'],
  del: ['Delete', 'මකන්න'],
  confirmDel: ['Are you sure you want to delete this product?', 'මෙම භාණ්ඩය මකා දැමීමට අවශ්‍යද?'],
  searchItems: ['Search products by name, category or barcode…', 'නම, කාණ්ඩය හෝ බාර්කෝඩ් මගින් සොයන්න…'],

  // GRN (Goods Received Note)
  newGrn: ['+ Receive New GRN', '+ නව GRN එකක්'],
  grnNo: ['GRN Number', 'GRN අංකය'],
  supplier: ['Supplier / Vendor', 'සැපයුම්කරු'],
  invoiceRef: ['Invoice / Ref No', 'ඉන්වොයිස් අංකය'],
  unitCost: ['Unit Cost (LKR)', 'ඒකක පිරිවැය (රු.)'],
  batchNo: ['Batch No (Beverages/Dairy)', 'කාණ්ඩ අංකය (Batch No)'],
  expiryDate: ['Expiry Date', 'කල් ඉකුත්වන දිනය'],
  updatePrice: ['Update Selling Price?', 'විකුණුම් මිල යාවත්කාලීන කරන්නද?'],
  totalCost: ['Total Goods Value', 'මුළු පිරිවැය'],
  receivedBy: ['Received By', 'ලැබූ පුද්ගලයා'],
  createdAt: ['Date & Time', 'දිනය සහ වේලාව'],
  itemsCount: ['Items Count', 'භාණ්ඩ ගණන'],
  notes: ['Notes / Vehicle No', 'සටහන් / වාහන අංකය'],
  addItemRow: ['+ Add Product Row', '+ තවත් භාණ්ඩයක් එක් කරන්න'],
  saveGrn: ['Approve & Update Stock', 'තහවුරු කර තොග යාවත්කාලීන කරන්න'],
  grnSaved: ['GRN received and stock updated successfully', 'GRN එක සටහන් කර තොග යාවත්කාලීන විය'],
  viewGrn: ['View Details', 'විස්තර බලන්න'],

  // Bank & Subscription
  superAdminBankDetails: ['Super Admin Bank Details (Customer Subscription Transfer)', 'සුපිරි පරිපාලකගේ බැංකු විස්තර (දායකත්ව ගාස්තු ගෙවීමට)'],
  bankName: ['Bank Name', 'බැංකුවේ නම'],
  accName: ['Account Name', 'ගිණුමේ නම'],
  accNumber: ['Account Number', 'ගිණුම් අංකය'],
  bankBranch: ['Branch', 'ශාඛාව'],
  bankNotes: ['Transfer Reference Notes', 'ගෙවීම් උපදෙස්'],
  copy: ['Copy', 'පිටපත්'],
  copied: ['Account Number copied to clipboard!', 'ගිණුම් අංකය පිටපත් කරන ලදී!'],
  viewBankDetails: ['View Bank Details', 'බැංකු විස්තර බලන්න'],
  feeCfg: ['⚙ Fee & Due Day', '⚙ ගාස්තුව සහ දිනය'],
  bankCfg: ['💳 Super Admin Bank Account', '💳 සුපිරි පරිපාලකගේ බැංකු ගිණුම'],
  recPay: ['+ Record Payment', '+ ගෙවීමක් සටහන් කරන්න'],
  history: ['Payment History', 'ගෙවීම් ඉතිහාසය'],
  monthlyFee: ['Monthly License Fee', 'මාසික ගාස්තුව'],
  dueDay: ['Due Day', 'නියමිත දිනය'],
  dayOfMonth: ['of each month', 'සෑම මසකම'],
  nextDue: ['Next Due Date', 'ඊළඟ නියමිත දිනය'],
  outstanding: ['Outstanding Period', 'ගෙවීමට ඇති මාසය'],
  freeNote: ['Installation month ({m}) is free — billing begins the following month.', 'පළමු මාසය ({m}) නොමිලේ — ගෙවීම ඊළඟ මාසයෙන් ආරම්භ වේ.'],
  cfgTitle: ['Subscription Settings', 'දායකත්ව සැකසුම්'],
  feeLkr: ['Monthly Fee (LKR)', 'මාසික ගාස්තුව (රු.)'],
  dueDayIn: ['Due Day of Month (1-28)', 'මාසයේ නියමිත දිනය (1-28)'],
  recTitle: ['Record License Payment', 'ගෙවීම සටහන් කරන්න'],
  period: ['Period (YYYY-MM)', 'කාලය (YYYY-MM)'],
  amount: ['Amount (LKR)', 'මුදල (රු.)'],
  method: ['Method', 'ක්‍රමය'],
  note: ['Note', 'සටහන'],
  paidAt: ['Paid At', 'ගෙවූ වේලාව'],
  by: ['Recorded By', 'සටහන් කළේ'],
  periodC: ['Period', 'කාලය'],
  inDays: ['in {n} day(s)', 'දින {n} කින්'],
  bannerDue: ['🔔 Monthly Subscription Payment: Due on the 25th ({date}). Settle fee ({fee}) to maintain terminal access.', '🔔 මාසික දායකත්ව ගාස්තුව ({fee}): සෑම මසකම 25 වන දිනට ({date}) ගෙවිය යුතුය.'],
  stActive: ['Active & Compliant', 'සක්‍රියයි'],
  stWarn: ['Payment Due Soon (25th of Month)', 'ගෙවීම ආසන්නයි (25 වන දිනට)'],
  stLocked: ['SUSPENDED — Unpaid License', 'අත්හිටුවා ඇත — ගෙවා නැත'],

  // Activation & Renewal Codes
  activationCode: ['Monthly Activation / Renewal Code', 'මාසික සක්‍රිය / අලුත් කිරීමේ කේතය'],
  enterCode: ['Enter Monthly Renewal Code', 'මාසික අලුත් කිරීමේ කේතය ඇතුළත් කරන්න'],
  activateCode: ['Activate Code', 'කේතය සක්‍රිය කරන්න'],
  codePlaceholder: ['e.g. KP-XXXX-XXXX-XXXX', 'උදා: KP-XXXX-XXXX-XXXX'],
  subActive: ['Subscription Active & Unlocked', 'දායකත්වය සක්‍රියයි'],
  subDueSoon: ['Subscription Payment Due Soon', 'දායකත්ව ගෙවීම ඉක්මනින් සම්පූර්ණ කරන්න'],
  subLocked: ['Terminal Suspended — Payment Required', 'පර්යන්තය අත්හිටුවා ඇත — ගෙවීමක් අවශ්‍යයි'],
  codeSuccess: ['Code activated successfully! Subscription extended for {p}.', 'කේතය සාර්ථකව සක්‍රිය විය! {p} සඳහා දායකත්වය දීර්ඝ කරන ලදී.'],
  codeInvalid: ['Invalid or already used activation code. Please contact vendor.', 'වලංගු නොවන හෝ භාවිතා කළ කේතයකි. කරුණාකර විකුණුම්කරු අමතන්න.'],
  vendorCodes: ['Master Activation Codes (50 Codes)', 'ප්‍රධාන සක්‍රිය කිරීමේ කේත (කේත 50)'],
  copyCode: ['Copy Code', 'කේතය පිටපත්'],
  allCodes: ['All Codes', 'සියලු කේත'],
  availCodes: ['Available', 'භාවිතා නොකළ'],
  usedCodes: ['Redeemed', 'භාවිතා කළ'],
  installDate: ['Software Installation Date', 'මෘදුකාංගය ස්ථාපනය කළ දිනය'],
  freeInstallMonth: ['Free Installation Month', 'නොමිලේ හිමිවන ස්ථාපන මාසය'],
  freeMonthNote: ['The installation month is completely free. No codes or payments required. Subscription starts next month.', 'ස්ථාපනය කළ මාසය සම්පූර්ණයෙන්ම නොමිලේ. කේත හෝ ගෙවීම් අවශ්‍ය නොවේ. දායකත්වය ඊළඟ මස සිට ආරම්භ වේ.'],
  licenseModel: ['Licensing Model', 'බලපත්‍ර ආකෘතිය'],
  subMode: ['Monthly Subscription', 'මාසික දායකත්වය'],
  lifetimeMode: ['One-Time Payment (Lifetime)', 'එක්වර ගෙවීම (ජීවිත කාලයම)'],
  subModeTitle: ['Monthly Subscription Active', 'මාසික දායකත්ව ක්‍රමය සක්‍රියයි'],
  lifetimeModeTitle: ['One-Time Payment Project (Lifetime Access)', 'එක්වර ගෙවූ ව්‍යාපෘතිය (ජීවිත කාලයම වලංගුයි)'],
  lifetimeBadge: ['LIFETIME LICENSE', 'ජීවිත කාලීන බලපත්‍රය'],
  lifetimeDesc: ['Client purchased full lifetime license. Monthly subscription warnings, Super Admin bank cards, and renewal codes are completely hidden from client dashboards.', 'සේවාදායකයා පූර්ණ බලපත්‍රය එක්වර ලබාගෙන ඇත. මාසික අනතුරු ඇඟවීම්, බැංකු කාඩ්පත් සහ කේත සේවාදායක පුවරුවෙන් ඉවත් කර ඇත.'],
  subModeDesc: ['Monthly recurring subscription. Shows Super Admin bank card on client dashboards near the 25th and requires renewal codes.', 'මාසික දායකත්ව ක්‍රමය. 25 වන දිනට ආසන්නව සේවාදායක පුවරුවේ බැංකු කාඩ්පත පෙන්වන අතර අලුත් කිරීමේ කේත අවශ්‍ය වේ.'],

  // Reports & Users
  daily: ['Daily Sales Breakdown', 'දෛනික විකුණුම්'],
  itemwise: ['Item-wise Sales Breakdown', 'භාණ්ඩ අනුව විකුණුම්'],
  cashierwise: ['Cashier-wise Sales Summary', 'අයකැමි අනුව සාරාංශය'],
  from: ['From', 'සිට'],
  to: ['To', 'දක්වා'],
  run: ['Generate Report', 'වාර්තාව බලන්න'],
  grand: ['Grand Total', 'මුළු එකතුව'],
  date: ['Date', 'දිනය'],
  bills: ['Bills', 'බිල් ගණන'],
  item: ['Item', 'භාණ්ඩය'],
  qtySold: ['Qty Sold', 'විකුණූ ප්‍රමාණය'],
  cashier: ['Cashier', 'අයකැමි'],
  noData: ['No records found', 'දත්ත නැත'],
  newUser: ['+ New User', '+ නව පරිශීලකයෙක්'],
  editUser: ['Edit User & Permissions', 'පරිශීලක සහ අවසර සංස්කරණය'],
  addUser: ['New User & Permissions', 'නව පරිශීලකයා'],
  fullName: ['Full Name', 'සම්පූර්ණ නම'],
  role: ['Role', 'තනතුර'],
  active: ['Active', 'සක්‍රිය'],
  passBlank: ['(leave blank to keep unchanged)', '(නොවෙනස් නම් හිස්ව තබන්න)'],
  changePassword: ['Change Password', 'මුරපදය වෙනස් කරන්න'],
  newPassword: ['New Password', 'නව මුරපදය'],
  confirmPassword: ['Confirm Password', 'මුරපදය තහවුරු කරන්න'],
  currentPassword: ['Current Password', 'වත්මන් මුරපදය'],
  permissions: ['Permissions', 'අවසර'],
  passMinLength: ['Password must be at least 6 characters', 'මුරපදය අවම වශයෙන් අකුරු 6ක් විය යුතුය'],
  passMismatch: ['Passwords do not match', 'මුරපද නොගැලපේ'],
  passUpdated: ['Password updated successfully!', 'මුරපදය සාර්ථකව වෙනස් කරන ලදී!'],
  backup: ['Database Backup', 'දත්ත උපස්ථය'],
  backupTitle: ['Automated Database Backup', 'ස්වයංක්‍රීය දත්ත උපස්ථය'],
  backupDesc: ['Hourly snapshot & single-file daily archival', 'පැයකට වරක් යාවත්කාලීන වන දෛනික උපස්ථ'],
  backupNow: ['Backup Now', 'දැන් උපස්ථ කරන්න'],
  selectFolder: ['Change Folder', 'ෆෝල්ඩරය මාරු කරන්න'],
  openFolder: ['Open Folder', 'ෆෝල්ඩරය විවෘත කරන්න'],
  restoreBackup: ['Restore Database', 'දත්ත නැවත පිහිටුවන්න'],
  Yes: ['Active', 'ඔව්'],
  No: ['Disabled', 'නැත'],
  Cashier: ['Cashier', 'අයකැමි'],
  'Store Manager': ['Store Manager', 'වෙළඳසැල් කළමනාකරු'],
  'Super Admin': ['Super Admin', 'සුපිරි පරිපාලක'],
  Cash: ['Cash', 'මුදල්'],
  Card: ['Card', 'කාඩ්පත්'],
  Bank: ['Bank Transfer', 'බැංකු හුවමාරු'],
  Other: ['Other', 'වෙනත්']
};

let lang = 'en';
try { lang = localStorage.getItem('lang') || 'en'; } catch {}
const t = (k, o) => {
  const v = D[k] ? D[k][lang === 'si' ? 1 : 0] : k;
  return o ? v.replace(/\{(\w+)\}/g, (_, x) => o[x]) : v;
};
const fd = d => new Date(d).toLocaleString(lang === 'si' ? 'si-LK' : 'en-GB');

/* ---------- Theme Switcher (Light / Dark) ---------- */
function initTheme() {
  const saved = localStorage.getItem('kade_theme') || 'light';
  setTheme(saved);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('kade_theme', theme); } catch {}
  document.querySelectorAll('.theme-switch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === theme);
  });
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.theme-switch-btn');
  if (!btn) return;
  setTheme(btn.dataset.mode);
});

initTheme();

/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = n => 'LKR ' + Number(n || 0).toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const today = () => new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const hue = s => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
const C = 'Cashier', M = 'Store Manager', A = 'Super Admin';

/* SVG Icons */
const ICON = {
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  pos: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 8h10M7 12h5"/>',
  items: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  grn: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>',
  reports: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  receipts: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  backup: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  subs: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>'
};

let me = null, sub = null, items = [], cart = [], cat = 'All', tab = 'dashboard', poll;
let posPaymentMethod = 'Cash';
let posBillDiscount = 0;
let posAutoPrint = localStorage.getItem('kade_pos_autoprint') !== '0';
let cachedReceiptSettings = null;

/* API Bridge */
async function call(ch, p) {
  const r = await api.call(ch, p);
  if (!r.ok) {
    if (r.error === 'SYSTEM_LOCKED') boot();
    throw new Error(r.error);
  }
  return r.data;
}

function toast(m, err) {
  const e = document.createElement('div');
  e.className = 'toast-msg' + (err ? ' err' : '');
  e.innerHTML = `<span>${err ? '⚠' : '✓'}</span><span>${esc(m)}</span>`;
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 3500);
}

function modal(html, isLg = false) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<div class="modal-card ${isLg ? 'modal-lg' : ''}">${html}</div>`;
  document.body.appendChild(backdrop);
  backdrop.close = () => backdrop.remove();
  backdrop.onclick = e => { if (e.target === backdrop) backdrop.close(); };
  return backdrop;
}

function formModal(title, fields, init, onSubmit) {
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">${title}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form">
      ${fields.map(([n, l, ty = 'text', x]) => `
        <label class="field-wrap">
          <span class="field-label">${l}</span>
          ${ty === 'select' ? `
            <select name="${n}">
              ${x.map(o => `<option value="${esc(o)}" ${o === init[n] ? 'selected' : ''}>${esc(t(o))}</option>`).join('')}
            </select>
          ` : `
            <input name="${n}" type="${ty}" step="any" value="${esc(init[n] ?? '')}" ${Array.isArray(x) ? `list="dl_${n}"` : ''} required>
            ${Array.isArray(x) ? `<datalist id="dl_${n}">${x.map(o => `<option value="${esc(o)}">`).join('')}</datalist>` : ''}
          `}
        </label>
      `).join('')}
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('save')}</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    try {
      await onSubmit(Object.fromEntries(new FormData(e.target)));
      m.close();
      toast(t('saved'));
    } catch (x) {
      toast(x.message, 1);
    }
  };
}

/* ---------- Super Admin Bank Details Modal (For Customer Transfers) ---------- */
function showBankModal() {
  const b = sub?.bankDetails || {};
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">💳 ${t('superAdminBankDetails')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <!-- Purple Credit Card inside Modal -->
    <div class="superadmin-credit-card" style="margin: 12px 0;">
      <div class="card-hologram-shine"></div>
      <div class="card-top-row">
        <span class="card-brand-label">SUPER ADMIN / VENDOR ACCOUNT</span>
        <span class="card-subscription-tag">${t('dueTag')}</span>
      </div>
      <div class="card-number-row">
        <span id="modalCardNo">${esc(b.accNumber || '8030194935')}</span>
        <button type="button" class="btn-card-copy" id="modalCopyBtn">
          <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>${t('copy')}</span>
        </button>
      </div>
      <div class="card-bottom-row">
        <div>
          <div style="font-size:9.5px; opacity:0.8;">ACCOUNT HOLDER</div>
          <div class="card-holder-name">${esc(b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI')}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:9.5px; opacity:0.8;">BANK & BRANCH</div>
          <b>${esc(b.bankName || 'Commercial Bank')}</b> · <span>${esc(b.bankBranch || 'Gampaha')}</span>
        </div>
      </div>
    </div>

    <div class="bank-info-meta-list">
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('bankName')}:</span>
        <span class="bank-meta-val">${esc(b.bankName || 'Commercial Bank')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('accName')}:</span>
        <span class="bank-meta-val">${esc(b.accName || 'H.A Aman Manthira Hapuarachchi')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('accNumber')}:</span>
        <span class="bank-meta-val" style="font-family:monospace; font-size:14px; color:var(--brand);">${esc(b.accNumber || '8030194935')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('bankBranch')}:</span>
        <span class="bank-meta-val">${esc(b.bankBranch || 'Gampaha')}</span>
      </div>
      <div class="bank-meta-item">
        <span class="bank-meta-label">${t('bankNotes')}:</span>
        <span class="bank-meta-val" style="font-size:11.5px; color:var(--text-muted);">${esc(b.bankNotes || 'Please WhatsApp transfer slip with your store name and receipt invoice.')}</span>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn btn-primary" data-x>${t('close')}</button>
    </div>
  `);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('#modalCopyBtn').onclick = () => {
    navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
    toast(t('copied'));
  };
}

/* ---------- Activation / Renewal Code Modal ---------- */
function showCodeModal() {
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">🔑 ${t('enterCode')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="padding:14px 0 6px;">
      <div style="background:var(--brand-light); border-radius:12px; padding:12px 14px; margin-bottom:14px; display:flex; align-items:center; gap:10px;">
        <span style="font-size:20px;">🛡️</span>
        <div>
          <b style="font-size:13px; color:var(--text-main);">${t('activationCode')}</b>
          <p class="small muted" style="margin:2px 0 0; font-size:11.5px;">Enter the 16-character code from your vendor to instantly renew your subscription and prevent terminal interruption.</p>
        </div>
      </div>

      <form id="modalCodeForm" style="display:flex; flex-direction:column; gap:12px;">
        <label>
          <span style="font-size:12px; font-weight:700; margin-bottom:6px; display:block;">Renewal Code:</span>
          <input id="modalCodeInp" name="code" placeholder="${t('codePlaceholder')}" style="font-family:monospace; font-weight:700; font-size:15px; letter-spacing:1.5px; text-transform:uppercase; text-align:center; padding:10px;" required autocomplete="off">
        </label>
        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
          <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
          <button type="submit" class="btn btn-primary" id="modalCodeBtn">${t('activateCode')}</button>
        </div>
      </form>
    </div>
  `);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('#modalCodeForm').onsubmit = async e => {
    e.preventDefault();
    const inp = m.querySelector('#modalCodeInp');
    const code = (inp.value || '').trim();
    if (!code) return;
    const btn = m.querySelector('#modalCodeBtn');
    btn.disabled = true;
    btn.textContent = 'Verifying…';
    try {
      const res = await call('sub:redeemCode', { code });
      m.close();
      toast(t('codeSuccess', { p: res.period }));
      await refreshSub();
      if (tab === 'dashboard') vDashboard();
    } catch (err) {
      toast(err.message, 1);
      btn.disabled = false;
      btn.textContent = t('activateCode');
    }
  };
}

/* ---------- Static Language Application ---------- */
function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(e => {
    e.textContent = t(e.dataset.i18n);
  });
  document.querySelectorAll('.langsw').forEach(s => {
    s.innerHTML = `
      <button data-lang="en" class="${lang === 'en' ? 'on' : ''}">English</button>
      <button data-lang="si" class="${lang === 'si' ? 'on' : ''}">සිංහල</button>
    `;
  });
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]');
  if (!b) return;
  lang = b.dataset.lang;
  try { localStorage.setItem('lang', lang); } catch {}
  applyStatic();
  if (me && !$('#app').classList.contains('hide')) {
    shell();
    banner();
    go(tab);
  }
});

/* ---------- Boot, Auth, Lock & Subscription ---------- */
const screen = id => ['login', 'lock', 'app'].forEach(s => $('#' + s).classList.toggle('hide', s !== id));

function populateLockBankDetails() {
  if (!sub?.bankDetails) return;
  const b = sub.bankDetails;
  $('#lkBankName').textContent = b.bankName || 'Commercial Bank';
  $('#lkAccName').textContent = (b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI').toUpperCase();
  $('#lkAccNo').textContent = b.accNumber || '8030194935';
  $('#lkBankBranch').textContent = b.bankBranch || 'Gampaha';
  $('#lkCopyBtn').onclick = () => {
    navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
    toast(t('copied'));
  };
}

async function boot() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.remove());
  try {
    sub = await call('sub:status');
  } catch (e) {
    return toast(e.message, 1);
  }
  populateLockBankDetails();
  if (sub.state === 'locked') return screen('lock');
  me ? startApp() : screen('login');
}

$('#loginForm').onsubmit = async e => {
  e.preventDefault();
  try {
    me = await call('auth:login', Object.fromEntries(new FormData(e.target)));
    e.target.reset();
    tab = me.role === C ? 'pos' : 'dashboard';
    startApp();
  } catch (x) {
    toast(x.message, 1);
  }
};

$('#togglePass').onclick = () => {
  const inp = $('#loginPass');
  inp.type = inp.type === 'password' ? 'text' : 'password';
};

$('#lockForm').onsubmit = async e => {
  e.preventDefault();
  try {
    await call('sub:override', Object.fromEntries(new FormData(e.target)));
    e.target.reset();
    toast(t('unlocked'));
    boot();
  } catch (x) {
    toast(x.message, 1);
  }
};

const lcf = $('#lockCodeForm');
if (lcf) {
  lcf.onsubmit = async e => {
    e.preventDefault();
    const inp = $('#lockActivationCode');
    const code = (inp.value || '').trim();
    if (!code) return;
    const btn = $('#lockCodeSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Verifying…';
    try {
      const res = await call('sub:redeemCode', { code });
      toast(t('codeSuccess', { p: res.period }));
      inp.value = '';
      await boot();
    } catch (x) {
      toast(x.message, 1);
      btn.disabled = false;
      btn.textContent = t('activateCode');
    }
  };
}

$('#logout').onclick = async () => {
  await call('auth:logout');
  me = null;
  cart = [];
  clearInterval(poll);
  screen('login');
};

/* Top Banner Notification near the 25th */
function banner() {
  const b = $('#banner');
  if (!sub || sub.subEnabled === false || (sub.state !== 'warning' && sub.state !== 'locked')) return b.classList.add('hide');

  const d = sub.daysLeft;
  const when = d > 0 ? t('inDays', { n: d }) : d === 0 ? t('today') : t('agoDays', { n: -d });
  b.className = 'payment-alert-banner';
  b.innerHTML = `
    <div class="banner-left-info">
      <span>🔔</span>
      <span>${t('bannerDue', { fee: fmt(sub.fee), date: sub.due || '25th' })} (${when})</span>
    </div>
    <div style="display:flex; gap:8px; align-items:center;">
      <button class="banner-view-bank-btn" id="bannerCodeBtn" style="background:var(--brand); color:#fff; border:none; font-weight:700;">🔑 ${t('enterCode')}</button>
      <button class="banner-view-bank-btn" id="bannerBankBtn">${t('viewBankDetails')}</button>
    </div>
  `;
  b.querySelector('#bannerBankBtn').onclick = showBankModal;
  b.querySelector('#bannerCodeBtn').onclick = showCodeModal;
}

async function refreshSub() {
  try {
    sub = await call('sub:status');
    populateLockBankDetails();
    banner();
    if (sub.state === 'locked') boot();
  } catch {}
}

const SYSTEM_MODULES = [
  { key: 'pos', name: 'POS Terminal', desc: 'Cashier checkout, rapid barcode billing, discounts & receipts', icon: ICON.pos },
  { key: 'dashboard', name: 'Dashboard Overview', desc: 'Summary metrics, sales KPIs, revenue wave charts & alerts', icon: ICON.dashboard },
  { key: 'items', name: 'Inventory & Items', desc: 'Product catalog, pricing, category management & stock levels', icon: ICON.items },
  { key: 'grn', name: 'Goods Received Note (GRN)', desc: 'Supplier stock entry, batch tracking & purchase costs', icon: ICON.grn },
  { key: 'reports', name: 'Financial & Sales Reports', desc: 'Daily revenue, item-wise sales and cashier performance', icon: ICON.reports },
  { key: 'receipts', name: 'Receipt Settings', desc: 'Thermal printer 58mm/80mm format, header & footer design', icon: ICON.receipts },
  { key: 'backup', name: 'Database Backups', desc: 'Hourly automated database snapshots, directory selection & restore', icon: ICON.backup }
];

function userHasPerm(k) {
  if (!me) return false;
  // Super Admin always has full master access to everything
  if (me.role === A) return true;
  // User accounts management & subscription settings are restricted to Super Admin only by default
  if (k === 'users' || k === 'subs') return me.role === A;
  if (k === 'backup') return me.role === A || (me.permissions && me.permissions.split(',').map(s => s.trim().toLowerCase()).includes('backup'));

  if (me.permissions) {
    const list = me.permissions.split(',').map(s => s.trim().toLowerCase());
    return list.includes(k.toLowerCase());
  }
  // Role defaults when no custom permissions are set
  if (me.role === M) return ['dashboard', 'pos', 'items', 'grn', 'reports', 'receipts'].includes(k);
  if (me.role === C) return ['pos', 'dashboard'].includes(k);
  return false;
}

/* Tabs: Role and Permission based access */
const TABS = {
  dashboard: [vDashboard, 2],
  pos: [vPos, null],
  items: [vItems, null],
  grn: [vGrn, null],
  reports: [vReports, null],
  receipts: [vReceiptSettings, null],
  users: [vUsers, null],
  backup: [vBackup, null],
  subs: [vSubs, null]
};

function shell() {
  $('#av').textContent = me.fullName.trim().charAt(0).toUpperCase();
  $('#uname').textContent = me.fullName;
  $('#urole').textContent = t(me.role);
  $('#userGreeting').textContent = `Hello, ${me.fullName.split(' ')[0]}!`;

  $('#nav').innerHTML = Object.entries(TABS)
    .filter(([k]) => userHasPerm(k))
    .map(([k, v]) => `
      <button data-t="${k}" class="nav-item-btn ${k === tab ? 'on' : ''}">
        <svg viewBox="0 0 24 24">${ICON[k]}</svg>
        <span>${t(k)}</span>
        ${v[1] && k === tab ? `<span class="nav-badge-pill">${v[1]}</span>` : ''}
      </button>
    `).join('');
}

function changeSelfPasswordModal() {
  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">${t('changePassword')}</h3>
        <span class="muted small">${esc(me.fullName)} (@${esc(me.username)})</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form" style="margin-top:14px; display:flex; flex-direction:column; gap:14px;">
      <label class="field-wrap">
        <span class="field-label">${t('currentPassword')} *</span>
        <input name="currentPassword" type="password" required placeholder="Enter current password" autocomplete="current-password">
      </label>
      <label class="field-wrap">
        <span class="field-label">${t('newPassword')} *</span>
        <input name="newPassword" id="selfNewPwd" type="password" minlength="6" required placeholder="At least 6 characters" autocomplete="new-password">
      </label>
      <label class="field-wrap">
        <span class="field-label">${t('confirmPassword')} *</span>
        <input name="confirmPassword" id="selfConfPwd" type="password" minlength="6" required placeholder="Confirm new password" autocomplete="new-password">
      </label>
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="showSelfPwdToggle" style="accent-color:var(--brand); cursor:pointer;">
        <label for="showSelfPwdToggle" class="small muted" style="cursor:pointer; user-select:none;">Show passwords</label>
      </div>
      <div class="modal-actions" style="margin-top:14px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('changePassword')}</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  const showToggle = m.querySelector('#showSelfPwdToggle');
  const p1 = m.querySelector('#selfNewPwd');
  const p2 = m.querySelector('#selfConfPwd');
  showToggle.onchange = () => {
    const ty = showToggle.checked ? 'text' : 'password';
    p1.type = ty;
    p2.type = ty;
  };
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.newPassword !== data.confirmPassword) {
      toast(t('passMismatch') || 'Passwords do not match', 1);
      return;
    }
    if (data.newPassword.length < 6) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    try {
      await call('auth:changePassword', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      });
      m.close();
      toast(t('passUpdated') || 'Password changed successfully!');
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

function startApp() {
  screen('app');
  applyStatic();
  if (!userHasPerm(tab)) {
    tab = Object.keys(TABS).find(k => userHasPerm(k)) || 'pos';
  }
  shell();
  banner();
  $('#nav').onclick = e => {
    const b = e.target.closest('button');
    if (b) go(b.dataset.t);
  };
  const selfPwdBtn = $('#btnChangeMyPwd');
  if (selfPwdBtn) selfPwdBtn.onclick = e => { e.stopPropagation(); changeSelfPasswordModal(); };
  const userCard = $('#userProfileCard');
  if (userCard) userCard.onclick = () => changeSelfPasswordModal();

  clearInterval(poll);
  poll = setInterval(refreshSub, 6e5);
  go(tab);
}

async function go(k) {
  if (!userHasPerm(k)) {
    const firstAllowed = Object.keys(TABS).find(x => userHasPerm(x));
    if (firstAllowed && firstAllowed !== k) return go(firstAllowed);
    toast('Access denied: Insufficient permissions', 1);
    return;
  }
  tab = k;
  shell();
  try {
    await TABS[k][0]();
  } catch (e) {
    toast(e.message, 1);
  }
}

/* ==========================================================================
   DYNAMIC REAL DATA SVG CHART GENERATOR
   ========================================================================== */
function renderDynamicWaveChart(days, width = 650, height = 210) {
  if (!days || !days.length) {
    return `<div class="muted small" style="text-align:center; padding:50px;">No sales recorded in the past 14 days</div>`;
  }

  const maxSales = Math.max(...days.map(d => +d.Total || 0), 100);
  const maxBills = Math.max(...days.map(d => +d.Bills || 0), 5);
  const padX = 20;
  const padY = 25;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;
  const step = plotW / (days.length - 1);

  // Compute exact coordinate points for Sales curve
  const salesPoints = days.map((d, i) => {
    const x = padX + i * step;
    const y = padY + plotH - ((+d.Total || 0) / maxSales) * plotH;
    return { x, y, val: +d.Total || 0, date: d.Day, label: d.Weekday.slice(0, 3) };
  });

  // Compute exact coordinate points for Bills curve
  const billsPoints = days.map((d, i) => {
    const x = padX + i * step;
    const y = padY + plotH - ((+d.Bills || 0) / maxBills) * (plotH * 0.75);
    return { x, y, val: +d.Bills || 0 };
  });

  function smoothPath(pts) {
    if (pts.length < 2) return '';
    let path = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cx1 = p0.x + (p1.x - p0.x) / 2;
      const cy1 = p0.y;
      const cx2 = p0.x + (p1.x - p0.x) / 2;
      const cy2 = p1.y;
      path += ` C ${cx1},${cy1} ${cx2},${cy2} ${p1.x},${p1.y}`;
    }
    return path;
  }

  const salesLine = smoothPath(salesPoints);
  const salesArea = `${salesLine} L ${salesPoints[salesPoints.length - 1].x},${height} L ${salesPoints[0].x},${height} Z`;

  const billsLine = smoothPath(billsPoints);
  const billsArea = `${billsLine} L ${billsPoints[billsPoints.length - 1].x},${height} L ${billsPoints[0].x},${height} Z`;

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="width:100%; height:100%;">
      <defs>
        <linearGradient id="dynSalesGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5b52f9" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#5b52f9" stop-opacity="0.0"/>
        </linearGradient>
        <linearGradient id="dynBillsGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f43f72" stop-opacity="0.32"/>
          <stop offset="100%" stop-color="#f43f72" stop-opacity="0.0"/>
        </linearGradient>
      </defs>

      <!-- Background Grid lines -->
      <line x1="0" y1="${padY}" x2="${width}" y2="${padY}" stroke="rgba(140,160,190,0.12)" stroke-dasharray="4"/>
      <line x1="0" y1="${padY + plotH / 2}" x2="${width}" y2="${padY + plotH / 2}" stroke="rgba(140,160,190,0.12)" stroke-dasharray="4"/>
      <line x1="0" y1="${height - padY}" x2="${width}" y2="${height - padY}" stroke="rgba(140,160,190,0.12)"/>

      <!-- Area Fills -->
      <path d="${salesArea}" fill="url(#dynSalesGrad)"/>
      <path d="${billsArea}" fill="url(#dynBillsGrad)"/>

      <!-- Smooth Line Strokes -->
      <path d="${billsLine}" fill="none" stroke="#f43f72" stroke-width="2.5" stroke-linecap="round"/>
      <path d="${salesLine}" fill="none" stroke="#5b52f9" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Dynamic Data Nodes with Native Tooltip -->
      ${salesPoints.map(p => `
        <circle cx="${p.x}" cy="${p.y}" r="4" fill="#ffffff" stroke="#5b52f9" stroke-width="2.5" class="chart-interactive-dot">
          <title>${p.date} (${p.label}): LKR ${p.val.toFixed(2)}</title>
        </circle>
      `).join('')}
    </svg>
  `;
}

/* ==========================================================================
   VIEW 1: EXECUTIVE DASHBOARD (COMPREHENSIVE & DYNAMIC REAL DATA)
   ========================================================================== */
async function vDashboard() {
  const data = await call('dashboard:overview');
  const b = sub?.bankDetails || {};
  const currentDueDay = sub?.dueDay || 25;
  const curPeriod = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const isFreeMonth = sub?.freeMonth && curPeriod <= sub.freeMonth;
  const isSubActive = sub?.subEnabled !== false;

  const totalCatRevenue = data.categorySales?.reduce((s, c) => s + (+c.Total || 0), 0) || 1;
  const catColors = ['#5b52f9', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];

  const cashMethod = data.paymentMethods?.find(m => m.Method === 'Cash') || { Bills: 0, Total: 0 };
  const cardMethod = data.paymentMethods?.find(m => m.Method === 'Card') || { Bills: 0, Total: 0 };
  const totalPayMethodRevenue = (+cashMethod.Total || 0) + (+cardMethod.Total || 0) || 1;
  const cashShare = Math.round(((+cashMethod.Total || 0) / totalPayMethodRevenue) * 100);
  const cardShare = 100 - cashShare;

  $('#view').innerHTML = `
    <div class="dash-layout-grid">
      <!-- Row 1: Top 4 Executive KPI Cards -->
      <div class="top-stats-row">
        <!-- Card 1: Today's Revenue -->
        <div class="fin-stat-card">
          <div class="stat-text-col">
            <span class="stat-label-title">${t('currentBalance')}</span>
            <div class="stat-main-number coral">${fmt(data.todaySales)}</div>
            <span class="stat-trend-sub">${data.todayBills} ${t('bills')} · Disc: ${fmt(data.todayDiscount)}</span>
          </div>
          <div class="stat-sparkline-box">
            <svg viewBox="0 0 90 48">
              <path d="M 0,40 Q 20,38 35,28 T 65,15 T 90,8 L 90,48 L 0,48 Z" fill="rgba(244,63,114,0.15)"/>
              <path d="M 0,40 Q 20,38 35,28 T 65,15 T 90,8" fill="none" stroke="#f43f72" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <!-- Card 2: Monthly Sales & Average Order Value -->
        <div class="fin-stat-card">
          <div class="stat-text-col">
            <span class="stat-label-title">${t('latestIncome')}</span>
            <div class="stat-main-number green">+ ${fmt(data.monthSales)}</div>
            <span class="stat-trend-sub">AOV: ${fmt(data.aov)} (${data.monthBills} bills)</span>
          </div>
          <div class="stat-sparkline-box">
            <svg viewBox="0 0 90 48">
              <path d="M 0,42 Q 25,40 45,22 T 70,18 T 90,6 L 90,48 L 0,48 Z" fill="rgba(16,185,129,0.15)"/>
              <path d="M 0,42 Q 25,40 45,22 T 70,18 T 90,6" fill="none" stroke="#10b981" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <!-- Card 3: Inventory Valuation & Stock Units -->
        <div class="fin-stat-card">
          <div class="stat-text-col">
            <span class="stat-label-title">${t('inventoryValuation')}</span>
            <div class="stat-main-number purple">${fmt(data.totalValuation)}</div>
            <span class="stat-trend-sub">${data.totalUnits} units across ${data.totalItems} items</span>
          </div>
          <div class="stat-sparkline-box">
            <svg viewBox="0 0 90 48">
              <path d="M 0,38 Q 20,40 40,25 T 65,30 T 90,10 L 90,48 L 0,48 Z" fill="rgba(91,82,249,0.15)"/>
              <path d="M 0,38 Q 20,40 40,25 T 65,30 T 90,10" fill="none" stroke="#5b52f9" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <!-- Card 4: Due Calendar Card or Lifetime License Status -->
        ${isSubActive ? `
        <div class="due-calendar-card">
          <div class="due-cal-header">
            <span>${new Date().toLocaleDateString(lang === 'si' ? 'si-LK' : 'en-US', { weekday: 'long' })}</span>
            <span class="muted">${t('dueTag')}</span>
          </div>
          <div style="font-size:10.5px; color:var(--text-muted); margin:4px 0 6px; display:flex; justify-content:space-between; align-items:center;">
            <span>📅 Installed: <b>${sub?.installedOn || '—'}</b></span>
            <span class="pill ${isFreeMonth ? 'ok' : 'info'}" style="font-size:9px; padding:1px 6px;">${isFreeMonth ? 'FREE MONTH' : 'ACTIVE'}</span>
          </div>
          <div class="due-cal-days">
            <div class="cal-day-cell"><span>22</span><span>Thu</span></div>
            <div class="cal-day-cell"><span>23</span><span>Fri</span></div>
            <div class="cal-day-cell"><span>24</span><span>Sat</span></div>
            <div class="cal-day-cell active-due"><span>${currentDueDay}</span><span>DUE</span></div>
            <div class="cal-day-cell"><span>26</span><span>Mon</span></div>
            <div class="cal-day-cell"><span>27</span><span>Tue</span></div>
            <div class="cal-day-cell"><span>28</span><span>Wed</span></div>
          </div>
        </div>
        ` : `
        <div class="due-calendar-card" style="border-left: 4px solid var(--accent-lime); justify-content: space-between;">
          <div class="due-cal-header">
            <span style="font-size:11.5px; text-transform:uppercase; font-weight:800; color:var(--text-muted); letter-spacing:0.5px;">License Status</span>
            <span class="pill ok" style="font-size:10px;">LIFETIME</span>
          </div>
          <div style="margin: 4px 0;">
            <div style="font-size:18px; font-weight:800; color:var(--text-main); letter-spacing:-0.4px;">One-Time Payment</div>
            <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">Perpetual License · Full Access</div>
          </div>
          <div style="font-size:10.5px; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center; padding-top:4px; border-top:1px dashed var(--border-card);">
            <span>📅 Installed: <b>${sub?.installedOn || '—'}</b></span>
            <span class="pill ok" style="font-size:9px; padding:1px 6px;">NO EXPIRY</span>
          </div>
        </div>
        `}
      </div>

      <!-- Row 2: ${isSubActive ? '3 Columns (Wave Chart + Bank Card + History)' : '2 Columns (Wave Chart + History)'} -->
      <div class="dash-middle-row" style="${isSubActive ? '' : 'grid-template-columns: 1.8fr 1.2fr;'}">
        <!-- 1. Revenue Real-Data Dynamic Waves Chart -->
        <div class="chart-panel-card">
          <div class="chart-panel-header">
            <div>
              <h3 class="chart-title">${t('revenueChartTitle')}</h3>
              <div class="chart-legends" style="margin-top:4px;">
                <span><span class="legend-dot sales"></span> ${t('salesLegend')}</span>
                <span><span class="legend-dot bills"></span> ${t('billsLegend')}</span>
              </div>
            </div>
            <span class="small muted" style="background:var(--bg-input); padding:4px 10px; border-radius:8px;">
              Live Database Stream · ${data.trendDays?.length || 14} Days
            </span>
          </div>

          <!-- Dynamic SVG Wave generated with exact SQL coordinates -->
          <div class="svg-wave-chart-wrap">
            ${renderDynamicWaveChart(data.trendDays)}
          </div>

          <!-- Real Dates on X-Axis -->
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-dim); padding-top:4px;">
            ${data.trendDays?.slice(-7).map(d => `<span>${d.Day.slice(5)}</span>`).join('')}
          </div>
        </div>

        ${isSubActive ? `
        <!-- 2. Super Admin Bank Card ("My Cards" from screenshot) -->
        <div class="bank-showcase-panel">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('myCardsTitle')}</h3>
            <button class="btn btn-sm btn-ghost" id="dashViewBankBtn">Details</button>
          </div>

          <!-- Purple Credit Card Element -->
          <div class="superadmin-credit-card">
            <div class="card-hologram-shine"></div>
            <div class="card-top-row">
              <span class="card-brand-label">SUPER ADMIN / VENDOR</span>
              <span class="card-subscription-tag">${t('dueTag')}</span>
            </div>
            <div class="card-number-row">
              <span id="dashCardAccNo">${esc(b.accNumber || '8030194935')}</span>
              <button type="button" class="btn-card-copy" id="dashCardCopyBtn">
                <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>${t('copy')}</span>
              </button>
            </div>
            <div class="card-bottom-row">
              <div>
                <div style="font-size:9.5px; opacity:0.8;">CARD HOLDER</div>
                <div class="card-holder-name">${esc(b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI')}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:9.5px; opacity:0.8;">BANK & BRANCH</div>
                <b>${esc(b.bankName || 'Commercial Bank')}</b> · <span>${esc(b.bankBranch || 'Gampaha')}</span>
              </div>
            </div>
          </div>

          <!-- Meta rows below credit card -->
          <div class="bank-info-meta-list">
            <div class="bank-meta-item">
              <span class="bank-meta-label">Bank:</span>
              <span class="bank-meta-val">${esc(b.bankName || 'Commercial Bank')}</span>
            </div>
            <div class="bank-meta-item">
              <span class="bank-meta-label">Account Name:</span>
              <span class="bank-meta-val">${esc(b.accName || 'H.A Aman Manthira Hapuarachchi')}</span>
            </div>
            <div class="bank-meta-item">
              <span class="bank-meta-label">Branch:</span>
              <span class="bank-meta-val">${esc(b.bankBranch || 'Gampaha')}</span>
            </div>
          </div>

          <!-- Activation / Renewal Code Section -->
          <div class="dash-code-box ${isFreeMonth ? 'free-month-box' : sub?.state === 'warning' ? 'warn-box' : sub?.state === 'locked' ? 'lock-box' : ''}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="font-size:14px;">${isFreeMonth ? '🎉' : '🔑'}</span>
                <b style="font-size:12px; font-weight:700;">${isFreeMonth ? t('freeInstallMonth') : t('enterCode')}</b>
              </div>
              <span class="pill ${isFreeMonth ? 'ok' : sub?.state === 'warning' ? 'warn' : sub?.state === 'locked' ? 'bad' : 'ok'}" style="font-size:9.5px; padding:1px 6px;">
                ${isFreeMonth ? 'FREE PERIOD' : sub?.state === 'warning' ? 'PAYMENT DUE' : sub?.state === 'locked' ? 'LOCKED' : 'ACTIVE'}
              </span>
            </div>
            <p class="small muted" style="margin:0 0 10px; font-size:11px; line-height:1.4;">
              ${isFreeMonth 
                ? `System installed on <b>${sub.installedOn}</b>. This installation month (${sub.freeMonth}) is completely free — no codes or payments required! First monthly subscription begins on <b>${sub.nextDue || 'next month'}</b>.`
                : sub?.state === 'warning'
                ? `Pay fee (${fmt(sub.fee)}) to the bank above, then enter the code from your vendor to clear warning.`
                : `Enter vendor activation code after monthly transfer to extend subscription and keep terminal active.`}
            </p>
            <form id="dashActivationForm" style="display:flex; gap:6px;">
              <input 
                id="dashCodeInput" 
                class="dash-code-inp" 
                placeholder="${isFreeMonth ? 'Optional advance code' : t('codePlaceholder')}" 
                maxlength="24" 
                autocomplete="off"
                ${isFreeMonth ? '' : 'required'}
              >
              <button type="submit" class="btn btn-primary btn-sm" id="dashCodeSubmitBtn" style="white-space:nowrap; padding:0 12px; font-weight:700;">
                ${t('activateCode')}
              </button>
            </form>
          </div>
        </div>
        ` : ''}

        <!-- 3. History / Recent Transactions Column with Payment Badges -->
        <div class="history-panel-card">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('historyTitle')}</h3>
            <span class="small muted">${t('today')}</span>
          </div>

          <input class="history-search-input" id="histSearch" placeholder="Search invoices…">

          ${isSubActive ? `
          <!-- Upcoming Subscription Payment Notice on 25th -->
          <div style="background:var(--brand-light); border-radius:12px; padding:10px 12px; display:flex; flex-direction:column; gap:2px;">
            <span style="font-size:10.5px; font-weight:800; color:var(--brand); text-transform:uppercase;">${t('upcomingPayments')}</span>
            <b style="font-size:12px; color:var(--text-main);">${t('softwareSubDue')}</b>
          </div>
          ` : ''}

          <div class="history-list-stream" id="histStream">
            ${data.recentSales.length ? data.recentSales.map(s => `
              <div class="history-item-row">
                <div>
                  <h5 class="history-item-title">${esc(s.InvoiceNo)}</h5>
                  <p class="history-item-time">${esc(s.Cashier)} · ${new Date(s.CreatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div style="text-align:right;">
                  <span class="pill ${s.PaymentMethod === 'Card' ? 'info' : 'ok'}" style="font-size:9.5px; padding:1px 6px;">${esc(s.PaymentMethod || 'Cash')}</span>
                  <div class="history-amount-badge">+${fmt(s.Total).replace('LKR ', '')}</div>
                </div>
              </div>
            `).join('') : `<div class="muted small" style="text-align:center; padding:20px;">${t('noData')}</div>`}
          </div>
        </div>
      </div>

      <!-- Row 3: Category Breakdown & Payment Methods (Cash vs Card) -->
      <div class="dash-bottom-row" style="grid-template-columns: 1.2fr 1fr;">
        <!-- Category Sales Multi-color Breakdown -->
        <div class="panel-card" style="display:flex; flex-direction:column; gap:14px;">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('categorySales')}</h3>
            <span class="small muted">${data.categorySales?.length || 0} Categories</span>
          </div>

          ${data.categorySales?.length ? `
            <div style="display:flex; flex-direction:column; gap:12px;">
              <!-- Multi-color Progress Strip -->
              <div style="display:flex; height:12px; border-radius:99px; overflow:hidden; background:var(--bg-input);">
                ${data.categorySales.map((c, i) => {
                  const pct = Math.max(2, Math.round(((+c.Total || 0) / totalCatRevenue) * 100));
                  return `<div style="width:${pct}%; background:${catColors[i % catColors.length]};" title="${c.Category}: ${pct}% (${fmt(c.Total)})"></div>`;
                }).join('')}
              </div>

              <!-- Category Grid -->
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px;">
                ${data.categorySales.map((c, i) => {
                  const pct = Math.round(((+c.Total || 0) / totalCatRevenue) * 100);
                  return `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--bg-input); border-radius:10px;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="width:8px; height:8px; border-radius:50%; background:${catColors[i % catColors.length]}; flex-shrink:0;"></span>
                        <b style="font-size:12.5px;">${esc(c.Category)}</b>
                      </div>
                      <div style="text-align:right;">
                        <b style="font-size:12px; color:var(--brand);">${fmt(c.Total)}</b>
                        <span class="muted small" style="display:block;">${pct}% (${c.Qty} items)</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : `<div class="muted small" style="text-align:center; padding:20px;">No category sales records in past 30 days</div>`}
        </div>

        <!-- Cash vs Card Payment Split -->
        <div class="panel-card" style="display:flex; flex-direction:column; gap:14px;">
          <div class="panel-header-row">
            <h3 class="panel-heading">${t('paymentBreakdown')}</h3>
          </div>

          <div style="display:flex; gap:12px;">
            <div style="flex:1; padding:14px; background:var(--bg-input); border-radius:14px; border:1px solid var(--border-card);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <b style="font-size:12px; color:var(--accent-lime);">💵 CASH</b>
                <span class="pill ok" style="font-size:10px;">${cashShare}%</span>
              </div>
              <div style="font-size:18px; font-weight:800; margin:6px 0;">${fmt(cashMethod.Total)}</div>
              <small class="muted">${cashMethod.Bills} transactions</small>
            </div>

            <div style="flex:1; padding:14px; background:var(--bg-input); border-radius:14px; border:1px solid var(--border-card);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <b style="font-size:12px; color:var(--brand);">💳 CARD</b>
                <span class="pill info" style="font-size:10px;">${cardShare}%</span>
              </div>
              <div style="font-size:18px; font-weight:800; margin:6px 0;">${fmt(cardMethod.Total)}</div>
              <small class="muted">${cardMethod.Bills} transactions</small>
            </div>
          </div>

          <!-- Staff Performance Leaderboard -->
          <div style="display:flex; flex-direction:column; gap:8px;">
            <b style="font-size:12.5px; color:var(--text-muted);">${t('staffLeaderboard')}</b>
            ${data.cashiers?.length ? data.cashiers.map(c => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 10px; background:var(--bg-input); border-radius:8px; font-size:12px;">
                <span>${esc(c.Cashier)}</span>
                <b>${fmt(c.Total)} <span class="muted small">(${c.Bills} bills)</span></b>
              </div>
            `).join('') : '<div class="muted small">No staff sales yet</div>'}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Dashboard events (guarded when subscription is off)
  const dashBankBtn = $('#dashViewBankBtn');
  if (dashBankBtn) dashBankBtn.onclick = showBankModal;
  const dashCopyBtn = $('#dashCardCopyBtn');
  if (dashCopyBtn) {
    dashCopyBtn.onclick = () => {
      navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
      toast(t('copied'));
    };
  }

  const dashCodeForm = $('#dashActivationForm');
  if (dashCodeForm) {
    dashCodeForm.onsubmit = async e => {
      e.preventDefault();
      const inp = $('#dashCodeInput');
      const code = (inp.value || '').trim();
      if (!code) return;
      const btn = $('#dashCodeSubmitBtn');
      btn.disabled = true;
      btn.textContent = 'Verifying…';
      try {
        const res = await call('sub:redeemCode', { code });
        toast(t('codeSuccess', { p: res.period }));
        inp.value = '';
        await refreshSub();
        vDashboard();
      } catch (err) {
        toast(err.message, 1);
        btn.disabled = false;
        btn.textContent = t('activateCode');
      }
    };
  }

  $('#histSearch').oninput = e => {
    const q = e.target.value.toLowerCase();
    const rows = data.recentSales.filter(s => (s.InvoiceNo + s.Cashier).toLowerCase().includes(q));
    $('#histStream').innerHTML = rows.map(s => `
      <div class="history-item-row">
        <div>
          <h5 class="history-item-title">${esc(s.InvoiceNo)}</h5>
          <p class="history-item-time">${esc(s.Cashier)} · ${new Date(s.CreatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div style="text-align:right;">
          <span class="pill ${s.PaymentMethod === 'Card' ? 'info' : 'ok'}" style="font-size:9.5px; padding:1px 6px;">${esc(s.PaymentMethod || 'Cash')}</span>
          <div class="history-amount-badge">+${fmt(s.Total).replace('LKR ', '')}</div>
        </div>
      </div>
    `).join('') || `<div class="muted small" style="text-align:center; padding:16px;">${t('noData')}</div>`;
  };
}

/* ==========================================================================
   STANDARD THERMAL RECEIPT GENERATOR & LIVE PREVIEW SYSTEM
   ========================================================================== */
function renderStandardReceiptHtml(r, cfg = {}) {
  const shopName = cfg.shopName || 'KADE POS SUPERMARKET & CAFE';
  const shopTagline = cfg.shopTagline || 'Quality Groceries & Dining';
  const shopAddress = cfg.shopAddress || 'No 124, High Level Road, Colombo 03';
  const shopPhone = cfg.shopPhone || 'Tel: 071 234 5678 / 011 234 5678';
  const shopTaxNo = cfg.shopTaxNo ? `BR/VAT: ${cfg.shopTaxNo}` : '';
  const headerNote = cfg.receiptHeader || 'TAX INVOICE / OFFICIAL RECEIPT';
  const footerNote = cfg.receiptFooter || 'Thank you for shopping with us! Please come again.';
  const paperWidth = cfg.receiptPaperWidth === '58mm' ? '280px' : '320px';

  const sub = +(r.subtotal || r.total || 0);
  const disc = +(r.discount || 0);
  const tot = +(r.total || 0);
  const paid = +(r.paid || 0);
  const bal = +(r.balance || 0);
  const lines = Array.isArray(r.lines) ? r.lines : [];

  return `
    <div class="thermal-receipt-paper" style="width:${paperWidth};">
      <div class="tr-header">
        <h2 class="tr-shop-name">${esc(shopName)}</h2>
        ${shopTagline ? `<div class="tr-tagline">${esc(shopTagline)}</div>` : ''}
        ${shopAddress ? `<div class="tr-contact">${esc(shopAddress)}</div>` : ''}
        ${shopPhone ? `<div class="tr-contact">${esc(shopPhone)}</div>` : ''}
        ${shopTaxNo ? `<div class="tr-tax">${esc(shopTaxNo)}</div>` : ''}
        <div style="font-weight:800; font-size:11px; margin-top:5px; letter-spacing:0.8px;">${esc(headerNote)}</div>
      </div>

      <hr class="tr-divider-double">

      <div class="tr-meta-row">
        <span><b>INV:</b> ${esc(r.invoiceNo || 'INV-000000')}</span>
        <span><b>METH:</b> ${esc(r.paymentMethod || 'Cash').toUpperCase()}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>DATE:</b> ${new Date(r.createdAt || Date.now()).toLocaleDateString()}</span>
        <span><b>TIME:</b> ${new Date(r.createdAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>CASHIER:</b> ${esc(r.cashier || me?.fullName || 'Cashier')}</span>
      </div>

      <hr class="tr-divider-dashed">

      <table class="tr-table">
        <thead>
          <tr>
            <th style="width:48%;">ITEM</th>
            <th style="text-align:center; width:14%;">QTY</th>
            <th style="text-align:right; width:18%;">PRICE</th>
            <th style="text-align:right; width:20%;">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${lines.map(l => `
            <tr>
              <td>
                <b>${esc(l.name)}</b>
                ${l.disc ? `<br><small style="color:#000000;">Disc -${l.disc}%</small>` : ''}
              </td>
              <td style="text-align:center;">${l.qty}</td>
              <td style="text-align:right;">${(+l.price).toFixed(2)}</td>
              <td style="text-align:right;"><b>${(+l.total).toFixed(2)}</b></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <hr class="tr-divider-dashed">

      <div class="tr-sum-row">
        <span>SUBTOTAL:</span>
        <b>LKR ${sub.toFixed(2)}</b>
      </div>
      ${disc > 0 ? `
        <div class="tr-sum-row" style="color:#000000;">
          <span>BILL DISCOUNT:</span>
          <b>- LKR ${disc.toFixed(2)}</b>
        </div>
      ` : ''}

      <div class="tr-sum-row tr-total-row">
        <span>NET TOTAL PAYABLE:</span>
        <span>LKR ${tot.toFixed(2)}</span>
      </div>

      <div class="tr-sum-row">
        <span>PAYMENT (${esc(r.paymentMethod || 'Cash').toUpperCase()}):</span>
        <b>LKR ${paid.toFixed(2)}</b>
      </div>
      <div class="tr-sum-row">
        <span>CHANGE / BALANCE:</span>
        <b>LKR ${bal.toFixed(2)}</b>
      </div>

      <hr class="tr-divider-dashed">

      <div class="tr-meta-row" style="justify-content:center; gap:16px; font-weight:700;">
        <span>ITEMS: ${lines.length}</span>
        <span>TOTAL QTY: ${lines.reduce((s, l) => s + (+l.qty || 0), 0)}</span>
      </div>

      <div class="tr-footer">
        <p style="margin:6px 0 3px;">${esc(footerNote)}</p>
        <p style="margin:2px 0 0; font-size:10px; font-weight:700; color:#000000;">Powered by amectar</p>
        <p style="margin:1px 0 3px; font-size:9.5px; color:#000000; font-family:monospace; letter-spacing:0.5px;">0741800901</p>
        <div style="letter-spacing:3px; font-weight:800; margin-top:6px; font-size:11px;">*${esc(r.invoiceNo || 'INV-000000')}*</div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   VIEW 2: POS TERMINAL (RAPID KEYBOARD WORKFLOW & ENTERPRISE REGISTER)
   ========================================================================== */
async function vPos() {
  items = await call('items:list');
  try {
    cachedReceiptSettings = await call('settings:getReceipt');
  } catch {}

  posPaymentMethod = 'Cash';
  posBillDiscount = 0;

  let selectedTileIndex = 0;
  let isNavigatingGrid = false;

  const getSubtotal = () => Math.round(cart.reduce((s, l) => s + l.price * l.qty * (1 - (l.disc || 0) / 100), 0) * 100) / 100;
  const getDiscount = () => Math.max(0, parseFloat($('#posDiscount')?.value) || 0);
  const getTotal = () => Math.max(0, Math.round((getSubtotal() - getDiscount()) * 100) / 100);

  $('#view').innerHTML = `
    <div class="pos-layout">
      <!-- Left: Fast Catalog & Search Section -->
      <section class="pos-catalog">
        <!-- Search Bar with F1 Focus Hint -->
        <div class="pos-search-bar">
          <div class="pos-search-bar-wrap">
            <svg class="pos-search-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input id="q" placeholder="${t('searchPos')}" autofocus autocomplete="off">
            <span class="pos-shortcut-hint-pill">F1</span>
          </div>
        </div>

        <!-- Category Chips -->
        <div id="cats" class="category-chips"></div>

        <!-- Product Grid with Arrow Key Navigation -->
        <div id="grid" class="pos-grid"></div>
      </section>

      <!-- Right: Enterprise Cart & Cash Register Panel -->
      <aside class="pos-cart-panel">
        <div class="cart-header">
          <div class="cart-title-wrap">
            <h3 class="cart-title">${t('currentBill')}</h3>
            <span class="cart-count-pill" id="cartCountPill">0 items</span>
          </div>

          <div class="cart-header-actions">
            <!-- Print Receipt ON/OFF Toggle -->
            <button type="button" class="print-toggle-btn ${posAutoPrint ? 'active' : ''}" id="posPrintToggle" title="Toggle Auto Receipt Printing (F8)">
              <span>🖨️</span>
              <span id="posPrintToggleText">${posAutoPrint ? t('printOn') : t('printOff')}</span>
            </button>

            <!-- Clear Bill -->
            <button id="clr" class="cart-clear-btn" title="Clear Bill">${t('clearBill')}</button>
          </div>
        </div>

        <!-- Cart Lines Stream -->
        <div id="lines" class="cart-lines"></div>

        <!-- Checkout Summary -->
        <div class="cart-summary">
          <!-- Subtotal -->
          <div class="cart-sum-row">
            <span class="muted">${t('subtotal')}</span>
            <b id="posSubtot" style="font-size:16px;">LKR 0.00</b>
          </div>

          <!-- Bill Discount Input Field -->
          <div class="discount-field-row">
            <div style="display:flex; flex-direction:column;">
              <span style="font-size:13px; font-weight:700;">${t('billDiscount')}</span>
              <small class="muted" style="font-size:10.5px;">Press Shift to Focus · Enter moves to Cash ↵</small>
            </div>
            <input id="posDiscount" type="number" min="0" step="1" value="0" placeholder="0">
          </div>

          <!-- Massive High-Contrast Grand Total Banner -->
          <div class="total-payable-banner">
            <div>
              <div class="total-banner-label">${t('total')}</div>
              <small style="font-size:10px; color:#a5b4fc;">Net Payable Amount</small>
            </div>
            <div class="total-banner-amount" id="tot">LKR 0.00</div>
          </div>

          <!-- Payment Method Selector: Cash vs Card -->
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div class="pay-method-toggle">
              <button type="button" class="pay-method-btn active" data-meth="Cash">
                💵 ${t('cash')}
              </button>
              <button type="button" class="pay-method-btn" data-meth="Card">
                💳 ${t('card')}
              </button>
            </div>
          </div>

          <!-- Cash Received Inputs (Only visible in Cash mode) -->
          <div id="cashFieldsWrap" style="display:flex; flex-direction:column; gap:8px;">
            <div class="cash-received-box">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="field-label" style="font-weight:800;">${t('cashReceived')} (LKR) *</span>
                <small class="muted" style="font-size:11px;">Press Enter to Complete ↵</small>
              </div>
              <input id="paid" type="text" inputmode="decimal" placeholder="0.00" autocomplete="off">
            </div>

            <div class="quick-cash-row">
              <button type="button" class="quick-cash-btn" data-add="500">+500</button>
              <button type="button" class="quick-cash-btn" data-add="1000">+1,000</button>
              <button type="button" class="quick-cash-btn" data-add="5000">+5,000</button>
              <button type="button" class="quick-cash-btn" id="qcExact">${t('exact')}</button>
            </div>

            <!-- Dynamic Balance / Change Status -->
            <div id="balanceBadge" class="balance-status-badge exact-or-change">
              <span>${t('balance')}</span>
              <b id="bal" style="font-size:16px;">LKR 0.00</b>
            </div>
          </div>

          <!-- Card Ready Notification (Only visible in Card mode) -->
          <div id="cardFieldWrap" class="pay-card-indicator hide">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <div>
              <div style="font-weight:800;">${t('cardReady')}</div>
              <small style="font-size:10.5px; opacity:0.85;">Charge exact total on card terminal and press Complete Sale.</small>
            </div>
          </div>

          <!-- Complete Sale Button -->
          <button id="pay" class="btn btn-primary btn-lg btn-block" style="font-size:16px; font-weight:800; padding:14px; border-radius:12px;">
            ✓ ${t('checkout')} (Enter)
          </button>
        </div>
      </aside>
    </div>
  `;

  const getVisibleItems = () => {
    const q = ($('#q')?.value || '').toLowerCase().trim();
    return items.filter(i => (cat === 'All' || i.Category === cat) && (i.Name + ' ' + (i.Barcode || '') + ' ' + i.Category).toLowerCase().includes(q));
  };

  const updateTileFocus = () => {
    const tiles = document.querySelectorAll('.item-tile');
    tiles.forEach((el, idx) => {
      if (isNavigatingGrid && idx === selectedTileIndex) {
        el.classList.add('active-keyboard-tile');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        el.classList.remove('active-keyboard-tile');
      }
    });
  };

  const drawGrid = () => {
    const cats = ['All', ...new Set(items.map(i => i.Category).filter(Boolean))];
    $('#cats').innerHTML = cats.map(c => `
      <button class="cat-chip ${c === cat ? 'on' : ''}" data-c="${esc(c)}">
        ${c === 'All' ? t('all') : esc(c)}
      </button>
    `).join('');

    const visible = getVisibleItems();
    if (selectedTileIndex >= visible.length) selectedTileIndex = Math.max(0, visible.length - 1);

    $('#grid').innerHTML = visible.map((i, idx) => `
      <div class="item-tile ${i.Stock <= 0 ? 'out-of-stock' : ''} ${isNavigatingGrid && idx === selectedTileIndex ? 'active-keyboard-tile' : ''}" 
           style="--cat-hue:${hue(i.Category)}" 
           data-id="${i.Id}" 
           data-idx="${idx}">
        <span class="tile-enter-badge">↵ Add</span>

        <div class="tile-img-box">
          ${i.ImageUrl ? `
            <img src="${esc(i.ImageUrl)}" class="tile-food-img" alt="${esc(i.Name)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="tile-img-fallback hide" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 40%);">
              <span>${esc(i.Name.slice(0, 2).toUpperCase())}</span>
            </div>
          ` : `
            <div class="tile-img-fallback" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 40%);">
              <span>${esc(i.Name.slice(0, 2).toUpperCase())}</span>
            </div>
          `}
        </div>

        <div>
          <div class="tile-name">${esc(i.Name)}</div>
          <div class="tile-cat-badge">${esc(i.Category || 'General')}</div>
        </div>
        <div class="tile-bottom">
          <span class="tile-price">${fmt(i.Price)}</span>
          <span class="tile-stock ${i.Stock <= 5 ? 'low' : ''}">${t('stock')}: ${i.Stock}</span>
        </div>
      </div>
    `).join('') || `
      <div class="muted" style="grid-column:1/-1; text-align:center; padding:40px;">
        No products found matching your search.
      </div>
    `;
  };

  const calcBal = () => {
    const tot = getTotal();
    const paidInput = $('#paid');
    const badge = $('#balanceBadge');

    if (posPaymentMethod === 'Card') {
      paidInput.value = tot.toFixed(2);
      $('#bal').textContent = 'LKR 0.00';
      badge.className = 'balance-status-badge exact-or-change';
      return;
    }

    const p = parseFloat(paidInput.value);
    if (isNaN(p) || !paidInput.value.trim()) {
      $('#bal').textContent = '—';
      badge.className = 'balance-status-badge exact-or-change';
    } else if (p >= tot) {
      $('#bal').textContent = fmt(p - tot);
      badge.className = 'balance-status-badge exact-or-change';
    } else {
      $('#bal').textContent = t('shortBy') + ' ' + fmt(tot - p);
      badge.className = 'balance-status-badge short';
    }
  };

  const drawCart = (lastAddedId = null) => {
    const sub = getSubtotal();
    const tot = getTotal();

    $('#cartCountPill').textContent = `${cart.length} items (${cart.reduce((s, l) => s + l.qty, 0)} pcs)`;

    $('#lines').innerHTML = cart.map((l, i) => `
      <div class="cart-line-card ${l.id === lastAddedId ? 'newly-added' : ''}" data-idx="${i}">
        <div class="cart-line-top">
          <div>
            <div class="cart-line-name">${esc(l.name)}</div>
            <div class="cart-line-meta">@ LKR ${l.price.toFixed(2)} · In Stock: ${l.stock}</div>
          </div>
          <button type="button" class="cart-line-del" data-rm="${i}" title="Remove item">✕</button>
        </div>

        <div class="cart-line-controls">
          <div class="qty-stepper">
            <button type="button" class="qty-step-btn" data-step="-1" data-i="${i}">−</button>
            <input type="number" min="1" max="${l.stock}" value="${l.qty}" class="qty-input-box" data-i="${i}" data-f="qty">
            <button type="button" class="qty-step-btn" data-step="1" data-i="${i}">+</button>
          </div>

          <div class="cart-line-disc-wrap">
            <span>Disc %:</span>
            <input type="number" min="0" max="100" value="${l.disc || 0}" class="cart-line-disc-input" data-i="${i}" data-f="disc">
          </div>

          <div class="cart-line-total">LKR ${(l.price * l.qty * (1 - (l.disc || 0) / 100)).toFixed(2)}</div>
        </div>
      </div>
    `).join('') || `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <span style="font-size:14px; font-weight:800;">Bill is currently empty</span>
        <small style="color:var(--text-muted);">Press F1 to search or use Arrow Keys to select items</small>
      </div>
    `;

    $('#posSubtot').textContent = fmt(sub);
    $('#tot').textContent = fmt(tot);
    calcBal();

    if (lastAddedId) {
      const addedEl = $('#lines .cart-line-card.newly-added');
      if (addedEl) addedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  };

  const add = id => {
    const it = items.find(i => i.Id === id);
    if (!it) return;
    const l = cart.find(c => c.id === id);
    if ((l ? l.qty : 0) + 1 > it.Stock) return toast(t('notEnough'), 1);

    if (l) {
      l.qty++;
    } else {
      cart.push({ id, name: it.Name, price: +it.Price, qty: 1, disc: 0, stock: it.Stock });
    }
    drawCart(id);
  };

  const togglePrint = () => {
    posAutoPrint = !posAutoPrint;
    localStorage.setItem('kade_pos_autoprint', posAutoPrint ? '1' : '0');
    const btn = $('#posPrintToggle');
    const txt = $('#posPrintToggleText');
    if (btn && txt) {
      btn.className = `print-toggle-btn ${posAutoPrint ? 'active' : ''}`;
      txt.textContent = posAutoPrint ? t('printOn') : t('printOff');
    }
    toast(posAutoPrint ? 'Receipt Auto-Print Enabled' : 'Receipt Auto-Print Disabled');
  };

  $('#posPrintToggle').onclick = togglePrint;

  // Payment Method Switcher (Cash vs Card)
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.pay-method-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      posPaymentMethod = btn.dataset.meth;
      if (posPaymentMethod === 'Card') {
        $('#cashFieldsWrap').classList.add('hide');
        $('#cardFieldWrap').classList.remove('hide');
      } else {
        $('#cashFieldsWrap').classList.remove('hide');
        $('#cardFieldWrap').classList.add('hide');
      }
      calcBal();
    };
  });

  // Filter numeric cash input
  $('#paid').oninput = e => {
    // Only allow numbers and decimal point
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = e.target.value.split('.');
    if (parts.length > 2) e.target.value = parts[0] + '.' + parts.slice(1).join('');
    calcBal();
  };

  $('#posDiscount').oninput = () => {
    $('#tot').textContent = fmt(getTotal());
    calcBal();
  };

  const checkout = async () => {
    if (!cart.length) return toast(t('cartEmpty'), 1);
    const tot = getTotal();
    const paidInput = $('#paid');
    const rawPaid = paidInput.value.trim();

    if (posPaymentMethod === 'Cash') {
      const p = parseFloat(rawPaid);
      if (!rawPaid || isNaN(p) || p < tot) {
        paidInput.classList.remove('input-shake-error');
        void paidInput.offsetWidth;
        paidInput.classList.add('input-shake-error');
        paidInput.focus();
        paidInput.select();
        toast(t('cashRequiredAlert') + ` (LKR ${tot.toFixed(2)})`, 1);
        return;
      }
    }

    const paid = posPaymentMethod === 'Card' ? tot : parseFloat(rawPaid);
    const disc = getDiscount();

    try {
      const r = await call('sales:checkout', {
        lines: cart.map(l => ({ id: l.id, qty: l.qty, disc: l.disc })),
        paid: isNaN(paid) ? tot : paid,
        paymentMethod: posPaymentMethod,
        billDiscount: disc
      });
      cart = [];
      receipt(r);
      vPos();
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#q').oninput = () => {
    selectedTileIndex = 0;
    drawGrid();
  };

  $('#cats').onclick = e => {
    const b = e.target.closest('button');
    if (b) {
      cat = b.dataset.c;
      selectedTileIndex = 0;
      drawGrid();
    }
  };

  $('#grid').onclick = e => {
    const b = e.target.closest('.item-tile');
    if (b) add(+b.dataset.id);
  };

  // Cart event delegation (Steppers, quantity input, discount, deletion)
  $('#lines').onclick = e => {
    const stepBtn = e.target.closest('[data-step]');
    if (stepBtn) {
      const idx = +stepBtn.dataset.i;
      const step = +stepBtn.dataset.step;
      const l = cart[idx];
      if (l) {
        const nextQty = l.qty + step;
        if (nextQty <= 0) {
          cart.splice(idx, 1);
        } else if (nextQty <= l.stock) {
          l.qty = nextQty;
        } else {
          toast(t('notEnough'), 1);
        }
        drawCart();
      }
      return;
    }

    const delBtn = e.target.closest('[data-rm]');
    if (delBtn) {
      cart.splice(+delBtn.dataset.rm, 1);
      drawCart();
    }
  };

  $('#lines').onchange = e => {
    const { i, f } = e.target.dataset;
    if (i == null) return;
    const l = cart[i];
    if (!l) return;
    const v = Math.max(f === 'qty' ? 1 : 0, parseFloat(e.target.value) || 0);
    if (f === 'qty') l.qty = Math.min(Math.floor(v), l.stock);
    else l.disc = Math.min(v, 100);
    drawCart();
  };

  $('#pay').onclick = checkout;
  $('#clr').onclick = () => { cart = []; drawCart(); };

  document.querySelectorAll('.quick-cash-btn[data-add]').forEach(btn => {
    btn.onclick = () => {
      const addVal = +btn.dataset.add;
      const curr = parseFloat($('#paid').value) || 0;
      $('#paid').value = (curr + addVal).toFixed(2);
      calcBal();
    };
  });

  $('#qcExact').onclick = () => {
    $('#paid').value = getTotal().toFixed(2);
    calcBal();
  };

  // Keyboard Navigation Handler
  window.onkeydown = e => {
    if (tab !== 'pos' || $('.modal-backdrop')) return;

    // F1: Focus Search Input
    if (e.key === 'F1') {
      e.preventDefault();
      const qEl = $('#q');
      if (qEl) {
        qEl.focus();
        qEl.select();
        isNavigatingGrid = false;
        updateTileFocus();
      }
      return;
    }

    // F8: Toggle Print
    if (e.key === 'F8') {
      e.preventDefault();
      togglePrint();
      return;
    }

    // Shift Key: Advance from item selection directly to Bill Discount
    if (e.key === 'Shift') {
      if (cart.length > 0) {
        e.preventDefault();
        isNavigatingGrid = false;
        updateTileFocus();
        const discEl = $('#posDiscount');
        if (discEl) {
          discEl.focus();
          discEl.select();
        }
      } else {
        toast(t('cartEmpty'), 1);
      }
      return;
    }

    // If focus is in Cash Received: Enter attempts checkout
    if (document.activeElement === $('#paid')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkout();
        return;
      }
    }

    // If focus is in Bill Discount: Enter moves to Cash Received
    if (document.activeElement === $('#posDiscount')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (posPaymentMethod === 'Card') {
          checkout();
        } else {
          const paidEl = $('#paid');
          if (paidEl) {
            paidEl.focus();
            paidEl.select();
          }
        }
        return;
      }
    }

    // If focus is in Search Box:
    if (document.activeElement === $('#q')) {
      const qVal = $('#q').value.trim();

      if (e.key === 'Enter') {
        e.preventDefault();
        // 1. Exact barcode match
        const exactBarcode = items.find(it => it.Barcode && it.Barcode === qVal);
        if (exactBarcode) {
          add(exactBarcode.Id);
          $('#q').value = '';
          drawGrid();
          return;
        }

        // 2. First matching item
        const visible = getVisibleItems();
        if (qVal && visible.length) {
          add(visible[0].Id);
          $('#q').value = '';
          drawGrid();
          return;
        }

        // 3. Search is empty -> Advance directly to Bill Discount
        if (!qVal) {
          if (cart.length > 0) {
            const discEl = $('#posDiscount');
            if (discEl) {
              discEl.focus();
              discEl.select();
            }
          } else {
            toast(t('cartEmpty'), 1);
          }
          return;
        }
      }

      // Arrow Down/Right moves focus into products grid
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const visible = getVisibleItems();
        if (visible.length) {
          e.preventDefault();
          $('#q').blur();
          isNavigatingGrid = true;
          selectedTileIndex = 0;
          updateTileFocus();
        }
        return;
      }
    }

    // If navigating products grid with Arrow Keys:
    if (isNavigatingGrid && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      const visible = getVisibleItems();
      if (!visible.length) return;

      const gridEl = $('#grid');
      const cols = Math.max(1, Math.floor((gridEl?.clientWidth || 600) / 190)) || 3;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        selectedTileIndex = Math.min(selectedTileIndex + 1, visible.length - 1);
        updateTileFocus();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        selectedTileIndex = Math.max(selectedTileIndex - 1, 0);
        updateTileFocus();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedTileIndex = Math.min(selectedTileIndex + cols, visible.length - 1);
        updateTileFocus();
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedTileIndex < cols) {
          isNavigatingGrid = false;
          const qEl = $('#q');
          if (qEl) { qEl.focus(); qEl.select(); }
          updateTileFocus();
        } else {
          selectedTileIndex = Math.max(selectedTileIndex - cols, 0);
          updateTileFocus();
        }
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        const it = visible[selectedTileIndex];
        if (it) {
          add(it.Id);
        }
        return;
      }

      if (e.key === 'Escape') {
        isNavigatingGrid = false;
        const qEl = $('#q');
        if (qEl) qEl.focus();
        updateTileFocus();
        return;
      }
    }
  };

  drawGrid();
  drawCart();
}

function receipt(r) {
  const settings = r.shopSettings || cachedReceiptSettings || {};

  // Update dedicated thermal print container
  const printArea = document.getElementById('printableReceiptArea');
  if (printArea) {
    printArea.innerHTML = renderStandardReceiptHtml(r, settings);
  }

  // If Auto-Print is enabled, trigger printer immediately
  if (posAutoPrint) {
    window.print();
  }

  // Display receipt modal with live thermal layout
  const m = modal(`
    <div style="display:flex; flex-direction:column; align-items:center;">
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:12px;">
        <h3 class="modal-title" style="margin:0;">🧾 ${t('checkout')} Completed</h3>
        <button class="modal-close-x" id="rc">✕</button>
      </div>

      <div style="width:100%; max-height:480px; overflow-y:auto; padding:4px;">
        ${renderStandardReceiptHtml(r, settings)}
      </div>

      <div class="modal-actions" style="margin-top:16px; width:100%;">
        <button class="btn btn-ghost" id="rcBtn">${t('close')} (Enter)</button>
        <button class="btn btn-primary" id="rpBtn">🖨️ ${t('print')}</button>
      </div>
    </div>
  `, true);

  const closeIt = () => {
    m.close();
    const qEl = $('#q');
    if (qEl) qEl.focus();
  };

  m.querySelector('#rc').onclick = closeIt;
  m.querySelector('#rcBtn').onclick = closeIt;
  m.querySelector('#rpBtn').onclick = () => window.print();

  const onKey = e => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      window.removeEventListener('keydown', onKey);
      closeIt();
    }
  };
  window.addEventListener('keydown', onKey);
}

/* ==========================================================================
   VIEW: RECEIPT CUSTOMIZATION & LIVE THERMAL PREVIEW
   ========================================================================== */
async function vReceiptSettings() {
  const s = await call('settings:getReceipt');
  cachedReceiptSettings = s;

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('receiptSettings')}</h2>
        <span class="muted small">Customize store branding, address, phone numbers & live thermal preview</span>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-ghost" id="btnTestPrint">🖨️ ${t('printTest')}</button>
        <button class="btn btn-primary" id="btnSaveReceipt">${t('saveReceiptSettings')}</button>
      </div>
    </div>

    <div class="receipt-editor-layout">
      <!-- Left: Configuration Form -->
      <div class="panel-card" style="display:flex; flex-direction:column; gap:14px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <label class="field-wrap">
            <span class="field-label">${t('shopName')}</span>
            <input id="rShopName" value="${esc(s.shopName)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('shopTagline')}</span>
            <input id="rShopTagline" value="${esc(s.shopTagline)}">
          </label>
          <label class="field-wrap" style="grid-column: 1 / -1;">
            <span class="field-label">${t('shopAddress')}</span>
            <input id="rShopAddress" value="${esc(s.shopAddress)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('shopPhone')}</span>
            <input id="rShopPhone" value="${esc(s.shopPhone)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('shopTaxNo')}</span>
            <input id="rShopTaxNo" value="${esc(s.shopTaxNo)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('receiptHeader')}</span>
            <input id="rReceiptHeader" value="${esc(s.receiptHeader)}">
          </label>
          <label class="field-wrap">
            <span class="field-label">${t('paperWidth')}</span>
            <select id="rPaperWidth">
              <option value="80mm" ${s.receiptPaperWidth === '80mm' ? 'selected' : ''}>80mm Standard Thermal Roll</option>
              <option value="58mm" ${s.receiptPaperWidth === '58mm' ? 'selected' : ''}>58mm Compact Thermal Roll</option>
            </select>
          </label>
          <label class="field-wrap" style="grid-column: 1 / -1;">
            <span class="field-label">${t('receiptFooter')}</span>
            <textarea id="rReceiptFooter" rows="2">${esc(s.receiptFooter)}</textarea>
          </label>
        </div>

        <label style="display:flex; align-items:center; gap:10px; cursor:pointer; padding:8px 0; border-top:1px solid var(--border-card);">
          <input type="checkbox" id="rAutoPrint" ${s.receiptAutoPrint === '1' ? 'checked' : ''} style="width:18px; height:18px;">
          <span style="font-weight:700; font-size:13px;">${t('autoPrintReceipt')}</span>
        </label>
      </div>

      <!-- Right: Live Simulated Thermal Receipt Preview -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
        <span class="small muted" style="font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">${t('livePreview')}</span>
        <div id="liveThermalPreviewWrap"></div>
      </div>
    </div>
  `;

  const getFormCfg = () => ({
    shopName: $('#rShopName').value,
    shopTagline: $('#rShopTagline').value,
    shopAddress: $('#rShopAddress').value,
    shopPhone: $('#rShopPhone').value,
    shopTaxNo: $('#rShopTaxNo').value,
    receiptHeader: $('#rReceiptHeader').value,
    receiptFooter: $('#rReceiptFooter').value,
    receiptPaperWidth: $('#rPaperWidth').value,
    receiptAutoPrint: $('#rAutoPrint').checked ? '1' : '0'
  });

  const sampleReceiptData = {
    invoiceNo: 'INV-000042',
    createdAt: new Date().toISOString(),
    cashier: me?.fullName || 'Cashier User',
    lines: [
      { name: 'Chicken Kottu', qty: 2, price: 700, disc: 0, total: 1400 },
      { name: 'Coca-Cola 400ml', qty: 1, price: 180, disc: 0, total: 180 },
      { name: 'Fish Cutlet', qty: 2, price: 90, disc: 0, total: 180 }
    ],
    subtotal: 1760,
    discount: 60,
    total: 1700,
    paid: 2000,
    balance: 300,
    paymentMethod: 'Cash'
  };

  const updatePreview = () => {
    const cfg = getFormCfg();
    $('#liveThermalPreviewWrap').innerHTML = renderStandardReceiptHtml(sampleReceiptData, cfg);
  };

  updatePreview();

  $('#rShopName').oninput = updatePreview;
  $('#rShopTagline').oninput = updatePreview;
  $('#rShopAddress').oninput = updatePreview;
  $('#rShopPhone').oninput = updatePreview;
  $('#rShopTaxNo').oninput = updatePreview;
  $('#rReceiptHeader').oninput = updatePreview;
  $('#rReceiptFooter').oninput = updatePreview;
  $('#rPaperWidth').onchange = updatePreview;
  $('#rAutoPrint').onchange = updatePreview;

  $('#btnTestPrint').onclick = () => {
    const cfg = getFormCfg();
    const container = document.getElementById('printableReceiptArea');
    if (container) {
      container.innerHTML = renderStandardReceiptHtml(sampleReceiptData, cfg);
      window.print();
    }
  };

  $('#btnSaveReceipt').onclick = async () => {
    try {
      const cfg = getFormCfg();
      await call('settings:saveReceipt', cfg);
      cachedReceiptSettings = cfg;
      posAutoPrint = cfg.receiptAutoPrint === '1';
      localStorage.setItem('kade_pos_autoprint', posAutoPrint ? '1' : '0');
      toast(t('saved'));
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

/* ==========================================================================
   VIEW 3: INVENTORY (ITEMS)
   ========================================================================== */
async function vItems() {
  items = await call('items:list');
  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('items')}</h2>
        <span class="muted small">${items.length} products listed</span>
      </div>
      <div style="display:flex; gap:10px;">
        <input id="s" placeholder="${t('searchItems')}" style="width:260px;">
        <button class="btn btn-primary" id="add">${t('addItem')}</button>
      </div>
    </div>
    <div class="table-card" id="tbl"></div>
  `;

  const draw = () => {
    const q = $('#s').value.toLowerCase();
    const rows = items.filter(i => (i.Name + i.Category + (i.Barcode || '')).toLowerCase().includes(q));
    $('#tbl').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>${t('name')}</th>
            <th>${t('category')}</th>
            <th>${t('price')}</th>
            <th>${t('stock')}</th>
            <th>${t('barcode')}</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(i => `
            <tr>
              <td>
                <div style="display:flex; align-items:center; gap:12px;">
                  <img src="${esc(i.ImageUrl || 'assets/food/chicken-fried-rice.jpg')}" 
                       class="table-food-thumb" 
                       alt="${esc(i.Name)}" 
                       loading="lazy" 
                       onerror="this.src='assets/food/chicken-fried-rice.jpg'">
                  <div>
                    <b>${esc(i.Name)}</b>
                    ${i.ImageUrl ? `<small style="display:block; color:#10b981; font-size:10px; font-weight:700;">✓ Offline Local Photo</small>` : ''}
                  </div>
                </div>
              </td>
              <td><span class="pill info">${esc(i.Category)}</span></td>
              <td><b>${fmt(i.Price)}</b></td>
              <td><span class="pill ${i.Stock <= 5 ? 'no' : 'ok'}">${i.Stock}</span></td>
              <td><code class="muted">${esc(i.Barcode || '—')}</code></td>
              <td style="text-align:right;">
                <button class="btn btn-sm btn-ghost" data-a="e" data-id="${i.Id}">${t('edit')}</button>
                <button class="btn btn-sm btn-danger" data-a="d" data-id="${i.Id}">${t('del')}</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    `;
  };

  draw();
  $('#s').oninput = draw;
  $('#add').onclick = () => itemForm();
  $('#tbl').onclick = async e => {
    const b = e.target.closest('button');
    if (!b) return;
    const id = +b.dataset.id;
    if (b.dataset.a === 'e') itemForm(items.find(i => i.Id === id));
    if (b.dataset.a === 'd' && confirm(t('confirmDel'))) {
      try {
        await call('items:delete', { id });
        toast(t('deleted'));
        vItems();
      } catch (x) {
        toast(x.message, 1);
      }
    }
  };
}

const itemForm = (it = {}) => {
  const cats = [...new Set(items.map(i => i.Category).filter(Boolean))];
  let currentImageUrl = it.ImageUrl || '';

  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">${it.Id ? t('editItem') : t('newItem')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="itemFormModal" class="auth-form" style="gap:12px;">
      <label class="field-wrap">
        <span class="field-label">${t('name')} *</span>
        <input id="formItemName" value="${esc(it.Name || '')}" placeholder="e.g. Paratha, 100ml Sting drink, Chicken Kottu" required autofocus autocomplete="off">
        <small class="muted" style="font-size:11px;">Typing will automatically detect matching food & beverage photos</small>
      </label>

      <!-- Auto-Matched Image Live Preview Box -->
      <div id="imagePreviewContainer" class="auto-match-preview-card ${currentImageUrl ? '' : 'hide'}">
        <img id="formPreviewImg" src="${esc(currentImageUrl || 'assets/food/chicken-fried-rice.jpg')}" class="auto-match-img" onerror="this.src='assets/food/chicken-fried-rice.jpg'">
        <div style="flex:1;">
          <span class="auto-match-badge" id="previewBadgeText">✓ Offline Local Photo</span>
          <b id="previewFoodTitle" style="display:block; font-size:13px; margin:2px 0;">${esc(it.Name || 'Food Item')}</b>
          <small class="muted" id="previewFoodSub" style="font-size:11px;">Ready to display on POS terminal cards (Offline)</small>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
        <label class="field-wrap">
          <span class="field-label">${t('category')} *</span>
          <input id="formItemCategory" list="catDatalist" value="${esc(it.Category || '')}" placeholder="e.g. Beverages, Fried Rice" required>
          <datalist id="catDatalist">
            ${cats.map(c => `<option value="${esc(c)}">`).join('')}
          </datalist>
        </label>

        <label class="field-wrap">
          <span class="field-label">${t('priceLkr')} *</span>
          <input id="formItemPrice" type="number" min="0" step="0.01" value="${it.Price != null ? it.Price : ''}" placeholder="0.00" required>
        </label>

        <label class="field-wrap">
          <span class="field-label">${t('stockQty')} *</span>
          <input id="formItemStock" type="number" min="0" step="1" value="${it.Stock != null ? it.Stock : 50}" placeholder="0" required>
        </label>

        <label class="field-wrap">
          <span class="field-label">${t('barcode')}</span>
          <input id="formItemBarcode" value="${esc(it.Barcode || '')}" placeholder="Optional barcode / SKU">
        </label>
      </div>

      <!-- Advanced / Custom Image URL Field -->
      <details style="font-size:12px; margin-top:2px;">
        <summary style="cursor:pointer; color:var(--brand); font-weight:700;">Custom Image URL (Optional override)</summary>
        <div style="margin-top:8px;">
          <input id="formItemImageUrl" value="${esc(currentImageUrl)}" placeholder="Paste custom web image URL (https://…)" style="font-size:12px;">
        </div>
      </details>

      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('save')}</button>
      </div>
    </form>
  `, true);

  const nameInput = m.querySelector('#formItemName');
  const catInput = m.querySelector('#formItemCategory');
  const imgInput = m.querySelector('#formItemImageUrl');
  const previewBox = m.querySelector('#imagePreviewContainer');
  const previewImg = m.querySelector('#formPreviewImg');
  const previewTitle = m.querySelector('#previewFoodTitle');
  const previewBadge = m.querySelector('#previewBadgeText');

  const onNameChange = () => {
    const val = nameInput.value.trim();
    if (!val) {
      if (!imgInput.value.trim()) previewBox.classList.add('hide');
      return;
    }

    if (typeof matchFoodCatalogItem === 'function') {
      const match = matchFoodCatalogItem(val);
      if (match) {
        currentImageUrl = match.imageUrl;
        imgInput.value = match.imageUrl;
        previewImg.src = match.imageUrl;
        previewTitle.textContent = match.name;
        previewBadge.textContent = '✓ Auto-Matched Photo';
        previewBox.classList.remove('hide');
        if (!catInput.value.trim()) {
          catInput.value = match.category;
        }
        return;
      }
    }

    if (imgInput.value.trim()) {
      previewBox.classList.remove('hide');
      previewImg.src = imgInput.value.trim();
      previewTitle.textContent = val;
      previewBadge.textContent = 'Custom Photo';
    } else {
      previewBox.classList.add('hide');
    }
  };

  nameInput.oninput = onNameChange;

  imgInput.oninput = () => {
    const url = imgInput.value.trim();
    if (url) {
      currentImageUrl = url;
      previewImg.src = url;
      previewTitle.textContent = nameInput.value.trim() || 'Custom Food';
      previewBadge.textContent = 'Custom Photo URL';
      previewBox.classList.remove('hide');
    } else {
      currentImageUrl = '';
      previewBox.classList.add('hide');
    }
  };

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#itemFormModal').onsubmit = async e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const category = catInput.value.trim();
    const price = parseFloat(m.querySelector('#formItemPrice').value) || 0;
    const stock = parseInt(m.querySelector('#formItemStock').value) || 0;
    const barcode = m.querySelector('#formItemBarcode').value.trim();
    const imageUrl = imgInput.value.trim() || currentImageUrl || null;

    try {
      await call('items:save', {
        id: it.Id,
        name,
        category,
        price,
        stock,
        barcode,
        imageUrl
      });
      m.close();
      toast(t('saved'));
      vItems();
    } catch (err) {
      toast(err.message, 1);
    }
  };
};

/* ==========================================================================
   VIEW 4: GRN RECEIVING (GOODS RECEIVED NOTE)
   ========================================================================== */
async function vGrn() {
  const grns = await call('grn:list');
  const totalReceived = grns.reduce((s, g) => s + Number(g.TotalCost || 0), 0);

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('grn')}</h2>
        <span class="muted small">Beverages Batch Tracking & Goods Inward Receipts</span>
      </div>
      <div style="display:flex; gap:10px;">
        <input id="grnSearch" placeholder="Search supplier or GRN #…" style="width:240px;">
        <button class="btn btn-primary" id="btnNewGrn">${t('newGrn')}</button>
      </div>
    </div>

    <div class="top-stats-row" style="margin-bottom:20px;">
      <div class="fin-stat-card">
        <div class="stat-text-col">
          <span class="stat-label-title">Total GRN Receipts</span>
          <div class="stat-main-number purple">${grns.length}</div>
          <span class="stat-trend-sub">Completed inward shipments</span>
        </div>
      </div>
      <div class="fin-stat-card">
        <div class="stat-text-col">
          <span class="stat-label-title">Total Purchases Value</span>
          <div class="stat-main-number green">${fmt(totalReceived)}</div>
          <span class="stat-trend-sub">Inventory purchases recorded</span>
        </div>
      </div>
    </div>

    <div class="table-card" id="grnTbl"></div>
  `;

  const drawGrnTable = () => {
    const q = ($('#grnSearch').value || '').toLowerCase();
    const rows = grns.filter(g => (g.GrnNo + g.Supplier + (g.InvoiceRef || '')).toLowerCase().includes(q));

    $('#grnTbl').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>${t('grnNo')}</th>
            <th>${t('supplier')}</th>
            <th>${t('invoiceRef')}</th>
            <th>${t('totalCost')}</th>
            <th>${t('itemsCount')}</th>
            <th>${t('receivedBy')}</th>
            <th>${t('createdAt')}</th>
            <th style="text-align:right;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(g => `
            <tr>
              <td><b>${esc(g.GrnNo)}</b></td>
              <td><span class="pill info">${esc(g.Supplier)}</span></td>
              <td><code class="muted">${esc(g.InvoiceRef || '—')}</code></td>
              <td><b>${fmt(g.TotalCost)}</b></td>
              <td>${g.ItemCount} items (${g.TotalQty} units)</td>
              <td><small class="muted">${esc(g.ReceivedBy)}</small></td>
              <td><small class="muted">${fd(g.CreatedAt)}</small></td>
              <td style="text-align:right;">
                <button class="btn btn-sm btn-ghost" data-view="${g.Id}">${t('viewGrn')}</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="8" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    `;
  };

  drawGrnTable();
  $('#grnSearch').oninput = drawGrnTable;
  $('#btnNewGrn').onclick = () => showNewGrnModal();
  $('#grnTbl').onclick = async e => {
    const b = e.target.closest('[data-view]');
    if (!b) return;
    showGrnDetailsModal(+b.dataset.view);
  };
}

async function showGrnDetailsModal(grnId) {
  try {
    const { grn, items } = await call('grn:get', { id: grnId });
    modal(`
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${esc(grn.GrnNo)}</h3>
          <small class="muted">${esc(grn.Supplier)} · ${fd(grn.CreatedAt)}</small>
        </div>
        <button class="modal-close-x" data-x>✕</button>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12.5px; margin: 10px 0;">
        <div><b>${t('supplier')}:</b> ${esc(grn.Supplier)}</div>
        <div><b>${t('invoiceRef')}:</b> ${esc(grn.InvoiceRef || '—')}</div>
        <div><b>${t('receivedBy')}:</b> ${esc(grn.ReceivedBy)}</div>
        <div><b>${t('totalCost')}:</b> <span style="color:var(--brand); font-weight:800;">${fmt(grn.TotalCost)}</span></div>
        ${grn.Notes ? `<div style="grid-column:1/-1;"><b>${t('notes')}:</b> ${esc(grn.Notes)}</div>` : ''}
      </div>

      <table style="width:100%; border:1px solid var(--border-card); border-radius:12px; margin-top:8px;">
        <thead>
          <tr>
            <th>${t('item')}</th>
            <th>Qty</th>
            <th>${t('unitCost')}</th>
            <th>${t('batchNo')}</th>
            <th>${t('expiryDate')}</th>
            <th style="text-align:right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(it => `
            <tr>
              <td><b>${esc(it.ItemName)}</b></td>
              <td>${it.Qty}</td>
              <td>${fmt(it.UnitCost)}</td>
              <td><code>${esc(it.BatchNo || '—')}</code></td>
              <td><small>${esc(it.ExpiryDate || '—')}</small></td>
              <td style="text-align:right;"><b>${fmt(it.LineTotal)}</b></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="modal-actions" style="margin-top:16px;">
        <button class="btn btn-ghost" data-x>${t('close')}</button>
        <button class="btn btn-primary" onclick="window.print()">${t('print')}</button>
      </div>
    `, true).querySelectorAll('[data-x]').forEach(el => el.onclick = () => el.closest('.modal-backdrop').remove());
  } catch (err) {
    toast(err.message, 1);
  }
}

async function showNewGrnModal() {
  const catalog = await call('items:list');
  if (!catalog.length) return toast('Please add products to inventory before receiving GRN', 1);

  const categories = ['All', ...new Set(catalog.map(c => c.Category).filter(Boolean))];
  const pad = n => String(n).padStart(2, '0');
  const d = new Date();
  const defaultGrnNo = `GRN-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Math.floor(100 + Math.random()*900)}`;

  let rows = [];
  // Preload first item
  rows.push({
    itemId: catalog[0].Id,
    name: catalog[0].Name,
    category: catalog[0].Category,
    currentStock: catalog[0].Stock,
    qty: 10,
    unitCost: Math.round(catalog[0].Price * 0.75),
    batchNo: `BCH-${d.getFullYear()}${pad(d.getMonth()+1)}-01`,
    expiryDate: ''
  });

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">${t('newGrn')}</h3>
        <small class="muted">Receive stock for Beverages, Groceries, Bakery & all inventory categories</small>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="grnForm" class="auth-form" style="gap:14px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <label class="field-wrap">
          <span class="field-label">${t('grnNo')}</span>
          <input name="grnNo" value="${defaultGrnNo}" required>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('supplier')}</span>
          <input name="supplier" placeholder="e.g. Ceylon Cold Stores / Elephant House / Distributor" required>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('invoiceRef')}</span>
          <input name="invoiceRef" placeholder="e.g. INV-99201">
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('notes')}</span>
          <input name="notes" placeholder="Delivery notes / Vehicle No / Batch info">
        </label>
      </div>

      <!-- Searchable Product Selector with Category Filter -->
      <div style="background:var(--bg-input); padding:12px; border-radius:12px; border:1px solid var(--border-card); display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b style="font-size:13px;">🔍 Add Products to GRN (Search Across All Categories)</b>
          <button type="button" class="btn btn-sm" id="grnManualAddBtn">+ Add Row</button>
        </div>
        <div class="grn-product-search-box">
          <select id="grnCatFilter" style="width:160px; padding:8px 10px; font-weight:700;">
            ${categories.map(c => `<option value="${esc(c)}">${c === 'All' ? t('allCategories') : esc(c)}</option>`).join('')}
          </select>
          <div style="position:relative; flex:1;">
            <input id="grnItemSearch" placeholder="${t('selectProduct')}" autocomplete="off" style="width:100%; padding:8px 12px;">
            <div id="grnSuggestList" class="grn-suggest-dropdown hide"></div>
          </div>
        </div>
      </div>

      <!-- Inward Items Table -->
      <div style="overflow-x:auto; max-height:260px; border:1px solid var(--border-card); border-radius:12px;">
        <table style="width:100%; font-size:12.5px; border-collapse:collapse;">
          <thead>
            <tr style="background:var(--bg-input); text-align:left;">
              <th style="padding:8px 10px;">Item & Category</th>
              <th style="padding:8px 6px; text-align:center;">Current</th>
              <th style="padding:8px 6px; width:75px; text-align:center;">Inward Qty</th>
              <th style="padding:8px 6px; width:90px;">Unit Cost</th>
              <th style="padding:8px 6px; width:110px;">Batch / GRN #</th>
              <th style="padding:8px 6px; width:125px;">Expiry Date</th>
              <th style="padding:8px 6px; text-align:right;">Line Total</th>
              <th style="padding:8px 6px; width:30px;"></th>
            </tr>
          </thead>
          <tbody id="grnTbody"></tbody>
        </table>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:var(--bg-input); border-radius:12px;">
        <span style="font-weight:700;">${t('totalCost')}:</span>
        <b id="grnTotalCost" style="font-size:20px; color:var(--brand);">LKR 0.00</b>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('saveGrn')}</button>
      </div>
    </form>
  `, true);

  const renderRows = () => {
    const tbody = m.querySelector('#grnTbody');
    if (!tbody) return;

    tbody.innerHTML = rows.map((r, i) => `
      <tr style="border-bottom:1px solid var(--border-card);">
        <td style="padding:8px 10px;">
          <b>${esc(r.name)}</b>
          <div style="font-size:10.5px; color:var(--text-muted);">${esc(r.category || 'General')}</div>
        </td>
        <td style="padding:8px 6px; text-align:center; color:var(--text-muted); font-size:11.5px;">
          ${r.currentStock}
        </td>
        <td style="padding:8px 6px;">
          <input type="number" min="1" value="${r.qty}" data-idx="${i}" data-f="qty" style="padding:5px; text-align:center; width:100%;">
        </td>
        <td style="padding:8px 6px;">
          <input type="number" min="0" step="0.01" value="${r.unitCost}" data-idx="${i}" data-f="unitCost" style="padding:5px; width:100%;">
        </td>
        <td style="padding:8px 6px;">
          <input type="text" value="${esc(r.batchNo)}" placeholder="Batch" data-idx="${i}" data-f="batchNo" style="padding:5px; width:100%;">
        </td>
        <td style="padding:8px 6px;">
          <input type="date" value="${esc(r.expiryDate)}" data-idx="${i}" data-f="expiryDate" style="padding:5px; width:100%;">
        </td>
        <td style="padding:8px 6px; text-align:right; font-weight:800; color:var(--brand);">
          ${fmt((+r.qty || 0) * (+r.unitCost || 0))}
        </td>
        <td style="padding:8px 6px; text-align:center;">
          <button type="button" class="btn-ghost" data-delrow="${i}" style="color:var(--bad); font-size:14px; cursor:pointer; border:0; padding:2px;">✕</button>
        </td>
      </tr>
    `).join('') || `<tr><td colspan="8" class="muted" style="text-align:center; padding:20px;">No items added yet. Search and select items above.</td></tr>`;

    const tot = rows.reduce((s, r) => s + (Number(r.qty) || 0) * (Number(r.unitCost) || 0), 0);
    m.querySelector('#grnTotalCost').textContent = fmt(tot);
  };

  renderRows();

  // Search and Autocomplete Logic
  const searchInput = m.querySelector('#grnItemSearch');
  const catFilter = m.querySelector('#grnCatFilter');
  const suggestList = m.querySelector('#grnSuggestList');

  const updateSuggestions = () => {
    const selCat = catFilter.value;
    const q = searchInput.value.toLowerCase().trim();

    const matches = catalog.filter(it => 
      (selCat === 'All' || it.Category === selCat) &&
      (it.Name + ' ' + (it.Barcode || '') + ' ' + it.Category).toLowerCase().includes(q)
    );

    if (!matches.length) {
      suggestList.innerHTML = `<div class="muted small" style="padding:10px 14px;">No products found</div>`;
      suggestList.classList.remove('hide');
      return;
    }

    suggestList.innerHTML = matches.slice(0, 15).map(it => `
      <div class="grn-suggest-item" data-item-id="${it.Id}">
        <div>
          <b>${esc(it.Name)}</b>
          <div style="font-size:11px; color:var(--text-muted);">${esc(it.Category)} · Stock: ${it.Stock} ${it.Barcode ? `· ${it.Barcode}` : ''}</div>
        </div>
        <div style="text-align:right;">
          <b style="color:var(--brand);">${fmt(it.Price)}</b>
          <span class="pill ok" style="font-size:10px; margin-left:6px;">+ Select</span>
        </div>
      </div>
    `).join('');
    suggestList.classList.remove('hide');
  };

  searchInput.oninput = updateSuggestions;
  searchInput.onfocus = updateSuggestions;
  catFilter.onchange = updateSuggestions;

  // Add selected item from autocomplete
  suggestList.onclick = e => {
    const itemEl = e.target.closest('[data-item-id]');
    if (!itemEl) return;
    const itId = +itemEl.dataset.itemId;
    const it = catalog.find(c => c.Id === itId);
    if (it) {
      rows.push({
        itemId: it.Id,
        name: it.Name,
        category: it.Category,
        currentStock: it.Stock,
        qty: 10,
        unitCost: Math.round(it.Price * 0.75),
        batchNo: `BCH-${d.getFullYear()}${pad(d.getMonth()+1)}-${String(rows.length + 1).padStart(2, '0')}`,
        expiryDate: ''
      });
      searchInput.value = '';
      suggestList.classList.add('hide');
      renderRows();
    }
  };

  // Close suggestions when clicking outside
  m.onclick = e => {
    if (!e.target.closest('.grn-product-search-box')) {
      suggestList.classList.add('hide');
    }
  };

  m.querySelector('#grnManualAddBtn').onclick = () => {
    const first = catalog[0];
    rows.push({
      itemId: first.Id,
      name: first.Name,
      category: first.Category,
      currentStock: first.Stock,
      qty: 10,
      unitCost: Math.round(first.Price * 0.75),
      batchNo: '',
      expiryDate: ''
    });
    renderRows();
  };

  m.querySelector('#grnTbody').oninput = e => {
    const { idx, f } = e.target.dataset;
    if (idx != null && f && rows[idx]) {
      rows[idx][f] = e.target.value;
      const tot = rows.reduce((s, r) => s + (Number(r.qty) || 0) * (Number(r.unitCost) || 0), 0);
      m.querySelector('#grnTotalCost').textContent = fmt(tot);
    }
  };

  m.querySelector('#grnTbody').onclick = e => {
    const del = e.target.closest('[data-delrow]');
    if (del) {
      rows.splice(+del.dataset.delrow, 1);
      renderRows();
    }
  };

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#grnForm').onsubmit = async e => {
    e.preventDefault();
    if (!rows.length) return toast('Please add at least one product row to receive', 1);

    const fd = new FormData(e.target);
    try {
      await call('grn:create', {
        grnNo: fd.get('grnNo'),
        supplier: fd.get('supplier'),
        invoiceRef: fd.get('invoiceRef'),
        notes: fd.get('notes'),
        items: rows.map(r => ({
          itemId: +r.itemId,
          qty: +r.qty || 1,
          unitCost: +r.unitCost || 0,
          batchNo: r.batchNo,
          expiryDate: r.expiryDate
        }))
      });
      m.close();
      toast(t('grnSaved'));
      vGrn();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

/* ==========================================================================
   VIEW 5: REPORTS & ANALYTICS
   ========================================================================== */
const REPORTS = {
  daily: ['daily', () => [[t('date'), r => r.Day], [t('bills'), r => r.Bills], [t('total'), r => fmt(r.Total)]]],
  items: ['itemwise', () => [[t('item'), r => esc(r.Item)], [t('qtySold'), r => r.Qty], [t('total'), r => fmt(r.Total)]]],
  cashiers: ['cashierwise', () => [[t('cashier'), r => esc(r.Cashier)], [t('bills'), r => r.Bills], [t('total'), r => fmt(r.Total)]]]
};

async function vReports() {
  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('reports')}</h2>
        <span class="muted small">Sales performance & cashier summaries</span>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <select id="rt" style="width:200px;">
          ${Object.entries(REPORTS).map(([k, v]) => `<option value="${k}">${t(v[0])}</option>`).join('')}
        </select>
        <input id="f" type="date" value="${today()}" style="width:140px;">
        <input id="t" type="date" value="${today()}" style="width:140px;">
        <button class="btn btn-primary" id="run">${t('run')}</button>
      </div>
    </div>
    <div class="table-card" id="out"></div>
  `;

  const run = async () => {
    try {
      const k = $('#rt').value;
      const cols = REPORTS[k][1]();
      const rows = await call('reports:' + k, { from: $('#f').value, to: $('#t').value });
      $('#out').innerHTML = `
        <table>
          <thead>
            <tr>${cols.map(c => `<th>${c[0]}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map(r => `<tr>${cols.map(c => `<td>${c[1](r)}</td>`).join('')}</tr>`).join('') || `<tr><td colspan="${cols.length}" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="${cols.length - 1}">${t('grand')}</td>
              <td>${fmt(rows.reduce((s, r) => s + Number(r.Total), 0))}</td>
            </tr>
          </tfoot>
        </table>
      `;
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#run').onclick = run;
  $('#rt').onchange = run;
  run();
}

/* ==========================================================================
   VIEW 6: USERS (RBAC & GRANULAR PERMISSIONS)
   ========================================================================== */
function userPasswordModal(u) {
  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">🔑 Reset Staff Password</h3>
        <span class="muted small">Changing password for <b>${esc(u.Username)}</b> (${esc(u.FullName)})</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form" style="margin-top:14px; display:flex; flex-direction:column; gap:14px;">
      <label class="field-wrap">
        <span class="field-label">${t('newPassword')} *</span>
        <input name="newPassword" id="usrNewPwd" type="password" minlength="6" required placeholder="Minimum 6 characters" autocomplete="new-password">
      </label>
      <label class="field-wrap">
        <span class="field-label">${t('confirmPassword')} *</span>
        <input name="confirmPassword" id="usrConfPwd" type="password" minlength="6" required placeholder="Re-type new password" autocomplete="new-password">
      </label>
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="showPwdToggle" style="accent-color:var(--brand); cursor:pointer;">
        <label for="showPwdToggle" class="small muted" style="cursor:pointer; user-select:none;">Show passwords</label>
      </div>
      <div class="modal-actions" style="margin-top:16px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">Update Password</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  const showToggle = m.querySelector('#showPwdToggle');
  const p1 = m.querySelector('#usrNewPwd');
  const p2 = m.querySelector('#usrConfPwd');
  showToggle.onchange = () => {
    const ty = showToggle.checked ? 'text' : 'password';
    p1.type = ty;
    p2.type = ty;
  };
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.newPassword !== data.confirmPassword) {
      toast(t('passMismatch') || 'Passwords do not match', 1);
      return;
    }
    if (data.newPassword.length < 6) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    try {
      await call('users:changePassword', { id: u.Id, newPassword: data.newPassword });
      m.close();
      toast(`Password for ${u.Username} updated successfully!`);
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

function userEditModal(u = {}) {
  const isEdit = !!u.Id;
  const currentRole = u.Role || C;
  let initialPerms = [];
  if (u.Permissions) {
    initialPerms = u.Permissions.split(',').map(s => s.trim().toLowerCase());
  } else if (isEdit) {
    if (u.Role === M) initialPerms = ['dashboard', 'pos', 'items', 'grn', 'reports', 'receipts'];
    else if (u.Role === C) initialPerms = ['pos', 'dashboard'];
    else if (u.Role === A) initialPerms = SYSTEM_MODULES.map(m => m.key);
  } else {
    initialPerms = ['pos', 'dashboard'];
  }

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">${isEdit ? 'Edit Staff User & System Permissions' : 'Create New Staff User'}</h3>
        <span class="muted small">${isEdit ? `Updating account for <b>${esc(u.Username)}</b>` : 'Add cashier, store manager or admin staff'}</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form class="auth-form" style="margin-top:14px; display:flex; flex-direction:column; gap:16px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <label class="field-wrap">
          <span class="field-label">${t('username')} *</span>
          <input name="username" type="text" value="${esc(u.Username || '')}" required placeholder="e.g. kasun" ${isEdit ? '' : 'autofocus'}>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('fullName')} *</span>
          <input name="fullName" type="text" value="${esc(u.FullName || '')}" required placeholder="e.g. Kasun Perera">
        </label>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <label class="field-wrap">
          <span class="field-label">${t('role')}</span>
          <select name="role" id="userRoleSelect">
            <option value="${C}" ${currentRole === C ? 'selected' : ''}>${t(C)}</option>
            <option value="${M}" ${currentRole === M ? 'selected' : ''}>${t(M)}</option>
            <option value="${A}" ${currentRole === A ? 'selected' : ''}>${t(A)}</option>
          </select>
        </label>
        <label class="field-wrap">
          <span class="field-label">${t('active')}</span>
          <select name="active">
            <option value="Yes" ${u.Active !== false ? 'selected' : ''}>Active</option>
            <option value="No" ${u.Active === false ? 'selected' : ''}>Disabled</option>
          </select>
        </label>
      </div>

      <label class="field-wrap">
        <span class="field-label">${t('password')} ${isEdit ? '<span class="muted small">(Leave blank to keep unchanged)</span>' : '* (min 6 characters)'}</span>
        <input name="password" type="password" minlength="${isEdit ? '0' : '6'}" ${isEdit ? '' : 'required'} placeholder="${isEdit ? 'Leave blank to keep current password' : 'Enter login password'}">
      </label>

      <!-- Granular System Permissions Section -->
      <div class="perms-container">
        <div class="perms-header">
          <div>
            <div style="font-size:13px; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:6px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>System Permissions & Feature Access</span>
            </div>
            <span class="muted small">Grant or restrict specific module access for this user</span>
          </div>
          <div class="perms-presets">
            <button type="button" class="perms-preset-btn" id="presetCashier">Cashier Default</button>
            <button type="button" class="perms-preset-btn" id="presetManager">Manager Default</button>
            <button type="button" class="perms-preset-btn" id="presetAll">All Features</button>
            <button type="button" class="perms-preset-btn" id="presetNone">Clear</button>
          </div>
        </div>

        <div id="superAdminNotice" class="hide" style="padding:10px 14px; background:rgba(124,58,237,0.08); border:1px solid rgba(124,58,237,0.2); border-radius:10px; font-size:12px; color:var(--brand); font-weight:700;">
          👑 Super Admin accounts always have master access to all features, settings and users.
        </div>

        <div class="perms-grid" id="permsGrid">
          ${SYSTEM_MODULES.map(m => `
            <label class="perm-card-label">
              <input type="checkbox" name="perms" value="${m.key}" ${initialPerms.includes(m.key) ? 'checked' : ''}>
              <div class="perm-card-info">
                <span class="perm-card-title">${m.name}</span>
                <span class="perm-card-desc">${m.desc}</span>
              </div>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">${isEdit ? 'Save Changes' : 'Create User'}</button>
      </div>
    </form>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  const roleSelect = m.querySelector('#userRoleSelect');
  const notice = m.querySelector('#superAdminNotice');
  const checkBoxes = () => [...m.querySelectorAll('input[name="perms"]')];

  const updateRoleUI = () => {
    const isSA = roleSelect.value === A;
    notice.classList.toggle('hide', !isSA);
    if (isSA) {
      checkBoxes().forEach(cb => cb.checked = true);
    }
  };
  roleSelect.onchange = updateRoleUI;
  updateRoleUI();

  m.querySelector('#presetCashier').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = ['pos', 'dashboard'].includes(cb.value));
  };
  m.querySelector('#presetManager').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = ['pos', 'dashboard', 'items', 'grn', 'reports', 'receipts'].includes(cb.value));
  };
  m.querySelector('#presetAll').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = true);
  };
  m.querySelector('#presetNone').onclick = () => {
    checkBoxes().forEach(cb => cb.checked = false);
  };

  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const selectedPerms = checkBoxes().filter(cb => cb.checked).map(cb => cb.value).join(',');
    const pwd = (fd.get('password') || '').trim();
    if (!isEdit && (!pwd || pwd.length < 6)) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    if (isEdit && pwd && pwd.length < 6) {
      toast(t('passMinLength') || 'Password must be at least 6 characters', 1);
      return;
    }
    try {
      await call('users:save', {
        id: u.Id,
        username: fd.get('username'),
        fullName: fd.get('fullName'),
        role: fd.get('role'),
        active: fd.get('active') === 'Yes',
        password: pwd || undefined,
        permissions: selectedPerms
      });
      if (isEdit && me && me.id === u.Id) {
        me.fullName = fd.get('fullName');
        me.role = fd.get('role');
        me.permissions = selectedPerms;
        shell();
      }
      m.close();
      toast('User and permissions saved successfully!');
      vUsers();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

async function vUsers() {
  const us = await call('users:list');
  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800; display:flex; align-items:center; gap:8px;">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2">${ICON.users}</svg>
          <span>${t('users')} & System Permissions</span>
        </h2>
        <span class="muted small">Staff accounts, granular feature permissions & password control (Super Admin Only)</span>
      </div>
      <button class="btn btn-primary" id="nu" style="display:flex; align-items:center; gap:6px;">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>${t('newUser')}</span>
      </button>
    </div>

    <div class="table-card" id="userTbl">
      <table>
        <thead>
          <tr>
            <th>User Account</th>
            <th>Role</th>
            <th>Assigned System Permissions</th>
            <th>Status</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${us.map(u => {
            const isSA = u.Role === A;
            const permsList = u.Permissions ? u.Permissions.split(',').map(s => s.trim().toLowerCase()) : (
              u.Role === M ? ['dashboard', 'pos', 'items', 'grn', 'reports', 'receipts'] :
              u.Role === C ? ['pos', 'dashboard'] : ['*']
            );
            return `
              <tr>
                <td>
                  <div style="display:flex; align-items:center; gap:10px;">
                    <div class="user-avatar-circle" style="width:34px; height:34px; font-size:14px; background:var(--brand); color:#fff; border-radius:50%; display:grid; place-items:center; font-weight:800;">
                      ${esc(u.FullName || u.Username).charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div style="font-weight:800; color:var(--text-main); font-size:13.5px;">${esc(u.Username)}</div>
                      <div class="muted small">${esc(u.FullName)}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="pill ${isSA ? 'info' : u.Role === M ? 'warn' : 'ok'}">${t(u.Role)}</span>
                </td>
                <td style="max-width:320px;">
                  ${isSA ? `
                    <span class="perm-badge-pill" style="background:rgba(124,58,237,0.12); color:var(--brand); border-color:rgba(124,58,237,0.3); font-weight:800;">
                      ★ Master Access (All Features)
                    </span>
                  ` : (
                    permsList.length ? permsList.map(p => {
                      const mod = SYSTEM_MODULES.find(m => m.key === p);
                      return `<span class="perm-badge-pill">${mod ? mod.name : p}</span>`;
                    }).join(' ') : `<span class="muted small">No permissions assigned</span>`
                  )}
                </td>
                <td>
                  <span class="pill ${u.Active ? 'ok' : 'no'}">${u.Active ? t('Yes') : t('No')}</span>
                </td>
                <td style="text-align:right;">
                  <div style="display:inline-flex; gap:6px;">
                    <button class="btn btn-sm btn-outline edit-user-btn" data-id="${u.Id}">Permissions & Edit</button>
                    <button class="btn btn-sm btn-ghost pwd-user-btn" data-id="${u.Id}" title="Reset Password" style="color:var(--brand); font-weight:700;">🔑 Password</button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  $('#nu').onclick = () => userEditModal();
  $('#userTbl').onclick = e => {
    const editBtn = e.target.closest('.edit-user-btn');
    if (editBtn) {
      const u = us.find(x => x.Id === +editBtn.dataset.id);
      if (u) userEditModal(u);
      return;
    }
    const pwdBtn = e.target.closest('.pwd-user-btn');
    if (pwdBtn) {
      const u = us.find(x => x.Id === +pwdBtn.dataset.id);
      if (u) userPasswordModal(u);
      return;
    }
  };
}

/* ==========================================================================
   VIEW 7: DATABASE BACKUP (HOURLY AUTO-SYNC / SINGLE FILE PER DAY)
   ========================================================================== */
async function vBackup() {
  const st = await call('backup:getStatus');
  const formatBytes = b => {
    if (!b) return '0 B';
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(2) + ' MB';
  };
  const timeAgo = iso => {
    if (!iso) return 'Pending snapshot';
    const sec = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (sec < 60) return 'Just now';
    if (sec < 3600) return `${Math.floor(sec / 60)} minute(s) ago`;
    const hrs = Math.floor(sec / 3600);
    return `${hrs} hour(s) ago`;
  };

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800; display:flex; align-items:center; gap:8px;">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2">${ICON.backup}</svg>
          <span>${t('backupTitle')}</span>
        </h2>
        <span class="muted small">${t('backupDesc')}</span>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn btn-sm btn-ghost" id="btnOpenFolder" style="display:flex; align-items:center; gap:6px;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          <span>${t('openFolder')}</span>
        </button>
        <button class="btn btn-sm btn-outline" id="btnRestoreDb" style="display:flex; align-items:center; gap:6px;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          <span>${t('restoreBackup')}</span>
        </button>
        <button class="btn btn-sm btn-primary" id="btnBackupNow" style="display:flex; align-items:center; gap:6px;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>${t('backupNow')}</span>
        </button>
      </div>
    </div>

    <!-- 3 Executive KPI Status Cards -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:16px; margin-bottom:20px;">
      
      <!-- Card 1: Selected Storage Path -->
      <div class="fin-stat-card" style="border-left:5px solid var(--brand); padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">Selected Backup Folder</span>
            <span class="pill info">Custom Path</span>
          </div>
          <div style="font-weight:800; font-size:13px; color:var(--text-main); margin-top:8px; word-break:break-all; font-family:monospace; background:var(--bg-input); padding:8px 10px; border-radius:8px; border:1px solid var(--border-card);">
            ${esc(st.backupPath)}
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
          <small class="muted">Hourly updates write here</small>
          <button class="btn btn-sm btn-outline" id="btnChangePath">${t('selectFolder')}</button>
        </div>
      </div>

      <!-- Card 2: Hourly Engine Schedule -->
      <div class="fin-stat-card" style="border-left:5px solid var(--accent-lime); padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">Snapshot Frequency</span>
            <span class="pill ok">● Hourly Active</span>
          </div>
          <div style="font-size:20px; font-weight:800; color:var(--text-main); margin-top:8px;">
            Every 1 Hour (60 min)
          </div>
          <div class="muted small" style="margin-top:4px;">
            Strategy: <b>One file per day</b> (overwrites itself hourly)
          </div>
        </div>
        <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.2); border-radius:8px; padding:6px 10px; font-size:12px; color:var(--accent-lime); font-weight:700;">
          ✓ Automated background timer active
        </div>
      </div>

      <!-- Card 3: Today's Active Snapshot -->
      <div class="fin-stat-card" style="border-left:5px solid var(--accent-amber); padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <span class="muted small" style="text-transform:uppercase; font-weight:800; letter-spacing:0.5px;">Today's Active File</span>
            <span class="pill ${st.todayExists ? 'ok' : 'warn'}">${st.todayExists ? 'Created & Updating' : 'Pending'}</span>
          </div>
          <div style="font-weight:800; font-size:14.5px; color:var(--text-main); margin-top:8px; font-family:monospace;">
            ${esc(st.todayFile)}
          </div>
          <div style="display:flex; gap:12px; align-items:center; margin-top:6px; font-size:13px;">
            <span>Size: <b>${formatBytes(st.todaySize)}</b></span>
            <span>·</span>
            <span>Last snapshot: <b>${timeAgo(st.todayModified || st.lastBackup?.timestamp)}</b></span>
          </div>
        </div>
        <div class="muted small" style="font-size:11.5px;">
          ${st.lastBackup?.records ? `📦 ${st.lastBackup.records.toLocaleString()} total database records` : 'Covers all 9 database tables'}
        </div>
      </div>

    </div>

    <!-- Smart Notice Banner -->
    <div style="background:var(--bg-input); border:1px solid var(--border-card); border-radius:14px; padding:14px 18px; margin-bottom:24px; display:flex; align-items:center; gap:12px;">
      <div style="font-size:22px;">💡</div>
      <div style="font-size:13px; color:var(--text-main); line-height:1.4;">
        <b>Daily File Consolidation:</b> The system does not create multiple files across the day. It creates exactly one file for each day (<code>kade_pos_backup_YYYY-MM-DD.bak</code>) and refreshes it every hour with the latest sales, products, and inventory.
      </div>
    </div>

    <!-- Daily Backups Archive Table -->
    <div class="table-card">
      <div style="padding:16px 20px; border-bottom:1px solid var(--border-card); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h3 style="margin:0; font-size:16px; font-weight:800;">Daily Consolidated Backups Archive</h3>
          <span class="muted small">Daily snapshot archives found in <code>${esc(st.backupPath)}</code></span>
        </div>
        <span class="pill info">${st.history?.length || 0} Saved Files</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Backup Archive File</th>
            <th>Archive Date</th>
            <th>File Size</th>
            <th>Last Hourly Update</th>
            <th>Type</th>
            <th style="text-align:right;">Restore Action</th>
          </tr>
        </thead>
        <tbody>
          ${st.history && st.history.length ? st.history.map(h => `
            <tr style="${h.isToday ? 'background:rgba(91,82,249,0.03);' : ''}">
              <td>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:18px;">💾</span>
                  <div>
                    <b style="font-family:monospace; font-size:13px;">${esc(h.filename)}</b>
                    ${h.isToday ? '<span class="pill ok" style="margin-left:6px; font-size:10px;">TODAY (LIVE)</span>' : ''}
                  </div>
                </div>
              </td>
              <td><b>${esc(h.filename.replace('kade_pos_backup_', '').replace('.bak', '').replace('.json', ''))}</b></td>
              <td><span class="badge">${formatBytes(h.size)}</span></td>
              <td>${fd(h.modifiedAt)} (${timeAgo(h.modifiedAt)})</td>
              <td><span class="pill ${h.isToday ? 'ok' : 'info'}">${h.isToday ? 'Live Daily' : 'Daily Archive'}</span></td>
              <td style="text-align:right;">
                <button class="btn btn-sm btn-outline btn-restore-file" data-path="${esc(h.path)}">
                  ↺ Restore
                </button>
              </td>
            </tr>
          `).join('') : `
            <tr>
              <td colspan="6" style="text-align:center; padding:36px;" class="muted">
                No backup archives found in this directory. Click "Backup Now" to create your first backup!
              </td>
            </tr>
          `}
        </tbody>
      </table>
    </div>
  `;

  $('#btnOpenFolder').onclick = async () => {
    try {
      await call('backup:openFolder');
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#btnChangePath').onclick = async () => {
    try {
      const res = await call('backup:selectPath');
      if (!res.canceled) {
        toast('Backup directory updated! Snapshot saved.');
        vBackup();
      }
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#btnBackupNow').onclick = async () => {
    const btn = $('#btnBackupNow');
    btn.disabled = true;
    btn.innerHTML = `Backing up...`;
    try {
      const res = await call('backup:runNow');
      toast(`Backup successful! File: ${res.file} (${formatBytes(res.size)})`);
      vBackup();
    } catch (e) {
      toast(e.message, 1);
      btn.disabled = false;
      btn.innerHTML = `⚡ ${t('backupNow')}`;
    }
  };

  const triggerRestore = async (filePath) => {
    const cfm = confirm(`⚠️ WARNING: Restoring from this backup will overwrite current database records with the backup file data.\n\nFile: ${filePath || 'Selected File'}\n\nDo you want to proceed?`);
    if (!cfm) return;
    try {
      const res = await call('backup:restore', { filePath });
      if (!res.canceled) {
        toast(`Database restored successfully! (${res.totalRecordsRestored || 0} records)`);
        vBackup();
      }
    } catch (e) {
      toast(e.message, 1);
    }
  };

  $('#btnRestoreDb').onclick = () => triggerRestore(null);

  $('#view').onclick = e => {
    const rBtn = e.target.closest('.btn-restore-file');
    if (rBtn) triggerRestore(rBtn.dataset.path);
  };
}

/* ==========================================================================
   VIEW 8: SUBSCRIPTION & SUPER ADMIN'S BANK ACCOUNT CONFIGURATION
   ========================================================================== */
async function vSubs() {
  const [{ status: s, payments }, codesInfo] = await Promise.all([
    call('sub:overview'),
    call('sub:listCodes')
  ]);
  const isSubActive = s.subEnabled !== false;
  const label = { ok: t('stActive'), warning: t('stWarn'), locked: t('stLocked') }[s.state];
  const b = s.bankDetails || {};

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800; display:flex; align-items:center; gap:8px;">
          <span>⚙️ ${t('subs')} & License Control</span>
        </h2>
        <span class="muted small">Configure billing model: Monthly Subscription vs One-Time Payment (Lifetime License)</span>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-sm" id="btnBankCfg">${t('bankCfg')}</button>
        <button class="btn btn-sm" id="cfg">${t('feeCfg')}</button>
        ${isSubActive ? `<button class="btn btn-primary btn-sm" id="pay">${t('recPay')}</button>` : ''}
      </div>
    </div>

    <!-- Master Licensing Model Switcher Card -->
    <div class="panel-card" style="margin-bottom:20px; border:2px solid ${isSubActive ? 'rgba(99,102,241,0.35)' : 'rgba(16,185,129,0.35)'}; background: ${isSubActive ? 'var(--bg-card)' : 'rgba(16,185,129,0.03)'};">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div style="flex:1; min-width:280px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <h3 style="margin:0; font-size:18px; font-weight:800;">Billing & Licensing Model</h3>
            <span class="pill ${isSubActive ? 'info' : 'ok'}" style="font-size:11px;">
              ${isSubActive ? '🔄 MONTHLY SUBSCRIPTION ACTIVE' : '💎 ONE-TIME PAYMENT (LIFETIME)'}
            </span>
          </div>
          <p style="margin:6px 0 0; font-size:13px; color:var(--text-muted); line-height:1.45;">
            ${isSubActive 
              ? '<b>Default Model:</b> System operates on a monthly recurring subscription. Client dashboards show your bank card and renewal code inputs near the 25th.' 
              : '<b>One-Time Payment Model:</b> Client paid in full for permanent ownership. <b>Your bank card details, subscription alerts, and renewal boxes are completely hidden from all client dashboards.</b>'}
          </p>
        </div>

        <!-- Mode Toggle Segmented Control -->
        <div style="display:inline-flex; align-items:center; gap:6px; background:var(--bg-input); padding:5px 6px; border-radius:14px; border:1px solid var(--border-card);">
          <button type="button" class="btn btn-sm ${isSubActive ? 'btn-primary' : 'btn-ghost'}" id="btnSelectSubMode" style="font-weight:800; border-radius:10px;">
            <span>🔄 Monthly Subscription</span>
          </button>
          <button type="button" class="btn btn-sm ${!isSubActive ? 'btn-primary' : 'btn-ghost'}" id="btnSelectLifetimeMode" style="font-weight:800; border-radius:10px; ${!isSubActive ? 'background:linear-gradient(135deg, #10b981 0%, #059669 100%); border-color:#059669; box-shadow:0 4px 14px rgba(16,185,129,0.3);' : ''}">
            <span>💎 One-Time Payment (Turn OFF Subscription)</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Hourly Database Backup Card -->
    <div class="fin-stat-card" style="margin-bottom:20px; border-left:5px solid var(--brand); padding:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
      <div>
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0; font-size:16px; font-weight:800;">💾 Automated Hourly Database Backup</h3>
          <span class="pill ok">Active (Every Hour)</span>
        </div>
        <p style="margin:6px 0 0; font-size:13px; color:var(--text-dim);">
          Saving one consolidated backup file per day, refreshed every hour with all transactions & inventory.
        </p>
      </div>
      <button class="btn btn-primary btn-sm" id="btnGoBackups">Manage Backups ➔</button>
    </div>

    <!-- License State Card -->
    ${isSubActive ? `
    <div class="fin-stat-card" style="margin-bottom:20px; border-left:5px solid ${s.state === 'ok' ? 'var(--accent-lime)' : s.state === 'warning' ? 'var(--accent-amber)' : 'var(--bad)'};">
      <div>
        <div style="display:flex; align-items:center; gap:10px;">
          <h3 style="margin:0; font-size:18px;">${label}</h3>
          <span class="pill ${s.state === 'ok' ? 'ok' : s.state === 'warning' ? 'warn' : 'no'}">${s.state.toUpperCase()}</span>
          <span class="pill info">Free Month: ${s.freeMonth}</span>
        </div>
        <p style="margin:8px 0 3px; font-size:13.5px;">
          📅 <b>${t('installDate')}</b>: <b style="color:var(--brand);">${s.installedOn || 'Not Set'}</b> · Free Installation Month: <b>${s.freeMonth}</b> (No codes or fees needed)
        </p>
        <p style="margin:3px 0 2px;">
          ${t('monthlyFee')}: <b>${fmt(s.fee)}</b> · ${t('dueDay')}: <b>${s.dueDay}</b> ${t('dayOfMonth')} · First Monthly Subscription Begins: <b style="color:var(--brand);">${s.nextDue || 'Next month'}</b>
        </p>
        <small class="muted">${t('freeMonthNote')}</small>
      </div>
    </div>
    ` : `
    <div class="fin-stat-card" style="margin-bottom:20px; border-left:5px solid var(--accent-lime); background:rgba(16,185,129,0.03);">
      <div>
        <div style="display:flex; align-items:center; gap:10px;">
          <h3 style="margin:0; font-size:18px; color:var(--text-main);">💎 Perpetual Lifetime License</h3>
          <span class="pill ok">NO MONTHLY SUBSCRIPTION</span>
          <span class="pill info">One-Time Project</span>
        </div>
        <p style="margin:8px 0 3px; font-size:13.5px; color:var(--text-main);">
          📅 <b>${t('installDate')}</b>: <b style="color:var(--accent-lime);">${s.installedOn || 'Not Set'}</b> · License Type: <b>Permanent Unlimited (No Expiry)</b>
        </p>
        <p style="margin:3px 0 2px; font-size:13px; color:var(--text-muted);">
          All client terminals run without payment prompts, warning banners, or renewal codes. <b>Your bank account details are hidden from client dashboards.</b>
        </p>
      </div>
    </div>
    `}

    <!-- Super Admin Bank Account Card (What customers see when payment is due) -->
    <div class="bank-showcase-panel" style="margin-bottom:24px;">
      <div class="panel-header-row">
        <div>
          <div style="display:flex; align-items:center; gap:10px;">
            <h3 class="panel-heading">💳 ${t('superAdminBankDetails')}</h3>
            ${!isSubActive ? `<span class="pill warn" style="font-size:10px;">HIDDEN FROM CLIENT DASHBOARDS</span>` : `<span class="pill ok" style="font-size:10px;">VISIBLE ON CLIENT DASHBOARDS</span>`}
          </div>
          <small class="muted">${isSubActive ? 'Customers and cashiers see this bank account on the 25th of every month to make payments.' : 'Subscription is turned OFF: Cashiers and clients will NOT see your bank card on their dashboard.'}</small>
        </div>
        <button class="btn btn-sm btn-primary" id="btnEditBank">Edit My Bank Details</button>
      </div>

      <div class="superadmin-credit-card">
        <div class="card-hologram-shine"></div>
        <div class="card-top-row">
          <span class="card-brand-label">SUPER ADMIN / VENDOR ACCOUNT</span>
          <span class="card-subscription-tag">${t('dueTag')}</span>
        </div>
        <div class="card-number-row">
          <span>${esc(b.accNumber || '8030194935')}</span>
          <button type="button" class="btn-card-copy" id="subsCopyBtn">
            <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>${t('copy')}</span>
          </button>
        </div>
        <div class="card-bottom-row">
          <div>
            <div style="font-size:9.5px; opacity:0.8;">ACCOUNT HOLDER</div>
            <div class="card-holder-name">${esc(b.accName || 'H.A AMAN MANTHIRA HAPUARACHCHI')}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:9.5px; opacity:0.8;">BANK & BRANCH</div>
            <b>${esc(b.bankName || 'Commercial Bank')}</b> · <span>${esc(b.bankBranch || 'Gampaha')}</span>
          </div>
        </div>
      </div>

      <div class="bank-info-meta-list">
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('bankName')}:</span>
          <span class="bank-meta-val">${esc(b.bankName || 'Commercial Bank')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('accName')}:</span>
          <span class="bank-meta-val">${esc(b.accName || 'H.A Aman Manthira Hapuarachchi')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('accNumber')}:</span>
          <span class="bank-meta-val" style="font-family:monospace; color:var(--brand);">${esc(b.accNumber || '8030194935')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('bankBranch')}:</span>
          <span class="bank-meta-val">${esc(b.bankBranch || 'Gampaha')}</span>
        </div>
        <div class="bank-meta-item">
          <span class="bank-meta-label">${t('bankNotes')}:</span>
          <span class="bank-meta-val" style="font-size:12px; color:var(--text-muted);">${esc(b.bankNotes || 'Please send slip to WhatsApp')}</span>
        </div>
      </div>
    </div>

    <!-- Master Activation Codes Section -->
    <div class="panel-card" style="margin-bottom:24px;">
      <div class="panel-header-row" style="flex-wrap:wrap; gap:10px;">
        <div>
          <h3 class="panel-heading">🔑 ${t('vendorCodes')}</h3>
          <small class="muted">50 Vendor renewal codes. Give an unused code to your customer when they pay the subscription fee.</small>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <div class="theme-switch-pill" style="height:32px; padding:2px;">
            <button type="button" class="theme-switch-btn active" id="codeFilterAll">${t('allCodes')} (${codesInfo.total})</button>
            <button type="button" class="theme-switch-btn" id="codeFilterAvail">${t('availCodes')} (${codesInfo.available})</button>
            <button type="button" class="theme-switch-btn" id="codeFilterUsed">${t('usedCodes')} (${codesInfo.used})</button>
          </div>
          <input id="codeSearchInp" placeholder="Search code…" style="width:160px; height:32px; font-size:12px; padding:0 10px; border-radius:8px; border:1px solid var(--border); background:var(--bg-input); color:var(--text-main);">
        </div>
      </div>

      <div id="codesGridContainer" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:10px; max-height:380px; overflow-y:auto; padding:6px 2px; margin-top:10px;">
      </div>
    </div>

    <!-- Payments History Table -->
    <h3 style="margin:20px 0 12px; font-size:17px; font-weight:800;">${t('history')}</h3>
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>${t('periodC')}</th>
            <th>${t('amount')}</th>
            <th>${t('method')}</th>
            <th>${t('note')}</th>
            <th>${t('paidAt')}</th>
            <th>${t('by')}</th>
          </tr>
        </thead>
        <tbody>
          ${payments.map(p => `
            <tr>
              <td><b>${p.Period}</b></td>
              <td><b>${fmt(p.Amount)}</b></td>
              <td><span class="pill info">${esc(p.Method)}</span></td>
              <td><small class="muted">${esc(p.Note || '—')}</small></td>
              <td><small>${fd(p.PaidAt)}</small></td>
              <td><small>${esc(p.RecordedBy)}</small></td>
            </tr>
          `).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:24px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;

  $('#btnSelectSubMode').onclick = async () => {
    if (s.subEnabled !== false) return;
    try {
      await call('sub:setMode', { subEnabled: true });
      await refreshSub();
      toast('Switched to Monthly Subscription Mode! Client terminals will follow monthly schedule and show your bank details on due dates.');
      vSubs();
    } catch (err) {
      toast(err.message, 1);
    }
  };

  $('#btnSelectLifetimeMode').onclick = async () => {
    if (s.subEnabled === false) return;
    try {
      await call('sub:setMode', { subEnabled: false });
      await refreshSub();
      toast('Switched to One-Time Payment (Lifetime License)! Subscription is turned OFF and your bank card is now hidden from client dashboards.');
      vSubs();
    } catch (err) {
      toast(err.message, 1);
    }
  };

  // Attach Activation Codes handlers
  let currentFilter = 'all';
  const renderCodesGrid = () => {
    const q = ($('#codeSearchInp')?.value || '').trim().toUpperCase();
    const filtered = (codesInfo.codes || []).filter(c => {
      if (currentFilter === 'avail' && c.used) return false;
      if (currentFilter === 'used' && !c.used) return false;
      if (q && !c.code.toUpperCase().includes(q)) return false;
      return true;
    });

    const container = $('#codesGridContainer');
    if (!container) return;
    if (!filtered.length) {
      container.innerHTML = `<div class="muted small" style="grid-column:1/-1; text-align:center; padding:20px;">No activation codes match filter</div>`;
      return;
    }

    container.innerHTML = filtered.map(c => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-input); border-radius:10px; border:1px solid ${c.used ? 'var(--border)' : 'rgba(91,82,249,0.3)'};">
        <div>
          <div style="font-family:monospace; font-weight:700; font-size:13px; color:${c.used ? 'var(--text-dim)' : 'var(--brand)'}; letter-spacing:0.5px;">
            ${esc(c.code)}
          </div>
          <div style="font-size:10.5px; color:var(--text-muted); margin-top:2px;">
            ${c.used 
              ? `<span style="color:var(--text-dim);">Used for <b>${esc(c.usedPeriod || '—')}</b> · ${c.usedBy || ''}</span>` 
              : `<span style="color:var(--accent-lime); font-weight:600;">Ready to send to customer</span>`}
          </div>
        </div>
        <div>
          ${c.used 
            ? `<span class="pill" style="font-size:9.5px; opacity:0.6;">REDEEMED</span>` 
            : `<button class="btn btn-sm btn-primary copy-sub-code-btn" data-code="${esc(c.code)}" style="font-size:11px; padding:3px 10px; height:auto;">
                 Copy Code
               </button>`}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.copy-sub-code-btn').forEach(btn => {
      btn.onclick = () => {
        navigator.clipboard.writeText(btn.dataset.code);
        toast(`Code ${btn.dataset.code} copied!`);
      };
    });
  };

  renderCodesGrid();

  $('#codeFilterAll').onclick = () => {
    currentFilter = 'all';
    $('#codeFilterAll').classList.add('active');
    $('#codeFilterAvail').classList.remove('active');
    $('#codeFilterUsed').classList.remove('active');
    renderCodesGrid();
  };
  $('#codeFilterAvail').onclick = () => {
    currentFilter = 'avail';
    $('#codeFilterAvail').classList.add('active');
    $('#codeFilterAll').classList.remove('active');
    $('#codeFilterUsed').classList.remove('active');
    renderCodesGrid();
  };
  $('#codeFilterUsed').onclick = () => {
    currentFilter = 'used';
    $('#codeFilterUsed').classList.add('active');
    $('#codeFilterAll').classList.remove('active');
    $('#codeFilterAvail').classList.remove('active');
    renderCodesGrid();
  };
  $('#codeSearchInp').oninput = renderCodesGrid;

  const editBankModal = () => formModal(
    'Configure Super Admin Bank Account (For Customer Subscriptions)',
    [
      ['bankName', t('bankName')],
      ['accName', t('accName')],
      ['accNumber', t('accNumber')],
      ['bankBranch', t('bankBranch')],
      ['bankNotes', t('bankNotes')]
    ],
    {
      bankName: b.bankName || 'Commercial Bank',
      accName: b.accName || 'H.A Aman Manthira Hapuarachchi',
      accNumber: b.accNumber || '8030194935',
      bankBranch: b.bankBranch || 'Gampaha',
      bankNotes: b.bankNotes || 'Please state store name and bill invoice ID as payment reference.'
    },
    async v => {
      await call('sub:saveBank', v);
      await refreshSub();
      vSubs();
    }
  );

  $('#btnBankCfg').onclick = editBankModal;
  $('#btnEditBank').onclick = editBankModal;
  $('#subsCopyBtn').onclick = () => {
    navigator.clipboard.writeText((b.accNumber || '8030194935').replace(/\s+/g, ''));
    toast(t('copied'));
  };

  $('#cfg').onclick = () => formModal(
    'License & Installation Settings',
    [
      ['subEnabled', 'Licensing Model', 'select', ['Monthly Subscription', 'One-Time Payment (Lifetime)']],
      ['installedOn', t('installDate'), 'date'],
      ['fee', t('feeLkr'), 'number'],
      ['dueDay', t('dueDayIn'), 'number']
    ],
    {
      subEnabled: s.subEnabled !== false ? 'Monthly Subscription' : 'One-Time Payment (Lifetime)',
      installedOn: s.installedOn || today(),
      fee: s.fee,
      dueDay: s.dueDay
    },
    async v => {
      const subEnabled = v.subEnabled === 'Monthly Subscription';
      await call('sub:save', { fee: +v.fee, dueDay: +v.dueDay, installedOn: v.installedOn, subEnabled });
      await refreshSub();
      vSubs();
    }
  );

  $('#pay').onclick = () => formModal(
    t('recTitle'),
    [
      ['period', t('period')],
      ['amount', t('amount'), 'number'],
      ['method', t('method'), 'select', ['Cash', 'Bank', 'Other']],
      ['note', t('note')]
    ],
    { period: s.period || today().slice(0, 7), amount: s.fee },
    async v => {
      await call('sub:pay', { ...v, amount: +v.amount });
      await refreshSub();
      vSubs();
    }
  );

  const goBackupsBtn = $('#btnGoBackups');
  if (goBackupsBtn) goBackupsBtn.onclick = () => go('backup');
}

/* Initialize App */
applyStatic();
boot();
