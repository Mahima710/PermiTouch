const express = require("express");
const {
  StudentOrSocietyLogin,
  InchargeLogin,
} = require("../Controllers/AuthControllers/Login");
const CreateStudentOrSociety = require("../Controllers/AuthControllers/Register");
const router = express.Router();

router.route("/register").post(CreateStudentOrSociety);
router.route("/login").post(StudentOrSocietyLogin);
router.route("/incharge/login").post(InchargeLogin);

module.exports = router;
