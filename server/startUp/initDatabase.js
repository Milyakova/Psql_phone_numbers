const { Country } = require("../models/models");
const config = require("config");
const countriesMock = config.get("countryCode");
console.log("countriesMock", countriesMock);
module.exports = async () => {
  const countries = await Country.findAll();
  if (countries.length !== countriesMock.length) {
    try {
      const countries = await Country.bulkCreate(countriesMock);
      console.log("countries ", countries);
    } catch (error) {
      return error;
    }
  }
};
