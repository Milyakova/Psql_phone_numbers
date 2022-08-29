const Router = require("express");
const router = new Router();

const numberRouter = require("./numberRouter");
const countryRouter = require("./countryRouter");

router.use("/number", numberRouter);
router.use("/country", countryRouter);

module.exports = router;
