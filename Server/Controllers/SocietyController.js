const express = require("express");
const {
  EventPermissions,
} = require("../Models/PermissionModels/PermissionModels");
const { Societies, Students } = require("../Models/UserModels/Usermodels");

//Generate request
//Edit request
//edit profile
//check request

const GenerateEventRequest = async (req, res) => {
  const token = req.cookies.jwt;
  const {
    Event_Name,
    Description,
    Start_Date,
    End_Date,
    Flex_Locations_Requested,
    Room_Requested,
  } = req.body;
  const Society = await Societies.findOne({ token: token });
  const newEventPermission = new EventPermissions({
    Society: Society._id,
    Event_Name: Event_Name,
    Description: Description,
    Start_Date: Start_Date,
    End_Date: End_Date,
    Flex_Location_Alloted: Flex_Locations_Requested,
    Room_Alloted: Room_Requested,
  });
  await newEventPermission.save();
  return res.status(200).json({ success: true, Data: newEventPermission });
};

const CheckPermissions = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const Soceity = await Societies.findOne({ token: token });
  EventPermissions.find({ Soceity: Soceity._id }, (err, data) => {
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

const EditPermission = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const id = req.params.id;
  if (!id) {
    return res
      .status(404)
      .json({ success: false, message: "No Permission specified to update" });
  }
  const {
    Event_Name,
    Description,
    Start_Date,
    End_Date,
    Flex_Locations_Requested,
    Room_Requested,
  } = req.body;
  const Society = await Societies.findOne({ token: token });
  try {
    const UpdatedRequest = await EventPermissions.findOneAndUpdate(
      { Society: Society._id, _id: id },
      {
        $set: {
          Event_Name: Event_Name,
          Description: Description,
          Start_Date: Start_Date,
          End_Date: End_Date,
          Flex_Location_Alloted: Flex_Locations_Requested,
          Room_Alloted: Room_Requested,
        },
      },
      { new: true, runValidators: true }
    );
    if (!UpdatedRequest) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
    return res.status(200).json({ success: true, data: UpdatedRequest });
  } catch (err) {
    return console.log(err);
  }
};

const EditProfile = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const {
    Name,
    Email,
    Description,
    Gensec_Rollnumber,
    FacultyHead,
    Website,
    Contact,
  } = req.body;
  const Gensec = await Students.findOne({ RollNumber: Gensec_Rollnumber });
  try {
    const updatedProfle = await Societies.findOneAndUpdate(
      {
        token: token,
      },
      {
        $set: {
          Name: Name,
          Email: Email,
          GenSec: Gensec._id,
          FacultyHead: FacultyHead,
          Description: Description,
          Website: Website,
          Contact: Contact,
        },
      },
      { new: true, runValidators: true }
    );
    if (!updatedProfle) {
      return console.log("Something went wrong");
    }
    return res.status(200).json({ success: true, data: updatedProfle });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  GenerateEventRequest,
  CheckPermissions,
  EditPermission,
  EditProfile,
};
