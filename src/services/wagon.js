const Wagon = require("../models/wagon");

module.exports.create = async (props) => {
  let { name, capacity, numberOfFullSeats, connectedTrain } = props;

  let wagon = new Wagon({
    name: name,
    capacity: capacity,
    numberOfFullSeats: numberOfFullSeats,
    connectedTrain: connectedTrain,
  });

  await wagon.save().then((wagon) => wagon.populate("connectedTrain"));

  return wagon;
};

module.exports.getAll = async () => {
  const wagons = await Wagon.find();
  return wagons;
};

module.exports.getByID = async (props) => {
  let { id } = props;

  const wagon = await Wagon.findById(id);
  return wagon;
};

module.exports.getByTrain = async (props) => {
  let { train_id } = props;

  const wagon = await Wagon.find({ 'connectedTrain': train_id })
  return wagon;
};

module.exports.update = async (props) => {
  let { id, name, capacity, numberOfFullSeats, connectedTrain } = props;

  let wagon = await Wagon.findByIdAndUpdate(
    id,
    {
      name: name,
      capacity: capacity,
      numberOfFullSeats: numberOfFullSeats,
      connectedTrain: connectedTrain,
    },
    { new: true }
  ).populate("connectedTrain");
  return wagon;
};

module.exports.updateWithName = async (props) => {
  let { name, capacity, numberOfFullSeats, connectedTrain } = props;

  let wagon = await Wagon.findOneAndUpdate(
    { name: name },
    {
      name: name,
      capacity: capacity,
      numberOfFullSeats: numberOfFullSeats,
      connectedTrain: connectedTrain,
    },
    { new: true }
  ).populate("connectedTrain");
  return wagon;
};

module.exports.delete = async (props) => {
  const { id } = props;
  const wagon = await Wagon.findByIdAndDelete(id);
  return wagon;
};

module.exports.deleteAll = async () => {
  const wagon = await Wagon.deleteMany({});
  return wagon;
};
