const express = require("express");

const router = express.Router();

const {
  getTrains,
  createTrain,
  updateTrain,
  deleteTrain,
  deleteAllTrains,
} = require("../controllers/train");

router.get("/", getTrains);
router.post("/", createTrain);
router.put("/", updateTrain);
router.delete("/", deleteTrain);
router.delete("/all", deleteAllTrains);

module.exports = router;
