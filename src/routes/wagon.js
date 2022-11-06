const express = require("express");

const router = express.Router();

const {
  getWagons,
  createWagon,
  updateWagon,
  deleteWagon,
  deleteAllWagons,
  getConnectedWagons,
} = require("../controllers/wagon");

router.get("/", getWagons);
router.post("/", createWagon);
router.put("/", updateWagon);
router.delete("/", deleteWagon);
router.delete("/all", deleteAllWagons);

router.get('/connectedTrain', getConnectedWagons);

module.exports = router;
