const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
  {
    storeId: "S001",
    storeName: "Camil Electronics",
    productId: "P001",
    productName: "Gaming Laptop",
    price: 1499.99
  },
  {
    storeId: "S001",
    storeName: "Camil Electronics",
    productId: "P002",
    productName: "Mechanical Keyboard",
    price: 129.99
  },
  {
    storeId: "S001",
    storeName: "Camil Electronics",
    productId: "P003",
    productName: "Gaming Mouse",
    price: 79.99
  },
  {
    storeId: "S001",
    storeName: "Camil Electronics",
    productId: "P004",
    productName: "27 Inch Monitor",
    price: 299.99
  },
  {
    storeId: "S001",
    storeName: "Camil Electronics",
    productId: "P005",
    productName: "USB-C Dock",
    price: 89.99
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("5 products added successfully.");
    process.exit();
  } catch (error) {
    console.error("Error adding products:", error.message);
    process.exit(1);
  }
}

seedProducts();