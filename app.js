// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://sajjadafzaal13416:qrkhVggVLlBARVz2@cluster0.zj5q8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then (function(){
// console.log("Connected to db")});

// app.get('/', function(req,res){

// })

// app.listen(3000);

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sajjadafzaal13416:qrkhVggVLlBARVz2@cluster0.zj5q8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to db");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

connectDB();

// Define Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
