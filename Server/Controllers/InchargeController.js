const mongoose = require("mongoose");
const {
  Incharges,
  Students,
  Societies,
} = require("../Models/UserModels/Usermodels");
const {
  OtherPermissions,
  EventPermissions,
  HostelPermissions,
} = require("../Models/PermissionModels/PermissionModels");
const {
  RoomLocation,
  FlexLocation,
} = require("../Models/SpaceModels/SpaceModels");

//review request
//getsocdet
//getstudentdet
//geteventdet
//getroomdet
//editprofile

//GET ALL PERMISSIONS
const ReviewPermission = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const Incharge = await Incharges.findOne({ token: token });
  const OtherPermission = await OtherPermissions.find({
    Admin_Incharge: Incharge._id,
  });
  if (
    Incharge.Responsibility === "Rooms" ||
    Incharge.Responsibility === "Flex_Locations" ||
    Incharge.Responsibility === "Events"
  ) {
    const permissions = await EventPermissions.find();
    if (permissions.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No Permissions allotted" });
    }
    return res
      .status(200)
      .json({ success: true, data: permissions.concat(OtherPermission) });
  } else if (Incharge.Responsibility === "Warden") {
    const permissions = await HostelPermissions.find({ Warden: Incharge._id });
    if (permissions.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No Permissions allotted" });
    }
    return res
      .status(200)
      .json({ success: true, data: permissions.concat(OtherPermission) });
  }
};

const JudgePermissions = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const token = req.cookies.jwt;
  const Incharge = await Incharges.findOne({ token: token });
  const { Status, Remarks } = req.body;
  if (Incharge.Responsibility === "Rooms") {
    const UpdatedStatus = EventPermissions.updateOne(
      { _id: id },
      Room_Permission_Status.set(Status, Remarks),
      { new: true, runValidators: true }
    );
    if (!UpdatedStatus) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to Update Status" });
    }
    return res.status(200).json({ success: true, data: UpdatedStatus });
  } else if (Incharge.Responsibility === "Flex") {
    const UpdatedStatus = EventPermissions.updateOne(
      { _id: id },
      Flex_Permission_Status.set(Status, Remarks),
      { new: true, runValidators: true }
    );
    if (!UpdatedStatus) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to Update Status" });
    }
    return res.status(200).json({ success: true, data: UpdatedStatus });
  } else if (Incharge.Responsibility === "Event") {
    const UpdatedStatus = EventPermissions.updateOne(
      { _id: id },
      Event_Permission_Status.set(Status, Remarks),
      { new: true, runValidators: true }
    );
    if (!UpdatedStatus) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to Update Status" });
    }
    return res.status(200).json({ success: true, data: UpdatedStatus });
  } else if (Incharge.Responsibility === "Warden") {
    const UpdatedStatus = HostelPermissions.updateOne(
      { _id: id },
      Permission_Status.set(Status, Remarks),
      { new: true, runValidators: true }
    );
    if (!UpdatedStatus) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to Update Status" });
    }
    return res.status(200).json({ success: true, data: UpdatedStatus });
  }
};

const GetSocietyDetails = async (req, res) => {
  await Societies.find({}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    if (data.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No Societies Registered" });
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const GetStudentDetails = async (req, res) => {
  await Students.find({}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    if (data.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No Students Registered" });
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const GetEventDetails = async (req, res) => {
  await EventPermissions.find({}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    if (data.length === 0) {
      return res.status(200).json({ success: true, message: "No Events" });
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const GetRoomDetails = async (req, res) => {
  await RoomLocation.find({}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    if (data.length === 0) {
      return res.status(200).json({ success: true, message: "No rooms added" });
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const GetFlexDetails = async (req, res) => {
  await FlexLocation.find({}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    if (data.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No locations added" });
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const EditProfile = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const { Name, Email, Contact, Office_Location } = req.body;
  const filter = { token: token };
  const update = {
    Name: Name,
    Email: Email,
    Contact: Contact,
    Office_Location: Office_Location,
  };
  try {
    const UpdatedIncharge = await Incharges.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
    });
    if (!UpdatedIncharge) {
      return console.log("Something went wrong");
    }
    return res.status(200).json({ success: true, Data: UpdatedIncharge });
  } catch (err) {
    return console.log(err);
  }
};

module.exports = {
  ReviewPermission,
  JudgePermissions,
  EditProfile,
  GetEventDetails,
  GetFlexDetails,
  GetRoomDetails,
  GetSocietyDetails,
  GetStudentDetails,
};
