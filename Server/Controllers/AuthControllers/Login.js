const {
  Students,
  Societies,
  Incharges,
} = require("../../Models/UserModels/Usermodels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const StudentOrSocietyLogin = async (req, res) => {
  const { Category, Username, Password } = req.body;
  if (Category === "Student") {
    const { RollNumber } = req.body;
    const Student = await Students.findOne({ RollNumber: RollNumber });
    if (!Student) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist" });
    }
    if (await bcrypt.compare(Password, Student.Password)) {
      const token = await jwt.sign(
        { Student_id: Student._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "120h",
        }
      );
      const updatedStudent = await Students.updateOne(
        { RollNumber: Student.RollNumber },
        { $set: { token: token } },
        { new: true, runValidators: true, credentials: true }
      );
      if (!updatedStudent) {
        return console.log("something went wrong!");
      }
      return res
        .cookie("jwt", token, {
          expires: new Date(Date.now() + 432000000), //5 days
          secure: false,
          httpOnly: false,
          sameSite: "None",
        })
        .status(200)
        .json({ success: true, data: Student });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Password" });
    }
  } else if (Category === "Society") {
    const Society = await Societies.findOne({ Name: Username });
    if (!Society) {
      return res
        .status(400)
        .json({ success: false, message: "Society doesn't exist" });
    }
    if (await bcrypt.compare(Password, Society.Password)) {
      const token = await jwt.sign(
        { Society_id: Society._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "120h",
        }
      );
      const updatedSociety = await Societies.updateOne(
        { Name: Username },
        { $set: { token: token } },
        { runValidators: true, new: true, credentials: true }
      );
      if (!updatedSociety) {
        return console.log("Something went wrong");
      }
      return res
        .cookie("jwt", token, {
          expires: new Date(Date.now() + 432000000), //5 days
          secure: false,
          httpOnly: false,
          sameSite: "None",
        })
        .status(200)
        .json({ success: true, data: updatedSociety });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Password" });
    }
  }
};

const InchargeLogin = async (req, res) => {
  const { Username, Email, Password } = req.body;
  const Incharge = await Incharges.findOne({ Email: Email });
  if (!Incharge) {
    return res
      .status(400)
      .json({ success: false, message: "User doesn't exist" });
  }
  if (await bcrypt.compare(Password, Incharge.Password)) {
    if (Username !== Incharge.Username) {
      return res
        .status(400)
        .json({ success: false, message: "Username doesn't match" });
    }
    const token = jwt.sign(
      { Incharge_id: Incharge._id },
      process.env.TOKEN_KEY,
      {
        expiresIn: "120h",
      }
    );
    const updatedIncharge = await Incharge.updateOne(
      { Email: Email },
      { $set: { token: token } },
      { new: true, runValidators: true, Credentials: true }
    );
    if (!updatedIncharge) {
      return console.log("Something went wrong");
    }
    return res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 432000000), //5 days
        secure: false,
        httpOnly: false,
        sameSite: "None",
      })
      .status(200)
      .json({ success: true, data: updatedIncharge });
  } else {
    return res.status(200).json({ success: false, message: "Wrong Password" });
  }
};

module.exports = { StudentOrSocietyLogin, InchargeLogin };
