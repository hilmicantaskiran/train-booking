const asyncHandler = require("../middleware/async");
const trainService = require("../services/train");

module.exports.getTrains = asyncHandler(async (req, res, next) => {
  if (req.query.id) {
    const train = await trainService.getByID(req.query);
    return res.status(200).json({
      success: true,
      data: train,
    });
  } else {
    const trains = await trainService.getAll();
    res.status(200).json({
      success: true,
      data: trains,
    });
  }
});

module.exports.createTrain = asyncHandler(async (req, res, next) => {
  const train = await trainService.create(req.body);
  res.status(200).json({
    success: true,
    data: train,
  });
});

module.exports.updateTrain = asyncHandler(async (req, res, next) => {
  const train = await trainService.update({
    "id": req.query.id,
    "name": req.body.name
  });
  res.status(200).json({
    success: true,
    data: train,
  });
});

module.exports.deleteTrain = asyncHandler(async (req, res, next) => {
  const train = await trainService.delete(req.query);
  res.status(200).json({
    success: true,
    data: train,
  });
});

module.exports.deleteAllTrains = asyncHandler(async (req, res, next) => {
  const train = await trainService.deleteAll();
  res.status(200).json({
    success: true,
    data: train,
  });
});
