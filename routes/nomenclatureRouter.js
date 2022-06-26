const Router = require("express");
const router = new Router();
const nomenclatureController = require("../controllers/nomenclatureController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole(1), nomenclatureController.create);
router.get("/", nomenclatureController.getAll);

module.exports = router;
