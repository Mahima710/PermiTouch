const express = require("express");
const router = express.Router();
const Auth = require("../Middlewares/auth");
const {
  GenerateEventRequest,
  CheckPermissions,
  EditPermission,
  EditProfile,
} = require("../Controllers/SocietyController");

router.route("/createventrequest").post(Auth, GenerateEventRequest);
router.route("/checkpermission").get(Auth, CheckPermissions);
router.route("/editprofile").post(Auth, EditProfile);
router.route("/editpermission/:id").post(Auth, EditPermission);

module.exports = router;
