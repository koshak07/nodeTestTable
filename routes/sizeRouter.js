const Router = require("express");
const router = new Router();
const sizeController = require("../controllers/sizeController");
const checkRole = require("../middleware/checkRoleMiddleware");
const checkEmptyValues = require("../middleware/checkEmtyValuesMiddleware");

router.post("/", checkRole(1), checkEmptyValues, sizeController.create);
router.get("/", sizeController.getAll);

module.exports = router;
