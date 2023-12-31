const express = require("express");
const profileController = require("../controllers/profileController.js");

const router = express.Router();

router
  .route("/")
  .get(profileController.getSelfProfile)
  .patch(profileController.updateSelfProfile);

module.exports = router;
