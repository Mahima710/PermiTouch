const mongoose = require("mongoose");
require("mongoose-type-url");

const StudentSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  RollNumber: {
    type: Number,
    unique: true,
  },
  Email: String,
  token: String,
  Branch: String,
  Year_Of_Graduation: Date,
  Contact: Number,
  Hostel: String,
});

const InchargeSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  token: String,
  Email: String,
  Responsibility: String,
  Contact: Number,
  Office_Location: String,
});

const SocietySchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
  },
  Password: String,
  Email: String,
  token: String,
  GenSec: mongoose.Schema.Types.ObjectId,
  FacultyHead: String,
  Description: String,
  Website: String,
  Contact: Number,
});

const Students = mongoose.model("Students", StudentSchema);
const Incharges = mongoose.model("Incharges", InchargeSchema);
const Societies = mongoose.model("Societies", SocietySchema);

module.exports = { Students, Societies, Incharges };
