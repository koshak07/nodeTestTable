const Router = require("express");
const router = new Router();
const colorController = require("../controllers/colorController");
const checkRole = require("../middleware/checkRoleMiddleware");
const checkEmptyValues = require("../middleware/checkEmtyValuesMiddleware");

router.post("/", checkRole(1), checkEmptyValues, colorController.create);
router.get("/", colorController.getAll);

module.exports = router;
