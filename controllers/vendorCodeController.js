const uuid = require("uuid");
const path = require("path");
const { VendorCode } = require("../models/models");
const ApiError = require("../error/ApiError");

class VendorCodeController {
  async create(req, res, next) {
    try {
      const { name, firstCoast, erp, brandId } = req.body;
      const { mainImage } = req.files;
      let fileName = name + ".jpg";
      mainImage.mv(path.resolve(__dirname, "..", "static", fileName));

      const vendoreCode = await VendorCode.create({
        name,
        firstCoast,
        erp,
        mainImage: fileName,
        brandId,
      });
      return res.json(vendoreCode);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    try {
      const vendoreCode = await VendorCode.findAll();
      res.json(vendoreCode);
      return res.json(vendoreCode);
    } catch (e) {
      next();
    }
    return next();
  }
  async getOne(req, res) {
    const { id } = req.params;
    const vendorCode = await VendorCode.findOne({ where: { id } });
    return res.json(vendorCode);
  }
}

module.exports = new VendorCodeController();
