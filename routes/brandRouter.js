const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");
const checkEmptyValues = require("../middleware/checkEmtyValuesMiddleware");

router.post("/", checkRole(1), checkEmptyValues, brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
