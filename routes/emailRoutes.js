const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/emailControllers");
const {sendCareerEmail} = require("../controllers/CareerController");
const {sendHireDeveloperEmail} = require("../controllers/HireDeveloperController");

router.post("/sendEmail", sendEmail);
router.post("/sendCareerEmail", sendCareerEmail);
router.post("/sendHireDeveloperEmail", sendHireDeveloperEmail);

module.exports = router;
