const Train = require("../models/train");

module.exports.create = async (props) => {
  let { name } = props;

  let train = new Train({
    name: name,
  });

  await train.save();

  return train;
};

module.exports.getAll = async () => {
  const trains = await Train.find();
  return trains;
};

module.exports.getByID = async (props) => {
  let { id } = props;

  const train = await Train.findById(id);
  return train;
};

module.exports.update = async (props) => {
  let { id, name } = props;

  let train = await Train.findByIdAndUpdate(
    id,
    {
      name: name,
    },
    { new: true }
  ).populate("wagons");

  return train;
};

module.exports.delete = async (props) => {
  const { id } = props;
  const train = await Train.findByIdAndDelete(id);
  return train;
};

module.exports.deleteAll = async (props) => {
  const train = await Train.deleteMany({});
  return train;
};
