# Kade POS Enterprise (Electron + SQL Server)
1. Install Node 18+ and make sure SQL Server accepts `sa` / TCP on localhost (port 1433).
2. `npm install` then `npm start`  (build installer: `npm run dist`)
3. First run auto-creates the `LocalShop` DB, tables and sample items.
4. Default login: **admin / admin123** (Super Admin) — change it immediately in Users.
5. **Fast Keyboard Cashier POS Flow**:
   - `F1`: Focus search input (or scan barcode directly).
   - `↑ ↓ ← →` Arrow Keys: Navigate product tiles in the catalog.
   - `Enter` on product tile: Adds product to bill with highlight pulse and steppers.
   - `Enter` on empty search or from bill: Focuses directly to **Bill Discount**.
   - `Enter` on Bill Discount: Focuses directly to **Cash Received**.
   - `Enter` on Cash Received: Enforces numeric cash received (≥ total) and completes sale!
   - `F8`: Toggle automatic receipt printing ON/OFF directly from POS.
6. **Standard Thermal Receipt & Live Preview**:
   - Configurable store branding (Name, Tagline, Address, Phone numbers, Tax/BR #, Header & Footer notes, Paper width 80mm/58mm).
   - Real-time interactive preview as you type with test print support.
7. **GRN Receiving**:
   - Receive inventory for any category (Beverages, Groceries, Bakery, etc.).
   - Live autocomplete product search with category filters, batch tracking, and expiry dates.
8. Bilingual: English (default) / Sinhala toggle in sidebar and login screen.
9. First (installation) month is free; billing starts the following month with notifications near the 25th.
10. **Dual Licensing Model (Subscription vs One-Time Lifetime License)**:
    - In the Super Admin Subscription window, easily toggle between **Monthly Subscription Mode** and **One-Time Payment (Lifetime License)**.
    - When turned OFF (One-Time Payment mode), Super Admin bank card details, upcoming payment banners, and renewal code boxes are completely hidden from all client and cashier dashboards.
11. **Comprehensive Reports & Analytics Suite**:
    - **Sales & Revenue**: Daily sales breakdown, Item-wise sales ranking, Category-wise sales, Detailed invoices register, Cashier performance, Payment methods (Cash vs Card), and Hourly peak sales trends.
    - **GRN & Purchases**: GRN inward receipts summary, GRN item-wise purchases with batch & expiry dates, and Supplier purchases breakdown.
    - **Stock & Inventory**: Live stock inventory valuation, Low stock reorder warnings (≤ 5 units), and Perishable batch expiry tracking.
    - Features instant date presets (Today, Yesterday, Last 7 Days, This Month, All Time), top 4 KPI summary cards, live in-table search, one-click CSV export, and print formatting.
12. **Hold / Park Bills (Multi-Cart Tabs - F4)**:
    - Park active customer carts with 1 click (`F4` or "Hold" button) with custom reference note (e.g. "Table 4", "Waiting for wallet").
    - Counter badge shows pending parked bills count.
    - Recall and resume any parked bill instantly or discard with single click.
13. **Shift Management & Till Reconciliation (Z-Report - F9)**:
    - Starting cash float entry at shift open.
    - Live Petty Cash IN / OUT (expenses) tracking during shift.
    - Real-time Expected Cash calculation (`Starting Float + Cash Sales + Petty In - Petty Out`).
    - Actual counted till comparison with live Overage (+) / Shortage (-) status.
    - Official 80mm/58mm thermal End-of-Shift Z-Report slip with manager/cashier signatures.
14. **Invoice Returns, Refunds & Reprints (F3)**:
    - Search invoices by invoice number (`INV-XXXXXX`) or browse recent 30 sales (`F3`).
    - 1-click thermal bill duplicate reprint.
    - Partial or full item return with reason logging, refund method selection, and automatic inventory stock restoration.
    - Official thermal Return Voucher printing.
15. **Split Payments / Mixed Tender**:
    - Combined Cash + Card payments on a single sale invoice.
    - Quick 50/50 split button or custom split proportions with cash change tracking.
16. **Customer Accounts & Credit Ledger (Store Credit / ණය පොත)**:
    - Customer directory with credit limit facilities and live outstanding balance tracking.
    - Checkout via "Store Credit" with instant credit limit check and warning banner.
    - Repayment collection modal with payment voucher thermal receipt.
    - Full chronological statement ledger with running balances and printable statement slips.
17. **Barcode Label & Price Sticker Generator**:
    - Offline Code-128 SVG barcode generator with zero external network dependencies.
    - Configurable label sticker generator for standard 50x30mm thermal rolls, compact 40x25mm rolls, or A4 sheets (3-column grid).
    - Custom quantity copies, price overrides, and store branding elements.
18. **Loose & Fractional Items (Sold by Weight / Measure)**:
    - Sells items by kg, g, meter, liter, etc., with 3-decimal precision.
    - Smart measure dialog with quick fraction presets (100g, 250g, 500g, 1kg) and reverse Rupee Target calculator (e.g. "Give me Rs. 200 of sugar").
19. **Automated Hourly Database Backups**:
    - Automatically creates and updates a single timestamped JSON database snapshot per day every hour.
    - Configurable backup folder with 1-click manual backup and instant restore routine covering all tables.
20. **Multi-Industry Shop Profiles & Category Management**:
    - Switch between Supermarket/Grocery, Restaurant/Cafe, Hardware & Electrical, Pet Food Shop, Pharmacy, Fashion Boutique, or General Retail.
    - Full custom category management (add, edit, soft-delete with item reassignment).
