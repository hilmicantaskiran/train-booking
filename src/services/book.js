const Book = require("../models/book");

module.exports.create = async (props) => {
  let { train, numberOfPeopleToBook, peopleCanPlaceInDifferentWagons } = props;

  let book = new Book({
    train: train,
    numberOfPeopleToBook: numberOfPeopleToBook,
    peopleCanPlaceInDifferentWagons: peopleCanPlaceInDifferentWagons,
  });

  await book.save();

  return book;
};

module.exports.getAll = async () => {
  const books = await Book.find();
  return books;
};

module.exports.getByID = async (props) => {
  console.log(`ID: ${props.id}`);

  let { id } = props;

  const book = await Book.findById(id);
  return book;
};

module.exports.delete = async (props) => {
  const { id } = props;
  const book = await Book.findByIdAndDelete(id);
  return book;
};
