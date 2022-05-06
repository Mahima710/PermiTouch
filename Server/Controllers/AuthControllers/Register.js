const { Students, Societies } = require("../../Models/UserModels/Usermodels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const CreateStudentOrSociety = async (req, res) => {
  const { Category, Name, Email, Password } = req.body;
  if (Category === "Student") {
    const { Rollnumber, Branch, GraduationYear, Contact, Hostel } = req.body;
    const redundant = await Students.findOne({ RollNumber: Rollnumber });
    if (redundant) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }
    const encryptPass = await bcrypt.hash(Password, 10);
    const newStudent = new Students({
      Username: Name,
      RollNumber: Rollnumber,
      Password: encryptPass,
      Email: Email,
      Branch: Branch,
      Year_Of_Graduation: GraduationYear,
      Contact: Contact,
      Hostel: Hostel,
    });
    try {
      var token = jwt.sign(
        { Student_id: newStudent._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "120h",
        }
      );
      console.log("token created");
      newStudent.token = token;
    } catch (err) {
      console.log(err);
    }
    await newStudent.save();
    return res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 432000000), //5 days
        secure: false,
        httpOnly: false,
        sameSite: "None",
      })
      .status(200)
      .json({ success: true, data: newStudent });
  } else if (Category === "Society") {
    const { Description, Gensec_Rollnumber, FacultyHead, Website, Contact } =
      req.body;
    var redundant = await Societies.findOne({ Name: Name });
    if (redundant) {
      return res
        .status(400)
        .json({ success: false, message: "Society already exists" });
    }
    const GenSec = await Students.findOne({ RollNumber: Gensec_Rollnumber });
    if (!GenSec) {
      return res.status(400).json({
        success: false,
        message:
          "General secratory is not a student, If the student exists, make sure he/she is registered on the application",
      });
    }
    const encryptPass = await bcrypt.hash(Password, 10);
    const newSociety = new Societies({
      Name: Name,
      Password: encryptPass,
      Email: Email,
      GenSec: GenSec._id,
      FacultyHead: FacultyHead,
      Description: Description,
      Website: Website,
      Contact: Contact,
    });
    try {
      const token = jwt.sign(
        { Society_id: newSociety._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "120h",
        }
      );
      newSociety.token = token;
    } catch (err) {
      console.log(err);
    }
    console.log("token generated");
    await newSociety.save();
    return res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 432000000), //5 days
        secure: false,
        httpOnly: false,
        sameSite: "None",
      })
      .status(200)
      .json({ success: true, data: newSociety });
  }
};

module.exports = CreateStudentOrSociety;
