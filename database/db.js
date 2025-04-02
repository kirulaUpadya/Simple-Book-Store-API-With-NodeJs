const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kirulapadukka:kirulapadukka2025@cluster0.fxwtnyw.mongodb.net/');
    console.log('Mongodb is connected successfully!');
  } catch (error) {
    console.log('Mongodb connection failed ', error);
    process.exit(1);
  }
};

module.exports = connectDB;