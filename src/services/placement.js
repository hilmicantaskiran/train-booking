// Create a function that wll return the placement of the people to wagons based on the number of people to book, the people can place in different wagons or not and the wagons of the train.
module.exports.placing = async (props) => {
  const { wagons, numberOfPeopleToBook, peopleCanPlaceInDifferentWagons } = props;

  let placement = [];
  let peopleToBook = numberOfPeopleToBook;

  const wagonsLength = wagons.length;
  const sortedWagons = wagons.sort((a, b) => (b.capacity - b.numberOfFullSeats) - (a.capacity - a.numberOfFullSeats));

  if (peopleCanPlaceInDifferentWagons) {
    for (let i = 0; i < peopleToBook; i++) {
      const q = Math.floor(i / wagonsLength);
      const r = i % wagonsLength

      const wagon = sortedWagons[r];
      const freeSeats = wagon.capacity - wagon.numberOfFullSeats;

      if (freeSeats > 0) {
        if (freeSeats >= peopleToBook) {
          wagon.numberOfFullSeats++;

          placement[r] = {
            name: wagon.name,
            capacity: wagon.capacity,
            numberOfFullSeats: wagon.numberOfFullSeats,
            connectedTrain: wagon.connectedTrain,
            numberOfPlacedPeople: q + 1,
          };
        }
      }
    }
  } else {
    for (let i = 0; i < sortedWagons.length; i++) {
      const r = i % wagonsLength
      
      const wagon = sortedWagons[i % wagonsLength];
      const freeSeats = wagon.capacity - wagon.numberOfFullSeats;
      if (freeSeats > 0) {
        if (freeSeats >= peopleToBook) {
          placement[r] = {
            name: wagon.name,
            capacity: wagon.capacity,
            numberOfFullSeats: wagon.numberOfFullSeats + peopleToBook,
            connectedTrain: wagon.connectedTrain,
            numberOfPlacedPeople: peopleToBook,
          };
          peopleToBook = 0;
          break;
        } else {
          return null;
        }
      }
    }
  }

  return placement;
}
