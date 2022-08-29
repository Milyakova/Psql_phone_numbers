const { Number } = require("../models/models");
const ApiError = require("../error/apiError");

class NumberController {
  async getAll(req, res, next) {
    try {
      const list = await Number.findAll();
      res.status(200).send(list);
      return res.json(number);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async createNumber(req, res, next) {
    const { countryId, value } = req.body;
    console.log("countryId, value ", countryId, value);
    try {
      const existingNumber = await Number.findAll({
        where: { countryId: countryId, value: value },
      });
      console.log("existingNumber ", existingNumber);
      if (existingNumber.length) {
        return res.status(400).json({
          error: {
            message: "NUMBER_EXISTS",
            code: 400,
          },
        });
      }

      const newNumber = await Number.create({ ...req.body });
      res.status(201).send(newNumber);
      return res.json(number);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async removeNumber(req, res, next) {
    try {
      const { id } = req.params;
      await Number.destroy({
        where: {
          id,
        },
      });
      return res.send("number deleted");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateBookmark(req, res, next) {
    try {
      const { id } = req.params;
      console.log("req body ", req.body);
      await Number.update(req.body, {
        where: {
          id,
        },
      });
      const updatedNumber = await Number.findOne({ where: { id } });
      console.log("updated number ", updatedNumber);
      return res.json(updatedNumber);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getNumberById(req, res) {
    const { id } = req.params;
    const number = await Number.findOne({ where: { id } });
    return res.json(number);
  }
}
module.exports = new NumberController();
