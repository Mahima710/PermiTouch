const express = require("express");
const router = express.Router();
const Auth = require("../Middlewares/auth");
const {
  ReviewPermission,
  JudgePermissions,
  EditProfile,
  GetEventDetails,
  GetFlexDetails,
  GetRoomDetails,
  GetSocietyDetails,
  GetStudentDetails,
} = require("../Controllers/InchargeController");

router.route("/reviewpermission").get(Auth, ReviewPermission);
router.route("/judgepermissions/:id").get(Auth, JudgePermissions);
router.route("/editprofile").post(Auth, EditProfile);
router.route("/geteventdetails").get(Auth, GetEventDetails);
router.route("/getroomdetails").get(Auth, GetRoomDetails);
router.route("/getflexdetails").get(Auth, GetFlexDetails);
router.route("/getsocietydetails").get(Auth, GetSocietyDetails);
router.route("/getstudentdetails").get(Auth, GetStudentDetails);

module.exports = router;
