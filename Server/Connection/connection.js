const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const connect = await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database Connected"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
