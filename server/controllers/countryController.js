const {Country}=require('../models/models')
const ApiError=require('../error/apiError')

class CountryController {
  async getAll(req, res) {
    const countries=await Country.findAll()
    return res.json(countries)
  }
  async getCountryById(req, res) {
    const { id } = req.params;
    const country = await Country.findOne({ where: { id } });
    return res.json(country);
  }
  
}
module.exports = new CountryController();
