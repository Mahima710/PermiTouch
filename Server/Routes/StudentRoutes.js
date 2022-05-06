const express = require("express");
const router = express.Router();
const Auth = require("../Middlewares/auth");
const {
  GenerateHostelRequest,
  CheckPermissions,
  EditProfile,
  EditRequest,
} = require("../Controllers/StudentController");

router.route("/createhostelrequest").post(Auth, GenerateHostelRequest);
router.route("/checkpermission").get(Auth, CheckPermissions);
router.route("/editprofile").post(Auth, EditProfile);
router.route("/editpermission/:id").post(Auth, EditRequest);

module.exports = router;
