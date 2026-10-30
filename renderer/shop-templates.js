/* ==========================================================================
   MULTI-INDUSTRY SHOP & BUSINESS TEMPLATES
   Provides business profiles, default categories, receipt presets, and sample
   inventory for Restaurant, Pet Shop, Grocery, Lovers/Gift Shop, Clothing,
   Pharmacy, Hardware, and General Retail.
   ========================================================================== */

const SHOP_TEMPLATES = {
  restaurant: {
    id: 'restaurant',
    name: 'Restaurant, Cafe & Eatery',
    shortName: 'Restaurant',
    icon: '🍔',
    color: '#f97316',
    description: 'Specialized for fast food, dining, rice & curry, kottu, short eats, beverages, and desserts.',
    defaultShopName: 'Kade Restaurant & Cafe',
    defaultTagline: 'Fresh Food, Short Eats & Refreshing Beverages',
    defaultReceiptHeader: 'WELCOME TO KADE RESTAURANT',
    defaultReceiptFooter: 'Thank you for dining with us! Please come again.',
    searchPlaceholder: 'Search foods, dishes, drinks or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. Chicken Fried Rice, Egg Kottu, Milk Tea',
    enableFoodAutoMatch: true,
    categories: ['Fried Rice', 'Kottu', 'Short Eats', 'Roti & Breads', 'Burgers & Fast Food', 'Beverages', 'Desserts'],
    sampleItems: [
      { name: 'Chicken Fried Rice', category: 'Fried Rice', price: 650, stock: 50, barcode: '2001', imageUrl: 'assets/food/chicken-fried-rice.jpg' },
      { name: 'Egg Fried Rice', category: 'Fried Rice', price: 500, stock: 50, barcode: '2002', imageUrl: 'assets/food/egg-fried-rice.jpg' },
      { name: 'Chicken Kottu', category: 'Kottu', price: 700, stock: 50, barcode: '2003', imageUrl: 'assets/food/chicken-kottu.jpg' },
      { name: 'Cheese Kottu', category: 'Kottu', price: 850, stock: 40, barcode: '2004', imageUrl: 'assets/food/cheese-kottu.jpg' },
      { name: 'Fish Cutlet', category: 'Short Eats', price: 90, stock: 100, barcode: '2005', imageUrl: 'assets/food/fish-cutlet.jpg' },
      { name: 'Egg Roll', category: 'Short Eats', price: 120, stock: 80, barcode: '2006', imageUrl: 'assets/food/chinese-egg-roll.jpg' },
      { name: 'Vegetable Roti', category: 'Short Eats', price: 80, stock: 100, barcode: '2007', imageUrl: 'assets/food/vegetable-roti.jpg' },
      { name: 'Paratha Plain', category: 'Roti & Breads', price: 70, stock: 150, barcode: '2008', imageUrl: 'assets/food/paratha.jpg' },
      { name: 'Milk Tea', category: 'Beverages', price: 80, stock: 100, barcode: '2009', imageUrl: 'assets/food/ceylon-milk-tea.jpg' },
      { name: 'Fresh Lime Juice', category: 'Beverages', price: 150, stock: 60, barcode: '2010', imageUrl: 'assets/food/fresh-lime-juice.jpg' }
    ]
  },

  petshop: {
    id: 'petshop',
    name: 'Pet Food & Animal Supplies',
    shortName: 'Pet Food Shop',
    icon: '🐶',
    color: '#10b981',
    description: 'Dog & cat food, pet treats, grooming shampoos, leashes, toys, bird and fish feeds.',
    defaultShopName: 'Paw & Paws Pet Supplies',
    defaultTagline: 'Premium Nutrition, Treats & Care for Happy Pets',
    defaultReceiptHeader: 'PAW & PAWS PET SHOP',
    defaultReceiptFooter: 'Thank you for loving your pets! Wagging tails guaranteed.',
    searchPlaceholder: 'Search pet food, treats, toys, care or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. Drools Adult Dog Food 3kg, Whiskas Ocean Fish, Chew Bone',
    enableFoodAutoMatch: false,
    categories: ['Dog Food', 'Cat Food', 'Pet Treats & Snacks', 'Grooming & Shampoo', 'Collars & Leashes', 'Pet Health & Care', 'Accessories & Toys'],
    sampleItems: [
      { name: 'Drools Adult Dog Food Chicken 3kg', category: 'Dog Food', price: 3850, stock: 35, barcode: '4791001001', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Bulk Adult Dog Kibble (Loose)', category: 'Dog Food', price: 950, stock: 120, barcode: '4791001011', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'Pedigree Meat Jerky Dog Treats 80g', category: 'Pet Treats & Snacks', price: 620, stock: 60, barcode: '4791001002', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Whiskas Ocean Fish Dry Cat Food 1.2kg', category: 'Cat Food', price: 2150, stock: 40, barcode: '4791001003', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Me-O Wet Cat Food Pouch Tuna 80g', category: 'Cat Food', price: 240, stock: 120, barcode: '4791001004', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'SmartHeart Puppy Food Beef & Milk 1.5kg', category: 'Dog Food', price: 2450, stock: 25, barcode: '4791001005', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Pet Flea & Tick Anti-Itch Shampoo 250ml', category: 'Grooming & Shampoo', price: 1150, stock: 30, barcode: '4791001006', unit: 'bottle', isLoose: false, imageUrl: '' },
      { name: 'Heavy Duty Nylon Dog Leash & Collar Set', category: 'Collars & Leashes', price: 950, stock: 45, barcode: '4791001007', unit: 'pcs', isLoose: false, imageUrl: '' },
      { name: 'Cat Litter Bentonite Odor Control 5L', category: 'Pet Health & Care', price: 1450, stock: 20, barcode: '4791001009', unit: 'bag', isLoose: false, imageUrl: '' },
      { name: 'Bulk Mixed Bird Seed (Loose)', category: 'Pet Treats & Snacks', price: 450, stock: 80, barcode: '4791001010', unit: 'kg', isLoose: true, imageUrl: '' }
    ]
  },

  grocery: {
    id: 'grocery',
    name: 'Grocery Store & Supermarket',
    shortName: 'Grocery Store',
    icon: '🛒',
    color: '#3b82f6',
    description: 'Daily dry provisions, loose rice, sugar, dhal, dairy milk, biscuits, spices, soaps, and household essentials.',
    defaultShopName: 'City Super Grocery & Provisions',
    defaultTagline: 'Fresh Daily Provisions, Dairy & Household Needs',
    defaultReceiptHeader: 'CITY SUPER GROCERY',
    defaultReceiptFooter: 'Thank you for shopping with us! Freshness guaranteed.',
    searchPlaceholder: 'Search groceries, brands, dry foods or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. Keeri Samba Rice (Loose), White Sugar 1kg, Sunlight Soap',
    enableFoodAutoMatch: false,
    categories: ['Rice & Grains', 'Sugar & Flour', 'Dairy & Milk', 'Biscuits & Snacks', 'Spices & Condiments', 'Oils & Fats', 'Soaps & Cleaning', 'Beverages'],
    sampleItems: [
      { name: 'Keeri Samba Rice (Loose)', category: 'Rice & Grains', price: 260, stock: 150, barcode: '4792001001', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'White Sugar (Loose)', category: 'Sugar & Flour', price: 280, stock: 180, barcode: '4792001002', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'Red Dhal Masoor (Loose)', category: 'Rice & Grains', price: 340, stock: 120, barcode: '4792001003', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'Prima Wheat Flour (Loose)', category: 'Sugar & Flour', price: 210, stock: 95, barcode: '4792001004', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'Pure White Coconut Oil (Loose)', category: 'Oils & Fats', price: 720, stock: 60, barcode: '4792001009', unit: 'L', isLoose: true, imageUrl: '' },
      { name: 'Anchor Full Cream Milk Powder 400g', category: 'Dairy & Milk', price: 1150, stock: 60, barcode: '4792001005', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Munchee Super Cream Cracker 490g', category: 'Biscuits & Snacks', price: 400, stock: 90, barcode: '4792001006', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Maliban Gold Marie Biscuits 300g', category: 'Biscuits & Snacks', price: 290, stock: 85, barcode: '4792001007', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Watawala Ceylon BOPF Tea 200g', category: 'Beverages', price: 420, stock: 55, barcode: '4792001008', unit: 'pkt', isLoose: false, imageUrl: '' },
      { name: 'Sunlight Lemon Fresh Soap Bar 110g', category: 'Soaps & Cleaning', price: 135, stock: 150, barcode: '4792001010', unit: 'pcs', isLoose: false, imageUrl: '' }
    ]
  },

  lovers_gift: {
    id: 'lovers_gift',
    name: 'Lovers, Gift & Novelty Shop',
    shortName: 'Lovers & Gift Shop',
    icon: '🎁',
    color: '#ec4899',
    description: 'Plush teddy bears, perfumes, romantic keepsakes, greeting cards, chocolates, jewelry and hampers.',
    defaultShopName: 'Love & Romance Gift World',
    defaultTagline: 'Special Gifts, Perfumes & Romantic Surprises',
    defaultReceiptHeader: 'LOVE & ROMANCE GIFT SHOP',
    defaultReceiptFooter: 'Thank you for celebrating love with us! See you soon.',
    searchPlaceholder: 'Search gifts, teddy bears, perfumes, cards or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. Giant Teddy Bear 3ft, Romantic Snow Globe, French Perfume',
    enableFoodAutoMatch: false,
    categories: ['Plush & Soft Toys', 'Perfumes & Scents', 'Greeting Cards', 'Watches & Jewelry', 'Chocolates & Hampers', 'Romantic Gifts', 'Gift Wrap & Bags'],
    sampleItems: [
      { name: 'Giant Teddy Bear 3-Foot Brown', category: 'Plush & Soft Toys', price: 4850, stock: 15, barcode: '4793001001', imageUrl: '' },
      { name: 'Romantic Musical Crystal Snow Globe', category: 'Romantic Gifts', price: 2750, stock: 20, barcode: '4793001002', imageUrl: '' },
      { name: 'French Eau De Parfum Romantic 50ml', category: 'Perfumes & Scents', price: 3450, stock: 25, barcode: '4793001003', imageUrl: '' },
      { name: 'Ferrero Rocher Chocolate Heart Box 16s', category: 'Chocolates & Hampers', price: 3200, stock: 30, barcode: '4793001004', imageUrl: '' },
      { name: 'Couple Handprint Keepsake Plaster Kit', category: 'Romantic Gifts', price: 2650, stock: 18, barcode: '4793001005', imageUrl: '' },
      { name: 'Deluxe Valentine Greeting Card', category: 'Greeting Cards', price: 350, stock: 100, barcode: '4793001006', imageUrl: '' },
      { name: 'Rose Gold Plated Heart Pendant Necklace', category: 'Watches & Jewelry', price: 2950, stock: 22, barcode: '4793001007', imageUrl: '' },
      { name: "Men's Leather Wallet & Belt Gift Set", category: 'Romantic Gifts', price: 3850, stock: 16, barcode: '4793001008', imageUrl: '' },
      { name: 'Luxury Aromatherapy Scented Candle', category: 'Perfumes & Scents', price: 1650, stock: 35, barcode: '4793001009', imageUrl: '' },
      { name: 'Velvet Ribbon Gift Bag Large', category: 'Gift Wrap & Bags', price: 250, stock: 80, barcode: '4793001010', imageUrl: '' }
    ]
  },

  clothing: {
    id: 'clothing',
    name: 'Fashion Boutique & Apparel',
    shortName: 'Clothing Boutique',
    icon: '👗',
    color: '#8b5cf6',
    description: "Men's & women's fashion, kidswear, shoes, bags, denim, dresses and accessories.",
    defaultShopName: 'Urban Style Fashion Boutique',
    defaultTagline: 'Trending Apparel, Footwear & Modern Fashion',
    defaultReceiptHeader: 'URBAN STYLE BOUTIQUE',
    defaultReceiptFooter: 'Thank you for your visit! Exchange within 7 days with bill.',
    searchPlaceholder: 'Search clothes, sizes, fashion, shoes or scan barcode (F1)...',
    itemNamePlaceholder: "e.g. Men's Cotton Shirt, Floral Summer Dress, Denim Jeans",
    enableFoodAutoMatch: false,
    categories: ["Men's Wear", "Women's Wear", "Kidswear & Baby", "Footwear", "Bags & Purses", "Fashion Accessories"],
    sampleItems: [
      { name: "Men's Slim Fit Cotton Shirt", category: "Men's Wear", price: 2850, stock: 30, barcode: '4794001001', imageUrl: '' },
      { name: "Women's Floral Summer Maxi Dress", category: "Women's Wear", price: 3650, stock: 25, barcode: '4794001002', imageUrl: '' },
      { name: 'Unisex Classic Crewneck T-Shirt', category: "Men's Wear", price: 1450, stock: 60, barcode: '4794001003', imageUrl: '' },
      { name: "Women's High-Waist Skinny Jeans", category: "Women's Wear", price: 3950, stock: 20, barcode: '4794001004', imageUrl: '' },
      { name: 'Kids Printed Cotton Casual Shorts', category: 'Kidswear & Baby', price: 950, stock: 40, barcode: '4794001005', imageUrl: '' },
      { name: 'Leather Handbag Crossbody Tote', category: 'Bags & Purses', price: 4200, stock: 15, barcode: '4794001006', imageUrl: '' },
      { name: 'Casual Canvas Sneakers White', category: 'Footwear', price: 3450, stock: 18, barcode: '4794001007', imageUrl: '' }
    ]
  },

  pharmacy: {
    id: 'pharmacy',
    name: 'Pharmacy & Healthcare',
    shortName: 'Pharmacy',
    icon: '💊',
    color: '#06b6d4',
    description: 'OTC medicines, vitamins, first aid supplies, baby care, sanitizers and personal hygiene.',
    defaultShopName: 'LifeCare Pharmacy & Wellness',
    defaultTagline: 'Trusted Health, Wellness & Hygiene Supplies',
    defaultReceiptHeader: 'LIFECARE PHARMACY',
    defaultReceiptFooter: 'Wishing you good health! Take medicines as advised.',
    searchPlaceholder: 'Search medicine, healthcare, vitamins or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. Paracetamol 500mg, Vitamin C Chewable, Dettol 100ml',
    enableFoodAutoMatch: false,
    categories: ['OTC Medicine', 'Vitamins & Supplements', 'First Aid', 'Baby Care', 'Personal Hygiene', 'Skin & Hair Care'],
    sampleItems: [
      { name: 'Paracetamol 500mg Strip 10 Tabs', category: 'OTC Medicine', price: 50, stock: 300, barcode: '4795001001', imageUrl: '' },
      { name: 'Vitamin C 500mg Chewable 30 Tabs', category: 'Vitamins & Supplements', price: 650, stock: 50, barcode: '4795001002', imageUrl: '' },
      { name: 'Dettol Antiseptic Liquid 125ml', category: 'First Aid', price: 380, stock: 45, barcode: '4795001003', imageUrl: '' },
      { name: 'Digital Clinical Body Thermometer', category: 'First Aid', price: 850, stock: 25, barcode: '4795001004', imageUrl: '' },
      { name: 'Surgical 3-Ply Face Masks Box 50s', category: 'Personal Hygiene', price: 550, stock: 70, barcode: '4795001005', imageUrl: '' },
      { name: 'Baby Diapers Medium 32 Pack', category: 'Baby Care', price: 2650, stock: 30, barcode: '4795001006', imageUrl: '' },
      { name: 'Instant Hand Sanitizer Gel 100ml', category: 'Personal Hygiene', price: 220, stock: 80, barcode: '4795001007', imageUrl: '' }
    ]
  },

  hardware: {
    id: 'hardware',
    name: 'Hardware & Electrical Supplies',
    shortName: 'Hardware',
    icon: '🛠️',
    color: '#eab308',
    description: 'Power & hand tools, lighting, cables, plumbing, paint, fasteners and building supplies.',
    defaultShopName: 'BuildPro Hardware & Electrical',
    defaultTagline: 'Quality Tools, Electrical & Plumbing Supplies',
    defaultReceiptHeader: 'BUILDPRO HARDWARE',
    defaultReceiptFooter: 'Thank you for your business! Quality guaranteed.',
    searchPlaceholder: 'Search tools, hardware, fittings, paints or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. LED Bulb 9W, Claw Hammer 500g, Measuring Tape 5m',
    enableFoodAutoMatch: false,
    categories: ['Hand Tools', 'Power Tools', 'Electrical & Lighting', 'Plumbing', 'Screws & Fasteners', 'Paints & Brushes', 'Building Materials'],
    sampleItems: [
      { name: 'Tokyo Super Cement (Loose / kg)', category: 'Building Materials', price: 48, stock: 450, barcode: '4796001011', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'Steel Wire Nails 2-inch (Loose)', category: 'Screws & Fasteners', price: 380, stock: 75, barcode: '4796001008', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'GI Binding Wire (Loose)', category: 'Screws & Fasteners', price: 420, stock: 60, barcode: '4796001009', unit: 'kg', isLoose: true, imageUrl: '' },
      { name: 'Electric Cable 2.5mm Twin-Core (m)', category: 'Electrical & Lighting', price: 185, stock: 300, barcode: '4796001010', unit: 'm', isLoose: true, imageUrl: '' },
      { name: 'Industrial Paint Thinner (Loose)', category: 'Paints & Brushes', price: 650, stock: 50, barcode: '4796001012', unit: 'L', isLoose: true, imageUrl: '' },
      { name: 'Claw Hammer Rubber Grip 500g', category: 'Hand Tools', price: 1250, stock: 30, barcode: '4796001001', unit: 'pcs', isLoose: false, imageUrl: '' },
      { name: 'LED Bulb 9W Daylight E27', category: 'Electrical & Lighting', price: 380, stock: 80, barcode: '4796001002', unit: 'pcs', isLoose: false, imageUrl: '' },
      { name: 'Measuring Tape 5 Meters', category: 'Hand Tools', price: 450, stock: 40, barcode: '4796001003', unit: 'pcs', isLoose: false, imageUrl: '' },
      { name: 'PVC Electrical Insulating Tape Black', category: 'Electrical & Lighting', price: 120, stock: 150, barcode: '4796001004', unit: 'pcs', isLoose: false, imageUrl: '' },
      { name: 'Paint Brush 2.5 Inch Synthetic', category: 'Paints & Brushes', price: 280, stock: 60, barcode: '4796001006', unit: 'pcs', isLoose: false, imageUrl: '' }
    ]
  },

  general: {
    id: 'general',
    name: 'General Retail & Custom Store',
    shortName: 'General Store',
    icon: '🏬',
    color: '#6366f1',
    description: 'Versatile retail store suitable for stationery, electronics, cosmetics, or any general shop.',
    defaultShopName: 'Metro Retail Store',
    defaultTagline: 'Quality Products at the Best Everyday Value',
    defaultReceiptHeader: 'METRO RETAIL STORE',
    defaultReceiptFooter: 'Thank you for shopping with us! Please come again.',
    searchPlaceholder: 'Search products or scan barcode (F1)...',
    itemNamePlaceholder: 'e.g. A4 Paper Ream, USB Type-C Cable, Ceramic Mug',
    enableFoodAutoMatch: false,
    categories: ['Electronics', 'Stationery', 'Household', 'Personal Care', 'General Goods'],
    sampleItems: [
      { name: 'Ballpoint Pen Blue Box of 10', category: 'Stationery', price: 350, stock: 60, barcode: '4797001001', imageUrl: '' },
      { name: 'A4 Copy Paper Ream 80gsm 500 Sheets', category: 'Stationery', price: 1450, stock: 40, barcode: '4797001002', imageUrl: '' },
      { name: 'USB Type-C Fast Charging Cable 1m', category: 'Electronics', price: 650, stock: 45, barcode: '4797001003', imageUrl: '' },
      { name: 'Ceramic Coffee Mug 350ml', category: 'Household', price: 450, stock: 50, barcode: '4797001004', imageUrl: '' },
      { name: 'Stainless Steel Water Bottle 750ml', category: 'Household', price: 1250, stock: 30, barcode: '4797001005', imageUrl: '' }
    ]
  }
};

function getShopTemplate(type) {
  return SHOP_TEMPLATES[type] || SHOP_TEMPLATES.restaurant;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SHOP_TEMPLATES, getShopTemplate };
}

