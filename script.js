// Full Menu Data
const menuData = {
    pizza: [
        // Regular Flavour Pizza
        { id: 1, name: "Tikka Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        { id: 2, name: "Fajita Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        { id: 3, name: "Tandoori Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        { id: 4, name: "Veggie Lover Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        { id: 5, name: "Cheese Lover Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        { id: 6, name: "Achari Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        { id: 7, name: "Supreme Pizza", category: "Regular Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 550, M: 1000, L: 1500 } },
        
        // Special Flavour Pizza
        { id: 8, name: "Creamy Pizza", category: "Special Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 700, M: 1200, L: 1800 } },
        { id: 9, name: "Chicken Kabab Pizza", category: "Special Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 700, M: 1200, L: 1800 } },
        { id: 10, name: "Hot N Spicy Pizza", category: "Special Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 700, M: 1200, L: 1800 } },
        { id: 11, name: "Seekh Kabab Pizza", category: "Special Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 700, M: 1200, L: 1800 } },
        { id: 12, name: "Chapli Kabab Pizza", category: "Special Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 700, M: 1200, L: 1800 } },
        { id: 13, name: "4 Season Pizza", category: "Special Flavour Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 700, M: 1200, L: 1800 } },
        
        // Fast Signature Pizza
        { id: 14, name: "Bonfire Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1400, L: 2000 } },
        { id: 15, name: "Crown Crust Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1400, L: 2000 } },
        { id: 16, name: "Behari Kabab Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1400, L: 2000 } },
        { id: 17, name: "Lazania Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1400, L: 2000 } },
        { id: 18, name: "Steak Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1600, L: 2300 } },
        { id: 19, name: "Malai Boti Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1400, L: 2000 } },
        { id: 20, name: "Fast Special Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          prices: { S: 900, M: 1400, L: 2000 } },
        { id: 21, name: "Square Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 1400 },
        { id: 22, name: "Calzone Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 1500 },
        { id: 23, name: "Crown Kabab Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 1500 },
        { id: 24, name: "Kofta Crust Pizza", category: "Fast Signature Pizza", 
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 2200 },
    ],
    burger: [
        { id: 25, name: "Zinger Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 400 },
        { id: 26, name: "Zinger Cheese Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 450 },
        { id: 27, name: "Double Zinger Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 550 },
        { id: 28, name: "Double Zinger Cheese", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 600 },
        { id: 29, name: "Patty Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 30, name: "Beef Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 400 },
        { id: 31, name: "Beef Cheese Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 450 },
        { id: 32, name: "Grilled Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 450 },
        { id: 33, name: "Beef Smash Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 500 },
        { id: 34, name: "Fast Special Burger", category: "FP Burger", 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 550 },
    ],
    fries: [
        { id: 35, name: "Regular Fries", category: "FP Fries", 
          image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 200 },
        { id: 36, name: "Masala Fries", category: "FP Fries", 
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 250 },
        { id: 37, name: "Pizza Fries", category: "FP Fries", 
          image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 38, name: "Cheese Fries", category: "FP Fries", 
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 39, name: "Loaded Fries", category: "FP Fries", 
          image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 450 },
        { id: 40, name: "Paratha Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 200 },
        { id: 41, name: "Zinger Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 42, name: "Chicken Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 250 },
        { id: 43, name: "Mayo Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 250 },
        { id: 44, name: "Behari Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 45, name: "Seekh Kabab Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 46, name: "Cheese Roll", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 350 },
        { id: 47, name: "Pizza Paratha", category: "FP Rolls", 
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 400 },
    ],
    sandwich: [
        { id: 48, name: "Club Sandwich", category: "FP Sandwich", 
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 350 },
        { id: 49, name: "Zinger Sandwich", category: "FP Sandwich", 
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 400 },
        { id: 50, name: "Grilled Sandwich", category: "FP Sandwich", 
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 350 },
    ],
    icecream: [
    { id: 51, name: "King Kulla (1 Scoop)", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: 240 },
    { id: 52, name: "King Kulla (2 Scoops)", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: 300 },
    { id: 53, name: "King Kulla (3 Scoops)", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: 300 },
    { id: 54, name: "Strawberry Ice Cream", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      prices: { "1 Scoop": 240, "2 Scoops": 300, "3 Scoops": 300 } },
    { id: 60, name: "Chocolate Chip Ice Cream", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      prices: { "1 Scoop": 240, "2 Scoops": 300, "3 Scoops": 300 } },
    { id: 56, name: "Chocolate Ice Cream", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      prices: { "1 Scoop": 240, "2 Scoops": 300, "3 Scoops": 300 } },
    { id: 57, name: "Pistachio Ice Cream", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      prices: { "1 Scoop": 240, "2 Scoops": 300, "3 Scoops": 300 } },
    { id: 58, name: "Vanilla Ice Cream", category: "Fast Ice Cream", 
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      prices: { "1 Scoop": 240, "2 Scoops": 300, "3 Scoops": 300 } },
],
    drinks: [
        { id: 57, name: "Banana Shake", category: "Fast Shakes", 
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 200 },
        { id: 58, name: "Mango Shake", category: "Fast Shakes", 
          image: "https://images.unsplash.com/photo-1629453102076-1c5838c9616b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 250 },
        { id: 59, name: "Strawberry Shake", category: "Fast Shakes", 
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 250 },
        { id: 60, name: "Chocolate Shake", category: "Fast Shakes", 
          image: "https://images.unsplash.com/photo-1629453102076-1c5838c9616b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 280 },
        { id: 61, name: "Oreo Shake", category: "Fast Shakes", 
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 280 },
        { id: 62, name: "Caramel Iced Coffee", category: "Fast Chilled Coffee", 
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
        { id: 63, name: "Vanilla Iced Coffee", category: "Fast Chilled Coffee", 
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: 300 },
    ]
};

// Deals Data
const dealsData = [
    {
        id: 1,
        name: "Deal 1",
        price: 2450,
        items: ["1 BBQ Pizza Large", "2 Zinger Burger", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Deal 2",
        price: 2140,
        items: ["2 BBQ Medium Pizza", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Deal 3",
        price: 2240,
        items: ["1 BBQ Large Pizza", "10 Wings", "1 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Deal 4",
        price: 1530,
        items: ["1 BBQ Medium Pizza", "2 Zinger Burger", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Deal 5",
        price: 2470,
        items: ["1 BBQ Large Pizza", "10 Nuggets", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Deal 6",
        price: 1250,
        items: ["1 BBQ Small Pizza", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Deal 7",
        price: 3200,
        items: ["1 Large Pizza Signature", "2 Zinger Burger", "5 Nuggets", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "Deal 8",
        price: 890,
        items: ["2 Zinger Burger", "1 Fries", "1.5 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        name: "Deal 9",
        price: 400,
        items: ["5 Nuggets", "1 Regular Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        name: "Deal 10",
        price: 1000,
        items: ["2 Zinger Burger", "500 ml Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        name: "Deal 11",
        price: 550,
        items: ["1 Zinger Burger", "1 Fries", "1 Regular Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        name: "Deal 12",
        price: 1400,
        items: ["1 Doner Burger", "1 Fries", "1 Regular Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        name: "Deal 13",
        price: 650,
        items: ["8 Wings", "1 Regular Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 14,
        name: "Deal 14",
        price: 1340,
        items: ["4 Pizza Rolls", "1 Liter Drink"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 15,
        name: "Deal 15",
        price: 450,
        items: ["Molten Lava Cake"],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    // {
    //     id: 16,
    //     name: "Deal 16",
    //     price: 1750,
    //     items: ["4 Doner Burger", "1 Liter Drink"],
    //     image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    // }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('fastPizzaCart')) || [];
let currentCategory = 'pizza';
let removeItemIndex = null;
let currentStep = 1;

// DOM Elements
const cartCount = document.getElementById('cartCount');
const cartCountMobile = document.getElementById('cartCountMobile');
const cartItemCount = document.getElementById('cartItemCount');
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutModal = document.getElementById('checkoutModal');
const removeModal = document.getElementById('removeModal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    loadDeals();
    updateCartCount();
    setupEventListeners();
    updateActiveNav();
});

// Load Menu Items
function loadMenuItems() {
    const menuContent = document.querySelector('.menu-content');
    if (!menuContent) return;
    
    let menuHTML = '';
    
    Object.keys(menuData).forEach(category => {
        menuHTML += `
            <div class="menu-grid" id="${category}Menu" style="${category !== 'pizza' ? 'display: none;' : ''}">
                ${menuData[category].map(item => createMenuItemCard(item)).join('')}
            </div>
        `;
    });
    
    menuContent.innerHTML = menuHTML;
    
    // Add event listeners for size buttons
    document.querySelectorAll('.size-btn').forEach(button => {
        button.addEventListener('click', handleSizeSelection);
    });
}

// Create Menu Item Card
// Create Menu Item Card
function createMenuItemCard(item) {
    const hasMultipleSizes = item.prices && typeof item.prices === 'object';
    
    if (hasMultipleSizes) {
        const sizes = Object.keys(item.prices);
        const defaultSize = sizes[1] || sizes[0]; // Default to Medium if available
        const defaultPrice = item.prices[defaultSize];
        
        return `
            <div class="menu-card" data-id="${item.id}">
                <div class="menu-card-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-card-content">
                    <div class="menu-card-header">
                        <h3>${item.name}</h3>
                        <div class="menu-card-category">${item.category}</div>
                    </div>
                    <div class="menu-card-size">
                        <div>Size:</div>
                        <div class="size-selector">
                            ${sizes.map(size => `
                                <button class="size-btn ${size === defaultSize ? 'active' : ''}" 
                                        data-size="${size}" 
                                        data-price="${item.prices[size]}">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <div class="menu-card-price">
                        <div class="price">Rs. <span class="price-value">${defaultPrice}</span></div>
                        <div class="menu-card-buttons">
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${defaultPrice}, '${defaultSize}', '${item.image}', '${item.category}')">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                            <button class="buy-now-btn" onclick="buyNow(${item.id}, '${item.name}', ${defaultPrice}, '${defaultSize}', '${item.image}', '${item.category}')">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="menu-card" data-id="${item.id}">
                <div class="menu-card-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-card-content">
                    <div class="menu-card-header">
                        <h3>${item.name}</h3>
                        <div class="menu-card-category">${item.category}</div>
                    </div>
                    <div class="menu-card-price">
                        <div class="price">Rs. ${item.price}</div>
                        <div class="menu-card-buttons">
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '', '${item.image}', '${item.category}')">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                            <button class="buy-now-btn" onclick="buyNow(${item.id}, '${item.name}', ${item.price}, '', '${item.image}', '${item.category}')">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Handle Size Selection
function handleSizeSelection(e) {
    const card = e.target.closest('.menu-card');
    const sizeButtons = card.querySelectorAll('.size-btn');
    const priceValue = card.querySelector('.price-value');
    const addButton = card.querySelector('.add-to-cart-btn');
    const itemId = card.getAttribute('data-id');
    
    // Find the item in menuData
    let item = null;
    for (const category in menuData) {
        item = menuData[category].find(i => i.id == itemId);
        if (item) break;
    }
    
    if (!item) return;
    
    // Remove active class from all size buttons in this card
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Update price display
    const newPrice = e.target.getAttribute('data-price');
    const size = e.target.getAttribute('data-size');
    
    if (priceValue) {
        priceValue.textContent = newPrice;
    }
    
    // Update add to cart button onclick
    addButton.setAttribute('onclick', `addToCart(${itemId}, '${item.name}', ${newPrice}, '${size}', '${item.image}', '${item.category}')`);
}

// Load Deals
function loadDeals() {
    const dealsGrid = document.querySelector('.deals-grid');
    if (!dealsGrid) return;
    
    dealsGrid.innerHTML = dealsData.map(deal => `
        <div class="deal-card">
            <div class="deal-header">
                <h3>${deal.name}</h3>
                <div class="deal-price">RS. ${deal.price}</div>
            </div>
            <div class="deal-body">
                <ul class="deal-items">
                    ${deal.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <button class="btn btn-primary add-deal-btn" onclick="addDealToCart(${deal.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navToggle.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Menu Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            currentCategory = button.getAttribute('data-category');
            
            // Hide all menu sections
            document.querySelectorAll('.menu-grid').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected menu section
            const selectedSection = document.getElementById(`${currentCategory}Menu`);
            if (selectedSection) {
                selectedSection.style.display = 'grid';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav
                updateActiveNav();
            }
        });
    });
    
    // Close cart when clicking overlay
    cartOverlay.addEventListener('click', closeCart);
    
    // Close checkout modal when clicking outside
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            closeCheckout();
        }
    });
    
    // Close remove modal when clicking outside
    removeModal.addEventListener('click', (e) => {
        if (e.target === removeModal) {
            cancelRemove();
        }
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

// Update Active Navigation
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Cart Functions
function addToCart(id, name, price, size, image, category) {
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.id === id && item.size === size
    );
    
    if (existingItemIndex > -1) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            id,
            name,
            price: parseInt(price),
            size,
            image,
            category,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('fastPizzaCart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    updateCartDisplay();
    
    // Show success message
    showNotification(`${name} added to cart!`);
    
    // Open cart on mobile
    if (window.innerWidth <= 768) {
        openCart();
    }
}

function addDealToCart(dealId) {
    const deal = dealsData.find(d => d.id === dealId);
    if (!deal) return;
    
    addToCart(
        `deal-${deal.id}`, // Unique ID for deals
        deal.name,
        deal.price,
        '',
        deal.image,
        'Special Deal'
    );
}

function updateQuantity(index, change) {
    const newQuantity = cart[index].quantity + change;
    
    if (newQuantity < 1) {
        showRemoveConfirmation(index);
    } else {
        cart[index].quantity = newQuantity;
        localStorage.setItem('fastPizzaCart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCount();
    }
}

function showRemoveConfirmation(index) {
    removeItemIndex = index;
    removeModal.style.display = 'flex';
}

function cancelRemove() {
    removeItemIndex = null;
    removeModal.style.display = 'none';
}

function confirmRemove() {
    if (removeItemIndex !== null) {
        const itemName = cart[removeItemIndex].name;
        removeFromCart(removeItemIndex);
        showNotification(`${itemName} removed from cart`);
    }
    cancelRemove();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('fastPizzaCart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCountMobile.textContent = totalItems;
    cartItemCount.textContent = totalItems;
}

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <p>Add delicious items from our menu!</p>
            </div>
        `;
        cartTotal.textContent = '0';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    ${item.size ? `<div class="cart-item-size">Size: ${item.size}</div>` : ''}
                    <div class="cart-item-price">Rs. ${item.price} × ${item.quantity} = Rs. ${itemTotal}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="showRemoveConfirmation(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = total;
}

// Cart Panel Functions
function openCart() {
    cartPanel.classList.add('active');
    cartOverlay.style.display = 'block';
    updateCartDisplay();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartPanel.classList.remove('active');
    cartOverlay.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Checkout Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty! Add items first.');
        return;
    }
    
    closeCart();
    showCheckoutModal();
}

function showCheckoutModal() {
    // Reset to step 1
    currentStep = 1;
    updateCheckoutSteps();
    
    // Update order summary
    updateOrderSummary();
    
    // Show modal
    checkoutModal.style.display = 'flex';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    checkoutModal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

function updateCheckoutSteps() {
    // Update step indicators
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step')) === currentStep) {
            step.classList.add('active');
        }
    });
    
    // Show current step content
    document.querySelectorAll('.checkout-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${currentStep}`).classList.add('active');
}

function nextStep() {
    // Validate current step
    if (currentStep === 2 && !validateStep2()) {
        return;
    }
    
    if (currentStep < 3) {
        currentStep++;
        updateCheckoutSteps();
        
        // Update summaries for step 3
        if (currentStep === 3) {
            updateOrderConfirmation();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateCheckoutSteps();
    }
}

function validateStep2() {
    const fullName = document.getElementById('fullName').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();
    const street = document.getElementById('street').value.trim();
    const area = document.getElementById('area').value.trim();
    
    if (!fullName) {
        showNotification('Please enter your full name');
        document.getElementById('fullName').focus();
        return false;
    }
    
    if (!mobileNumber) {
        showNotification('Please enter your mobile number');
        document.getElementById('mobileNumber').focus();
        return false;
    }
    
    // Validate Pakistani mobile number
    const mobileRegex = /^03\d{9}$/;
    const cleanMobile = mobileNumber.replace(/\D/g, '');
    
    if (!mobileRegex.test(cleanMobile)) {
        showNotification('Please enter a valid Pakistani mobile number (03XXXXXXXXX)');
        document.getElementById('mobileNumber').focus();
        return false;
    }
    
    if (!street) {
        showNotification('Please enter your street address');
        document.getElementById('street').focus();
        return false;
    }
    
    if (!area) {
        showNotification('Please enter your area');
        document.getElementById('area').focus();
        return false;
    }
    
    return true;
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const grandTotal = document.getElementById('grandTotal');
    
    let subtotal = 0;
    let itemsHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        itemsHTML += `
            <div class="order-item">
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    ${item.size ? `<div class="order-item-size">Size: ${item.size}</div>` : ''}
                </div>
                <div class="order-item-price">
                    ${item.quantity} × Rs. ${item.price} = Rs. ${itemTotal}
                </div>
            </div>
        `;
    });
    
    orderSummary.innerHTML = itemsHTML;
    subtotalAmount.textContent = subtotal;
    grandTotal.textContent = subtotal;
}

function updateOrderConfirmation() {
    // Update customer details
    const fullName = document.getElementById('fullName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const whatsappNumber = document.getElementById('whatsappNumber').value || mobileNumber;
    
    document.getElementById('customerSummary').innerHTML = `
        <div class="summary-details">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Mobile:</strong> ${mobileNumber}</p>
            ${whatsappNumber !== mobileNumber ? `<p><strong>WhatsApp:</strong> ${whatsappNumber}</p>` : ''}
        </div>
    `;
    
    // Update address details
    const street = document.getElementById('street').value;
    const area = document.getElementById('area').value;
    const landmark = document.getElementById('landmark').value;
    const instructions = document.getElementById('instructions').value;
    
    let addressHTML = `
        <div class="summary-details">
            <p><strong>Street:</strong> ${street}</p>
            <p><strong>Area:</strong> ${area}</p>
    `;
    
    if (landmark) {
        addressHTML += `<p><strong>Landmark:</strong> ${landmark}</p>`;
    }
    
    addressHTML += `<p><strong>City:</strong> Mehrabpur</p>`;
    
    if (instructions) {
        addressHTML += `<p><strong>Instructions:</strong> ${instructions}</p>`;
    }
    
    addressHTML += `</div>`;
    document.getElementById('addressSummary').innerHTML = addressHTML;
    
    // Update final order summary
    updateOrderSummary();
    document.getElementById('finalOrderSummary').innerHTML = document.getElementById('orderSummary').innerHTML;
}

function copyMobileToWhatsApp() {
    const mobileInput = document.getElementById('mobileNumber');
    const whatsappInput = document.getElementById('whatsappNumber');
    
    if (mobileInput.value) {
        whatsappInput.value = mobileInput.value;
        showNotification('Mobile number copied to WhatsApp field');
    }
}

function placeOrder() {
    // Get form data
    const fullName = document.getElementById('fullName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const whatsappNumber = document.getElementById('whatsappNumber').value || mobileNumber;
    const street = document.getElementById('street').value;
    const area = document.getElementById('area').value;
    const landmark = document.getElementById('landmark').value;
    const instructions = document.getElementById('instructions').value;
    
    // Build order summary message
    let message = `🍕 *NEW ORDER - Fast Pizza Café & Grill* 🍕\n\n`;
    message += `📋 *Order Details*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 *Customer:* ${fullName}\n`;
    message += `📱 *Mobile:* ${mobileNumber}\n`;
    
    if (whatsappNumber && whatsappNumber !== mobileNumber) {
        message += `💬 *WhatsApp:* ${whatsappNumber}\n`;
    }
    
    message += `\n📍 *Delivery Address*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📌 ${street}, ${area}`;
    
    if (landmark) {
        message += ` (Near ${landmark})`;
    }
    
    message += `, Mehrabpur\n`;
    
    message += `\n🛒 *Order Items*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name}`;
        
        if (item.size) {
            message += ` (${item.size})`;
        }
        
        message += `\n   ╰─ ${item.quantity} × Rs. ${item.price} = Rs. ${itemTotal}\n`;
    });
    
    message += `\n💰 *Order Summary*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Subtotal: Rs. ${total}\n`;
    message += `Delivery: FREE 🎉\n`;
    message += `*Total: Rs. ${total}*\n`;
    
    if (instructions) {
        message += `\n📝 *Special Instructions*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━\n`;
        message += `${instructions}\n`;
    }
    
    message += `\n⏰ *Order Time:* ${new Date().toLocaleString('en-PK', { 
        timeZone: 'Asia/Karachi',
        hour12: true 
    })}\n`;
    
    message += `\n📍 *Restaurant Location:*\n`;
    message += `Thran Road, Near UBL Bank, Mehrabpur\n`;
    message += `📞 0370-8099701 | 0309-2014466`;
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923708099701?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after order
    cart = [];
    localStorage.removeItem('fastPizzaCart');
    updateCartCount();
    closeCheckout();
    
    // Show success message
    showNotification('Order placed successfully! Check WhatsApp for confirmation.');
}

// Utility Functions
function showNotification(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        color: white;
        padding: 15px 25px;
        border-radius: var(--border-radius);
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 2000;
        transform: translateX(150%);
        transition: transform 0.4s ease;
        max-width: 300px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 1.3rem;"></i>
        <span>${message}</span>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const nav = document.getElementById('mainNav');
        if (nav) nav.classList.remove('active');
        
        const navToggle = document.getElementById('navToggle');
        if (navToggle) navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Buy Now Function
function buyNow(id, name, price, size, image, category) {
    // Clear the cart first
    cart = [];
    
    // Add the selected item to cart
    cart.push({
        id,
        name,
        price: parseInt(price),
        size,
        image,
        category,
        quantity: 1
    });
    
    // Save to localStorage
    localStorage.setItem('fastPizzaCart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    
    // Immediately proceed to checkout
    setTimeout(() => {
        proceedToCheckout();
    }, 100);
}

// Update menu card creation to include Buy Now button
// Replace your existing createMenuItemCard function with this:

function createMenuItemCard(item) {
    const hasMultipleSizes = item.prices && typeof item.prices === 'object';
    
    if (hasMultipleSizes) {
        const sizes = Object.keys(item.prices);
        const defaultSize = sizes[1] || sizes[0];
        const defaultPrice = item.prices[defaultSize];
        
        return `
            <div class="menu-card" data-id="${item.id}">
                <div class="menu-card-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-card-content">
                    <div class="menu-card-header">
                        <h3>${item.name}</h3>
                        <div class="menu-card-category">${item.category}</div>
                    </div>
                    <div class="menu-card-size">
                        <div>Size:</div>
                        <div class="size-selector">
                            ${sizes.map(size => `
                                <button class="size-btn ${size === defaultSize ? 'active' : ''}" 
                                        data-size="${size}" 
                                        data-price="${item.prices[size]}">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <div class="menu-card-price">
                        <div class="price">Rs. <span class="price-value">${defaultPrice}</span></div>
                        <div class="menu-card-buttons">
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${defaultPrice}, '${defaultSize}', '${item.image}', '${item.category}')">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                            <button class="buy-now-btn" onclick="buyNow(${item.id}, '${item.name}', ${defaultPrice}, '${defaultSize}', '${item.image}', '${item.category}')">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="menu-card" data-id="${item.id}">
                <div class="menu-card-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-card-content">
                    <div class="menu-card-header">
                        <h3>${item.name}</h3>
                        <div class="menu-card-category">${item.category}</div>
                    </div>
                    <div class="menu-card-price">
                        <div class="price">Rs. ${item.price}</div>
                        <div class="menu-card-buttons">
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '', '${item.image}', '${item.category}')">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                            <button class="buy-now-btn" onclick="buyNow(${item.id}, '${item.name}', ${item.price}, '', '${item.image}', '${item.category}')">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}