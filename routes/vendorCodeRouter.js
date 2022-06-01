const Router = require("express");
const router = new Router();
const vendorCodeController = require("../controllers/vendorCodeController");

router.post("/", vendorCodeController.create);
router.get("/", vendorCodeController.getAll);
router.get("/:id", vendorCodeController.getOne);

module.exports = router;
