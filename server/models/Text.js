const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Text: sequelize.define("text", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text: DataTypes.STRING,
  }),
};
