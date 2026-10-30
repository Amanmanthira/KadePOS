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
  customers: ['Customer Accounts', 'පාරිභෝගික ණය ගිණුම්'],
  users: ['Users', 'පරිශීලකයින්'],
  help: ['Help & Guide', 'උපකාර සහ මාර්ගෝපදේශ'],
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
  printOn: ['Print: ON', 'මුද්‍රණය: සක්‍රියයි'],
  printOff: ['Print: OFF', 'මුද්‍රණය: අක්‍රියයි'],
  cashRequiredAlert: ['Please enter cash received amount (Numbers only, minimum total)!', 'කරුණාකර ලැබුණු මුදල ඇතුළත් කරන්න (අවම එකතුවට සමාන හෝ වැඩි විය යුතුය)!'],
  selectProduct: ['Search product to add (All categories)…', 'එක් කිරීමට භාණ්ඩය සොයන්න (සියලු කාණ්ඩ)…'],
  allCategories: ['All Categories', 'සියලු වර්ග'],
  qty: ['Quantity', 'ප්‍රමාණය'],
  f1Hint: ['Type to Search', 'සොයන්න ටයිප් කරන්න'],
  arrowKeysHint: ['Arrow Keys Select', 'ඊතල යතුරු තෝරන්න'],
  enterAddHint: ['Enter Add / Pay', 'Enter එකතු කරන්න / බිල් කරන්න'],
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
  searchPos: ['Search product or scan barcode… (Enter Checkout)', 'භාණ්ඩය සොයන්න හෝ බාර්කෝඩ් ස්කෑන් කරන්න… (Enter)'],
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
  checkout: ['Complete Sale', 'බිල් කරන්න'],
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

  // Reports & Analytics
  repSales: ['Sales & Revenue', 'විකුණුම් සහ ආදායම්'],
  repGrn: ['GRN & Purchases', 'GRN සහ තොග ලැබීම්'],
  repStock: ['Inventory & Stock', 'තොගය සහ වටිනාකම'],
  daily: ['Daily Sales Breakdown', 'දෛනික විකුණුම්'],
  itemwise: ['Item-wise Sales Breakdown', 'භාණ්ඩ අනුව විකුණුම්'],
  categories: ['Category-wise Sales Report', 'කාණ්ඩ අනුව විකුණුම්'],
  invoices: ['Detailed Invoices Register', 'බිල්පත් ලේඛනය'],
  cashierwise: ['Cashier-wise Sales Summary', 'අයකැමි අනුව සාරාංශය'],
  payments: ['Payment Methods Breakdown', 'ගෙවීම් ක්‍රම සාරාංශය'],
  hourly: ['Hourly Peak Sales Trend', 'පැය අනුව විකුණුම් සාරාංශය'],
  grnSummary: ['GRN Inward Receipts Summary', 'GRN ලැබීම් සාරාංශය'],
  grnItems: ['GRN Item-wise Purchases', 'GRN භාණ්ඩ මිලදී ගැනීම්'],
  suppliers: ['Supplier Purchases Breakdown', 'සැපයුම්කරුවන් අනුව මිලදී ගැනීම්'],
  stockValuation: ['Current Stock & Valuation', 'වත්මන් තොගය සහ වටිනාකම'],
  lowStock: ['Low Stock Reorder Alert', 'අඩු තොග අනතුරු ඇඟවීම්'],
  expiring: ['Perishable Batches & Expiry Dates', 'කල් ඉකුත්වන කණ්ඩායම්'],
  exportCsv: ['Export to CSV', 'CSV බාගන්න'],
  printRep: ['Print Report', 'වාර්තාව මුද්‍රණය'],
  filterResults: ['Search / Filter current report…', 'වත්මන් වාර්තාව තුළ සොයන්න…'],
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
  customers: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  subs: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
};

let me = null, sub = null, items = [], cart = [], cat = 'All', tab = 'dashboard', poll;
let posPaymentMethod = 'Cash';
let posBillDiscount = 0;
let posAutoPrint = localStorage.getItem('kade_pos_autoprint') !== '0';
let cachedReceiptSettings = null;
let currentShopType = 'restaurant';
let currentShopProfile = (typeof SHOP_TEMPLATES !== 'undefined' && SHOP_TEMPLATES.restaurant) || {};
let categories = [];

async function loadActiveShopProfile() {
  try {
    const s = await call('settings:getShopProfile');
    currentShopType = s.shopType || 'restaurant';
    currentShopProfile = s.profile || (typeof SHOP_TEMPLATES !== 'undefined' ? SHOP_TEMPLATES[currentShopType] : {}) || {};
    return s;
  } catch (e) {
    if (typeof SHOP_TEMPLATES !== 'undefined') {
      currentShopProfile = SHOP_TEMPLATES[currentShopType] || SHOP_TEMPLATES.restaurant;
    }
  }
}

async function loadCategories() {
  try {
    categories = await call('categories:list');
    return categories;
  } catch (e) {
    return [];
  }
}

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
  { key: 'customers', name: 'Customer Credit Accounts', desc: 'Customer account directory, credit balances, credit limits & payment ledger', icon: ICON.customers },
  { key: 'grn', name: 'Goods Received Note (GRN)', desc: 'Supplier stock entry, batch tracking & purchase costs', icon: ICON.grn },
  { key: 'reports', name: 'Reports & Analytics', desc: 'Sales breakdown, GRN procurement, stock valuation, and cashier performance', icon: ICON.reports },
  { key: 'receipts', name: 'Receipt Settings', desc: 'Thermal printer 58mm/80mm format, header & footer design', icon: ICON.receipts },
  { key: 'backup', name: 'Database Backups', desc: 'Hourly automated database snapshots, directory selection & restore', icon: ICON.backup },
  { key: 'help', name: 'Help & User Guide', desc: 'Cashier operational flow, billing instructions, loose items & shortcuts', icon: ICON.help }
];

function userHasPerm(k) {
  if (!me) return false;
  // Super Admin always has full master access to everything
  if (me.role === A) return true;
  // Help & User Guide is universally accessible to all store staff
  if (k === 'help') return true;
  // User accounts management & subscription settings are restricted to Super Admin only by default
  if (k === 'users' || k === 'subs') return me.role === A;
  if (k === 'backup') return me.role === A || (me.permissions && me.permissions.split(',').map(s => s.trim().toLowerCase()).includes('backup'));

  if (me.permissions) {
    const list = me.permissions.split(',').map(s => s.trim().toLowerCase());
    return list.includes(k.toLowerCase());
  }
  // Role defaults when no custom permissions are set
  if (me.role === M) return ['dashboard', 'pos', 'items', 'customers', 'grn', 'reports', 'receipts', 'help'].includes(k);
  if (me.role === C) return ['pos', 'dashboard', 'customers', 'help'].includes(k);
  return false;
}

/* Tabs: Role and Permission based access */
const TABS = {
  dashboard: [vDashboard, 2],
  pos: [vPos, null],
  items: [vItems, null],
  customers: [vCustomers, null],
  grn: [vGrn, null],
  reports: [vReports, null],
  receipts: [vReceiptSettings, null],
  users: [vUsers, null],
  backup: [vBackup, null],
  help: [vHelp, null],
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

async function startApp() {
  screen('app');
  applyStatic();
  try {
    await loadActiveShopProfile();
    await loadCategories();
  } catch {}
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
   MULTI-INDUSTRY BUSINESS PROFILE SWITCHER MODAL (SUPER ADMIN)
   ========================================================================== */
async function openShopProfileModal() {
  await loadActiveShopProfile();
  const allTemplates = (typeof SHOP_TEMPLATES !== 'undefined' ? SHOP_TEMPLATES : {});
  let selectedType = currentShopType;

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title" style="margin:0; display:flex; align-items:center; gap:8px;">
          <span>🏪 Business Profile & Shop Type Customizer</span>
        </h3>
        <span class="muted small">Configure POS categories, item placeholders, receipt branding & catalog matching for any client's shop</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="margin-top:14px;">
      <p style="margin:0 0 12px; font-size:13px; color:var(--text-main); line-height:1.45;">
        Select the business type below. When switching from restaurant to retail (e.g. <b>Pet Food Shop, Grocery Store, Lovers/Gift Shop, Boutique</b>), <b>food matching and restaurant food photos are automatically disabled</b>.
      </p>

      <!-- Shop Profiles Grid -->
      <div class="shop-profile-grid" id="modalShopGrid">
        ${Object.values(allTemplates).map(tpl => `
          <div class="shop-profile-card ${tpl.id === selectedType ? 'active-selected' : ''}" data-type="${tpl.id}">
            <div class="shop-card-header">
              <div class="shop-card-icon">${tpl.icon}</div>
              <div style="flex:1;">
                <h4 class="shop-card-title">${esc(tpl.name)}</h4>
                <div style="display:flex; gap:6px; align-items:center; margin-top:2px;">
                  <span class="pill ${tpl.id === currentShopType ? 'ok' : 'info'}" style="font-size:9.5px; padding:1px 6px;">
                    ${tpl.id === currentShopType ? 'CURRENT ACTIVE' : tpl.shortName}
                  </span>
                  ${tpl.enableFoodAutoMatch 
                    ? '<span class="pill warn" style="font-size:9.5px; padding:1px 6px;">🍽️ Food Match ON</span>' 
                    : '<span class="pill muted" style="font-size:9.5px; padding:1px 6px;">🛍️ Retail Mode</span>'}
                </div>
              </div>
            </div>

            <p class="shop-card-desc">${esc(tpl.description)}</p>

            <div class="shop-card-chips">
              ${(tpl.categories || []).slice(0, 4).map(c => `
                <span class="pill" style="font-size:10px; background:var(--bg-input);">${esc(c)}</span>
              `).join('')}
              ${(tpl.categories || []).length > 4 ? `<span class="muted small" style="font-size:10px;">+${tpl.categories.length - 4} more</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Customization Options -->
      <div style="background:var(--bg-input); border:1px solid var(--border-card); border-radius:12px; padding:14px; margin-top:14px; display:flex; flex-direction:column; gap:12px;">
        <label style="display:flex; align-items:flex-start; gap:10px; cursor:pointer;">
          <input type="checkbox" id="chkApplyBrandingPresets" checked style="width:18px; height:18px; margin-top:2px;">
          <div>
            <b style="font-size:13px; color:var(--text-main);">Update Store Branding & Receipt Header/Footer</b>
            <p style="margin:2px 0 0; font-size:11.5px; color:var(--text-dim);">
              Automatically adapts Store Name, Tagline, Receipt Header, and Footer with recommended presets for the selected shop.
            </p>
          </div>
        </label>

        <div style="display:flex; flex-direction:column; gap:4px; padding-top:8px; border-top:1px dashed var(--border-card);">
          <label style="font-size:12.5px; font-weight:700; color:var(--text-main);">Starter Inventory Items:</label>
          <select id="selItemsMode" style="padding:8px 12px; border-radius:8px; border:1px solid var(--border-card); background:var(--bg-card); font-size:13px;">
            <option value="none" selected>Keep current inventory items (Do not change items)</option>
            <option value="replace">⚠️ Replace active items with starter sample products for this shop (Clean setup)</option>
            <option value="append">➕ Append starter sample products to current inventory</option>
          </select>
          <small class="muted" style="font-size:11px;">
            For a new customer shop (e.g. Pet Food or Lovers Gift shop), loading starter items will instantly populate realistic products, prices, and barcodes.
          </small>
        </div>
      </div>

      <div class="modal-actions" style="margin-top:16px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="button" class="btn btn-primary" id="btnConfirmShopProfile" style="font-weight:800;">
          ✓ Apply Business Profile
        </button>
      </div>
    </div>
  `, true);

  // Profile Card selection handler
  const cards = m.querySelectorAll('.shop-profile-card');
  cards.forEach(card => {
    card.onclick = () => {
      cards.forEach(c => c.classList.remove('active-selected'));
      card.classList.add('active-selected');
      selectedType = card.dataset.type;
    };
  });

  m.querySelector('#btnConfirmShopProfile').onclick = async () => {
    const applyPresets = m.querySelector('#chkApplyBrandingPresets').checked;
    const itemsMode = m.querySelector('#selItemsMode').value;
    const btn = m.querySelector('#btnConfirmShopProfile');
    btn.disabled = true;
    btn.textContent = 'Applying...';

    try {
      await call('settings:setShopProfile', { shopType: selectedType, applyPresets });
      if (itemsMode !== 'none') {
        const loadRes = await call('settings:loadTemplateItems', { shopType: selectedType, mode: itemsMode });
        toast(`Loaded ${loadRes.count} starter items for ${allTemplates[selectedType]?.shortName || selectedType}!`);
      }
      await loadActiveShopProfile();
      try {
        cachedReceiptSettings = await call('settings:getReceipt');
        items = await call('items:list');
      } catch {}

      toast(`✓ Shop profile switched to ${allTemplates[selectedType]?.name || selectedType}!`);
      m.close();
      go(tab);
    } catch (err) {
      toast(err.message, 1);
      btn.disabled = false;
      btn.textContent = '✓ Apply Business Profile';
    }
  };
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
      <!-- Business Profile & Shop Type Banner -->
      <div class="shop-profile-banner">
        <div class="shop-profile-info">
          <div class="shop-profile-icon">${currentShopProfile?.icon || '🏪'}</div>
          <div>
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <h4 style="margin:0; font-size:16px; font-weight:800; color:var(--text-main);">${esc(currentShopProfile?.name || 'Store Profile')}</h4>
              <span class="pill ok" style="font-size:10px; font-weight:800;">ACTIVE PROFILE</span>
              ${currentShopType === 'restaurant' 
                ? `<span class="pill warn" style="font-size:10px;">🍽️ Food Auto-Match ON</span>` 
                : `<span class="pill info" style="font-size:10px;">🛍️ Retail Mode (No Food Images)</span>`}
            </div>
            <p style="margin:4px 0 0; font-size:12px; color:var(--text-muted); line-height:1.4;">
              ${esc(currentShopProfile?.description || 'Multi-industry retail POS terminal')}
            </p>
          </div>
        </div>
        ${me.role === 'Super Admin' ? `
          <button class="btn btn-primary btn-sm" id="btnDashSwitchShop" style="font-weight:800; display:flex; align-items:center; gap:6px; border-radius:10px; padding:8px 16px;">
            <span>🔄 Switch Shop Kind</span>
          </button>
        ` : ''}
      </div>

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

  const btnDashSwitchShop = $('#btnDashSwitchShop');
  if (btnDashSwitchShop) btnDashSwitchShop.onclick = () => openShopProfileModal();
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
            <th style="width:46%;">ITEM</th>
            <th style="text-align:center; width:18%;">QTY</th>
            <th style="text-align:right; width:16%;">PRICE</th>
            <th style="text-align:right; width:20%;">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${lines.map(l => {
            const unit = l.unit && l.unit !== 'pcs' ? ` ${l.unit}` : '';
            const qtyStr = typeof l.qty === 'number' ? (Number.isInteger(l.qty) ? l.qty : l.qty.toFixed(3)) : l.qty;
            return `
            <tr>
              <td>
                <b>${esc(l.name)}</b>
                ${l.disc ? `<br><small style="color:#000000;">Disc -${l.disc}%</small>` : ''}
              </td>
              <td style="text-align:center;">${qtyStr}${unit}</td>
              <td style="text-align:right;">${(+l.price).toFixed(2)}</td>
              <td style="text-align:right;"><b>${(+l.total).toFixed(2)}</b></td>
            </tr>
          `}).join('')}
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

      ${r.paymentMethod === 'Split' ? `
        <div class="tr-sum-row">
          <span>CASH PAID:</span>
          <b>LKR ${(+(r.cashAmount || 0)).toFixed(2)}</b>
        </div>
        <div class="tr-sum-row">
          <span>CARD CHARGED:</span>
          <b>LKR ${(+(r.cardAmount || 0)).toFixed(2)}</b>
        </div>
      ` : (r.paymentMethod === 'Credit' ? `
        <div class="tr-sum-row">
          <span>PAYMENT:</span>
          <b>STORE CREDIT (ACCOUNT)</b>
        </div>
        ${r.customerName ? `
          <div class="tr-sum-row">
            <span>CUSTOMER:</span>
            <b>${esc(r.customerName)}</b>
          </div>
        ` : ''}
      ` : `
        <div class="tr-sum-row">
          <span>PAYMENT (${esc(r.paymentMethod || 'Cash').toUpperCase()}):</span>
          <b>LKR ${paid.toFixed(2)}</b>
        </div>
        <div class="tr-sum-row">
          <span>CHANGE / BALANCE:</span>
          <b>LKR ${bal.toFixed(2)}</b>
        </div>
      `)}

      <hr class="tr-divider-dashed">

      <div class="tr-meta-row" style="justify-content:center; gap:16px; font-weight:700;">
        <span>ITEMS: ${lines.length}</span>
        <span>TOTAL QTY: ${(() => {
          const totQ = lines.reduce((s, l) => s + (+l.qty || 0), 0);
          return Number.isInteger(totQ) ? totQ : totQ.toFixed(3);
        })()}</span>
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
   OFFLINE CODE 128 BARCODE SVG GENERATOR
   Renders crisp, standard retail scannable Code 128 barcodes without dependencies
   ========================================================================== */
function generateCode128Svg(code, width = 220, height = 48) {
  const patterns = [
    "212222","222122","222221","121223","121322","131222","122213","122312","132212","221213",
    "221312","231212","112232","122132","122231","113222","123122","123221","223211","221132",
    "221231","213212","223112","312131","311222","321122","321221","312212","322112","322211",
    "212123","212321","232121","111323","131123","131321","112313","132113","132311","211313",
    "231113","231311","112133","112331","132131","113123","113321","133121","313121","211331",
    "231131","213113","213311","213131","311123","311321","331121","312113","312311","332111",
    "314111","221411","431111","111224","111422","121124","121421","141122","141221","112214",
    "112412","122114","122411","142112","142211","241211","221114","413111","241112","134111",
    "111242","121142","121241","114212","124112","124211","411212","421112","421211","212141",
    "214121","412121","111143","111341","131141","114113","114311","411113","411311","113141",
    "114131","311141","411131","211412","211214","211232","2331112"
  ];
  const str = String(code || '000000').slice(0, 30);
  let checksum = 104; // Start B
  const indices = [104];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - 32;
    const val = Math.max(0, Math.min(95, charCode));
    indices.push(val);
    checksum += val * (i + 1);
  }
  indices.push(checksum % 103);
  indices.push(106); // Stop

  let patternStr = "";
  indices.forEach(idx => {
    patternStr += patterns[idx] || patterns[0];
  });

  let totalModules = 0;
  for (let i = 0; i < patternStr.length; i++) totalModules += parseInt(patternStr[i]);

  const moduleWidth = width / (totalModules + 16);
  let x = moduleWidth * 8;
  let rects = "";

  for (let i = 0; i < patternStr.length; i++) {
    const modCount = parseInt(patternStr[i]);
    const w = modCount * moduleWidth;
    if (i % 2 === 0) {
      rects += `<rect x="${x.toFixed(2)}" y="0" width="${w.toFixed(2)}" height="${height}" fill="#000000"/>`;
    }
    x += w;
  }

  return `
    <svg viewBox="0 0 ${width} ${height + 16}" width="${width}" height="${height + 16}" xmlns="http://www.w3.org/2000/svg">
      ${rects}
      <text x="${width / 2}" y="${height + 13}" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#000000">${esc(str)}</text>
    </svg>
  `;
}

/* ==========================================================================
   THERMAL Z-REPORT SLIP (END OF SHIFT CASH RECONCILIATION)
   ========================================================================== */
function renderThermalZReportHtml(data, cfg = {}) {
  const s = (data && data.shift) ? data.shift : (data || {});
  const shopName = cfg.shopName || 'KADE POS SUPERMARKET & CAFE';
  const paperWidth = cfg.receiptPaperWidth === '58mm' ? '280px' : '320px';
  const diff = +(s.Difference || 0);

  return `
    <div class="thermal-receipt-paper" style="width:${paperWidth};">
      <div class="tr-header">
        <h2 class="tr-shop-name">${esc(shopName)}</h2>
        <div style="font-weight:900; font-size:12.5px; margin: 6px 0 2px; letter-spacing:1px;">*** END OF SHIFT (Z-REPORT) ***</div>
        <div class="tr-contact">Till Reconciliation & Cash Drawer Summary</div>
      </div>

      <hr class="tr-divider-double">

      <div class="tr-meta-row">
        <span><b>SHIFT ID:</b> #${s.Id}</span>
        <span><b>STATUS:</b> ${esc(s.Status || 'Closed').toUpperCase()}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>CASHIER:</b> ${esc(s.CashierName || me?.fullName || 'Cashier')}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>OPENED:</b> ${new Date(s.OpenedAt).toLocaleString('en-LK')}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>CLOSED:</b> ${s.ClosedAt ? new Date(s.ClosedAt).toLocaleString('en-LK') : 'Still Open'}</span>
      </div>

      <hr class="tr-divider-dashed">

      <div class="tr-sum-row">
        <span>STARTING FLOAT:</span>
        <b>LKR ${(+(s.StartingFloat || 0)).toFixed(2)}</b>
      </div>
      <div class="tr-sum-row">
        <span>(+) CASH SALES:</span>
        <b>LKR ${(+(s.CashSales || 0)).toFixed(2)}</b>
      </div>
      <div class="tr-sum-row">
        <span>(+) PETTY CASH IN:</span>
        <b>+ LKR ${(+(s.PettyIn || 0)).toFixed(2)}</b>
      </div>
      <div class="tr-sum-row">
        <span>(-) PETTY CASH OUT:</span>
        <b>- LKR ${(+(s.PettyOut || 0)).toFixed(2)}</b>
      </div>

      <hr class="tr-divider-dashed">

      <div class="tr-sum-row tr-total-row">
        <span>EXPECTED IN DRAWER:</span>
        <span>LKR ${(+(s.ExpectedCash || 0)).toFixed(2)}</span>
      </div>

      <div class="tr-sum-row" style="font-size:12px; margin-top:4px;">
        <span>ACTUAL COUNTED CASH:</span>
        <b>LKR ${(+(s.ActualCash || 0)).toFixed(2)}</b>
      </div>

      <div class="tr-sum-row" style="font-size:12px; font-weight:900; margin-top:2px;">
        <span>CASH DIFFERENCE:</span>
        <span>
          ${diff === 0 ? 'LKR 0.00 (BALANCED)' : (diff > 0 ? `+ LKR ${diff.toFixed(2)} (OVERAGE)` : `- LKR ${Math.abs(diff).toFixed(2)} (SHORTAGE)`)}
        </span>
      </div>

      <hr class="tr-divider-dashed">

      <div style="font-size:10.5px; font-weight:800; margin-bottom:4px;">NON-CASH TURNOVER:</div>
      <div class="tr-sum-row">
        <span>CARD SALES:</span>
        <b>LKR ${(+(s.CardSales || 0)).toFixed(2)}</b>
      </div>
      <div class="tr-sum-row">
        <span>STORE CREDIT (NAYA):</span>
        <b>LKR ${(+(s.CreditSales || 0)).toFixed(2)}</b>
      </div>
      <div class="tr-sum-row" style="font-weight:800; margin-top:4px;">
        <span>TOTAL SALES REVENUE:</span>
        <b>LKR ${(+(s.CashSales || 0) + +(s.CardSales || 0) + +(s.CreditSales || 0)).toFixed(2)}</b>
      </div>

      ${s.Notes ? `
        <hr class="tr-divider-dashed">
        <div style="font-size:11px; margin: 4px 0;"><b>Notes:</b> ${esc(s.Notes)}</div>
      ` : ''}

      <hr class="tr-divider-dashed">

      <div style="margin-top:20px; display:flex; justify-content:space-between; font-size:10px; font-weight:700;">
        <div style="text-align:center; width:45%;">
          <div style="border-bottom:1px solid #000; height:18px;"></div>
          <span>Cashier Signature</span>
        </div>
        <div style="text-align:center; width:45%;">
          <div style="border-bottom:1px solid #000; height:18px;"></div>
          <span>Manager Signature</span>
        </div>
      </div>

      <div class="tr-footer" style="margin-top:14px;">
        <p style="margin:2px 0;">Printed: ${new Date().toLocaleString()}</p>
        <p style="margin:2px 0; font-weight:800;">Kade POS Enterprise System</p>
      </div>
    </div>
  `;
}

/* ==========================================================================
   THERMAL RETURN / REFUND VOUCHER
   ========================================================================== */
function renderThermalRefundSlipHtml(ret, cfg = {}) {
  const shopName = cfg.shopName || 'KADE POS SUPERMARKET & CAFE';
  const paperWidth = cfg.receiptPaperWidth === '58mm' ? '280px' : '320px';

  return `
    <div class="thermal-receipt-paper" style="width:${paperWidth};">
      <div class="tr-header">
        <h2 class="tr-shop-name">${esc(shopName)}</h2>
        <div style="font-weight:900; font-size:12.5px; margin: 6px 0 2px; letter-spacing:1px;">*** RETURN / REFUND VOUCHER ***</div>
        <div class="tr-contact">Customer Credit & Stock Inward Adjustment</div>
      </div>

      <hr class="tr-divider-double">

      <div class="tr-meta-row">
        <span><b>RETURN NO:</b> ${esc(ret.returnNo)}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>ORIGINAL INV:</b> ${esc(ret.invoiceNo)}</span>
        <span><b>METH:</b> ${esc(ret.refundMethod || 'Cash').toUpperCase()}</span>
      </div>
      <div class="tr-meta-row">
        <span><b>DATE:</b> ${new Date().toLocaleString('en-LK')}</span>
        <span><b>CASHIER:</b> ${esc(ret.cashier || me?.fullName || 'Cashier')}</span>
      </div>

      <hr class="tr-divider-dashed">

      <table class="tr-table">
        <thead>
          <tr>
            <th style="width:48%;">RETURNED ITEM</th>
            <th style="text-align:center; width:18%;">QTY</th>
            <th style="text-align:right; width:16%;">PRICE</th>
            <th style="text-align:right; width:18%;">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${(ret.items || []).map(it => `
            <tr>
              <td><b>${esc(it.itemName)}</b></td>
              <td style="text-align:center;">${it.qty} ${esc(it.unit || '')}</td>
              <td style="text-align:right;">${(+it.unitPrice).toFixed(2)}</td>
              <td style="text-align:right;"><b>${(+it.lineTotal).toFixed(2)}</b></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <hr class="tr-divider-dashed">

      <div class="tr-sum-row tr-total-row">
        <span>TOTAL REFUND PAID:</span>
        <span>LKR ${(+ret.refundTotal).toFixed(2)}</span>
      </div>

      <div class="tr-footer" style="margin-top:14px;">
        <p style="margin:2px 0;">Stock has been successfully returned to inventory.</p>
        <p style="margin:2px 0; font-weight:800;">Customer Signature: __________________</p>
      </div>
    </div>
  `;
}

/* ==========================================================================
   HELD / PARKED BILLS PERSISTENCE HELPERS
   ========================================================================== */
function getHeldBills() {
  try {
    return JSON.parse(localStorage.getItem('kade_pos_held_bills') || '[]');
  } catch {
    return [];
  }
}

function saveHeldBills(list) {
  localStorage.setItem('kade_pos_held_bills', JSON.stringify(list));
}

/* ==========================================================================
   LOOSE / FRACTIONAL MEASURE PROMPT DIALOG
   Supports fast entry by Weight (kg, g), Length (m), Volume (L), or Rupee target
   ========================================================================== */
function promptLooseItemQty(it, onConfirm, initialQty = 1) {
  const unit = (it.Unit || 'kg').trim();
  const unitLower = unit.toLowerCase();
  const price = +it.Price || 0;
  const stock = +it.Stock || 0;
  const initQ = Math.max(0.001, parseFloat(initialQty) || 1.0);

  // Preset definition depending on unit
  let presets = [];
  if (['kg', 'g'].includes(unitLower)) {
    presets = [
      { label: '100g (0.1)', val: 0.1 },
      { label: '250g (0.25)', val: 0.25 },
      { label: '500g (0.5)', val: 0.5 },
      { label: '750g (0.75)', val: 0.75 },
      { label: '1 kg', val: 1.0 },
      { label: '1.5 kg', val: 1.5 },
      { label: '2 kg', val: 2.0 },
      { label: '5 kg', val: 5.0 }
    ];
  } else if (['m', 'meter', 'meters'].includes(unitLower)) {
    presets = [
      { label: '0.5 m', val: 0.5 },
      { label: '1 m', val: 1.0 },
      { label: '1.5 m', val: 1.5 },
      { label: '2 m', val: 2.0 },
      { label: '3 m', val: 3.0 },
      { label: '5 m', val: 5.0 },
      { label: '10 m', val: 10.0 }
    ];
  } else if (['l', 'liter', 'liters', 'ml'].includes(unitLower)) {
    presets = [
      { label: '250 ml (0.25)', val: 0.25 },
      { label: '500 ml (0.5)', val: 0.5 },
      { label: '750 ml (0.75)', val: 0.75 },
      { label: '1 L', val: 1.0 },
      { label: '1.5 L', val: 1.5 },
      { label: '2 L', val: 2.0 },
      { label: '5 L', val: 5.0 }
    ];
  } else {
    presets = [
      { label: '0.25', val: 0.25 },
      { label: '0.50', val: 0.5 },
      { label: '1.00', val: 1.0 },
      { label: '2.00', val: 2.0 },
      { label: '5.00', val: 5.0 }
    ];
  }

  const rupeePresets = [50, 100, 150, 200, 500, 1000];

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title" style="display:flex; align-items:center; gap:8px;">
          <span>⚖️</span>
          <span>${esc(it.Name)}</span>
        </h3>
        <small class="muted">Loose / Sold by Measure · LKR ${price.toFixed(2)} per ${esc(unit)}</small>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="looseMeasureForm" class="loose-modal-wrap" style="padding-top:4px;">
      <!-- Stock availability badge -->
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-input); padding:8px 12px; border-radius:10px; font-size:12px;">
        <span class="muted">Available Stock:</span>
        <b style="color:${stock <= 5 ? 'var(--bad)' : 'var(--good)'};">${Number.isInteger(stock) ? stock : stock.toFixed(3)} ${esc(unit)}</b>
      </div>

      <!-- Quantity / Weight Input -->
      <div class="field-wrap">
        <label class="field-label" style="font-weight:800; font-size:13px; display:flex; justify-content:space-between;">
          <span>Enter Quantity / Measure (${esc(unit)}) *</span>
          <small class="muted">Press Enter to Confirm ↵</small>
        </label>
        <div style="display:flex; align-items:center; gap:8px;">
          <input id="looseQtyInput" type="number" step="0.001" min="0.001" max="${stock}" value="${initQ}" required autofocus autocomplete="off" style="font-size:20px; font-weight:800; text-align:center; padding:10px;">
          <span style="font-weight:800; font-size:15px; color:var(--text-muted); min-width:32px;">${esc(unit)}</span>
        </div>
      </div>

      <!-- Measure Presets -->
      <div>
        <small class="muted" style="font-weight:700; font-size:11px; text-transform:uppercase; letter-spacing:0.5px;">Quick ${esc(unit)} Presets</small>
        <div class="loose-preset-group">
          ${presets.map(p => `
            <button type="button" class="loose-preset-btn ${Math.abs(p.val - initQ) < 0.001 ? 'active' : ''}" data-qval="${p.val}">
              ${esc(p.label)}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Rupee Target Value Calculator -->
      <div style="background:var(--bg-subtle, rgba(99,102,241,0.04)); border:1px dashed var(--border-card); border-radius:12px; padding:10px 12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:12px; font-weight:700; color:var(--text-main);">Or Buy by Cash Amount (LKR)</span>
          <small class="muted" style="font-size:10.5px;">Calculates exact measure automatically</small>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:13px; font-weight:800; color:var(--text-muted);">LKR</span>
          <input id="looseRupeeInput" type="number" step="1" min="1" placeholder="e.g. 100" style="padding:8px 10px; font-weight:700;" autocomplete="off">
        </div>
        <div class="loose-preset-group" style="margin-top:8px;">
          ${rupeePresets.map(r => `
            <button type="button" class="loose-preset-btn" data-rval="${r}">
              Rs. ${r}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Live Calculation Banner -->
      <div class="loose-calc-banner">
        <div>
          <div class="loose-calc-formula" id="looseFormula">${initQ.toFixed(3)} ${esc(unit)} × LKR ${price.toFixed(2)}</div>
          <small id="looseStockWarn" style="display:none; color:#fecaca; font-weight:700; font-size:11px;">⚠️ Exceeds current stock</small>
        </div>
        <div class="loose-calc-total" id="looseTotal">LKR ${(initQ * price).toFixed(2)}</div>
      </div>

      <div class="modal-actions" style="margin-top:6px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-primary btn-lg" id="btnConfirmLoose" style="flex:1;">✓ Add to Bill (Enter)</button>
      </div>
    </form>
  `, true);

  const qtyInput = m.querySelector('#looseQtyInput');
  const rupeeInput = m.querySelector('#looseRupeeInput');
  const formulaEl = m.querySelector('#looseFormula');
  const totalEl = m.querySelector('#looseTotal');
  const stockWarnEl = m.querySelector('#looseStockWarn');
  const confirmBtn = m.querySelector('#btnConfirmLoose');

  const updateDisplay = (q) => {
    const validQ = Math.max(0, Math.round((parseFloat(q) || 0) * 1000) / 1000);
    const lineTotal = Math.round(validQ * price * 100) / 100;
    formulaEl.textContent = `${validQ.toFixed(3)} ${unit} × LKR ${price.toFixed(2)}`;
    totalEl.textContent = `LKR ${lineTotal.toFixed(2)}`;

    if (validQ > stock) {
      stockWarnEl.style.display = 'block';
      confirmBtn.disabled = true;
    } else {
      stockWarnEl.style.display = 'none';
      confirmBtn.disabled = validQ <= 0;
    }

    m.querySelectorAll('.loose-preset-btn[data-qval]').forEach(btn => {
      const val = parseFloat(btn.dataset.qval);
      btn.classList.toggle('active', Math.abs(val - validQ) < 0.001);
    });
  };

  qtyInput.oninput = () => {
    const q = parseFloat(qtyInput.value) || 0;
    const rupee = Math.round(q * price * 100) / 100;
    rupeeInput.value = rupee > 0 ? rupee : '';
    updateDisplay(q);
  };

  rupeeInput.oninput = () => {
    const rup = parseFloat(rupeeInput.value) || 0;
    if (rup > 0 && price > 0) {
      const q = Math.round((rup / price) * 1000) / 1000;
      qtyInput.value = q;
      updateDisplay(q);
    } else {
      qtyInput.value = '';
      updateDisplay(0);
    }
  };

  m.querySelectorAll('.loose-preset-btn[data-qval]').forEach(btn => {
    btn.onclick = () => {
      const val = parseFloat(btn.dataset.qval);
      qtyInput.value = val;
      const rupee = Math.round(val * price * 100) / 100;
      rupeeInput.value = rupee > 0 ? rupee : '';
      updateDisplay(val);
      qtyInput.focus();
    };
  });

  m.querySelectorAll('.loose-preset-btn[data-rval]').forEach(btn => {
    btn.onclick = () => {
      const rup = parseFloat(btn.dataset.rval);
      rupeeInput.value = rup;
      if (rup > 0 && price > 0) {
        const q = Math.round((rup / price) * 1000) / 1000;
        qtyInput.value = q;
        updateDisplay(q);
      }
      qtyInput.focus();
    };
  });

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#looseMeasureForm').onsubmit = e => {
    e.preventDefault();
    const finalQ = Math.round((parseFloat(qtyInput.value) || 0) * 1000) / 1000;
    if (finalQ <= 0) return toast('Please enter a valid quantity', 1);
    if (finalQ > stock) return toast(`Available stock is only ${stock} ${unit}`, 1);
    m.close();
    onConfirm(finalQ);
  };

  updateDisplay(initQ);
  setTimeout(() => {
    qtyInput.focus();
    qtyInput.select();
  }, 50);
}

/* ==========================================================================
   HOLD / PARK BILLS ENGINE
   ========================================================================== */
function holdCurrentBill() {
  if (!cart || !cart.length) return toast(t('cartEmpty'), 1);
  const existing = getHeldBills();
  if (existing.length >= 30) return toast('Maximum 30 held bills reached. Please recall or clear some first.', 1);

  const subtotal = Math.round(cart.reduce((s, l) => s + l.price * l.qty * (1 - (l.disc || 0) / 100), 0) * 100) / 100;
  const discount = Math.max(0, parseFloat($('#posDiscount')?.value) || 0);
  const total = Math.max(0, Math.round((subtotal - discount) * 100) / 100);
  const totalQty = cart.reduce((s, l) => s + (+l.qty || 0), 0);

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const defaultRef = `Cart #${existing.length + 1} (${timeStr})`;
  const ref = prompt('Enter a label/note for this parked bill (e.g. Customer Name, Table 4, Counter):', defaultRef);
  if (ref === null) return;

  const heldRecord = {
    id: 'HB-' + Date.now(),
    ref: ref.trim() || defaultRef,
    time: now.toISOString(),
    cart: [...cart],
    discount,
    subtotal,
    total,
    totalQty,
    customerId: $('#posCreditCustomer')?.value || null
  };

  existing.unshift(heldRecord);
  saveHeldBills(existing);
  cart = [];
  toast(`Bill parked successfully (${heldRecord.ref})`);
  vPos();
}

function showHeldBillsModal() {
  const held = getHeldBills();
  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">📋</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Parked & Held Bills (${held.length})</h3>
          <small class="muted">Recall parked carts or clear them</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="max-height:500px; overflow-y:auto; padding:8px 0;">
      ${!held.length ? `
        <div class="cart-empty-state" style="padding:40px 20px;">
          <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          <div style="font-weight:800; font-size:15px; margin-top:8px;">No Parked Bills</div>
          <small class="muted">Click "Hold" in POS to park an active customer bill.</small>
        </div>
      ` : `
        <div class="held-bills-grid">
          ${held.map(b => `
            <div class="held-bill-card">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <div>
                  <div style="font-weight:800; font-size:14.5px; color:var(--text-main);">${esc(b.ref)}</div>
                  <small class="muted" style="font-size:11px;">Parked at ${new Date(b.time).toLocaleTimeString()} (${new Date(b.time).toLocaleDateString()})</small>
                </div>
                <span class="badge-mini" style="background:rgba(99,102,241,0.12); color:var(--brand); font-weight:800;">
                  ${b.cart.length} items (${Number.isInteger(b.totalQty) ? b.totalQty : (+b.totalQty).toFixed(2)})
                </span>
              </div>

              <div style="font-size:12px; color:var(--text-muted); margin-bottom:10px; max-height:60px; overflow-y:auto; background:var(--bg-input); padding:6px 10px; border-radius:6px;">
                ${b.cart.map(i => `${esc(i.name)} × ${i.qty}`).join(', ')}
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed var(--border-card); padding-top:8px;">
                <div>
                  <span class="muted" style="font-size:11px;">Total Payable:</span>
                  <div style="font-weight:900; font-size:15px; color:var(--text-main);">LKR ${(+(b.total || 0)).toFixed(2)}</div>
                </div>

                <div style="display:flex; gap:8px;">
                  <button type="button" class="btn btn-sm btn-danger" data-del-held="${b.id}" title="Discard parked bill">🗑️ Discard</button>
                  <button type="button" class="btn btn-sm btn-primary" data-resume-held="${b.id}" style="font-weight:800;">▶️ Recall Bill</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>

    <div class="modal-actions" style="margin-top:14px; display:flex; justify-content:space-between; align-items:center;">
      ${held.length > 0 ? `
        <button type="button" class="btn btn-ghost text-danger" id="btnClearAllHeld" style="font-size:12px;">Clear All (${held.length})</button>
      ` : `<div></div>`}
      <button type="button" class="btn btn-primary" data-x>${t('close')}</button>
    </div>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelectorAll('[data-del-held]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.delHeld;
      const list = getHeldBills().filter(h => h.id !== id);
      saveHeldBills(list);
      m.close();
      showHeldBillsModal();
      vPos();
    };
  });

  m.querySelectorAll('[data-resume-held]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.resumeHeld;
      const list = getHeldBills();
      const target = list.find(h => h.id === id);
      if (!target) return;

      if (cart.length > 0) {
        if (!confirm('You have items in your current cart. Loading this parked bill will replace the active cart. Do you want to continue?')) {
          return;
        }
      }

      cart = [...target.cart];
      saveHeldBills(list.filter(h => h.id !== id));
      m.close();
      toast(`Resumed bill "${target.ref}"`);
      vPos();
      setTimeout(() => {
        if ($('#posDiscount') && target.discount) {
          $('#posDiscount').value = target.discount;
          $('#posDiscount').dispatchEvent(new Event('input'));
        }
      }, 100);
    };
  });

  const clearAllBtn = m.querySelector('#btnClearAllHeld');
  if (clearAllBtn) {
    clearAllBtn.onclick = () => {
      if (confirm('Are you sure you want to discard all parked bills?')) {
        saveHeldBills([]);
        m.close();
        toast('All parked bills cleared');
        vPos();
      }
    };
  }
}

/* ==========================================================================
   SHIFT MANAGEMENT & CASH RECONCILIATION MODALS
   ========================================================================== */
function promptPettyCash(shiftId, type, onComplete) {
  const isOut = type === 'OUT';
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title" style="display:flex; align-items:center; gap:8px;">
        <span>${isOut ? '💸 Petty Cash Out (Expense / Payout)' : '📥 Petty Cash In (Float Top-up)'}</span>
      </h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form id="pettyCashForm" class="auth-form" style="gap:14px;">
      <label class="field-wrap">
        <span class="field-label">Amount (LKR) *</span>
        <input id="pettyAmount" type="number" min="0.01" step="0.01" placeholder="0.00" required autofocus>
      </label>
      <label class="field-wrap">
        <span class="field-label">Reason / Expense Description *</span>
        <input id="pettyReason" type="text" placeholder="${isOut ? 'e.g. Milk delivery, cleaning supplies, courier fee' : 'e.g. Extra coin change from bank'}" required>
      </label>
      <div class="modal-actions" style="margin-top:8px;">
        <button type="button" class="btn btn-ghost" data-x>Cancel</button>
        <button type="submit" class="btn ${isOut ? 'btn-danger' : 'btn-primary'}">${isOut ? 'Record Expense' : 'Add Cash to Till'}</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('#pettyCashForm').onsubmit = async e => {
    e.preventDefault();
    const amt = parseFloat(m.querySelector('#pettyAmount').value);
    const reason = m.querySelector('#pettyReason').value.trim();
    if (!amt || amt <= 0) return toast('Please enter a valid amount', 1);
    if (!reason) return toast('Please enter a reason', 1);
    try {
      await call('shifts:pettyCash', { shiftId, type, amount: amt, reason });
      m.close();
      toast(isOut ? 'Petty cash expense recorded' : 'Petty cash added to till');
      if (onComplete) onComplete();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

async function showShiftModal() {
  const shift = await call('shifts:current').catch(() => null);

  if (!shift) {
    const m = modal(`
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:22px;">🟢</span>
          <div>
            <h3 class="modal-title" style="margin:0;">Open Register Shift</h3>
            <small class="muted">Cashier: ${esc(me?.fullName || 'Cashier')}</small>
          </div>
        </div>
        <button class="modal-close-x" data-x>✕</button>
      </div>

      <form id="openShiftForm" class="auth-form" style="gap:14px;">
        <div style="background:rgba(16,185,129,0.08); padding:12px; border-radius:10px; border:1px solid rgba(16,185,129,0.2); font-size:12.5px; color:var(--text-main);">
          Start your cashier shift by counting and entering the starting cash float currently in your cash drawer.
        </div>

        <label class="field-wrap">
          <span class="field-label">Starting Cash Float (LKR) *</span>
          <input id="startFloatInput" type="number" min="0" step="any" value="5000" required autofocus style="font-size:18px; font-weight:800; padding:10px 12px;">
        </label>

        <label class="field-wrap">
          <span class="field-label">Opening Shift Notes (Optional)</span>
          <input id="startNotesInput" type="text" placeholder="e.g. Morning Shift, Drawer #1">
        </label>

        <div class="modal-actions" style="margin-top:10px;">
          <button type="button" class="btn btn-ghost" data-x>Cancel</button>
          <button type="submit" class="btn btn-primary" style="font-weight:800;">🟢 Open Shift & Start Register</button>
        </div>
      </form>
    `);

    m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
    m.querySelector('#openShiftForm').onsubmit = async e => {
      e.preventDefault();
      const startingFloat = parseFloat(m.querySelector('#startFloatInput').value) || 0;
      const notes = m.querySelector('#startNotesInput').value.trim();
      try {
        await call('shifts:open', { startingFloat, notes });
        m.close();
        toast('Shift opened successfully!');
        vPos();
      } catch (err) {
        toast(err.message, 1);
      }
    };
    return;
  }

  const expectedCash = (+(shift.StartingFloat || 0)) + (+(shift.CashSales || 0)) + (+(shift.PettyIn || 0)) - (+(shift.PettyOut || 0));

  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">🟢</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Active Register Shift #${shift.Id}</h3>
          <small class="muted">Cashier: ${esc(shift.CashierName || me?.fullName || 'Cashier')} · Opened: ${new Date(shift.OpenedAt).toLocaleTimeString()}</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="max-height:540px; overflow-y:auto; padding-right:4px;">
      <div class="shift-stats-grid">
        <div class="shift-stat-box">
          <span class="shift-stat-label">STARTING FLOAT</span>
          <span class="shift-stat-val">LKR ${(+(shift.StartingFloat || 0)).toFixed(2)}</span>
        </div>
        <div class="shift-stat-box">
          <span class="shift-stat-label">(+) CASH SALES</span>
          <span class="shift-stat-val" style="color:#10b981;">LKR ${(+(shift.CashSales || 0)).toFixed(2)}</span>
        </div>
        <div class="shift-stat-box">
          <span class="shift-stat-label">(+) PETTY CASH IN</span>
          <span class="shift-stat-val" style="color:#0ea5e9;">+ LKR ${(+(shift.PettyIn || 0)).toFixed(2)}</span>
        </div>
        <div class="shift-stat-box">
          <span class="shift-stat-label">(-) PETTY CASH OUT</span>
          <span class="shift-stat-val" style="color:#ef4444;">- LKR ${(+(shift.PettyOut || 0)).toFixed(2)}</span>
        </div>
        <div class="shift-stat-box" style="grid-column:1/-1; background:rgba(99,102,241,0.08); border-color:var(--brand);">
          <span class="shift-stat-label" style="color:var(--brand); font-weight:800;">EXPECTED CASH IN DRAWER</span>
          <span class="shift-stat-val" style="font-size:22px; color:var(--brand);">LKR ${expectedCash.toFixed(2)}</span>
          <small class="muted" style="font-size:11px;">Float + Cash Sales + Petty In - Petty Out</small>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; background:var(--bg-input); padding:8px 12px; border-radius:8px; font-size:12px; margin-bottom:12px;">
        <div>💳 Card Sales: <b>LKR ${(+(shift.CardSales || 0)).toFixed(2)}</b></div>
        <div>📒 Store Credit: <b>LKR ${(+(shift.CreditSales || 0)).toFixed(2)}</b></div>
      </div>

      <div style="display:flex; gap:10px; margin-bottom:14px;">
        <button type="button" class="btn btn-ghost" id="btnPettyIn" style="flex:1; display:flex; align-items:center; justify-content:center; gap:6px; font-weight:700;">
          <span>📥 Add Cash / Float (Petty In)</span>
        </button>
        <button type="button" class="btn btn-ghost" id="btnPettyOut" style="flex:1; display:flex; align-items:center; justify-content:center; gap:6px; font-weight:700; color:#ef4444;">
          <span>💸 Pay Expense (Petty Out)</span>
        </button>
      </div>

      ${shift.petty && shift.petty.length ? `
        <div style="margin-bottom:14px;">
          <div style="font-weight:800; font-size:12px; margin-bottom:6px;">Shift Petty Cash Log (${shift.petty.length}):</div>
          <div style="max-height:110px; overflow-y:auto; border:1px solid var(--border-card); border-radius:8px;">
            <table style="width:100%; font-size:11.5px;">
              <thead>
                <tr style="background:var(--bg-input); text-align:left;">
                  <th style="padding:4px 8px;">Time</th>
                  <th style="padding:4px 8px;">Type</th>
                  <th style="padding:4px 8px;">Amount</th>
                  <th style="padding:4px 8px;">Reason</th>
                </tr>
              </thead>
              <tbody>
                ${shift.petty.map(p => `
                  <tr>
                    <td style="padding:4px 8px;">${new Date(p.CreatedAt).toLocaleTimeString()}</td>
                    <td style="padding:4px 8px;"><span class="pill ${p.Type === 'IN' ? 'ok' : 'no'}">${p.Type}</span></td>
                    <td style="padding:4px 8px; font-weight:800;">LKR ${(+(p.Amount || 0)).toFixed(2)}</td>
                    <td style="padding:4px 8px;">${esc(p.Reason || '')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}

      <div style="background:rgba(239,68,68,0.05); border:1px solid rgba(239,68,68,0.25); border-radius:10px; padding:12px 14px; margin-top:10px;">
        <h4 style="margin:0 0 8px; color:var(--text-main); font-size:14px; font-weight:800;">End Shift & Till Reconciliation</h4>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <label class="field-wrap" style="margin:0;">
            <span class="field-label" style="font-weight:800;">Actual Counted Cash in Drawer (LKR) *</span>
            <input id="closeActualCash" type="number" min="0" step="any" placeholder="0.00" style="font-size:16px; font-weight:800; padding:8px 10px;">
          </label>

          <div id="shiftDiffBanner" class="balance-status-badge exact-or-change" style="padding:8px 12px; font-size:13px;">
            <span>Difference:</span>
            <b id="shiftDiffVal">Enter actual counted cash</b>
          </div>

          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Shift Closing Notes</span>
            <input id="closeNotesInput" type="text" placeholder="e.g. Till balanced, handed over to night cashier">
          </label>

          <button type="button" class="btn btn-danger btn-block" id="btnCloseShiftBtn" style="font-weight:800; padding:10px; border-radius:8px;">
            🔴 Close Shift & Print Z-Report
          </button>
        </div>
      </div>
    </div>

    <div class="modal-actions" style="margin-top:12px;">
      <button type="button" class="btn btn-ghost" data-x>${t('close')}</button>
    </div>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#btnPettyIn').onclick = () => {
    m.close();
    promptPettyCash(shift.Id, 'IN', () => showShiftModal());
  };

  m.querySelector('#btnPettyOut').onclick = () => {
    m.close();
    promptPettyCash(shift.Id, 'OUT', () => showShiftModal());
  };

  const actInput = m.querySelector('#closeActualCash');
  const diffBanner = m.querySelector('#shiftDiffBanner');
  const diffVal = m.querySelector('#shiftDiffVal');

  actInput.oninput = () => {
    const act = parseFloat(actInput.value);
    if (isNaN(act)) {
      diffVal.textContent = 'Enter actual counted cash';
      diffBanner.className = 'balance-status-badge exact-or-change';
      return;
    }
    const diff = Math.round((act - expectedCash) * 100) / 100;
    if (diff === 0) {
      diffVal.textContent = 'LKR 0.00 (Perfect Match)';
      diffBanner.className = 'balance-status-badge exact-or-change';
    } else if (diff > 0) {
      diffVal.textContent = `+ LKR ${diff.toFixed(2)} (Cash Overage)`;
      diffBanner.className = 'balance-status-badge exact-or-change';
    } else {
      diffVal.textContent = `- LKR ${Math.abs(diff).toFixed(2)} (Cash Shortage)`;
      diffBanner.className = 'balance-status-badge short';
    }
  };

  m.querySelector('#btnCloseShiftBtn').onclick = async () => {
    const act = parseFloat(actInput.value);
    if (isNaN(act)) return toast('Please enter the actual counted cash in drawer', 1);
    const notes = m.querySelector('#closeNotesInput').value.trim();
    if (!confirm('Are you sure you want to close Shift #' + shift.Id + ' and generate the Z-Report?')) return;

    try {
      const res = await call('shifts:close', { shiftId: shift.Id, actualCash: act, notes });
      m.close();
      toast('Shift closed successfully! Generating Z-Report...');

      const printArea = document.getElementById('printableReceiptArea');
      if (printArea) {
        printArea.className = '';
        printArea.innerHTML = renderThermalZReportHtml(res.shift, res.shopSettings);
      }
      window.print();

      const zModal = modal(`
        <div class="modal-header">
          <h3 class="modal-title">📊 Shift Z-Report (Shift #${res.shift.Id})</h3>
          <button class="modal-close-x" id="zCloseX">✕</button>
        </div>
        <div style="max-height:480px; overflow-y:auto; padding:4px;">
          ${renderThermalZReportHtml(res.shift, res.shopSettings)}
        </div>
        <div class="modal-actions" style="margin-top:12px;">
          <button type="button" class="btn btn-ghost" id="zCloseBtn">${t('close')}</button>
          <button type="button" class="btn btn-primary" id="zPrintBtn">🖨️ ${t('print')}</button>
        </div>
      `);
      zModal.querySelector('#zCloseX').onclick = zModal.close;
      zModal.querySelector('#zCloseBtn').onclick = zModal.close;
      zModal.querySelector('#zPrintBtn').onclick = () => window.print();

      vPos();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

/* ==========================================================================
   RECENT BILLS, INVOICE REPRINT & RETURNS / REFUNDS
   ========================================================================== */
async function showRecentBillsModal() {
  const recentSales = await call('sales:recent').catch(() => []);
  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">🔍</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Recent Bills & Returns</h3>
          <small class="muted">Search invoices, reprint thermal bills, or process item returns</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="margin-bottom:12px; display:flex; gap:10px;">
      <input id="recentSearchInput" placeholder="Enter invoice number (e.g. INV-000012) and press Enter ↵" style="flex:1; font-weight:700;" autofocus>
      <button type="button" class="btn btn-primary" id="btnSearchInv">Search</button>
    </div>

    <div style="max-height:420px; overflow-y:auto; border:1px solid var(--border-card); border-radius:10px;">
      <table style="width:100%; font-size:12px;">
        <thead>
          <tr style="background:var(--bg-input); text-align:left;">
            <th style="padding:8px 10px;">Invoice #</th>
            <th style="padding:8px 10px;">Date & Time</th>
            <th style="padding:8px 10px;">Cashier</th>
            <th style="padding:8px 10px;">Method</th>
            <th style="padding:8px 10px; text-align:right;">Total</th>
            <th style="padding:8px 10px;">Status</th>
            <th style="padding:8px 10px; text-align:right;">Action</th>
          </tr>
        </thead>
        <tbody id="recentSalesTbody">
          ${recentSales.map(s => `
            <tr style="border-bottom:1px solid var(--border-card);">
              <td style="padding:8px 10px; font-weight:800; font-family:monospace;">${esc(s.InvoiceNo)}</td>
              <td style="padding:8px 10px; color:var(--text-muted);">${s.CreatedAt}</td>
              <td style="padding:8px 10px;">${esc(s.Cashier || 'Cashier')}</td>
              <td style="padding:8px 10px;"><span class="pill info">${esc(s.PaymentMethod)}</span></td>
              <td style="padding:8px 10px; text-align:right; font-weight:800;">LKR ${(+(s.Total || 0)).toFixed(2)}</td>
              <td style="padding:8px 10px;">
                <span class="pill ${s.Status === 'Refunded' ? 'no' : 'ok'}">${esc(s.Status || 'Completed')}</span>
              </td>
              <td style="padding:8px 10px; text-align:right;">
                <button type="button" class="btn btn-sm btn-ghost" data-view-inv="${s.InvoiceNo}">View / Reprint</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="7" class="muted" style="text-align:center; padding:30px;">No sales recorded yet</td></tr>`}
        </tbody>
      </table>
    </div>

    <div class="modal-actions" style="margin-top:14px;">
      <button type="button" class="btn btn-primary" data-x>${t('close')}</button>
    </div>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  const doSearch = () => {
    const inv = m.querySelector('#recentSearchInput').value.trim();
    if (!inv) return;
    m.close();
    showInvoiceActionModal(inv);
  };

  m.querySelector('#btnSearchInv').onclick = doSearch;
  m.querySelector('#recentSearchInput').onkeydown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      doSearch();
    }
  };

  m.querySelectorAll('[data-view-inv]').forEach(btn => {
    btn.onclick = () => {
      m.close();
      showInvoiceActionModal(btn.dataset.viewInv);
    };
  });
}

async function showInvoiceActionModal(invoiceNo) {
  let data;
  try {
    data = await call('sales:getByInvoice', { invoiceNo });
  } catch (err) {
    return toast(err.message, 1);
  }

  const { sale, items, shopSettings } = data;

  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">🧾</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Invoice ${esc(sale.InvoiceNo)}</h3>
          <small class="muted">${new Date(sale.CreatedAt).toLocaleString()} · Cashier: ${esc(sale.Cashier || 'Cashier')}</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="max-height:480px; overflow-y:auto; padding:4px;">
      <div style="display:flex; justify-content:space-between; background:var(--bg-input); padding:10px 14px; border-radius:10px; margin-bottom:12px; font-size:12.5px;">
        <div>Payment Method: <b>${esc(sale.PaymentMethod)}</b> ${sale.CustomerName ? `· Customer: <b>${esc(sale.CustomerName)}</b>` : ''}</div>
        <div>Status: <span class="pill ${sale.Status === 'Refunded' ? 'no' : 'ok'}">${esc(sale.Status || 'Completed')}</span></div>
      </div>

      <table style="width:100%; font-size:12px; border:1px solid var(--border-card); border-radius:8px; overflow:hidden; margin-bottom:12px;">
        <thead>
          <tr style="background:var(--bg-input); text-align:left;">
            <th style="padding:6px 10px;">Item Description</th>
            <th style="padding:6px 10px; text-align:center;">Qty</th>
            <th style="padding:6px 10px; text-align:right;">Price</th>
            <th style="padding:6px 10px; text-align:right;">Line Total</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(it => `
            <tr style="border-bottom:1px solid var(--border-card);">
              <td style="padding:6px 10px;"><b>${esc(it.ItemName)}</b></td>
              <td style="padding:6px 10px; text-align:center;">${it.Qty} ${esc(it.Unit || 'pcs')}</td>
              <td style="padding:6px 10px; text-align:right;">${(+it.UnitPrice).toFixed(2)}</td>
              <td style="padding:6px 10px; text-align:right; font-weight:800;">LKR ${(+it.LineTotal).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div style="display:flex; flex-direction:column; gap:4px; font-size:12.5px; background:var(--bg-panel); padding:10px 14px; border-radius:8px; border:1px solid var(--border-card);">
        <div style="display:flex; justify-content:space-between;"><span class="muted">Subtotal:</span><span>LKR ${((+sale.Total) + (+sale.Discount)).toFixed(2)}</span></div>
        ${sale.Discount > 0 ? `<div style="display:flex; justify-content:space-between;"><span class="muted">Discount:</span><span style="color:#ef4444;">- LKR ${(+(sale.Discount)).toFixed(2)}</span></div>` : ''}
        <div style="display:flex; justify-content:space-between; font-weight:900; font-size:15px; border-top:1px dashed var(--border-card); padding-top:4px;">
          <span>Grand Total:</span><span>LKR ${(+(sale.Total)).toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between;"><span class="muted">Paid:</span><span>LKR ${(+(sale.Paid)).toFixed(2)}</span></div>
        <div style="display:flex; justify-content:space-between;"><span class="muted">Balance / Change:</span><span>LKR ${(+(sale.Balance)).toFixed(2)}</span></div>
      </div>
    </div>

    <div class="modal-actions" style="margin-top:14px; display:flex; justify-content:space-between; align-items:center;">
      <button type="button" class="btn btn-ghost" data-x>${t('close')}</button>
      <div style="display:flex; gap:8px;">
        <button type="button" class="btn btn-danger" id="btnStartRefund">↩️ Process Return / Refund</button>
        <button type="button" class="btn btn-primary" id="btnReprintInv">🖨️ Reprint Thermal Bill</button>
      </div>
    </div>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#btnReprintInv').onclick = () => {
    const printArea = document.getElementById('printableReceiptArea');
    if (printArea) {
      printArea.className = '';
      printArea.innerHTML = renderStandardReceiptHtml({
        invoiceNo: sale.InvoiceNo,
        createdAt: sale.CreatedAt,
        cashier: sale.Cashier,
        lines: items.map(i => ({ name: i.ItemName, price: i.UnitPrice, qty: i.Qty, disc: i.DiscountPct || 0, unit: i.Unit })),
        subtotal: (+sale.Total) + (+sale.Discount),
        discount: sale.Discount,
        total: sale.Total,
        paid: sale.Paid,
        balance: sale.Balance,
        paymentMethod: sale.PaymentMethod,
        cashAmount: sale.CashAmount,
        cardAmount: sale.CardAmount,
        customerName: sale.CustomerName
      }, shopSettings);
    }
    window.print();
    toast(`Reprinting invoice ${sale.InvoiceNo}`);
  };

  m.querySelector('#btnStartRefund').onclick = () => {
    m.close();
    showReturnItemModal(data);
  };
}

function showReturnItemModal({ sale, items, shopSettings }) {
  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">↩️</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Item Return & Refund: ${esc(sale.InvoiceNo)}</h3>
          <small class="muted">Select items to return and restore to inventory</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="refundForm">
      <div style="max-height:420px; overflow-y:auto; padding:4px;">
        <table style="width:100%; font-size:12px; border:1px solid var(--border-card); border-radius:8px; margin-bottom:12px;">
          <thead>
            <tr style="background:var(--bg-input); text-align:left;">
              <th style="padding:6px 8px; width:40px;">Return</th>
              <th style="padding:6px 8px;">Item Description</th>
              <th style="padding:6px 8px; text-align:right;">Price</th>
              <th style="padding:6px 8px; text-align:center;">Sold Qty</th>
              <th style="padding:6px 8px; text-align:center; width:100px;">Return Qty</th>
              <th style="padding:6px 8px; text-align:right;">Refund (LKR)</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((it, idx) => `
              <tr style="border-bottom:1px solid var(--border-card);">
                <td style="padding:6px 8px; text-align:center;">
                  <input type="checkbox" class="refund-chk" data-idx="${idx}" checked>
                </td>
                <td style="padding:6px 8px;"><b>${esc(it.ItemName)}</b></td>
                <td style="padding:6px 8px; text-align:right;">${(+it.UnitPrice).toFixed(2)}</td>
                <td style="padding:6px 8px; text-align:center;">${it.Qty} ${esc(it.Unit || 'pcs')}</td>
                <td style="padding:6px 8px; text-align:center;">
                  <input type="number" min="0.001" max="${it.Qty}" step="any" value="${it.Qty}" class="refund-qty-input" data-idx="${idx}" style="width:80px; padding:4px 6px; font-weight:700; text-align:center;">
                </td>
                <td style="padding:6px 8px; text-align:right; font-weight:800;" class="refund-line-val" data-idx="${idx}">
                  LKR ${(+it.LineTotal).toFixed(2)}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Refund Method</span>
            <select id="refundMethodSelect">
              <option value="Cash">Cash Refund</option>
              <option value="Card">Card Reversal</option>
              <option value="Credit">Store Credit / Customer Account</option>
            </select>
          </label>
          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Reason for Return *</span>
            <select id="refundReasonSelect">
              <option value="Customer Changed Mind">Customer Changed Mind</option>
              <option value="Damaged / Defective">Damaged / Defective Item</option>
              <option value="Wrong Item Given">Wrong Item Given</option>
              <option value="Expired / Spoiled">Expired / Quality Issue</option>
              <option value="Other">Other Reason</option>
            </select>
          </label>
        </div>

        <div class="total-payable-banner" style="background:#ef4444; margin-bottom:10px;">
          <div>
            <div class="total-banner-label">TOTAL REFUND AMOUNT</div>
            <small style="font-size:10.5px; opacity:0.9;">Stock will be automatically added back to inventory</small>
          </div>
          <div class="total-banner-amount" id="totalRefundBanner">LKR 0.00</div>
        </div>
      </div>

      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
        <button type="submit" class="btn btn-danger" style="font-weight:800;">✓ Confirm Refund & Restock</button>
      </div>
    </form>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  const calcRefundTotal = () => {
    let tot = 0;
    m.querySelectorAll('.refund-chk').forEach(chk => {
      const idx = +chk.dataset.idx;
      const qtyInput = m.querySelector(`.refund-qty-input[data-idx="${idx}"]`);
      const valEl = m.querySelector(`.refund-line-val[data-idx="${idx}"]`);
      if (chk.checked) {
        const q = parseFloat(qtyInput.value) || 0;
        const line = Math.round((items[idx].UnitPrice * q * (1 - (items[idx].DiscountPct || 0) / 100)) * 100) / 100;
        valEl.textContent = 'LKR ' + line.toFixed(2);
        tot += line;
      } else {
        valEl.textContent = '—';
      }
    });
    m.querySelector('#totalRefundBanner').textContent = 'LKR ' + tot.toFixed(2);
    return tot;
  };

  m.querySelectorAll('.refund-chk').forEach(c => c.onchange = calcRefundTotal);
  m.querySelectorAll('.refund-qty-input').forEach(i => i.oninput = calcRefundTotal);
  calcRefundTotal();

  m.querySelector('#refundForm').onsubmit = async e => {
    e.preventDefault();
    const returnItems = [];
    m.querySelectorAll('.refund-chk').forEach(chk => {
      if (chk.checked) {
        const idx = +chk.dataset.idx;
        const q = parseFloat(m.querySelector(`.refund-qty-input[data-idx="${idx}"]`).value) || 0;
        if (q > 0) {
          returnItems.push({ itemId: items[idx].ItemId, qty: q });
        }
      }
    });

    if (!returnItems.length) return toast('Please select at least one item to return', 1);
    const refundMethod = m.querySelector('#refundMethodSelect').value;
    const reason = m.querySelector('#refundReasonSelect').value;

    try {
      const res = await call('sales:refund', {
        saleId: sale.Id,
        items: returnItems,
        reason,
        refundMethod
      });
      m.close();
      toast('Refund processed & stock restored!');

      const printArea = document.getElementById('printableReceiptArea');
      if (printArea) {
        printArea.className = '';
        printArea.innerHTML = renderThermalRefundSlipHtml(res, shopSettings);
      }
      window.print();
      vPos();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

/* ==========================================================================
   BARCODE LABEL & PRICE STICKER GENERATOR
   ========================================================================== */
async function showBarcodeGeneratorModal(selectedItem = null) {
  let allItems = items;
  if (!allItems || !allItems.length) {
    allItems = await call('items:list').catch(() => []);
  }

  let currItem = selectedItem || (allItems.length ? allItems[0] : null);

  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">🏷️</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Barcode Label & Price Sticker Generator</h3>
          <small class="muted">Generate & print standard product sticker labels</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:16px; padding:4px 0;">
      <form id="barcodeCfgForm" style="display:flex; flex-direction:column; gap:10px;">
        <label class="field-wrap">
          <span class="field-label">Select Product *</span>
          <select id="bgItemSelect" style="font-size:13px; font-weight:700;">
            ${allItems.map(it => `
              <option value="${it.Id}" ${currItem && currItem.Id === it.Id ? 'selected' : ''}>
                ${esc(it.Name)} · ${esc(it.Barcode || 'No Barcode')} · LKR ${(+it.Price).toFixed(2)}
              </option>
            `).join('')}
          </select>
        </label>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Label Sticker Format</span>
            <select id="bgLabelFormat">
              <option value="roll-50x30">50 × 30 mm Thermal Roll (Standard)</option>
              <option value="roll-40x25">40 × 25 mm Compact Roll</option>
              <option value="a4-sheet">A4 Sheet Grid (3 Columns)</option>
            </select>
          </label>

          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Number of Copies</span>
            <input id="bgCopiesInput" type="number" min="1" max="200" value="10" style="font-weight:700;">
          </label>
        </div>

        <div style="display:flex; gap:6px; margin-top:-4px;">
          <button type="button" class="btn btn-sm btn-ghost bg-preset-copy" data-c="1">1</button>
          <button type="button" class="btn btn-sm btn-ghost bg-preset-copy" data-c="5">5</button>
          <button type="button" class="btn btn-sm btn-ghost bg-preset-copy" data-c="10">10</button>
          <button type="button" class="btn btn-sm btn-ghost bg-preset-copy" data-c="20">20</button>
          <button type="button" class="btn btn-sm btn-ghost bg-preset-copy" data-c="50">50</button>
          <button type="button" class="btn btn-sm btn-ghost bg-preset-copy" data-c="100">100</button>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Barcode Number</span>
            <input id="bgBarcodeInput" type="text" value="${esc(currItem?.Barcode || '')}" placeholder="e.g. 894512345678" style="font-weight:700;">
          </label>

          <label class="field-wrap" style="margin:0;">
            <span class="field-label">Display Price (LKR)</span>
            <input id="bgPriceInput" type="number" step="any" value="${currItem ? (+currItem.Price).toFixed(2) : '0.00'}" style="font-weight:700;">
          </label>
        </div>

        <div style="background:var(--bg-input); padding:8px 12px; border-radius:8px; display:flex; flex-direction:column; gap:6px; font-size:12px;">
          <span style="font-weight:800; font-size:11.5px; color:var(--text-main);">Included Label Elements:</span>
          <label style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="bgIncShop" checked> Show Store Name (${esc(currentShopProfile?.defaultShopName || 'Kade POS')})
          </label>
          <label style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="bgIncPrice" checked> Show Large Price Banner
          </label>
          <label style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="bgIncUnit" checked> Show Weight / Unit (${esc(currItem?.Unit || 'pcs')})
          </label>
        </div>
      </form>

      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <span class="muted" style="font-size:11px; margin-bottom:6px; font-weight:700;">LIVE THERMAL STICKER PREVIEW</span>
        <div class="barcode-preview-container" style="width:100%; min-height:220px;">
          <div id="barcodeLiveSticker" class="barcode-sticker">
          </div>
        </div>
        <small class="muted" style="font-size:10.5px; text-align:center;">
          Optimized for high-contrast thermal heads (Zebra, Xprinter, TSC, Bixolon, Gprinter)
        </small>
      </div>
    </div>

    <div class="modal-actions" style="margin-top:16px; display:flex; justify-content:space-between; align-items:center;">
      <button type="button" class="btn btn-ghost" data-x>${t('cancel')}</button>
      <button type="button" class="btn btn-primary" id="btnPrintBarcodeStickers" style="font-weight:800; display:flex; align-items:center; gap:6px;">
        <span>🖨️ Print Labels</span>
      </button>
    </div>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  const updatePreview = () => {
    const selId = +m.querySelector('#bgItemSelect').value;
    currItem = allItems.find(i => i.Id === selId) || currItem;

    const barcodeVal = m.querySelector('#bgBarcodeInput').value.trim() || (currItem ? (currItem.Barcode || `ITM${currItem.Id}`) : '100001');
    const priceVal = parseFloat(m.querySelector('#bgPriceInput').value) || (currItem ? +currItem.Price : 0);
    const incShop = m.querySelector('#bgIncShop').checked;
    const incPrice = m.querySelector('#bgIncPrice').checked;
    const incUnit = m.querySelector('#bgIncUnit').checked;
    const shopName = currentShopProfile?.defaultShopName || 'KADE POS';

    const svg = generateCode128Svg(barcodeVal, 200, 48);

    m.querySelector('#barcodeLiveSticker').innerHTML = `
      ${incShop ? `<div class="barcode-sticker-shop">${esc(shopName)}</div>` : ''}
      <div class="barcode-sticker-name">${esc(currItem?.Name || 'Product Name')}</div>
      <div class="barcode-sticker-svg">${svg}</div>
      ${incPrice ? `
        <div class="barcode-sticker-price">
          LKR ${priceVal.toFixed(2)} ${incUnit ? `<span style="font-size:11px; font-weight:700; color:#4b5563;">/ ${esc(currItem?.Unit || 'pcs')}</span>` : ''}
        </div>
      ` : ''}
    `;
  };

  m.querySelector('#bgItemSelect').onchange = () => {
    const selId = +m.querySelector('#bgItemSelect').value;
    currItem = allItems.find(i => i.Id === selId);
    if (currItem) {
      m.querySelector('#bgBarcodeInput').value = currItem.Barcode || `ITM${currItem.Id}`;
      m.querySelector('#bgPriceInput').value = (+currItem.Price).toFixed(2);
    }
    updatePreview();
  };

  m.querySelector('#bgBarcodeInput').oninput = updatePreview;
  m.querySelector('#bgPriceInput').oninput = updatePreview;
  m.querySelector('#bgIncShop').onchange = updatePreview;
  m.querySelector('#bgIncPrice').onchange = updatePreview;
  m.querySelector('#bgIncUnit').onchange = updatePreview;

  m.querySelectorAll('.bg-preset-copy').forEach(btn => {
    btn.onclick = () => {
      m.querySelector('#bgCopiesInput').value = btn.dataset.c;
    };
  });

  updatePreview();

  m.querySelector('#btnPrintBarcodeStickers').onclick = () => {
    const copies = Math.max(1, Math.min(200, parseInt(m.querySelector('#bgCopiesInput').value) || 1));
    const format = m.querySelector('#bgLabelFormat').value;
    const stickerHtml = m.querySelector('#barcodeLiveSticker').innerHTML;

    const printArea = document.getElementById('printableReceiptArea');
    if (printArea) {
      printArea.className = format === 'a4-sheet' ? 'labels-print-a4' : 'labels-print-roll';
      printArea.innerHTML = Array(copies).fill(0).map(() => `
        <div class="print-label-item">
          ${stickerHtml}
        </div>
      `).join('');
    }

    window.print();
    toast(`Printing ${copies} barcode label stickers`);
  };
}

/* ==========================================================================
   VIEW 2: POS TERMINAL (RAPID KEYBOARD WORKFLOW & ENTERPRISE REGISTER)
   ========================================================================== */
async function vPos() {
  let activeShift = null;
  let customerList = [];
  try {
    [items, activeShift, customerList, cachedReceiptSettings] = await Promise.all([
      call('items:list'),
      call('shifts:current').catch(() => null),
      call('customers:list').catch(() => []),
      call('settings:getReceipt').catch(() => ({}))
    ]);
  } catch (err) {
    items = await call('items:list').catch(() => []);
  }

  const heldCount = getHeldBills().length;
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
        <!-- Search Bar with Instant Type / Scan Hint -->
        <div class="pos-search-bar">
          <div class="pos-search-bar-wrap">
            <svg class="pos-search-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input id="q" placeholder="${esc(currentShopProfile?.searchPlaceholder || t('searchPos'))}" autofocus autocomplete="off">
            <span class="pos-shortcut-hint-pill">Type / Scan</span>
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
            <div class="cart-title-icon">🧾</div>
            <div>
              <h3 class="cart-title">${t('currentBill')}</h3>
              <span class="cart-count-pill" id="cartCountPill">0 items · 0 qty</span>
            </div>
          </div>

          <div class="cart-header-actions">
            <!-- Print Receipt ON/OFF Toggle -->
            <button type="button" class="print-toggle-btn ${posAutoPrint ? 'active' : ''}" id="posPrintToggle" title="Toggle Auto Receipt Printing">
              <span>🖨️</span>
              <span id="posPrintToggleText">${posAutoPrint ? t('printOn') : t('printOff')}</span>
            </button>

            <!-- Clear Bill -->
            <button id="clr" class="cart-clear-btn" title="Clear Bill">
              <span>✕</span>
              <span>${t('clearBill')}</span>
            </button>
          </div>
        </div>

        <!-- POS Register Quick Toolbar (Shift, Hold, Held, Bills) in a dedicated modern 4-button strip -->
        <div class="pos-register-toolbar">
          <button type="button" class="reg-tool-btn ${activeShift ? 'active-shift' : ''}" id="posShiftBtn" title="Shift Management & Cash Reconciliation">
            <span class="rt-status-dot ${activeShift ? 'online' : 'offline'}"></span>
            <span class="rt-label">${activeShift ? `Shift #${activeShift.Id}` : 'Shift'}</span>
          </button>

          <button type="button" class="reg-tool-btn" id="posHoldBtn" title="Park current customer cart">
            <span class="rt-icon">⏸️</span>
            <span class="rt-label">Hold</span>
          </button>

          <button type="button" class="reg-tool-btn" id="posHeldBillsBtn" title="View & recall parked bills">
            <span class="rt-icon">📋</span>
            <span class="rt-label">Held</span>
            <span class="rt-badge" id="heldBillsCountBadge" style="${heldCount > 0 ? '' : 'display:none;'}">${heldCount}</span>
          </button>

          <button type="button" class="reg-tool-btn" id="posRecentBillsBtn" title="Search recent invoices, reprint & returns">
            <span class="rt-icon">🔍</span>
            <span class="rt-label">Bills</span>
          </button>
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
              <small class="muted" style="font-size:10.5px;">Press Enter to choose Cash / Card ↵</small>
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

          <!-- Payment Method Selector: Cash vs Card vs Split vs Credit -->
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div class="pay-method-toggle">
              <button type="button" class="pay-method-btn active" data-meth="Cash">
                💵 ${t('cash')}
              </button>
              <button type="button" class="pay-method-btn" data-meth="Card">
                💳 ${t('card')}
              </button>
              <button type="button" class="pay-method-btn" data-meth="Split" title="Combined Cash and Card payment">
                ⚡ Split
              </button>
              <button type="button" class="pay-method-btn" data-meth="Credit" title="Store Credit / Naya Account">
                📒 Credit
              </button>
            </div>
          </div>

          <!-- Cash Received Inputs (Only visible in Cash mode) -->
          <div id="cashFieldsWrap" style="display:flex; flex-direction:column; gap:8px;">
            <div class="cash-received-box">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="field-label" style="font-weight:800;">${t('cashReceived')} (LKR) *</span>
                <small class="muted" style="font-size:11px;">Press Enter to Complete Sale ↵</small>
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

          <!-- Split Payment Fields (Only visible in Split mode) -->
          <div id="splitFieldsWrap" class="hide" style="display:flex; flex-direction:column; gap:8px; background:var(--bg-input); padding:10px 12px; border-radius:10px; border:1px solid var(--border-card);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:12px; font-weight:800; color:var(--text-main);">⚡ Dual Tender Split</span>
              <button type="button" class="btn btn-sm btn-ghost" id="btnSplit50" style="padding:2px 8px; font-size:11px;">50 / 50 Split</button>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <label class="field-wrap" style="margin:0;">
                <span class="field-label" style="font-size:11px;">💵 Cash Portion (LKR)</span>
                <input id="splitCashAmt" type="number" min="0" step="any" placeholder="0.00" style="padding:8px 10px; font-size:13px; font-weight:700;">
              </label>
              <label class="field-wrap" style="margin:0;">
                <span class="field-label" style="font-size:11px;">💳 Card Portion (LKR)</span>
                <input id="splitCardAmt" type="number" min="0" step="any" placeholder="0.00" style="padding:8px 10px; font-size:13px; font-weight:700;">
              </label>
            </div>

            <div style="display:flex; flex-direction:column; gap:4px; margin-top:2px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="field-label" style="font-size:11px;">Cash Received from Customer:</span>
                <small class="muted" style="font-size:10.5px;">For cash portion</small>
              </div>
              <input id="splitCashPaid" type="text" inputmode="decimal" placeholder="0.00" style="padding:8px 10px; font-size:14px; font-weight:800;">
            </div>

            <div id="splitBalanceBadge" class="balance-status-badge exact-or-change" style="padding:6px 10px; font-size:12px;">
              <span>Cash Change:</span>
              <b id="splitBal" style="font-size:14px;">LKR 0.00</b>
            </div>
          </div>

          <!-- Customer Credit Fields (Only visible in Credit mode) -->
          <div id="creditFieldsWrap" class="hide" style="display:flex; flex-direction:column; gap:8px; background:var(--bg-input); padding:10px 12px; border-radius:10px; border:1px solid var(--border-card);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:12px; font-weight:800; color:var(--text-main);">📒 Store Credit (Naya)</span>
              <button type="button" class="btn btn-sm btn-ghost" id="btnAddCreditCust" style="padding:2px 8px; font-size:11px;">+ New Customer</button>
            </div>

            <label class="field-wrap" style="margin:0;">
              <span class="field-label" style="font-size:11px;">Select Customer Account *</span>
              <select id="posCreditCustomer" style="padding:8px 10px; font-size:13px; font-weight:700;">
                <option value="">-- Choose Customer --</option>
                ${(customerList || []).map(c => `
                  <option value="${c.Id}" data-limit="${c.CreditLimit}" data-bal="${c.CreditBalance}" data-name="${esc(c.Name)}">
                    ${esc(c.Name)} (${c.Phone || 'No phone'}) · Bal: LKR ${(+(c.CreditBalance || 0)).toFixed(2)}
                  </option>
                `).join('')}
              </select>
            </label>

            <div id="custCreditStatusBox" class="hide" style="background:var(--bg-panel); padding:8px 10px; border-radius:8px; border:1px solid var(--border-card); font-size:11.5px; display:flex; flex-direction:column; gap:3px;">
              <div style="display:flex; justify-content:space-between;">
                <span class="muted">Credit Limit:</span>
                <b id="ccLimit">LKR 0.00</b>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span class="muted">Current Balance:</span>
                <b id="ccBal" style="color:#ef4444;">LKR 0.00</b>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span class="muted">Available Credit:</span>
                <b id="ccAvail" style="color:#10b981;">LKR 0.00</b>
              </div>
              <div id="ccOverLimitWarn" class="hide" style="color:#ef4444; font-weight:800; margin-top:4px; font-size:11px; background:rgba(239,68,68,0.1); padding:4px 6px; border-radius:4px;">
                ⚠️ Sale total exceeds customer's credit limit!
              </div>
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
    const registeredCatNames = (categories || []).map(c => c.Name);
    const templateCats = currentShopProfile?.categories || [];
    const cats = ['All', ...new Set([...registeredCatNames, ...items.map(i => i.Category).filter(Boolean), ...templateCats])];
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
          <div class="tile-name">
            ${esc(i.Name)}
            ${i.IsLoose ? `<span class="tile-loose-indicator" title="Loose / Sold by weight or measure">⚖️</span>` : ''}
          </div>
          <div class="tile-cat-badge">${esc(i.Category || 'General')}</div>
        </div>
        <div class="tile-bottom">
          <span class="tile-price">${fmt(i.Price)}<small class="muted" style="font-size:10px; font-weight:600;">/${esc(i.Unit || 'pcs')}</small></span>
          <span class="tile-stock ${i.Stock <= 5 ? 'low' : ''}">${t('stock')}: ${Number.isInteger(+i.Stock) ? i.Stock : (+i.Stock).toFixed(3)} ${esc(i.Unit || 'pcs')}</span>
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

    if (posPaymentMethod === 'Credit') {
      return;
    }

    if (posPaymentMethod === 'Split') {
      const cashAmt = Math.max(0, parseFloat($('#splitCashAmt')?.value) || 0);
      const splitPaid = parseFloat($('#splitCashPaid')?.value);
      const sBadge = $('#splitBalanceBadge');
      if (isNaN(splitPaid) || !$('#splitCashPaid')?.value.trim()) {
        $('#splitBal').textContent = '—';
        sBadge.className = 'balance-status-badge exact-or-change';
      } else if (splitPaid >= cashAmt) {
        $('#splitBal').textContent = fmt(splitPaid - cashAmt);
        sBadge.className = 'balance-status-badge exact-or-change';
      } else {
        $('#splitBal').textContent = t('shortBy') + ' ' + fmt(cashAmt - splitPaid);
        sBadge.className = 'balance-status-badge short';
      }
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
    const totalQtyCount = cart.reduce((s, l) => s + (+l.qty || 0), 0);
    const qtyStr = Number.isInteger(totalQtyCount) ? totalQtyCount : totalQtyCount.toFixed(3);

    $('#cartCountPill').textContent = `${cart.length} items · ${qtyStr} qty`;

    $('#lines').innerHTML = cart.map((l, i) => `
      <div class="cart-line-card ${l.id === lastAddedId ? 'newly-added' : ''}" data-idx="${i}">
        <div class="cart-line-top">
          <div>
            <div class="cart-line-name">
              ${esc(l.name)}
              ${l.isLoose ? `<span class="tile-loose-indicator" title="Loose item">⚖️</span>` : ''}
            </div>
            <div class="cart-line-meta">@ LKR ${l.price.toFixed(2)} / ${esc(l.unit || 'pcs')} · In Stock: ${Number.isInteger(+l.stock) ? l.stock : (+l.stock).toFixed(3)} ${esc(l.unit || 'pcs')}</div>
          </div>
          <button type="button" class="cart-line-del" data-rm="${i}" title="Remove item">✕</button>
        </div>

        <div class="cart-line-controls">
          <div class="qty-stepper">
            <button type="button" class="qty-step-btn" data-step="${l.isLoose ? '-0.1' : '-1'}" data-i="${i}">−</button>
            <input type="number" min="0.001" step="${l.isLoose ? '0.001' : '1'}" max="${l.stock}" value="${l.isLoose ? (Number.isInteger(+l.qty) ? l.qty : (+l.qty).toFixed(3)) : l.qty}" class="qty-input-box" data-i="${i}" data-f="qty">
            <button type="button" class="qty-step-btn" data-step="${l.isLoose ? '0.1' : '1'}" data-i="${i}">+</button>
            <span class="cart-unit-tag ${l.isLoose ? 'loose-tag' : ''}" data-measure-idx="${i}" title="${l.isLoose ? 'Click to adjust weight/measure' : ''}">
              ${esc(l.unit || 'pcs')}
            </span>
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
        <small style="color:var(--text-muted);">Type any letter or scan to add items · Arrow keys to select</small>
      </div>
    `;

    $('#posSubtot').textContent = fmt(sub);
    $('#tot').textContent = fmt(tot);

    if (posPaymentMethod === 'Split') {
      const half = Math.round((tot / 2) * 100) / 100;
      if (!$('#splitCashAmt').value || +$('#splitCashAmt').value <= 0) {
        $('#splitCashAmt').value = half.toFixed(2);
        $('#splitCardAmt').value = (tot - half).toFixed(2);
      }
    }

    calcBal();

    if (lastAddedId) {
      const addedEl = $('#lines .cart-line-card.newly-added');
      if (addedEl) addedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  };

  const add = id => {
    const it = items.find(i => i.Id === id);
    if (!it) return;
    const isLoose = Boolean(it.IsLoose || (it.Unit && ['kg', 'g', 'm', 'l', 'ml', 'meter', 'liter'].includes(it.Unit.toLowerCase())));

    if (isLoose) {
      const existing = cart.find(c => c.id === id);
      promptLooseItemQty(it, qty => {
        if (!(qty > 0)) return;
        if (existing) {
          existing.qty = qty;
        } else {
          cart.push({
            id,
            name: it.Name,
            price: +it.Price,
            qty,
            disc: 0,
            stock: it.Stock,
            unit: it.Unit || 'kg',
            isLoose: true
          });
        }
        drawCart(id);
      }, existing ? existing.qty : 1.0);
      return;
    }

    const l = cart.find(c => c.id === id);
    if ((l ? l.qty : 0) + 1 > it.Stock) return toast(t('notEnough'), 1);

    if (l) {
      l.qty++;
    } else {
      cart.push({
        id,
        name: it.Name,
        price: +it.Price,
        qty: 1,
        disc: 0,
        stock: it.Stock,
        unit: it.Unit || 'pcs',
        isLoose: false
      });
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
  $('#posShiftBtn').onclick = () => showShiftModal();
  $('#posHoldBtn').onclick = () => holdCurrentBill();
  $('#posHeldBillsBtn').onclick = () => showHeldBillsModal();
  $('#posRecentBillsBtn').onclick = () => showRecentBillsModal();

  $('#btnAddCreditCust').onclick = () => {
    showCustomerEditModal(null, async () => {
      customerList = await call('customers:list').catch(() => []);
      const sel = $('#posCreditCustomer');
      if (sel) {
        sel.innerHTML = `
          <option value="">-- Choose Customer --</option>
          ${customerList.map(c => `
            <option value="${c.Id}" data-limit="${c.CreditLimit}" data-bal="${c.CreditBalance}" data-name="${esc(c.Name)}">
              ${esc(c.Name)} (${c.Phone || 'No phone'}) · Bal: LKR ${(+(c.CreditBalance || 0)).toFixed(2)}
            </option>
          `).join('')}
        `;
      }
    });
  };

  const PAY_METHODS = ['Cash', 'Card', 'Split', 'Credit'];

  const setPaymentMethod = (meth, shouldFocus = false) => {
    posPaymentMethod = meth;
    document.querySelectorAll('.pay-method-btn').forEach(btn => {
      const active = btn.dataset.meth === meth;
      btn.classList.toggle('active', active);
      if (active && shouldFocus) {
        btn.focus();
      }
    });

    $('#cashFieldsWrap').classList.toggle('hide', posPaymentMethod !== 'Cash');
    $('#cardFieldWrap').classList.toggle('hide', posPaymentMethod !== 'Card');
    $('#splitFieldsWrap').classList.toggle('hide', posPaymentMethod !== 'Split');
    $('#creditFieldsWrap').classList.toggle('hide', posPaymentMethod !== 'Credit');

    if (posPaymentMethod === 'Split') {
      const tot = getTotal();
      const half = Math.round((tot / 2) * 100) / 100;
      $('#splitCashAmt').value = half.toFixed(2);
      $('#splitCardAmt').value = (tot - half).toFixed(2);
      $('#splitCashPaid').value = half.toFixed(2);
    }
    calcBal();
  };

  // Payment Method Switcher (Cash vs Card vs Split vs Credit)
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.onclick = () => setPaymentMethod(btn.dataset.meth, false);
  });

  // Split calculations
  $('#btnSplit50').onclick = () => {
    const tot = getTotal();
    const half = Math.round((tot / 2) * 100) / 100;
    $('#splitCashAmt').value = half.toFixed(2);
    $('#splitCardAmt').value = (tot - half).toFixed(2);
    $('#splitCashPaid').value = half.toFixed(2);
    calcBal();
  };

  $('#splitCashAmt').oninput = () => {
    const tot = getTotal();
    const c = Math.max(0, parseFloat($('#splitCashAmt').value) || 0);
    $('#splitCardAmt').value = Math.max(0, Math.round((tot - c) * 100) / 100).toFixed(2);
    calcBal();
  };

  $('#splitCardAmt').oninput = () => {
    const tot = getTotal();
    const cd = Math.max(0, parseFloat($('#splitCardAmt').value) || 0);
    $('#splitCashAmt').value = Math.max(0, Math.round((tot - cd) * 100) / 100).toFixed(2);
    calcBal();
  };

  $('#splitCashPaid').oninput = e => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = e.target.value.split('.');
    if (parts.length > 2) e.target.value = parts[0] + '.' + parts.slice(1).join('');
    calcBal();
  };

  // Credit Customer selection
  $('#posCreditCustomer').onchange = () => {
    const sel = $('#posCreditCustomer');
    const opt = sel.selectedOptions[0];
    const box = $('#custCreditStatusBox');
    if (!sel.value || !opt) {
      box.classList.add('hide');
      return;
    }
    box.classList.remove('hide');
    const limit = parseFloat(opt.dataset.limit) || 0;
    const bal = parseFloat(opt.dataset.bal) || 0;
    const tot = getTotal();
    const avail = Math.max(0, limit - bal);

    $('#ccLimit').textContent = 'LKR ' + limit.toFixed(2);
    $('#ccBal').textContent = 'LKR ' + bal.toFixed(2);
    $('#ccAvail').textContent = 'LKR ' + avail.toFixed(2);

    const warn = $('#ccOverLimitWarn');
    if (bal + tot > limit) {
      warn.classList.remove('hide');
    } else {
      warn.classList.add('hide');
    }
  };

  // Filter numeric cash input
  $('#paid').oninput = e => {
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
    const disc = getDiscount();
    const paidInput = $('#paid');
    const rawPaid = paidInput.value.trim();

    let finalPaid = tot;
    let cashAmt = 0;
    let cardAmt = 0;
    let selectedCustId = null;

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
      finalPaid = p;
      cashAmt = tot;
    } else if (posPaymentMethod === 'Card') {
      finalPaid = tot;
      cardAmt = tot;
    } else if (posPaymentMethod === 'Split') {
      const cPortion = parseFloat($('#splitCashAmt').value) || 0;
      const cdPortion = parseFloat($('#splitCardAmt').value) || 0;
      if (Math.abs((cPortion + cdPortion) - tot) > 0.05) {
        return toast('Split Cash + Card amounts must equal Net Payable (LKR ' + tot.toFixed(2) + ')', 1);
      }
      const cPaid = parseFloat($('#splitCashPaid').value);
      if (isNaN(cPaid) || cPaid < cPortion) {
        return toast('Cash received must be at least the Cash portion (LKR ' + cPortion.toFixed(2) + ')', 1);
      }
      cashAmt = cPortion;
      cardAmt = cdPortion;
      finalPaid = cPaid + cdPortion;
    } else if (posPaymentMethod === 'Credit') {
      selectedCustId = $('#posCreditCustomer').value;
      if (!selectedCustId) {
        return toast('Please select a customer account for Store Credit sale', 1);
      }
      finalPaid = 0;
    }

    try {
      const r = await call('sales:checkout', {
        lines: cart.map(l => ({ id: l.id, qty: l.qty, disc: l.disc })),
        paid: finalPaid,
        paymentMethod: posPaymentMethod,
        billDiscount: disc,
        cashAmount: cashAmt,
        cardAmount: cardAmt,
        customerId: selectedCustId ? +selectedCustId : null,
        shiftId: activeShift ? activeShift.Id : null
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

  // Cart event delegation (Steppers, quantity input, discount, deletion, measure adjustments)
  $('#lines').onclick = e => {
    const measureBtn = e.target.closest('[data-measure-idx]');
    if (measureBtn) {
      const idx = +measureBtn.dataset.measureIdx;
      const l = cart[idx];
      const it = items.find(item => item.Id === l.id);
      if (it && (l.isLoose || it.IsLoose)) {
        promptLooseItemQty(it, newQty => {
          if (newQty > 0) {
            l.qty = newQty;
            drawCart();
          }
        }, l.qty);
        return;
      }
    }

    const stepBtn = e.target.closest('[data-step]');
    if (stepBtn) {
      const idx = +stepBtn.dataset.i;
      const step = +stepBtn.dataset.step;
      const l = cart[idx];
      if (l) {
        const nextQty = Math.round((l.qty + step) * 1000) / 1000;
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
    if (f === 'qty') {
      const v = parseFloat(e.target.value) || 0;
      if (v <= 0) {
        cart.splice(i, 1);
      } else {
        const val = l.isLoose ? (Math.round(v * 1000) / 1000) : Math.max(1, Math.round(v));
        l.qty = Math.min(val, l.stock);
      }
    } else {
      const v = Math.max(0, Math.min(100, parseFloat(e.target.value) || 0));
      l.disc = v;
    }
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

  // Keyboard Navigation Handler: Seamless typing, arrow navigation, discount & payment flow (No F-keys required)
  window.onkeydown = e => {
    if (tab !== 'pos' || $('.modal-backdrop')) return;

    const activeEl = document.activeElement;
    const isInput = activeEl && ['INPUT', 'SELECT', 'TEXTAREA'].includes(activeEl.tagName);
    const isPayBtn = activeEl && activeEl.classList.contains('pay-method-btn');

    // 1. Always-On Letter & Barcode Search:
    // If user presses any letter, number, or symbol while NOT inside an input or pay button,
    // automatically focus the search bar and type the character!
    if (!isInput && !isPayBtn) {
      if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const qEl = $('#q');
        if (qEl) {
          e.preventDefault();
          qEl.focus();
          qEl.value += e.key;
          qEl.dispatchEvent(new Event('input', { bubbles: true }));
          isNavigatingGrid = false;
          updateTileFocus();
          return;
        }
      }
      if (e.key === 'Backspace') {
        const qEl = $('#q');
        if (qEl) {
          e.preventDefault();
          qEl.focus();
          qEl.value = qEl.value.slice(0, -1);
          qEl.dispatchEvent(new Event('input', { bubbles: true }));
          isNavigatingGrid = false;
          updateTileFocus();
          return;
        }
      }
    }

    // 2. Focus is in Search Input (#q):
    if (activeEl === $('#q')) {
      const qVal = $('#q').value.trim();

      if (e.key === 'Enter') {
        e.preventDefault();
        // 2a. Exact barcode match
        const exactBarcode = items.find(it => it.Barcode && it.Barcode === qVal);
        if (exactBarcode) {
          add(exactBarcode.Id);
          $('#q').value = '';
          drawGrid();
          return;
        }

        // 2b. Matching search items
        const visible = getVisibleItems();
        if (qVal && visible.length) {
          const pickedItem = isNavigatingGrid && visible[selectedTileIndex] ? visible[selectedTileIndex] : visible[0];
          add(pickedItem.Id);
          $('#q').value = '';
          isNavigatingGrid = false;
          updateTileFocus();
          drawGrid();
          return;
        }

        // 2c. Search is empty -> Advance directly to Bill Discount!
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

      // Arrow Down or Right enters product grid selection
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

    // 3. Navigating Product Grid with Arrow Keys:
    if (isNavigatingGrid && !isInput && !isPayBtn) {
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
          // Return focus to search input ready for next scan/type or Enter checkout
          const qEl = $('#q');
          if (qEl) {
            qEl.value = '';
            qEl.focus();
          }
          isNavigatingGrid = false;
          updateTileFocus();
          drawGrid();
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

    // 4. Focus is in Bill Discount (#posDiscount):
    if (activeEl === $('#posDiscount')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        posBillDiscount = Math.max(0, parseFloat($('#posDiscount').value) || 0);
        drawCart();
        // Advance to Payment Method selection
        setPaymentMethod(posPaymentMethod, true);
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'Escape') {
        e.preventDefault();
        const qEl = $('#q');
        if (qEl) { qEl.focus(); qEl.select(); }
        return;
      }
    }

    // 5. Focus is on Payment Method Buttons (Cash vs Card vs Split vs Credit):
    if (isPayBtn) {
      // Left or Right Arrow: Switch Payment Method
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const curIdx = PAY_METHODS.indexOf(posPaymentMethod);
        const nextMeth = PAY_METHODS[(curIdx + 1) % PAY_METHODS.length];
        setPaymentMethod(nextMeth, true);
        return;
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const curIdx = PAY_METHODS.indexOf(posPaymentMethod);
        const prevMeth = PAY_METHODS[(curIdx - 1 + PAY_METHODS.length) % PAY_METHODS.length];
        setPaymentMethod(prevMeth, true);
        return;
      }

      // Enter on Payment Method:
      if (e.key === 'Enter') {
        e.preventDefault();
        if (posPaymentMethod === 'Cash') {
          const paidEl = $('#paid');
          if (paidEl) { paidEl.focus(); paidEl.select(); }
        } else if (posPaymentMethod === 'Card') {
          // Card requires no cash input -> proceed directly to complete sale!
          checkout();
        } else if (posPaymentMethod === 'Split') {
          const splitPaid = $('#splitCashPaid');
          if (splitPaid) { splitPaid.focus(); splitPaid.select(); }
        } else if (posPaymentMethod === 'Credit') {
          const custSel = $('#posCreditCustomer');
          if (custSel) custSel.focus();
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        const discEl = $('#posDiscount');
        if (discEl) { discEl.focus(); discEl.select(); }
        return;
      }
    }

    // 6. Focus is in Cash Received (#paid):
    if (activeEl === $('#paid')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkout();
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'Escape') {
        e.preventDefault();
        setPaymentMethod('Cash', true);
        return;
      }
    }

    // 7. Focus is in Split Cash Received (#splitCashPaid):
    if (activeEl === $('#splitCashPaid')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkout();
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'Escape') {
        e.preventDefault();
        setPaymentMethod('Split', true);
        return;
      }
    }

    // 8. Focus is in Credit Customer (#posCreditCustomer):
    if (activeEl === $('#posCreditCustomer')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if ($('#posCreditCustomer').value) {
          checkout();
        } else {
          toast('Please choose a customer for credit account', 1);
        }
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setPaymentMethod('Credit', true);
        return;
      }
    }

    // Optional background support for desktop keyboards (not required in UI)
    if (e.key === 'F1') { e.preventDefault(); const qEl = $('#q'); if (qEl) { qEl.focus(); qEl.select(); isNavigatingGrid = false; updateTileFocus(); } return; }
    if (e.key === 'F3') { e.preventDefault(); showRecentBillsModal(); return; }
    if (e.key === 'F4') { e.preventDefault(); holdCurrentBill(); return; }
    if (e.key === 'F8') { e.preventDefault(); togglePrint(); return; }
    if (e.key === 'F9') { e.preventDefault(); showShiftModal(); return; }
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

    <!-- Shop Branding Presets Quick Bar -->
    <div class="panel-card" style="margin-bottom:16px; padding:14px 18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <b style="font-size:13px; color:var(--text-main);">⚡ Instant Shop Branding Presets</b>
          <p style="margin:2px 0 0; font-size:11.5px; color:var(--text-dim);">
            Click any shop profile below to autofill Store Name, Tagline, Receipt Header, and Footer:
          </p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;" id="receiptPresetButtons">
          ${Object.values(SHOP_TEMPLATES).map(tpl => `
            <button type="button" class="btn btn-sm ${tpl.id === currentShopType ? 'btn-primary' : 'btn-ghost'}" data-shop="${tpl.id}" style="font-size:11.5px; padding:4px 10px; border-radius:8px;">
              ${tpl.icon} ${tpl.shortName}
            </button>
          `).join('')}
        </div>
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

  const presetButtons = $('#receiptPresetButtons');
  if (presetButtons) {
    presetButtons.onclick = e => {
      const btn = e.target.closest('button[data-shop]');
      if (!btn) return;
      const tpl = (typeof SHOP_TEMPLATES !== 'undefined' ? SHOP_TEMPLATES[btn.dataset.shop] : null);
      if (!tpl) return;
      $('#rShopName').value = tpl.defaultShopName;
      $('#rShopTagline').value = tpl.defaultTagline;
      $('#rReceiptHeader').value = tpl.defaultReceiptHeader;
      $('#rReceiptFooter').value = tpl.defaultReceiptFooter;
      presetButtons.querySelectorAll('button').forEach(b => b.className = 'btn btn-sm btn-ghost');
      btn.className = 'btn btn-sm btn-primary';
      updatePreview();
      toast(`Autofilled presets for ${tpl.name}! Click Save to apply.`);
    };
  }

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
   CATEGORY MANAGEMENT SYSTEM (MODAL & ACTIONS)
   ========================================================================== */
async function openCategoryManagerModal(onCategoryChange) {
  let catList = await call('categories:list');

  const m = modal(`
    <div class="modal-header">
      <div>
        <h3 class="modal-title" style="margin:0; display:flex; align-items:center; gap:8px;">
          <span>🏷️ Manage Product Categories</span>
        </h3>
        <span class="muted small">Add, rename, or delete categories across POS and inventory</span>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="margin-top:14px; display:flex; flex-direction:column; gap:16px;">
      <!-- Quick Add Category Card -->
      <form id="catManagerAddForm" style="display:flex; gap:10px; align-items:center; background:var(--bg-input); padding:12px 14px; border-radius:12px; border:1px solid var(--border-card); flex-wrap:wrap;">
        <input id="catManagerNewName" placeholder="New category name (e.g. Dog Food, Soft Toys, Biscuits)" required style="flex:1; min-width:200px; padding:8px 12px; border-radius:8px; border:1px solid var(--border-card); background:var(--bg-card); color:var(--text-main);">
        <input id="catManagerNewDesc" placeholder="Description (optional)" style="width:200px; padding:8px 12px; border-radius:8px; border:1px solid var(--border-card); background:var(--bg-card); color:var(--text-main);">
        <button type="submit" class="btn btn-primary btn-sm" id="btnSubmitAddCat" style="font-weight:800; padding:8px 16px; white-space:nowrap;">
          + Add Category
        </button>
      </form>

      <!-- Category List -->
      <div style="max-height:380px; overflow-y:auto; border:1px solid var(--border-card); border-radius:12px;">
        <table style="width:100%; border-collapse:collapse;" id="catManagerTable">
          <thead>
            <tr style="background:var(--bg-input); border-bottom:1px solid var(--border-card); text-align:left; font-size:12px; color:var(--text-dim);">
              <th style="padding:10px 14px;">Category Name</th>
              <th style="padding:10px 14px;">Description</th>
              <th style="padding:10px 14px; text-align:center;">Products</th>
              <th style="padding:10px 14px; text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody id="catManagerTableBody"></tbody>
        </table>
      </div>

      <div class="modal-actions" style="margin-top:4px;">
        <button type="button" class="btn btn-ghost" data-x>${t('close')}</button>
      </div>
    </div>
  `, true);

  const renderTable = () => {
    const tbody = m.querySelector('#catManagerTableBody');
    if (!tbody) return;
    if (!catList.length) {
      tbody.innerHTML = `<tr><td colspan="4" class="muted" style="text-align:center; padding:24px;">No categories found. Add one above!</td></tr>`;
      return;
    }
    tbody.innerHTML = catList.map(c => `
      <tr style="border-bottom:1px solid var(--border-card);">
        <td style="padding:10px 14px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:10px; height:10px; border-radius:50%; background:hsl(${hue(c.Name)}, 75%, 50%); display:inline-block; flex-shrink:0;"></span>
            <b style="font-size:13.5px; color:var(--text-main);">${esc(c.Name)}</b>
          </div>
        </td>
        <td style="padding:10px 14px; color:var(--text-dim); font-size:12px;">
          ${esc(c.Description || '—')}
        </td>
        <td style="padding:10px 14px; text-align:center;">
          <span class="pill ${c.ItemCount > 0 ? 'info' : 'muted'}" style="font-size:11px;">
            ${c.ItemCount} items
          </span>
        </td>
        <td style="padding:10px 14px; text-align:right;">
          <button type="button" class="btn btn-sm btn-ghost btn-edit-cat" data-id="${c.Id}" style="padding:4px 8px; font-size:11.5px;">✏️ Edit</button>
          <button type="button" class="btn btn-sm btn-danger btn-del-cat" data-id="${c.Id}" style="padding:4px 8px; font-size:11.5px; margin-left:4px;">🗑️ Delete</button>
        </td>
      </tr>
    `).join('');
  };

  renderTable();

  // Add form handler
  const addForm = m.querySelector('#catManagerAddForm');
  addForm.onsubmit = async e => {
    e.preventDefault();
    const nameInp = m.querySelector('#catManagerNewName');
    const descInp = m.querySelector('#catManagerNewDesc');
    const name = nameInp.value.trim();
    const desc = descInp.value.trim();
    if (!name) return;

    try {
      await call('categories:save', { name, description: desc });
      toast(`Category "${name}" added!`);
      nameInp.value = '';
      descInp.value = '';
      catList = await call('categories:list');
      categories = catList;
      renderTable();
      if (typeof onCategoryChange === 'function') onCategoryChange(name);
    } catch (err) {
      toast(err.message, 1);
    }
  };

  // Table click events (Edit / Delete)
  m.querySelector('#catManagerTableBody').onclick = async e => {
    const editBtn = e.target.closest('.btn-edit-cat');
    const delBtn = e.target.closest('.btn-del-cat');

    if (editBtn) {
      const id = +editBtn.dataset.id;
      const catItem = catList.find(c => c.Id === id);
      if (!catItem) return;
      const newName = prompt(`Rename category "${catItem.Name}":\n(All products in this category will be updated automatically)`, catItem.Name);
      if (newName === null) return;
      const cleanNew = newName.trim();
      if (!cleanNew) return toast('Category name cannot be empty', 1);

      try {
        await call('categories:save', { id, name: cleanNew, description: catItem.Description, color: catItem.Color });
        toast(`Category renamed to "${cleanNew}"!`);
        catList = await call('categories:list');
        categories = catList;
        renderTable();
        if (typeof onCategoryChange === 'function') onCategoryChange(cleanNew);
      } catch (err) {
        toast(err.message, 1);
      }
    }

    if (delBtn) {
      const id = +delBtn.dataset.id;
      const catItem = catList.find(c => c.Id === id);
      if (!catItem) return;
      let msg = `Are you sure you want to delete category "${catItem.Name}"?`;
      if (catItem.ItemCount > 0) {
        msg += `\n\n⚠️ NOTE: This category contains ${catItem.ItemCount} products. They will be safely reassigned to "General".`;
      }
      if (!confirm(msg)) return;

      try {
        await call('categories:delete', { id, reassignTo: 'General' });
        toast(`Category "${catItem.Name}" deleted!`);
        catList = await call('categories:list');
        categories = catList;
        renderTable();
        if (typeof onCategoryChange === 'function') onCategoryChange();
      } catch (err) {
        toast(err.message, 1);
      }
    }
  };
}

/* ==========================================================================
   VIEW 3: INVENTORY (ITEMS & CATEGORIES)
   ========================================================================== */
async function vItems() {
  [items, categories] = await Promise.all([call('items:list'), call('categories:list')]);
  let selectedCategoryFilter = 'All';

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">${t('items')}</h2>
        <span class="muted small">${items.length} products listed · ${categories.length} categories</span>
      </div>
      <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
        <input id="s" placeholder="${t('searchItems')}" style="width:230px;">
        <button class="btn btn-ghost" id="btnManageCats" style="font-weight:700; display:flex; align-items:center; gap:6px;">
          <span>🏷️ Manage Categories (${categories.length})</span>
        </button>
        <button class="btn btn-ghost" id="btnBarcodeLabels" style="font-weight:700; display:flex; align-items:center; gap:6px;">
          <span>🔖 Barcode Labels</span>
        </button>
        <button class="btn btn-primary" id="add">${t('addItem')}</button>
      </div>
    </div>

    <!-- Category Filter Chips Bar -->
    <div id="itemCatFilters" class="category-chips" style="margin-bottom:14px; overflow-x:auto; padding-bottom:4px; display:flex; flex-wrap:wrap; gap:8px;"></div>

    <div class="table-card" id="tbl"></div>
  `;

  const drawCatFilters = () => {
    const counts = {};
    items.forEach(i => {
      const c = i.Category || 'Uncategorized';
      counts[c] = (counts[c] || 0) + 1;
    });

    const registeredNames = categories.map(c => c.Name);
    const allUniqueCats = ['All', ...new Set([...registeredNames, ...Object.keys(counts)])];

    $('#itemCatFilters').innerHTML = `
      ${allUniqueCats.map(c => {
        const cnt = c === 'All' ? items.length : (counts[c] || 0);
        return `
          <button type="button" class="cat-chip ${c === selectedCategoryFilter ? 'on' : ''}" data-cat="${esc(c)}">
            ${c === 'All' ? 'All Products' : esc(c)}
            <span style="font-size:10.5px; opacity:0.85; margin-left:3px;">(${cnt})</span>
          </button>
        `;
      }).join('')}
      <button type="button" class="cat-chip" id="chipAddNewCat" style="border:1.5px dashed var(--brand); color:var(--brand); font-weight:700; background:rgba(99,102,241,0.06);">
        + New Category
      </button>
    `;
  };

  const draw = () => {
    const q = $('#s').value.toLowerCase();
    const rows = items.filter(i => {
      const matchesCat = selectedCategoryFilter === 'All' || i.Category === selectedCategoryFilter;
      const matchesQ = (i.Name + ' ' + (i.Category || '') + ' ' + (i.Barcode || '')).toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
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
                  ${i.ImageUrl ? `
                    <img src="${esc(i.ImageUrl)}" 
                         class="table-food-thumb" 
                         alt="${esc(i.Name)}" 
                         loading="lazy" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="table-prod-thumb hide" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 35%);">
                      <span>${esc((i.Name || 'P').slice(0, 2).toUpperCase())}</span>
                    </div>
                  ` : (currentShopType === 'restaurant' ? `
                    <img src="assets/food/chicken-fried-rice.jpg" 
                         class="table-food-thumb" 
                         alt="${esc(i.Name)}" 
                         loading="lazy" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="table-prod-thumb hide" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 35%);">
                      <span>${esc((i.Name || 'P').slice(0, 2).toUpperCase())}</span>
                    </div>
                  ` : `
                    <div class="table-prod-thumb" style="background:hsl(${hue(i.Category)}, 70%, 93%); color:hsl(${hue(i.Category)}, 80%, 35%);">
                      <span>${esc((i.Name || 'P').slice(0, 2).toUpperCase())}</span>
                    </div>
                  `)}
                  <div>
                    <b>${esc(i.Name)}</b>
                    ${i.IsLoose ? `<span class="pill" style="font-size:10px; padding:1px 6px; background:rgba(99,102,241,0.12); color:var(--brand); font-weight:700; margin-left:4px;">Loose (${esc(i.Unit || 'kg')})</span>` : ''}
                    ${i.ImageUrl ? `<small style="display:block; color:#10b981; font-size:10px; font-weight:700;">✓ Photo Set</small>` : ''}
                  </div>
                </div>
              </td>
              <td><span class="pill info">${esc(i.Category)}</span></td>
              <td><b>${fmt(i.Price)}</b> <small class="muted" style="font-size:11px;">/ ${esc(i.Unit || 'pcs')}</small></td>
              <td><span class="pill ${i.Stock <= 5 ? 'no' : 'ok'}">${Number.isInteger(+i.Stock) ? i.Stock : (+i.Stock).toFixed(3)} ${esc(i.Unit || 'pcs')}</span></td>
              <td><code class="muted">${esc(i.Barcode || '—')}</code></td>
              <td style="text-align:right;">
                <button class="btn btn-sm btn-ghost" data-a="barcode" data-id="${i.Id}" title="Generate Barcode Sticker">🏷️ Label</button>
                <button class="btn btn-sm btn-ghost" data-a="e" data-id="${i.Id}">${t('edit')}</button>
                <button class="btn btn-sm btn-danger" data-a="d" data-id="${i.Id}">${t('del')}</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:30px;">${t('noData')}</td></tr>`}
        </tbody>
      </table>
    `;
  };

  drawCatFilters();
  draw();
  $('#s').oninput = draw;
  $('#add').onclick = () => itemForm();
  $('#btnManageCats').onclick = () => openCategoryManagerModal(() => vItems());
  $('#btnBarcodeLabels').onclick = () => showBarcodeGeneratorModal(null);
  $('#itemCatFilters').onclick = e => {
    if (e.target.closest('#chipAddNewCat')) {
      return openCategoryManagerModal(() => vItems());
    }
    const b = e.target.closest('button[data-cat]');
    if (b) {
      selectedCategoryFilter = b.dataset.cat;
      drawCatFilters();
      draw();
    }
  };
  $('#tbl').onclick = async e => {
    const b = e.target.closest('button');
    if (!b) return;
    const id = +b.dataset.id;
    if (b.dataset.a === 'barcode') {
      const it = items.find(i => i.Id === id);
      if (it) showBarcodeGeneratorModal(it);
      return;
    }
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
  const isRestaurant = currentShopType === 'restaurant';
  const registeredCatNames = (categories || []).map(c => c.Name);
  const templateCats = currentShopProfile?.categories || [];
  const catNames = [...new Set([...registeredCatNames, ...items.map(i => i.Category).filter(Boolean), ...templateCats])];
  let currentImageUrl = it.ImageUrl || '';
  const namePlaceholder = currentShopProfile?.itemNamePlaceholder || (isRestaurant ? 'e.g. Paratha, Chicken Kottu, Milk Tea' : 'e.g. Product Name, Brand, Size');
  const catPlaceholder = (catNames[0] && catNames[1]) ? `e.g. ${catNames[0]}, ${catNames[1]}` : 'e.g. Category Name';

  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">${it.Id ? t('editItem') : t('newItem')}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="itemFormModal" class="auth-form" style="gap:12px;">
      <label class="field-wrap">
        <span class="field-label">${t('name')} *</span>
        <input id="formItemName" value="${esc(it.Name || '')}" placeholder="${esc(namePlaceholder)}" required autofocus autocomplete="off">
        ${isRestaurant 
          ? `<small class="muted" style="font-size:11px;">Typing will automatically detect matching food & beverage photos</small>`
          : `<small class="muted" style="font-size:11px;">Enter product name, category, and pricing (${esc(currentShopProfile?.name || 'Retail')})</small>`}
      </label>

      <!-- Auto-Matched Image Live Preview Box -->
      <div id="imagePreviewContainer" class="auto-match-preview-card ${currentImageUrl ? '' : 'hide'}">
        <img id="formPreviewImg" src="${esc(currentImageUrl || (isRestaurant ? 'assets/food/chicken-fried-rice.jpg' : ''))}" class="auto-match-img" onerror="this.src=''; this.parentElement.classList.add('hide');">
        <div style="flex:1;">
          <span class="auto-match-badge" id="previewBadgeText">✓ ${isRestaurant ? 'Offline Local Photo' : 'Product Photo'}</span>
          <b id="previewFoodTitle" style="display:block; font-size:13px; margin:2px 0;">${esc(it.Name || 'Product Item')}</b>
          <small class="muted" id="previewFoodSub" style="font-size:11px;">Ready to display on POS terminal</small>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
        <div class="field-wrap">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
            <span class="field-label" style="margin:0;">${t('category')} *</span>
            <button type="button" id="btnQuickNewCat" class="btn btn-ghost btn-sm" style="font-size:11px; padding:1px 6px; color:var(--brand); font-weight:800; height:auto;">
              + New Category
            </button>
          </div>
          <input id="formItemCategory" list="catDatalist" value="${esc(it.Category || '')}" placeholder="${esc(catPlaceholder)}" required>
          <datalist id="catDatalist">
            ${catNames.map(c => `<option value="${esc(c)}">`).join('')}
          </datalist>
        </div>

        <label class="field-wrap">
          <span class="field-label">${t('priceLkr')} *</span>
          <input id="formItemPrice" type="number" min="0" step="0.01" value="${it.Price != null ? it.Price : ''}" placeholder="0.00" required>
        </label>

        <label class="field-wrap">
          <span class="field-label">${t('stockQty')} *</span>
          <input id="formItemStock" type="number" min="0" step="0.001" value="${it.Stock != null ? it.Stock : 50}" placeholder="0" required>
        </label>

        <label class="field-wrap">
          <span class="field-label">Unit of Measure *</span>
          <select id="formItemUnit" class="form-select" style="padding:9px 10px; border-radius:10px; border:1px solid var(--border-card); font-weight:700;">
            <option value="pcs" ${(!it.Unit || it.Unit === 'pcs') ? 'selected' : ''}>pcs (Pieces / Count)</option>
            <option value="kg" ${it.Unit === 'kg' ? 'selected' : ''}>kg (Kilograms)</option>
            <option value="g" ${it.Unit === 'g' ? 'selected' : ''}>g (Grams)</option>
            <option value="m" ${it.Unit === 'm' ? 'selected' : ''}>m (Meters)</option>
            <option value="L" ${it.Unit === 'L' ? 'selected' : ''}>L (Liters)</option>
            <option value="ml" ${it.Unit === 'ml' ? 'selected' : ''}>ml (Milliliters)</option>
            <option value="pkt" ${it.Unit === 'pkt' ? 'selected' : ''}>pkt (Packets)</option>
            <option value="box" ${it.Unit === 'box' ? 'selected' : ''}>box (Boxes)</option>
            <option value="bottle" ${it.Unit === 'bottle' ? 'selected' : ''}>bottle (Bottles)</option>
            <option value="can" ${it.Unit === 'can' ? 'selected' : ''}>can (Cans)</option>
            <option value="bag" ${it.Unit === 'bag' ? 'selected' : ''}>bag (Bags)</option>
          </select>
        </label>

        <label class="field-wrap">
          <span class="field-label">${t('barcode')}</span>
          <input id="formItemBarcode" value="${esc(it.Barcode || '')}" placeholder="Optional barcode / SKU">
        </label>
      </div>

      <!-- Loose Item Option Box -->
      <div style="background:var(--bg-subtle, #f8fafc); border:1px solid var(--border); border-radius:10px; padding:10px 14px; margin-top:2px;">
        <label style="display:flex; align-items:center; gap:10px; cursor:pointer; margin:0;">
          <input type="checkbox" id="formItemIsLoose" ${Boolean(it.IsLoose || (it.Unit && ['kg', 'g', 'm', 'l', 'ml'].includes(it.Unit.toLowerCase()))) ? 'checked' : ''} style="width:18px; height:18px; accent-color:var(--brand); cursor:pointer;">
          <div>
            <b style="font-size:13px; color:var(--text-main);">Loose / Fractional Selling Item</b>
            <small class="muted" style="display:block; font-size:11px;">Enable for products sold by weight, length, or volume (e.g. rice, sugar, cement, nails, wire, oil, loose pet food). Cashiers can enter decimal quantities or select presets at POS.</small>
          </div>
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

    if (isRestaurant && typeof matchFoodCatalogItem === 'function') {
      const match = matchFoodCatalogItem(val, 'restaurant');
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

  const btnQuickNewCat = m.querySelector('#btnQuickNewCat');
  if (btnQuickNewCat) {
    btnQuickNewCat.onclick = async () => {
      const newName = prompt('Enter new category name:');
      if (newName && newName.trim()) {
        const clean = newName.trim();
        try {
          await call('categories:save', { name: clean });
          toast(`Category "${clean}" added!`);
          catInput.value = clean;
          categories = await call('categories:list');
          const datalist = m.querySelector('#catDatalist');
          if (datalist) {
            const updated = [...new Set([...categories.map(c => c.Name), ...catNames, clean])];
            datalist.innerHTML = updated.map(c => `<option value="${esc(c)}">`).join('');
          }
        } catch (err) {
          toast(err.message, 1);
        }
      }
    };
  }

  const unitSelect = m.querySelector('#formItemUnit');
  const looseCheck = m.querySelector('#formItemIsLoose');
  if (unitSelect && looseCheck) {
    unitSelect.onchange = () => {
      const u = unitSelect.value.toLowerCase();
      if (['kg', 'g', 'm', 'l', 'ml'].includes(u)) {
        looseCheck.checked = true;
      }
    };
  }

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#itemFormModal').onsubmit = async e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const category = catInput.value.trim();
    const price = parseFloat(m.querySelector('#formItemPrice').value) || 0;
    const stock = Math.round((parseFloat(m.querySelector('#formItemStock').value) || 0) * 1000) / 1000;
    const barcode = m.querySelector('#formItemBarcode').value.trim();
    const imageUrl = imgInput.value.trim() || currentImageUrl || null;
    const unit = unitSelect ? unitSelect.value : 'pcs';
    const isLoose = looseCheck ? looseCheck.checked : false;

    try {
      await call('items:save', {
        id: it.Id,
        name,
        category,
        price,
        stock,
        barcode,
        imageUrl,
        unit,
        isLoose
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
   VIEW: CUSTOMER CREDIT & STORE ACCOUNTS (NAYA LEDGER)
   ========================================================================== */
async function vCustomers() {
  const customers = await call('customers:list').catch(() => []);
  const totalBalance = customers.reduce((s, c) => s + (+(c.CreditBalance || 0)), 0);
  const totalLimit = customers.reduce((s, c) => s + (+(c.CreditLimit || 0)), 0);
  const activeDebtors = customers.filter(c => (+(c.CreditBalance || 0)) > 0).length;

  $('#view').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:800;">Customer Accounts & Credit Ledger (ණය පොත)</h2>
        <span class="muted small">${customers.length} registered customer accounts · ${activeDebtors} with outstanding balance</span>
      </div>
      <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
        <input id="custSearchInput" placeholder="Search customer, phone, address…" style="width:260px;">
        <button class="btn btn-primary" id="btnNewCustomer">+ New Customer</button>
      </div>
    </div>

    <!-- Summary KPI Cards -->
    <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom:16px;">
      <div class="kpi-card">
        <span class="kpi-label">TOTAL OUTSTANDING CREDIT</span>
        <div class="kpi-value" style="color:#ef4444;">LKR ${totalBalance.toFixed(2)}</div>
        <small class="muted">Amount owed across ${activeDebtors} active accounts</small>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">TOTAL CREDIT LIMIT GRANTED</span>
        <div class="kpi-value">LKR ${totalLimit.toFixed(2)}</div>
        <small class="muted">Total authorized credit facility</small>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">ACTIVE CUSTOMER ACCOUNTS</span>
        <div class="kpi-value" style="color:var(--brand);">${customers.length}</div>
        <small class="muted">${customers.length - activeDebtors} accounts fully settled</small>
      </div>
    </div>

    <div class="table-card" id="custTableCard"></div>
  `;

  const drawTable = () => {
    const q = ($('#custSearchInput')?.value || '').toLowerCase().trim();
    const rows = customers.filter(c => 
      (c.Name || '').toLowerCase().includes(q) || 
      (c.Phone || '').toLowerCase().includes(q) || 
      (c.Address || '').toLowerCase().includes(q)
    );

    $('#custTableCard').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone & Address</th>
            <th style="text-align:right;">Credit Limit</th>
            <th style="text-align:right;">Outstanding Balance</th>
            <th style="text-align:right;">Available Credit</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(c => {
            const bal = +(c.CreditBalance || 0);
            const lim = +(c.CreditLimit || 0);
            const avail = Math.max(0, lim - bal);
            return `
              <tr>
                <td>
                  <div style="font-weight:800; font-size:14px; color:var(--text-main);">${esc(c.Name)}</div>
                  <small class="muted">ID: #${c.Id}</small>
                </td>
                <td>
                  <div><b>${esc(c.Phone || '—')}</b></div>
                  <small class="muted">${esc(c.Address || 'No address on file')}</small>
                </td>
                <td style="text-align:right; font-weight:700;">LKR ${lim.toFixed(2)}</td>
                <td style="text-align:right;">
                  <span class="pill ${bal > 0 ? (bal > lim ? 'no' : 'warn') : 'ok'}" style="font-size:13px; font-weight:800;">
                    LKR ${bal.toFixed(2)}
                  </span>
                </td>
                <td style="text-align:right; font-weight:700; color:#10b981;">LKR ${avail.toFixed(2)}</td>
                <td style="text-align:right;">
                  <div style="display:flex; justify-content:flex-end; gap:6px;">
                    <button type="button" class="btn btn-sm btn-primary" data-pay-cust="${c.Id}" title="Collect repayment">💵 Pay</button>
                    <button type="button" class="btn btn-sm btn-ghost" data-ledger-cust="${c.Id}" title="View ledger & statement">📜 Ledger</button>
                    <button type="button" class="btn btn-sm btn-ghost" data-edit-cust="${c.Id}">✏️</button>
                  </div>
                </td>
              </tr>
            `;
          }).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:30px;">No customers found</td></tr>`}
        </tbody>
      </table>
    `;
  };

  drawTable();
  $('#custSearchInput').oninput = drawTable;
  $('#btnNewCustomer').onclick = () => showCustomerEditModal(null, () => vCustomers());

  $('#custTableCard').onclick = e => {
    const payBtn = e.target.closest('[data-pay-cust]');
    if (payBtn) {
      const c = customers.find(x => x.Id === +payBtn.dataset.payCust);
      if (c) showCustomerPaymentModal(c, () => vCustomers());
      return;
    }
    const ledBtn = e.target.closest('[data-ledger-cust]');
    if (ledBtn) {
      const c = customers.find(x => x.Id === +ledBtn.dataset.ledgerCust);
      if (c) showCustomerLedgerModal(c);
      return;
    }
    const editBtn = e.target.closest('[data-edit-cust]');
    if (editBtn) {
      const c = customers.find(x => x.Id === +editBtn.dataset.editCust);
      if (c) showCustomerEditModal(c, () => vCustomers());
    }
  };
}

function showCustomerEditModal(c = null, onSaved = null) {
  const isEdit = Boolean(c && c.Id);
  const m = modal(`
    <div class="modal-header">
      <h3 class="modal-title">${isEdit ? 'Edit Customer Account' : 'Register New Customer Account'}</h3>
      <button class="modal-close-x" data-x>✕</button>
    </div>
    <form id="custEditForm" class="auth-form" style="gap:12px;">
      <label class="field-wrap">
        <span class="field-label">Customer Full Name *</span>
        <input id="ceName" type="text" value="${esc(c?.Name || '')}" placeholder="e.g. Nimal Perera" required autofocus>
      </label>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <label class="field-wrap" style="margin:0;">
          <span class="field-label">Phone Number</span>
          <input id="cePhone" type="tel" value="${esc(c?.Phone || '')}" placeholder="077 123 4567">
        </label>
        <label class="field-wrap" style="margin:0;">
          <span class="field-label">Credit Limit (LKR) *</span>
          <input id="ceLimit" type="number" min="0" step="100" value="${c ? c.CreditLimit : '10000'}" required>
        </label>
      </div>
      <label class="field-wrap">
        <span class="field-label">Address / Location</span>
        <input id="ceAddress" type="text" value="${esc(c?.Address || '')}" placeholder="e.g. No 45, Temple Road, Colombo">
      </label>
      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>Cancel</button>
        <button type="submit" class="btn btn-primary">${t('save')}</button>
      </div>
    </form>
  `);
  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);
  m.querySelector('#custEditForm').onsubmit = async e => {
    e.preventDefault();
    const name = m.querySelector('#ceName').value.trim();
    const phone = m.querySelector('#cePhone').value.trim();
    const address = m.querySelector('#ceAddress').value.trim();
    const creditLimit = parseFloat(m.querySelector('#ceLimit').value) || 0;
    if (!name) return toast('Customer name is required', 1);

    try {
      await call('customers:save', {
        id: isEdit ? c.Id : null,
        name,
        phone,
        address,
        creditLimit
      });
      m.close();
      toast(isEdit ? 'Customer updated' : 'Customer created successfully');
      if (onSaved) onSaved();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

function showCustomerPaymentModal(c, onComplete = null) {
  const bal = +(c.CreditBalance || 0);
  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">💵</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Record Customer Repayment</h3>
          <small class="muted">${esc(c.Name)} · Tel: ${esc(c.Phone || '—')}</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <form id="custPaymentForm" class="auth-form" style="gap:12px;">
      <div style="background:var(--bg-input); padding:10px 14px; border-radius:10px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="muted" style="font-size:11px;">CURRENT OUTSTANDING BALANCE:</span>
          <div style="font-weight:900; font-size:18px; color:#ef4444;">LKR ${bal.toFixed(2)}</div>
        </div>
        <button type="button" class="btn btn-sm btn-ghost" id="btnPayFull" style="font-weight:700;">Pay Full Balance</button>
      </div>

      <label class="field-wrap">
        <span class="field-label">Payment Amount (LKR) *</span>
        <input id="cpAmount" type="number" min="0.01" step="any" value="${bal > 0 ? bal.toFixed(2) : ''}" placeholder="0.00" required autofocus style="font-size:16px; font-weight:800;">
      </label>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <label class="field-wrap" style="margin:0;">
          <span class="field-label">Payment Method</span>
          <select id="cpMethod">
            <option value="Cash">Cash</option>
            <option value="Card">Bank Card</option>
            <option value="Bank Transfer">Bank Transfer / Online</option>
          </select>
        </label>
        <label class="field-wrap" style="margin:0;">
          <span class="field-label">Receipt / Note</span>
          <input id="cpNote" type="text" placeholder="e.g. Settlement slip #">
        </label>
      </div>

      <div class="modal-actions" style="margin-top:10px;">
        <button type="button" class="btn btn-ghost" data-x>Cancel</button>
        <button type="submit" class="btn btn-primary" style="font-weight:800;">✓ Record Payment</button>
      </div>
    </form>
  `);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#btnPayFull').onclick = () => {
    m.querySelector('#cpAmount').value = bal.toFixed(2);
  };

  m.querySelector('#custPaymentForm').onsubmit = async e => {
    e.preventDefault();
    const amt = parseFloat(m.querySelector('#cpAmount').value);
    const method = m.querySelector('#cpMethod').value;
    const note = m.querySelector('#cpNote').value.trim();
    if (!amt || amt <= 0) return toast('Please enter a valid amount', 1);

    try {
      const res = await call('customers:payment', {
        customerId: c.Id,
        amount: amt,
        paymentMethod: method,
        note
      });
      m.close();
      toast(`Payment of LKR ${amt.toFixed(2)} recorded for ${c.Name}`);

      // Optional: offer print payment slip
      const printArea = document.getElementById('printableReceiptArea');
      if (printArea) {
        printArea.className = '';
        printArea.innerHTML = `
          <div class="thermal-receipt-paper">
            <div class="tr-header">
              <h2 class="tr-shop-name">${esc(currentShopProfile?.defaultShopName || 'KADE POS')}</h2>
              <div style="font-weight:900; font-size:12px; margin: 4px 0;">CUSTOMER PAYMENT RECEIPT</div>
              <div class="tr-contact">Settlement Voucher</div>
            </div>
            <hr class="tr-divider-double">
            <div class="tr-meta-row"><span>CUSTOMER:</span><b>${esc(c.Name)}</b></div>
            <div class="tr-meta-row"><span>DATE:</span><span>${new Date().toLocaleString()}</span></div>
            <div class="tr-meta-row"><span>METHOD:</span><span>${esc(method).toUpperCase()}</span></div>
            ${note ? `<div class="tr-meta-row"><span>NOTE:</span><span>${esc(note)}</span></div>` : ''}
            <hr class="tr-divider-dashed">
            <div class="tr-sum-row tr-total-row"><span>AMOUNT PAID:</span><span>LKR ${amt.toFixed(2)}</span></div>
            <div class="tr-sum-row"><span>REMAINING BALANCE:</span><b>LKR ${(+(res.remainingBalance || 0)).toFixed(2)}</b></div>
            <hr class="tr-divider-dashed">
            <div class="tr-footer" style="margin-top:14px;">
              <p>Thank you for your payment!</p>
              <p>Cashier Signature: __________________</p>
            </div>
          </div>
        `;
      }
      window.print();

      if (onComplete) onComplete();
    } catch (err) {
      toast(err.message, 1);
    }
  };
}

async function showCustomerLedgerModal(c) {
  let data;
  try {
    data = await call('customers:ledger', { customerId: c.Id });
  } catch (err) {
    return toast(err.message, 1);
  }

  const { customer, sales, payments } = data;

  const txs = [
    ...(sales || []).map(s => ({
      date: s.Date,
      type: 'Purchase',
      ref: s.InvoiceNo,
      method: s.PaymentMethod,
      debit: +s.Total,
      credit: 0
    })),
    ...(payments || []).map(p => ({
      date: p.Date,
      type: 'Payment',
      ref: p.Note || 'Payment',
      method: p.PaymentMethod,
      debit: 0,
      credit: +p.Total
    }))
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  let running = 0;
  txs.forEach(t => {
    running += (t.debit - t.credit);
    t.balance = running;
  });

  const m = modal(`
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">📜</span>
        <div>
          <h3 class="modal-title" style="margin:0;">Account Statement: ${esc(customer.Name)}</h3>
          <small class="muted">Phone: ${esc(customer.Phone || '—')} · Credit Limit: LKR ${(+(customer.CreditLimit || 0)).toFixed(2)}</small>
        </div>
      </div>
      <button class="modal-close-x" data-x>✕</button>
    </div>

    <div style="max-height:480px; overflow-y:auto; padding:4px;">
      <div style="display:flex; justify-content:space-between; background:var(--bg-input); padding:10px 14px; border-radius:10px; margin-bottom:12px;">
        <div>Outstanding Balance: <b style="color:#ef4444; font-size:15px;">LKR ${(+(customer.CreditBalance || 0)).toFixed(2)}</b></div>
        <div>Total Purchases: <b>${(sales || []).length}</b> · Payments: <b>${(payments || []).length}</b></div>
      </div>

      <table style="width:100%; font-size:11.5px; border:1px solid var(--border-card); border-radius:8px; overflow:hidden;">
        <thead>
          <tr style="background:var(--bg-input); text-align:left;">
            <th style="padding:6px 8px;">Date</th>
            <th style="padding:6px 8px;">Type</th>
            <th style="padding:6px 8px;">Reference / Note</th>
            <th style="padding:6px 8px; text-align:right;">Charge (+)</th>
            <th style="padding:6px 8px; text-align:right;">Payment (-)</th>
            <th style="padding:6px 8px; text-align:right;">Balance</th>
          </tr>
        </thead>
        <tbody>
          ${txs.map(t => `
            <tr style="border-bottom:1px solid var(--border-card);">
              <td style="padding:6px 8px;">${t.date}</td>
              <td style="padding:6px 8px;"><span class="pill ${t.type === 'Payment' ? 'ok' : 'info'}">${t.type}</span></td>
              <td style="padding:6px 8px;"><b>${esc(t.ref)}</b> <small class="muted">(${esc(t.method)})</small></td>
              <td style="padding:6px 8px; text-align:right; font-weight:700;">${t.debit > 0 ? t.debit.toFixed(2) : '—'}</td>
              <td style="padding:6px 8px; text-align:right; font-weight:700; color:#10b981;">${t.credit > 0 ? t.credit.toFixed(2) : '—'}</td>
              <td style="padding:6px 8px; text-align:right; font-weight:800; color:${t.balance > 0 ? '#ef4444' : '#10b981'};">
                LKR ${t.balance.toFixed(2)}
              </td>
            </tr>
          `).join('') || `<tr><td colspan="6" class="muted" style="text-align:center; padding:30px;">No transaction history yet</td></tr>`}
        </tbody>
      </table>
    </div>

    <div class="modal-actions" style="margin-top:14px; display:flex; justify-content:space-between; align-items:center;">
      <button type="button" class="btn btn-ghost" data-x>${t('close')}</button>
      <button type="button" class="btn btn-primary" id="btnPrintStatement">🖨️ Print Statement Slip</button>
    </div>
  `, true);

  m.querySelectorAll('[data-x]').forEach(el => el.onclick = m.close);

  m.querySelector('#btnPrintStatement').onclick = () => {
    const printArea = document.getElementById('printableReceiptArea');
    if (printArea) {
      printArea.className = '';
      printArea.innerHTML = `
        <div class="thermal-receipt-paper">
          <div class="tr-header">
            <h2 class="tr-shop-name">${esc(currentShopProfile?.defaultShopName || 'KADE POS')}</h2>
            <div style="font-weight:900; font-size:12px; margin: 4px 0;">CUSTOMER STATEMENT / ණය ලෙජරය</div>
            <div class="tr-contact">Customer: ${esc(customer.Name)} (Tel: ${esc(customer.Phone || '—')})</div>
          </div>
          <hr class="tr-divider-double">
          <div class="tr-sum-row"><span>CREDIT LIMIT:</span><b>LKR ${(+(customer.CreditLimit || 0)).toFixed(2)}</b></div>
          <div class="tr-sum-row tr-total-row"><span>OUTSTANDING BALANCE:</span><span>LKR ${(+(customer.CreditBalance || 0)).toFixed(2)}</span></div>
          <hr class="tr-divider-dashed">
          <div style="font-size:10px; font-weight:800; margin-bottom:4px;">LAST TRANSACTIONS:</div>
          ${txs.slice(-10).map(t => `
            <div style="display:flex; justify-content:space-between; font-size:10px; margin-bottom:2px;">
              <span>${t.date.slice(0, 10)} ${t.type} (${esc(t.ref)}):</span>
              <b>${t.debit > 0 ? `+${t.debit.toFixed(2)}` : `-${t.credit.toFixed(2)}`}</b>
            </div>
          `).join('')}
          <div class="tr-footer" style="margin-top:14px;">
            <p>Printed: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;
    }
    window.print();
  };
}

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
              <td>${Number.isInteger(+it.Qty) ? it.Qty : (+it.Qty).toFixed(3)} ${esc(it.Unit || 'pcs')}</td>
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
    unit: catalog[0].Unit || 'pcs',
    isLoose: Boolean(catalog[0].IsLoose),
    qty: catalog[0].IsLoose ? 10.0 : 10,
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
          ${Number.isInteger(+r.currentStock) ? r.currentStock : (+r.currentStock).toFixed(3)} ${esc(r.unit || 'pcs')}
        </td>
        <td style="padding:8px 6px;">
          <input type="number" min="0.001" step="${r.isLoose ? '0.001' : '1'}" value="${r.qty}" data-idx="${i}" data-f="qty" style="padding:5px; text-align:center; width:100%;">
          ${r.unit && r.unit !== 'pcs' ? `<div style="font-size:10px; color:var(--text-muted); text-align:center;">${esc(r.unit)}</div>` : ''}
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
        unit: it.Unit || 'pcs',
        isLoose: Boolean(it.IsLoose),
        qty: it.IsLoose ? 10.0 : 10,
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
      unit: first.Unit || 'pcs',
      isLoose: Boolean(first.IsLoose),
      qty: first.IsLoose ? 10.0 : 10,
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
          qty: Math.round((parseFloat(r.qty) || 0) * 1000) / 1000,
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
   VIEW 5: COMPREHENSIVE REPORTS & BUSINESS INTELLIGENCE
   ========================================================================== */
const REPORT_CATALOG = {
  // --- 1. SALES & REVENUE REPORTS ---
  daily: {
    group: 'Sales & Revenue',
    icon: '📊',
    name: 'Daily Sales Breakdown',
    desc: 'Daily turnover, bills count, discounts given and average order value',
    sumCol: 'Total',
    qtyCol: 'Bills',
    cols: [
      ['Date', r => r.Day],
      ['Bills Count', r => `<b>${r.Bills}</b>`],
      ['Gross Sales', r => fmt(r.GrossTotal)],
      ['Discounts', r => r.Discount > 0 ? fmt(r.Discount) : '—'],
      ['Net Revenue', r => `<b style="color:var(--brand);">${fmt(r.Total)}</b>`],
      ['Avg Ticket (AOV)', r => fmt(r.Aov)]
    ]
  },
  items: {
    group: 'Sales & Revenue',
    icon: '🍔',
    name: 'Item-wise Sales Report',
    desc: 'Volume, average price, and revenue ranking per product sold',
    sumCol: 'Total',
    qtyCol: 'Qty',
    cols: [
      ['Product Name', r => `<b>${esc(r.Item)}</b>`],
      ['Category', r => `<span class="pill info">${esc(r.Category || 'General')}</span>`],
      ['Barcode', r => `<code class="muted">${esc(r.Barcode || '—')}</code>`],
      ['Units Sold', r => `<b style="font-size:14px;">${r.Qty}</b>`],
      ['Avg Price', r => fmt(r.AvgPrice)],
      ['Total Revenue', r => `<b style="color:var(--brand);">${fmt(r.Total)}</b>`]
    ]
  },
  categories: {
    group: 'Sales & Revenue',
    icon: '📂',
    name: 'Category-wise Sales Report',
    desc: 'Revenue and sales quantity aggregated by product department',
    sumCol: 'Total',
    qtyCol: 'Qty',
    cols: [
      ['Category Name', r => `<b>${esc(r.Category)}</b>`],
      ['Transactions', r => `${r.Bills} bills`],
      ['Units Sold', r => `<b>${r.Qty} units</b>`],
      ['Total Sales', r => `<b style="color:var(--brand);">${fmt(r.Total)}</b>`]
    ]
  },
  invoices: {
    group: 'Sales & Revenue',
    icon: '🧾',
    name: 'Detailed Invoices Register',
    desc: 'Comprehensive transaction log with invoice numbers and payment details',
    sumCol: 'Total',
    qtyCol: 'ItemsCount',
    cols: [
      ['Invoice No', r => `<b style="color:var(--brand);">${esc(r.InvoiceNo || '#' + r.Id)}</b>`],
      ['Timestamp', r => `<small class="muted">${esc(r.CreatedAt)}</small>`],
      ['Cashier', r => esc(r.Cashier)],
      ['Method', r => `<span class="pill ${r.PaymentMethod === 'Card' ? 'info' : 'ok'}">${esc(r.PaymentMethod || 'Cash')}</span>`],
      ['Items', r => `${r.ItemsCount} item(s)`],
      ['Gross Total', r => fmt(r.GrossTotal)],
      ['Discount', r => r.Discount > 0 ? fmt(r.Discount) : '—'],
      ['Grand Total', r => `<b>${fmt(r.Total)}</b>`]
    ]
  },
  cashiers: {
    group: 'Sales & Revenue',
    icon: '👤',
    name: 'Cashier Sales Performance',
    desc: 'Staff register efficiency, total bills processed and revenue generated',
    sumCol: 'Total',
    qtyCol: 'Bills',
    cols: [
      ['Cashier Name', r => `<b>${esc(r.Cashier)}</b>`],
      ['Bills Handled', r => `<b>${r.Bills}</b>`],
      ['Total Discount', r => fmt(r.Discount)],
      ['Total Revenue', r => `<b style="color:var(--brand);">${fmt(r.Total)}</b>`],
      ['Avg Ticket (AOV)', r => fmt(r.Aov)]
    ]
  },
  payments: {
    group: 'Sales & Revenue',
    icon: '💳',
    name: 'Payment Methods Breakdown',
    desc: 'Cash vs Card collections and settlement reconciliation',
    sumCol: 'Total',
    qtyCol: 'Bills',
    cols: [
      ['Payment Method', r => `<span class="pill ${r.Method === 'Card' ? 'info' : 'ok'}"><b>${esc(r.Method || 'Cash')}</b></span>`],
      ['Transactions', r => `<b>${r.Bills}</b> bills`],
      ['Total Discounts', r => fmt(r.Discount)],
      ['Total Amount Collected', r => `<b style="color:var(--accent-lime);">${fmt(r.Total)}</b>`]
    ]
  },
  hourly: {
    group: 'Sales & Revenue',
    icon: '⏰',
    name: 'Hourly Peak Sales Trend',
    desc: 'Turnover distribution by hour of day for staffing & peak hour analysis',
    sumCol: 'Total',
    qtyCol: 'Bills',
    cols: [
      ['Time Slot', r => `<b>${String(r.Hour).padStart(2, '0')}:00 – ${String(r.Hour).padStart(2, '0')}:59</b>`],
      ['Customer Transactions', r => `<b>${r.Bills}</b> bills`],
      ['Total Sales Generated', r => `<b style="color:var(--brand);">${fmt(r.Total)}</b>`]
    ]
  },

  // --- 2. GRN & INVENTORY INWARD REPORTS ---
  grnSummary: {
    group: 'GRN & Purchases',
    icon: '📦',
    name: 'GRN Inward Receipts Summary',
    desc: 'Completed inward shipments from vendors with invoice references',
    sumCol: 'Total',
    qtyCol: 'TotalQty',
    cols: [
      ['GRN Number', r => `<b style="color:var(--brand);">${esc(r.GrnNo)}</b>`],
      ['Inward Date', r => esc(r.CreatedDate)],
      ['Supplier', r => `<b>${esc(r.Supplier)}</b>`],
      ['Invoice Ref', r => `<code class="muted">${esc(r.InvoiceRef)}</code>`],
      ['Product Types', r => `${r.ItemTypes} types`],
      ['Total Units Received', r => `<b>${r.TotalQty} units</b>`],
      ['Total Inward Cost', r => `<b style="color:var(--accent-pink);">${fmt(r.Total)}</b>`],
      ['Received By', r => `<small class="muted">${esc(r.ReceivedBy)}</small>`]
    ]
  },
  grnItems: {
    group: 'GRN & Purchases',
    icon: '📋',
    name: 'GRN Item-wise Purchases',
    desc: 'Individual inventory line receipts with batch tracking and expiry dates',
    sumCol: 'Total',
    qtyCol: 'Qty',
    cols: [
      ['Product Name', r => `<b>${esc(r.Item)}</b>`],
      ['GRN #', r => `<code class="muted">${esc(r.GrnNo)}</code>`],
      ['Received Date', r => esc(r.CreatedDate)],
      ['Supplier', r => esc(r.Supplier)],
      ['Batch No', r => `<code>${esc(r.BatchNo)}</code>`],
      ['Expiry Date', r => r.ExpiryDate !== '—' ? `<span class="pill warn">${esc(r.ExpiryDate)}</span>` : '<span class="muted">—</span>'],
      ['Qty Received', r => `<b>${r.Qty}</b>`],
      ['Unit Cost', r => fmt(r.UnitCost)],
      ['Line Total', r => `<b style="color:var(--accent-pink);">${fmt(r.Total)}</b>`]
    ]
  },
  suppliers: {
    group: 'GRN & Purchases',
    icon: '🏭',
    name: 'Supplier Purchases Breakdown',
    desc: 'Purchase volumes, shipment counts and total expenses per vendor',
    sumCol: 'Total',
    qtyCol: 'TotalQty',
    cols: [
      ['Supplier / Vendor', r => `<b>${esc(r.Supplier)}</b>`],
      ['GRN Shipments', r => `${r.GrnCount} deliveries`],
      ['Total Units Received', r => `<b>${r.TotalQty} units</b>`],
      ['Total Purchases Spent', r => `<b style="color:var(--accent-pink);">${fmt(r.Total)}</b>`]
    ]
  },

  // --- 3. INVENTORY & STOCK REPORTS ---
  stockValuation: {
    group: 'Inventory & Stock',
    icon: '🏷️',
    name: 'Current Stock & Valuation',
    desc: 'Live stock inventory levels, selling prices, and total inventory asset worth',
    isCurrentSnapshot: true,
    sumCol: 'Total',
    qtyCol: 'Qty',
    cols: [
      ['Product Name', r => `<b>${esc(r.Item)}</b>`],
      ['Category', r => `<span class="pill info">${esc(r.Category)}</span>`],
      ['Barcode', r => `<code class="muted">${esc(r.Barcode)}</code>`],
      ['Selling Price', r => fmt(r.Price)],
      ['On-Hand Stock', r => `<b style="font-size:14px;">${r.Qty}</b>`],
      ['Stock Valuation', r => `<b style="color:var(--brand);">${fmt(r.Total)}</b>`],
      ['Status', r => `<span class="pill ${r.Qty <= 0 ? 'no' : r.Qty <= 5 ? 'warn' : 'ok'}">${esc(r.Status)}</span>`]
    ]
  },
  lowStock: {
    group: 'Inventory & Stock',
    icon: '⚠️',
    name: 'Low Stock Reorder Alert',
    desc: 'Critical inventory products with 5 or fewer items remaining in stock',
    isCurrentSnapshot: true,
    sumCol: 'Total',
    qtyCol: 'Qty',
    cols: [
      ['Product Name', r => `<b>${esc(r.Item)}</b>`],
      ['Category', r => `<span class="pill info">${esc(r.Category)}</span>`],
      ['Barcode', r => `<code class="muted">${esc(r.Barcode)}</code>`],
      ['Selling Price', r => fmt(r.Price)],
      ['Stock Remaining', r => `<span class="pill no" style="font-weight:800;">${r.Qty} left</span>`],
      ['Stock Value', r => fmt(r.Total)]
    ]
  },
  expiring: {
    group: 'Inventory & Stock',
    icon: '⏳',
    name: 'Perishable Batches & Expiry Dates',
    desc: 'Active inventory batches sorted by earliest expiration date',
    isCurrentSnapshot: true,
    sumCol: 'Total',
    qtyCol: 'Qty',
    cols: [
      ['Product Name', r => `<b>${esc(r.Item)}</b>`],
      ['Supplier', r => esc(r.Supplier)],
      ['GRN #', r => `<code>${esc(r.GrnNo)}</code>`],
      ['Batch No', r => `<code>${esc(r.BatchNo)}</code>`],
      ['Expiry Date', r => `<span class="pill warn"><b>${esc(r.ExpiryDate)}</b></span>`],
      ['Qty Received', r => `<b>${r.Qty}</b>`],
      ['Unit Cost', r => fmt(r.UnitCost)],
      ['Total Value', r => fmt(r.Total)],
      ['Received Date', r => esc(r.ReceivedDate)]
    ]
  }
};

let currentReportKey = 'daily';
let currentCategoryFilter = 'all';
let currentLoadedReportRows = [];

async function vReports() {
  const pad = n => String(n).padStart(2, '0');
  const dNow = new Date();
  const todayStr = today();
  
  // Date Helpers for presets
  const dYest = new Date(Date.now() - 864e5);
  const yestStr = `${dYest.getFullYear()}-${pad(dYest.getMonth() + 1)}-${pad(dYest.getDate())}`;

  const d7 = new Date(Date.now() - 6 * 864e5);
  const weekStartStr = `${d7.getFullYear()}-${pad(d7.getMonth() + 1)}-${pad(d7.getDate())}`;

  const monthStartStr = `${dNow.getFullYear()}-${pad(dNow.getMonth() + 1)}-01`;

  $('#view').innerHTML = `
    <!-- Top Header & Controls Panel -->
    <div class="report-header-panel">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;">
        <div>
          <h2 style="margin:0; font-size:22px; font-weight:800; display:flex; align-items:center; gap:8px;">
            <span>📈 ${t('reports')} & Business Intelligence</span>
          </h2>
          <span class="muted small" id="reportDescText">Sales performance, GRN procurement receipts, and inventory valuation</span>
        </div>

        <!-- Action Buttons: Print & CSV Export -->
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button class="btn btn-sm btn-ghost" id="btnPrintReport" style="display:flex; align-items:center; gap:6px;">
            <svg viewBox="0 0 24 24" width="16" height="16"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>${t('printRep')}</span>
          </button>
          <button class="btn btn-sm btn-outline" id="btnExportCsv" style="display:flex; align-items:center; gap:6px;">
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>${t('exportCsv')}</span>
          </button>
          <button class="btn btn-sm btn-primary" id="run" style="display:flex; align-items:center; gap:6px; padding:0 18px;">
            <svg viewBox="0 0 24 24" width="16" height="16"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            <span>${t('run')}</span>
          </button>
        </div>
      </div>

      <!-- Category Filter Tabs & Selector Dropdown -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; padding-top:14px; border-top:1px solid var(--border-card);">
        <!-- Category Tabs -->
        <div class="report-date-filters" id="reportCatTabs">
          <button type="button" class="report-preset-chip active" data-cat="all">All Reports</button>
          <button type="button" class="report-preset-chip" data-cat="Sales & Revenue">📊 Sales & Revenue</button>
          <button type="button" class="report-preset-chip" data-cat="GRN & Purchases">📦 GRN & Purchases</button>
          <button type="button" class="report-preset-chip" data-cat="Inventory & Stock">🏷️ Inventory & Stock</button>
        </div>

        <!-- Grouped Report Dropdown -->
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="muted small" style="font-weight:700;">Select Report:</span>
          <select id="rt" style="min-width:270px; font-weight:800; font-size:13.5px; border-radius:10px;">
            <optgroup label="📊 Sales & Revenue">
              <option value="daily" selected>Daily Sales Breakdown</option>
              <option value="items">Item-wise Sales Report</option>
              <option value="categories">Category-wise Sales Report</option>
              <option value="invoices">Detailed Invoices Register</option>
              <option value="cashiers">Cashier Sales Performance</option>
              <option value="payments">Payment Methods (Cash vs Card)</option>
              <option value="hourly">Hourly Peak Sales Trend</option>
            </optgroup>
            <optgroup label="📦 GRN & Purchases">
              <option value="grnSummary">GRN Inward Receipts Summary</option>
              <option value="grnItems">GRN Item-wise Purchases</option>
              <option value="suppliers">Supplier Purchases Breakdown</option>
            </optgroup>
            <optgroup label="🏷️ Inventory & Stock">
              <option value="stockValuation">Current Stock & Valuation</option>
              <option value="lowStock">Low Stock Reorder Alert</option>
              <option value="expiring">Perishable Batches & Expiry Dates</option>
            </optgroup>
          </select>
        </div>
      </div>

      <!-- Date Presets & Inputs Bar -->
      <div class="report-presets-row" id="reportDateBar" style="padding-top:10px;">
        <div class="report-date-filters" id="datePresetChips">
          <span class="muted small" style="font-weight:700; margin-right:4px;">Date Range:</span>
          <button type="button" class="report-preset-chip active" data-f="${todayStr}" data-t="${todayStr}">Today</button>
          <button type="button" class="report-preset-chip" data-f="${yestStr}" data-t="${yestStr}">Yesterday</button>
          <button type="button" class="report-preset-chip" data-f="${weekStartStr}" data-t="${todayStr}">Last 7 Days</button>
          <button type="button" class="report-preset-chip" data-f="${monthStartStr}" data-t="${todayStr}">This Month</button>
          <button type="button" class="report-preset-chip" data-f="2020-01-01" data-t="${todayStr}">All Time</button>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
          <span class="muted small">${t('from')}</span>
          <input id="f" type="date" value="${todayStr}" style="width:135px; padding:6px 10px; font-size:12.5px; border-radius:8px;">
          <span class="muted small">${t('to')}</span>
          <input id="t" type="date" value="${todayStr}" style="width:135px; padding:6px 10px; font-size:12.5px; border-radius:8px;">
        </div>
      </div>
    </div>

    <!-- Top 4 Summary Metric KPI Cards -->
    <div class="report-summary-kpis" id="reportSummaryCards">
      <div class="rep-kpi-card">
        <span class="rep-kpi-label">Total Records</span>
        <div class="rep-kpi-val" id="kpiRecords">0</div>
        <span class="rep-kpi-sub" id="kpiRecordsSub">Matching items</span>
      </div>
      <div class="rep-kpi-card">
        <span class="rep-kpi-label">Total Units / Count</span>
        <div class="rep-kpi-val" style="color:var(--brand);" id="kpiUnits">0</div>
        <span class="rep-kpi-sub" id="kpiUnitsSub">Total volume</span>
      </div>
      <div class="rep-kpi-card">
        <span class="rep-kpi-label">Total Amount / Value</span>
        <div class="rep-kpi-val" style="color:var(--accent-lime);" id="kpiTotal">LKR 0.00</div>
        <span class="rep-kpi-sub" id="kpiTotalSub">Net financial sum</span>
      </div>
      <div class="rep-kpi-card">
        <span class="rep-kpi-label">Average / Secondary</span>
        <div class="rep-kpi-val" style="color:var(--accent-pink);" id="kpiAvg">LKR 0.00</div>
        <span class="rep-kpi-sub" id="kpiAvgSub">Performance metric</span>
      </div>
    </div>

    <!-- Data Table Card with Live In-Memory Search -->
    <div class="table-card">
      <div class="report-table-toolbar">
        <div style="display:flex; align-items:center; gap:10px;">
          <h3 style="margin:0; font-size:16px; font-weight:800;" id="tableReportTitle">Report Output</h3>
          <span class="pill info" id="tableRowCountPill">0 rows</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <input id="repFilter" placeholder="${t('filterResults')}" style="width:260px; height:36px; padding:0 12px; font-size:12.5px; border-radius:10px;">
        </div>
      </div>
      <div id="out" style="overflow-x:auto;"></div>
    </div>
  `;

  // Render Table & KPI calculation
  const renderTableRows = (rows, def) => {
    const filterVal = ($('#repFilter')?.value || '').trim().toLowerCase();
    const filteredRows = filterVal 
      ? rows.filter(r => Object.values(r).some(val => String(val || '').toLowerCase().includes(filterVal)))
      : rows;

    const rowCountEl = $('#tableRowCountPill');
    if (rowCountEl) rowCountEl.textContent = `${filteredRows.length} ${filteredRows.length === 1 ? 'row' : 'rows'}`;

    // Update KPI cards
    const totalRecords = filteredRows.length;
    const totalQty = filteredRows.reduce((acc, r) => acc + (Number(r[def.qtyCol || 'Qty'] || r.Bills || 0)), 0);
    const totalSum = filteredRows.reduce((acc, r) => acc + (Number(r[def.sumCol || 'Total'] || 0)), 0);
    const avgVal = totalRecords > 0 ? (totalSum / totalRecords) : 0;

    $('#kpiRecords').textContent = totalRecords.toLocaleString();
    $('#kpiUnits').textContent = totalQty.toLocaleString();
    $('#kpiTotal').textContent = fmt(totalSum);
    $('#kpiAvg').textContent = fmt(avgVal);

    if (def.isCurrentSnapshot) {
      $('#kpiRecordsSub').textContent = 'Catalog items on record';
      $('#kpiUnitsSub').textContent = 'Current on-hand inventory units';
      $('#kpiTotalSub').textContent = 'Total inventory valuation';
      $('#kpiAvgSub').textContent = 'Average value per item';
    } else if (def.group === 'GRN & Purchases') {
      $('#kpiRecordsSub').textContent = 'Purchases / Deliveries';
      $('#kpiUnitsSub').textContent = 'Total units received in stock';
      $('#kpiTotalSub').textContent = 'Total inward procurement cost';
      $('#kpiAvgSub').textContent = 'Average cost per shipment';
    } else {
      $('#kpiRecordsSub').textContent = 'Sales turnover entries';
      $('#kpiUnitsSub').textContent = 'Total volume / customer transactions';
      $('#kpiTotalSub').textContent = 'Net sales revenue generated';
      $('#kpiAvgSub').textContent = 'Average ticket value (AOV)';
    }

    if (!filteredRows.length) {
      $('#out').innerHTML = `
        <div class="muted" style="text-align:center; padding:45px 20px;">
          <div style="font-size:32px; margin-bottom:8px;">🔍</div>
          <b>${t('noData')}</b>
          <p class="small muted" style="margin:4px 0 0;">No matching records found for this period or filter.</p>
        </div>
      `;
      return;
    }

    $('#out').innerHTML = `
      <table>
        <thead>
          <tr>
            ${def.cols.map(c => `<th>${c[0]}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${filteredRows.map(r => `
            <tr>
              ${def.cols.map(c => `<td>${c[1](r)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="${Math.max(1, def.cols.length - 2)}"><b>${t('grand')} (${filteredRows.length} items)</b></td>
            ${def.cols.length > 2 ? `<td><b>${totalQty.toLocaleString()} units</b></td>` : ''}
            <td><b style="font-size:14.5px; color:var(--brand);">${fmt(totalSum)}</b></td>
          </tr>
        </tfoot>
      </table>
    `;
  };

  const run = async () => {
    const k = $('#rt').value;
    const def = REPORT_CATALOG[k] || REPORT_CATALOG.daily;
    currentReportKey = k;

    $('#reportDescText').textContent = def.desc;
    $('#tableReportTitle').textContent = `${def.icon} ${def.name}`;

    // If it's a current snapshot (e.g. stockValuation, lowStock), date picker is irrelevant
    const dateBar = $('#reportDateBar');
    if (dateBar) {
      dateBar.style.opacity = def.isCurrentSnapshot ? '0.45' : '1';
      dateBar.style.pointerEvents = def.isCurrentSnapshot ? 'none' : 'auto';
    }

    try {
      $('#out').innerHTML = `<div class="muted small" style="text-align:center; padding:30px;">Loading report data…</div>`;
      const rows = await call('reports:' + k, { from: $('#f').value, to: $('#t').value });
      currentLoadedReportRows = rows || [];
      renderTableRows(currentLoadedReportRows, def);
    } catch (e) {
      toast(e.message, 1);
      $('#out').innerHTML = `<div class="muted small" style="text-align:center; padding:20px; color:var(--bad);">${esc(e.message)}</div>`;
    }
  };

  // Live filter inside table
  $('#repFilter').oninput = () => {
    const def = REPORT_CATALOG[currentReportKey] || REPORT_CATALOG.daily;
    renderTableRows(currentLoadedReportRows, def);
  };

  // Dropdown change triggers immediate report refresh
  $('#rt').onchange = run;
  $('#run').onclick = run;

  // Category Tabs Filter
  $('#reportCatTabs').onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    $('#reportCatTabs').querySelectorAll('.report-preset-chip').forEach(c => c.classList.remove('active'));
    b.classList.add('active');

    const cat = b.dataset.cat;
    currentCategoryFilter = cat;

    // Filter the dropdown optgroups or pick first report in that group
    const sel = $('#rt');
    const optgroups = sel.querySelectorAll('optgroup');
    optgroups.forEach(og => {
      if (cat === 'all' || og.label.includes(cat)) {
        og.style.display = '';
      } else {
        og.style.display = 'none';
      }
    });

    if (cat !== 'all') {
      const firstOpt = Array.from(sel.options).find(o => o.parentElement.label.includes(cat));
      if (firstOpt) {
        sel.value = firstOpt.value;
      }
    }
    run();
  };

  // Date Preset Chips
  $('#datePresetChips').onclick = e => {
    const b = e.target.closest('.report-preset-chip');
    if (!b || !b.dataset.f) return;
    $('#datePresetChips').querySelectorAll('.report-preset-chip').forEach(c => c.classList.remove('active'));
    b.classList.add('active');
    $('#f').value = b.dataset.f;
    $('#t').value = b.dataset.t;
    run();
  };

  // Export to CSV
  $('#btnExportCsv').onclick = () => {
    if (!currentLoadedReportRows.length) {
      toast('No report rows to export!', 1);
      return;
    }
    const def = REPORT_CATALOG[currentReportKey] || REPORT_CATALOG.daily;
    const headers = def.cols.map(c => c[0]);

    // Strip HTML tags for clean CSV export
    const cleanCell = html => {
      const tmp = document.createElement('div');
      tmp.innerHTML = String(html ?? '');
      return `"${(tmp.textContent || tmp.innerText || '').replace(/"/g, '""').trim()}"`;
    };

    const csvLines = [
      `"KadePOS Report: ${def.name}"`,
      `"Generated: ${new Date().toLocaleString()}","Period: ${$('#f').value} to ${$('#t').value}"`,
      '',
      headers.map(h => `"${h}"`).join(',')
    ];

    currentLoadedReportRows.forEach(row => {
      const cells = def.cols.map(col => cleanCell(col[1](row)));
      csvLines.push(cells.join(','));
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csvLines.join('\r\n'));
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', `kade_pos_${currentReportKey}_${today()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    toast(`Report exported as CSV!`);
  };

  // Print Report Window
  $('#btnPrintReport').onclick = () => {
    if (!currentLoadedReportRows.length) {
      toast('No report data to print!', 1);
      return;
    }
    const def = REPORT_CATALOG[currentReportKey] || REPORT_CATALOG.daily;
    const settings = cachedReceiptSettings || {};
    const shopName = settings.shopName || 'KADE POS ENTERPRISE';
    const totalSum = currentLoadedReportRows.reduce((acc, r) => acc + (Number(r[def.sumCol || 'Total'] || 0)), 0);

    const printWin = window.open('', '_blank', 'width=950,height=750');
    if (!printWin) {
      toast('Pop-up window blocked. Please allow pop-ups to print reports.', 1);
      return;
    }

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${esc(def.name)} - ${esc(shopName)}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 12px; color: #111; margin: 24px; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px; }
          .shop-title { font-size: 18px; font-weight: 800; text-transform: uppercase; margin: 0; }
          .report-title { font-size: 15px; font-weight: 700; color: #333; margin: 4px 0 0; }
          .meta-row { display: flex; justify-content: space-between; font-size: 11px; color: #666; margin-top: 6px; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 11.5px; }
          th { background: #f3f4f6; border-bottom: 1.5px solid #000; padding: 8px 10px; text-align: left; text-transform: uppercase; font-size: 10.5px; }
          td { border-bottom: 1px solid #e5e7eb; padding: 7px 10px; }
          tfoot td { font-weight: 800; border-top: 2px solid #000; border-bottom: 2px solid #000; padding: 9px 10px; }
          .pill { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; border: 1px solid #ccc; }
          @media print {
            body { margin: 10mm; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="shop-title">${esc(shopName)}</h1>
          <div class="report-title">${def.icon} ${esc(def.name)}</div>
          <div class="meta-row">
            <span>Period: <b>${esc($('#f').value)}</b> to <b>${esc($('#t').value)}</b></span>
            <span>Printed on: <b>${new Date().toLocaleString()}</b></span>
            <span>Total Records: <b>${currentLoadedReportRows.length}</b></span>
          </div>
        </div>

        <table>
          <thead>
            <tr>${def.cols.map(c => `<th>${c[0]}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${currentLoadedReportRows.map(r => `
              <tr>${def.cols.map(c => `<td>${c[1](r)}</td>`).join('')}</tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="${Math.max(1, def.cols.length - 1)}"><b>GRAND TOTAL (${currentLoadedReportRows.length} entries)</b></td>
              <td><b>${fmt(totalSum)}</b></td>
            </tr>
          </tfoot>
        </table>

        <div style="margin-top:20px; text-align:center; font-size:11px; color:#888;">
          Powered by Amectar · Contact: 0741800901
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  };

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

    <!-- Master Business Profile & Shop Type Customizer Card -->
    <div class="panel-card" style="margin-bottom:20px; border:2px solid rgba(99,102,241,0.25);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div style="flex:1; min-width:280px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <h3 style="margin:0; font-size:18px; font-weight:800;">🏪 Multi-Shop Business Profile</h3>
            <span class="pill ok" style="font-size:11px;">${currentShopProfile?.icon || '🏪'} ${esc(currentShopProfile?.name || 'General')}</span>
            ${currentShopType === 'restaurant' 
              ? `<span class="pill warn" style="font-size:11px;">🍽️ Food Match Active</span>` 
              : `<span class="pill info" style="font-size:11px;">🛍️ Retail Mode</span>`}
          </div>
          <p style="margin:6px 0 0; font-size:13px; color:var(--text-muted); line-height:1.45;">
            Adapt system for any shop: Pet Food Shop, Grocery Store, Lovers/Gift Shop, Restaurant, Clothing, Pharmacy, Hardware, or General Retail.
          </p>
        </div>
        <button class="btn btn-primary btn-sm" id="btnSubsChangeShop" style="font-weight:800; padding:9px 18px; border-radius:10px;">
          🔄 Switch Shop Kind / Presets
        </button>
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

  const btnSubsChangeShop = $('#btnSubsChangeShop');
  if (btnSubsChangeShop) btnSubsChangeShop.onclick = () => openShopProfileModal();
}

/* ==========================================================================
   VIEW: HELP & USER GUIDE (SIMPLE, FRIENDLY CASHIER & MANAGER MANUAL)
   ========================================================================== */
async function vHelp() {
  const HELP_TOPICS = {
    sell: {
      icon: '🛒',
      title: 'How to Sell an Item (Billing)',
      sub: '3 simple steps to ring up a bill, take money, and print a receipt.',
      tip: '💡 <strong>Good to know:</strong> Keep <strong>Print: ON</strong> turned on at the top right of the bill so receipts print automatically without clicking anything!',
      steps: [
        {
          num: 1,
          title: 'Put Items in the Bill',
          body: 'Type any letter or number to start searching immediately, or scan the barcode with your scanner. Press <span class="kbd-shortcut-pill">Enter</span> to add it to the bill.'
        },
        {
          num: 2,
          title: 'Choose Cash or Card',
          body: 'Press <span class="kbd-shortcut-pill">Enter</span> to move to payment. Use <span class="kbd-shortcut-pill">←</span> <span class="kbd-shortcut-pill">→</span> Arrow keys to pick Cash, Card, or Split. If cash: Type money received to see exact change!'
        },
        {
          num: 3,
          title: 'Finish & Print Receipt',
          body: 'Press <span class="kbd-shortcut-pill">Enter</span> to complete the sale.<br>The cash drawer pops open and the receipt prints out immediately for your customer!'
        }
      ]
    },
    weight: {
      icon: '⚖️',
      title: 'Selling Loose / Weight Items',
      sub: 'For goods sold by weight or measurement (Rice, Sugar, Vegetables, Meat, Sand, Cement, or Nails).',
      tip: '⚖️ <strong>Good to know:</strong> The printed receipt clearly prints the unit and weight (e.g. <code>0.500 kg @ Rs. 300 = Rs. 150.00</code>) so customers have 100% confidence.',
      steps: [
        {
          num: 1,
          title: 'Put Item in the Bill',
          body: 'Click or scan the item (like Rice, Vegetables, or Sugar) to put it into the current bill.'
        },
        {
          num: 2,
          title: 'Type the Weight Number',
          body: 'Click directly on the <strong>Quantity</strong> number in the bill and type:<br><br>• 250 grams → Type <code>0.25</code><br>• 500 grams (Half Kilo) → Type <code>0.5</code><br>• 750 grams → Type <code>0.75</code><br>• 1 Kilo and 500g → Type <code>1.5</code>'
        },
        {
          num: 3,
          title: 'Price Calculates Automatically!',
          body: 'The system calculates the exact price for that weight automatically. Now choose Cash or Card and click Complete Sale!'
        }
      ]
    },
    hold: {
      icon: '⏸️',
      title: 'Customer Forgot Money? (Hold Bill)',
      sub: 'How to save their bill and serve waiting people without losing any items.',
      tip: '📋 <strong>Good to know:</strong> You can hold multiple bills at the same time. None of them will be lost!',
      steps: [
        {
          num: 1,
          title: 'Click Hold Bill',
          body: 'Click the <strong>⏸️ Hold</strong> button at the top of the bill. The bill is saved safely and the screen is cleared.'
        },
        {
          num: 2,
          title: 'Serve the Next Customer',
          body: 'Ring up the next customer in line immediately so other people don\'t have to wait in a queue!'
        },
        {
          num: 3,
          title: 'Bring the Bill Back',
          body: 'When the first customer returns with their money, click <strong>📋 Held</strong> and click <strong>Restore Bill</strong>. All their items come right back!'
        }
      ]
    },
    credit: {
      icon: '💳',
      title: 'Customer Credit (Naya Book)',
      sub: 'Keep track of regular customers who take items now and pay later.',
      tip: '🤝 <strong>Good to know:</strong> You can set a Credit Limit for any customer so they cannot take more credit than you want.',
      steps: [
        {
          num: 1,
          title: 'Sell on Credit',
          body: 'In the bill payment method, click <strong>Credit / Account</strong>. Choose the customer\'s name and click Complete Sale. The bill is saved under their name.'
        },
        {
          num: 2,
          title: 'Check How Much They Owe',
          body: 'Click <strong>Customer Accounts</strong> in the left sidebar to see all customer balances and see who has unpaid debt.'
        },
        {
          num: 3,
          title: 'When They Pay Money',
          body: 'Click the customer\'s name, click <strong>Receive Payment</strong>, type how much they gave you, and save. Click <strong>Print Statement</strong> to give them a receipt slip!'
        }
      ]
    },
    morning: {
      icon: '🌞',
      title: 'Morning: Start Your Day (Open Shift)',
      sub: 'What to do first thing when you arrive at the shop in the morning.',
      tip: '💵 <strong>Good to know:</strong> If you take money out during the day for shop tea or delivery, click Shift Active and choose <strong>Cash Out</strong> so your cash drawer balances at night.',
      steps: [
        {
          num: 1,
          title: 'Click Shift Closed',
          body: 'Click the grey <strong>⚪ Shift Closed</strong> button at the top of the bill.'
        },
        {
          num: 2,
          title: 'Count Starting Change',
          body: 'Count the money already inside your drawer (for example Rs. 5,000 for giving change to customers) and type it in.'
        },
        {
          num: 3,
          title: 'Click Open Shift',
          body: 'Click <strong>Open Shift</strong>. The button turns green <strong>🟢 Shift Active</strong>. Your register is ready to sell all day!'
        }
      ]
    },
    evening: {
      icon: '🌙',
      title: 'Evening: End Your Day (Daily Total)',
      sub: 'What to do at the end of the day or when finishing your shift.',
      tip: '🧾 <strong>Good to know:</strong> Compare the printed slip with your drawer money. If anything is short or over, the slip tells you exactly.',
      steps: [
        {
          num: 1,
          title: 'Click Shift Active',
          body: 'At the end of your day, click the green <strong>🟢 Shift Active</strong> button at the top of the bill.'
        },
        {
          num: 2,
          title: 'Count Your Drawer Cash',
          body: 'Count all the cash physically inside your drawer and type the total amount.'
        },
        {
          num: 3,
          title: 'Print Z-Report Closing Slip',
          body: 'Click <strong>Close Shift & Print Z-Report</strong>. A full closing slip prints out showing total sales, cash, card, and your drawer balance.'
        }
      ]
    },
    keys: {
      icon: '⌨️',
      title: 'Easy Keyboard Keys (No F-Keys Needed)',
      sub: 'Everything can be done quickly using simple standard keys on any laptop or desktop keyboard.',
      tip: '⚡ <strong>Good to know:</strong> Pressing <strong>Esc</strong> on your keyboard will always close any open popup window or cancel an action.',
      shortcuts: [
        { key: 'Any Letter', name: 'Instant Search & Scan', desc: 'Type any letter or number to start searching immediately. Barcode scanners type here automatically.' },
        { key: '↑ / ↓ Arrows', name: 'Select Products', desc: 'Move highlight up and down through matching products.' },
        { key: '← / → Arrows', name: 'Choose Payment Method', desc: 'Select Cash, Card, Split, or Credit without touching the mouse.' },
        { key: 'Enter', name: 'Add / Next / Complete', desc: 'Adds selected item, moves to discount, then payment, then completes sale & prints receipt.' },
        { key: 'Esc', name: 'Cancel / Go Back', desc: 'Closes open dialogs, clears selection, or returns focus to search.' }
      ]
    }
  };

  let activeTopic = 'sell';

  function renderTopic(key) {
    const topic = HELP_TOPICS[key] || HELP_TOPICS.sell;

    let bodyHtml = '';
    if (topic.shortcuts) {
      bodyHtml = `
        <div class="help-shortcut-grid">
          ${topic.shortcuts.map(s => `
            <div class="help-shortcut-card">
              <span class="kbd-shortcut-pill">${s.key}</span>
              <div class="help-shortcut-info">
                <span class="help-shortcut-name">${s.name}</span>
                <span class="help-shortcut-desc">${s.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      bodyHtml = `
        <div class="help-steps-row">
          ${topic.steps.map(s => `
            <div class="help-step-box">
              <span class="help-step-num">${s.num}</span>
              <h4 class="help-step-title">${s.title}</h4>
              <p class="help-step-body">${s.body}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="help-panel-banner">
        <div class="help-panel-icon">${topic.icon}</div>
        <div>
          <h2 class="help-panel-heading">${topic.title}</h2>
          <p class="help-panel-desc">${topic.sub}</p>
        </div>
      </div>

      ${bodyHtml}

      <div class="help-tip-callout">
        ${topic.tip}
      </div>
    `;
  }

  $('#view').innerHTML = `
    <div class="p-6 help-wrap">
      <!-- Friendly Simple Header -->
      <div class="help-simple-header">
        <div>
          <h1 class="help-simple-title">
            <span>💡 Simple User Guide</span>
          </h1>
          <p class="help-simple-sub">Choose any topic below to see 3 easy steps on how to do it.</p>
        </div>
      </div>

      <!-- Topic Selection Buttons -->
      <div class="help-topic-tabs">
        <button class="help-topic-btn active" data-topic="sell">🛒 1. How to Sell</button>
        <button class="help-topic-btn" data-topic="weight">⚖️ 2. Weight Items</button>
        <button class="help-topic-btn" data-topic="hold">⏸️ 3. Hold Bill</button>
        <button class="help-topic-btn" data-topic="credit">💳 4. Credit (Naya)</button>
        <button class="help-topic-btn" data-topic="morning">🌞 5. Morning Start</button>
        <button class="help-topic-btn" data-topic="evening">🌙 6. Evening Close</button>
        <button class="help-topic-btn" data-topic="keys">⌨️ 7. Keyboard Keys</button>
      </div>

      <!-- Active Topic Card Panel -->
      <div class="help-topic-panel" id="helpTopicPanel">
        ${renderTopic(activeTopic)}
      </div>

      <!-- Quick Hardware Troubleshooting -->
      <div class="help-faq-bar">
        <h3 class="help-faq-title">
          <span>⚡ Quick Help with Hardware</span>
        </h3>
        <div class="help-faq-items">
          <div class="help-faq-pill">
            <strong>🖨️ Printer not printing?</strong>
            Check printer power light is green. Make sure paper roll feeds from bottom. Make sure <em>Print: ON</em> is toggled in bill header.
          </div>
          <div class="help-faq-pill">
            <strong>💰 Cash drawer won't open?</strong>
            Make sure the small phone-style wire is plugged into the back of your printer. The drawer opens automatically on Cash sales.
          </div>
          <div class="help-faq-pill">
            <strong>🔍 Scanner not reading?</strong>
            Click the search box so your cursor is active. Wipe the scanner glass lens with a clean cloth.
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach button click handlers
  const tabBtns = document.querySelectorAll('.help-topic-btn');
  const panel = $('#helpTopicPanel');

  tabBtns.forEach(btn => {
    btn.onclick = () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTopic = btn.getAttribute('data-topic');
      if (panel) {
        panel.innerHTML = renderTopic(activeTopic);
      }
    };
  });
}

/* Initialize App */
applyStatic();
boot();
