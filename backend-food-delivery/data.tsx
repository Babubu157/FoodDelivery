// // seedFoods.js
// import mongoose from "mongoose";
// import Food from "./models/Food.js"; // таны Food schema замыг тохируулна уу

// const MONGO_URI = "mongodb://localhost:27017/restaurant"; // эсвэл таны MongoDB URI

// const categoryIds = {
//   Appetizers: "684f9ee1a905ed3b66f48ec3",
//   Salads: "684f9ef8a905ed3b66f48ec5",
//   MainDishes: "684f9f5da905ed3b66f48ec9",
//   Desserts: "684f9f66a905ed3b66f48ecb",
//   Drinks: "684f9f6ba905ed3b66f48ecd",
// };

// //res.cloudinary.com/djiyuxldv/image/upload/v1750052469/sal2_znylnl.png

//   // === Appetizers ===
//  [ {
//     foodName: "Garlic Bread",
//     price: 5.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052458/app5_envn12.png",
//     ingredients: "Bread, Garlic, Butter, Parsley",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Bruschetta",
//     price: 6.49,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052480/app8_xd3kmy.png",
//     ingredients: "Tomato, Basil, Garlic, Olive Oil, Bread",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Mozzarella Sticks",
//     price: 7.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052458/app5_envn12.png",
//     ingredients: "Mozzarella, Bread Crumbs, Marinara",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Stuffed Mushrooms",
//     price: 6.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052480/app10_mdfrzw.png",
//     ingredients: "Mushrooms, Cheese, Garlic, Herbs",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Spring Rolls",
//     price: 5.49,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052455/app2_yt6gvp.png",
//     ingredients: "Cabbage, Carrot, Rice Paper, Sauce",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Chicken Wings",
//     price: 8.49,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052458/app5_envn12.png",
//     ingredients: "Chicken, Buffalo Sauce",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Onion Rings",
//     price: 4.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052480/app8_xd3kmy.png",
//     ingredients: "Onion, Batter, Oil",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Deviled Eggs",
//     price: 4.49,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052458/app5_envn12.png",
//     ingredients: "Eggs, Mayo, Mustard",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Fried Pickles",
//     price: 5.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052455/app2_yt6gvp.png",
//     ingredients: "Pickles, Batter, Ranch",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },
//   {
//     foodName: "Caprese Skewers",
//     price: 5.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052480/app10_mdfrzw.png",
//     ingredients: "Mozzarella, Tomato, Basil",
//     category: "684f9ee1a905ed3b66f48ec3",
//   },

//   // === Salads ===
//   {
//     foodName: "Caesar Salad",
//     price: 9.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052469/sal2_znylnl.png",
//     ingredients: "Romaine, Croutons, Parmesan, Caesar Dressing",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Greek Salad",
//     price: 10.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052470/sal3_ojld5t.png",
//     ingredients: "Tomato, Cucumber, Feta, Olive, Onion",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Garden Salad",
//     price: 8.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052473/sal4_p17tdz.png",
//     ingredients: "Lettuce, Tomato, Carrot, Cucumber",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Cobb Salad",
//     price: 11.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052485/sal5_k6tiv4.png",
//     ingredients: "Chicken, Egg, Bacon, Avocado",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Tuna Salad",
//     price: 10.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052495/sal10_md4k7t.png",
//     ingredients: "Tuna, Mayo, Celery, Onion",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Quinoa Salad",
//     price: 9.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052469/sal2_znylnl.png",
//     ingredients: "Quinoa, Veggies, Lemon Dressing",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Caprese Salad",
//     price: 9.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052473/sal4_p17tdz.png",
//     ingredients: "Tomato, Mozzarella, Basil",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Waldorf Salad",
//     price: 10.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052473/sal4_p17tdz.png",
//     ingredients: "Apple, Celery, Grape, Walnut",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Pasta Salad",
//     price: 8.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052485/sal5_k6tiv4.png",
//     ingredients: "Pasta, Veggies, Dressing",
//     category: categoryIds.Salads,
//   },
//   {
//     foodName: "Asian Slaw",
//     price: 8.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052495/sal10_md4k7t.png",
//     ingredients: "Cabbage, Carrot, Sesame Dressing",
//     category: categoryIds.Salads,
//   }]

//   // === Main Dishes ===
//   {
//     foodName: "Grilled Salmon",
//     price: 18.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052983/main3_wpxe20.png",
//     ingredients: "Salmon, Lemon, Garlic, Herbs",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Beef Steak",
//     price: 22.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052971/main5_np8ydq.png",
//     ingredients: "Beef, Pepper, Salt, Butter",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Roast Chicken",
//     price: 17.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052978/main2_egxqln.png",
//     ingredients: "Chicken, Herbs, Potatoes",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Spaghetti Bolognese",
//     price: 16.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052456/main1_fz1osz.png",
//     ingredients: "Pasta, Beef, Tomato Sauce",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Vegetable Stir Fry",
//     price: 14.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052971/main4_l9cmc0.png",
//     ingredients: "Vegetables, Soy Sauce, Rice",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Chicken Alfredo",
//     price: 16.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052983/main3_wpxe20.png",
//     ingredients: "Pasta, Chicken, Cream Sauce",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Lamb Chops",
//     price: 23.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052971/main5_np8ydq.png",
//     ingredients: "Lamb, Garlic, Rosemary",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Shrimp Tacos",
//     price: 15.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052978/main2_egxqln.png",
//     ingredients: "Shrimp, Tortilla, Slaw",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "BBQ Ribs",
//     price: 21.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052456/main1_fz1osz.png",
//     ingredients: "Pork, BBQ Sauce, Corn",
//     category: categoryIds.MainDishes,
//   },
//   {
//     foodName: "Stuffed Bell Peppers",
//     price: 14.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750052971/main4_l9cmc0.png",
//     ingredients: "Bell Peppers, Rice, Beef",
//     category: categoryIds.MainDishes,
//   },

//   // === Desserts ===
//   {
//     foodName: "Chocolate Cake",
//     price: 6.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053409/des1_ewetxg.avif",
//     ingredients: "Cocoa, Sugar, Egg, Flour",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Tiramisu",
//     price: 7.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053596/des6_cygfxd.jpg",
//     ingredients: "Mascarpone, Coffee, Cocoa, Ladyfingers",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Apple Pie",
//     price: 6.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053409/des2_bytxi4.jpg",
//     ingredients: "Apple, Cinnamon, Pastry",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Cheesecake",
//     price: 7.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053410/des3_bh77wc.jpg",
//     ingredients: "Cheese, Crust, Sugar",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Brownie",
//     price: 5.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053410/des5_fugw9v.jpg",
//     ingredients: "Chocolate, Butter, Flour",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Panna Cotta",
//     price: 6.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053409/des1_ewetxg.avif",
//     ingredients: "Cream, Sugar, Vanilla",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Lemon Tart",
//     price: 6.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053596/des6_cygfxd.jpg",
//     ingredients: "Lemon, Eggs, Sugar, Crust",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Ice Cream",
//     price: 4.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053410/des3_bh77wc.jpg",
//     ingredients: "Milk, Sugar, Flavoring",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Creme Brulee",
//     price: 7.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053410/des3_bh77wc.jpg",
//     ingredients: "Cream, Sugar, Egg Yolk",
//     category: categoryIds.Desserts,
//   },
//   {
//     foodName: "Fruit Parfait",
//     price: 6.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053410/des5_fugw9v.jpg",
//     ingredients: "Yogurt, Fruit, Granola",
//     category: categoryIds.Desserts,
//   },

//   // === Drinks ===
//   {
//     foodName: "Iced Tea",
//     price: 3.99,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053845/icetea_tbspcc.jpg",
//     ingredients: "Tea, Sugar, Lemon, Ice",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Orange Juice",
//     price: 4.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053846/orange_cfruiu.jpg",
//     ingredients: "Fresh Orange",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Lemonade",
//     price: 4.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053845/lem_w0jhu4.jpg",
//     ingredients: "Lemon, Sugar, Water",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Milkshake",
//     price: 5.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053846/milk_syxpex.jpg",
//     ingredients: "Milk, Ice Cream, Flavoring",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Smoothie",
//     price: 5.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053846/smoo_kr3l2v.jpg",
//     ingredients: "Fruit, Yogurt, Honey",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Coffee",
//     price: 3.5,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053845/icetea_tbspcc.jpg",
//     ingredients: "Coffee Beans, Water, Sugar",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Hot Chocolate",
//     price: 4.25,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053846/orange_cfruiu.jpg",
//     ingredients: "Cocoa, Milk, Sugar",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Mineral Water",
//     price: 2.0,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053845/lem_w0jhu4.jpg",
//     ingredients: "Water",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Energy Drink",
//     price: 4.75,
//     image:
//       "https://res.cloudinary.com/djiyuxldv/image/upload/v1750053846/milk_syxpex.jpg",
//     ingredients: "Caffeine, Sugar, Water",
//     category: categoryIds.Drinks,
//   },
//   {
//     foodName: "Soda",
//     price: 3.0,
//     image: "",
//     ingredients: "Carbonated Water, Sugar",
//     category: categoryIds.Drinks,
//   },
// ];

// async function seedFoods() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     await Food.insertMany(foods);
//     console.log("🥗 Foods inserted successfully");
//     process.exit();
//   } catch (err) {
//     console.error("❌ Error inserting foods:", err);
//     process.exit(1);
//   }
// }

// seedFoods();
