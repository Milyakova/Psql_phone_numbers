const Router = require("express");
const router = new Router();
const numberController = require("../controllers/numberController");

router.post("/", numberController.createNumber);
router.get("/", numberController.getAll);
router.get("/:id", numberController.getNumberById);
router.delete("/:id", numberController.removeNumber);
router.put("/:id", numberController.updateBookmark);

module.exports = router;
