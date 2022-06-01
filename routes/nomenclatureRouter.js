const Router = require("express");
const router = new Router();
const nomenclatureController = require("../controllers/nomenclatureController");

router.post("/", nomenclatureController.create);
router.get("/", nomenclatureController.getAll);

module.exports = router;
