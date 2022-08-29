const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Number = sequelize.define("number", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  countryId: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    autoIncrement: false,
  },
  value: { type: DataTypes.INTEGER },
  bookmark: { type: DataTypes.BOOLEAN, defaultValue: false },
});
const Country = sequelize.define("country", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  combination: { type: DataTypes.INTEGER, defaultValue: 7 },
  country: { type: DataTypes.STRING, unique: true },
  color: { type: DataTypes.STRING },
});

Country.hasMany(Number)
Number.belongsTo(Country)

module.exports = {
  Number,
  Country
};
