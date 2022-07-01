const mongoose = require("mongoose");
const express = require("express");
const {
  HostelPermissions,
} = require("../Models/PermissionModels/PermissionModels");
const { Students } = require("../Models/UserModels/Usermodels");
const app = express();
app.use(express.json());

//Generate request
//Edit request
//CheckStatus
//Edit Profile
const GenerateHostelRequest = async (req, res) => {
  const { Warden, Permission_Type, Reason, Date_Out, Expected_Return } =
    req.body;
  const token = req.cookies.jwt;
  if (!token) {
    console.log("bleh");
  }
  const Student = await Students.findOne({ token: token });
  const newPermission = new HostelPermissions({
    Student: Student._id,
    Warden: Warden,
    Permission_Type: Permission_Type,
    Reason: Reason,
    Date_Out: Date_Out,
    ExpectedReturn: Expected_Return,
  });
  await newPermission.save();
  return res.status(200).json({ success: true, Data: newPermission });
};

const CheckPermissions = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("bleh");
  }
  const Student = await Students.findOne({ token, token });
  HostelPermissions.find({ Student: Student._id }, (err, data) => {
    if (err) {
      return console.log(err);
    }
    if (data.length === 0) {
      return res.status(200).json({
        success: true,
        message: "You haven't created any requests yet",
      });
    }
    return res.status(200).json({ success: true, data: data });
  })
    .clone()
    .catch((err) => {
      console.log(err);
    });
};

const EditRequest = async (req, res) => {
  const token = req.cookies.jwt;
  const id = mongoose.Types.ObjectId(req.params.id);
  if (!id) {
    return res
      .status(404)
      .json({ success: false, message: "No Permission specified to update" });
  }
  const { Warden, Permission_Type, Reason, Date_Out, Expected_Return } =
    req.body;
  const Student = await Students.findOne({ token: token });
  try {
    const Permission = await HostelPermissions.findOneAndUpdate(
      { _id: id, Student: Student._id },
      {
        $set: {
          Warden: Warden,
          Permission_Type: Permission_Type,
          Reason: Reason,
          Date_Out: Date_Out,
          Expected_Return: Expected_Return,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!Permission) {
      return res.status(404).json({
        success: false,
        message: "Specified Permission doesn't exist",
      });
    }
    return res.status(200).json({ success: true, data: Permission });
  } catch (err) {
    return console.log(err);
  }
};

const EditProfile = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Bleh");
  }
  const { Name, Email, Rollnumber, Branch, GraduationYear, Contact, Hostel } =
    req.body;
  const filter = { token: token };
  const update = {
    Username: Name,
    Email: Email,
    Rollnumber: Rollnumber,
    Branch: Branch,
    GraduationYear: GraduationYear,
    Contact: Contact,
    Hostel: Hostel,
  };
  try {
    const UpdatedStudent = await Students.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
    });
    if (!UpdatedStudent) {
      return console.log("Something went wrong");
    }
    return res.status(200).json({ success: true, Data: UpdatedStudent });
  } catch (err) {
    return console.log(err);
  }
};

module.exports = {
  GenerateHostelRequest,
  CheckPermissions,
  EditProfile,
  EditRequest,
};
