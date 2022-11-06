const asyncHandler = require("../middleware/async");
const bookService = require("../services/book");
const trainService = require("../services/train");
const wagonService = require("../services/wagon");
const placementService = require("../services/placement");

module.exports.getBooks = asyncHandler(async (req, res, next) => {
  if (!req.query.id) {
    const books = await bookService.getAll();
    return res.status(200).json({
      success: true,
      data: books,
    });
  }
  const book = await bookService.getByID(req.query);
  res.status(200).json({
    success: true,
    data: book,
  });
});

module.exports.createBook = asyncHandler(async (req, res, next) => {
  const train = await trainService.getByID({ id: req.body.train });
  const wagons = await wagonService.getByTrain({ train_id: req.body.train });

  const book = await bookService.create({
    train: {
      info: train,
      wagons: wagons,
    },
    numberOfPeopleToBook: req.body.numberOfPeopleToBook,
    peopleCanPlaceInDifferentWagons: req.body.peopleCanPlaceInDifferentWagons,
  });

  const placing = await placementService.placing({
    wagons: wagons,
    numberOfPeopleToBook: book.numberOfPeopleToBook,
    peopleCanPlaceInDifferentWagons: book.peopleCanPlaceInDifferentWagons,
  });

  placementDetail = [];
  if (placing != null) {
    placing.forEach(async (place) => {
      placementDetail.push({
        wagonName: place.name,
        numberOfPeople: place.numberOfPlacedPeople,
      });

      await wagonService.updateWithName(place);
    });

    placed = {
      canBeBooked: true,
      placementDetail: placementDetail
    }
  } else {
    placed = {
      canBeBooked: true,
      placementDetail: [],
    }
  }

  res.status(200).json({
    success: true,
    data: placed,
  });
});

module.exports.deleteBook = asyncHandler(async (req, res, next) => {
  const book = await bookService.delete(req.query);
  res.status(200).json({
    success: true,
    data: book,
  });
});
