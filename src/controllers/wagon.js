const asyncHandler = require("../middleware/async");
const wagonService = require("../services/wagon");

module.exports.getWagons = asyncHandler(async (req, res, next) => {
  if (!req.query.id) {
    const wagons = await wagonService.getAll();
    return res.status(200).json({
      success: true,
      data: wagons,
    });
  }
  const wagon = await wagonService.getByID(req.query);
  res.status(200).json({
    success: true,
    data: wagon,
  });
});

module.exports.createWagon = asyncHandler(async (req, res, next) => {
  const wagon = await wagonService.create(req.body);
  res.status(200).json({
    success: true,
    data: wagon,
  });
});

module.exports.updateWagon = asyncHandler(async (req, res, next) => {
  const wagon = await wagonService.update({
    id: req.query.id,
    name: req.body.name,
    capacity: req.body.capacity,
    numberOfFullSeats: req.body.numberOfFullSeats,
  });
  res.status(200).json({
    success: true,
    data: wagon,
  });
});

module.exports.deleteWagon = asyncHandler(async (req, res, next) => {
  const wagon = await wagonService.delete(req.query);
  res.status(200).json({
    success: true,
    data: wagon,
  });
});

module.exports.deleteAllWagons = asyncHandler(async (req, res, next) => {
  const wagon = await wagonService.deleteAll();
  res.status(200).json({
    success: true,
    data: wagon,
  });
});

module.exports.getConnectedWagons = asyncHandler(async (req, res, next) => {
  console.log(`Request ${JSON.stringify(req.query)}`);
  const wagon = await wagonService.getByTrain(req.query);
  res.status(200).json({
    success: true,
    data: wagon,
  });
});
