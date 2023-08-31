const { sequelize } = require("./database");
const { Text } = require("../models/Text");

const texts = [
  {
    text: "violin",
  },
  {
    text: " piano",
  },
  {
    text: "trumpet",
  },
  {
    text: "flute",
  },
  {
    text: "saxophone",
  },
];

const seedDatabase = async () => {
  await Text.bulkCreate(texts);
};

module.exports = {
  seedDatabase,
};
