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
