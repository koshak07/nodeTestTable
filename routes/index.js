const Router = require("express");
const router = new Router();

const brandRouter = require("./brandRouter.js");
const userRouter = require("./userRouter.js");
const nomenclatureRouter = require("./nomenclatureRouter");
const vendorCodeRouter = require("./vendorCodeRouter");
const roleRouter = require("./roleRouter");
const sizeRouter = require("./sizeRouter");
const colorRouter = require("./colorRouter");

router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/vendorCode", vendorCodeRouter);
router.use("/brand", brandRouter);
router.use("/nomenclature", nomenclatureRouter);
router.use("/size", sizeRouter);
router.use("/color", colorRouter);

module.exports = router;
