const Router = require("express");
const router = new Router();
const vendorCodeController = require("../controllers/vendorCodeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole(1), vendorCodeController.create);
router.get("/", vendorCodeController.getAll);
router.get("/:id", vendorCodeController.getOne);

module.exports = router;
