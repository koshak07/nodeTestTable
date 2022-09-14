const uuid = require("uuid");
const path = require("path");
const { Nomenclature } = require("../models/models");
const ApiError = require("../error/ApiError");

class NomenclatureController {
  async create(req, res, next) {
    try {
      const {
        barcode,
        firstCoast,
        erp,
        vendorCodeId,
        colorId,
        sizeId,
        brandId,
      } = req.body;
      const { mainImage } = req.files;
      let fileName = barcode + ".jpg";
      mainImage.mv(path.resolve(__dirname, "..", "static", fileName));

      const nomenclature = await Nomenclature.create({
        barcode,
        firstCoast,
        erp,
        vendorCodeId,
        colorId,
        sizeId,
        brandId,
        mainImage: fileName,
      });
      return res.json(nomenclature);
    } catch (e) {
      console.log(e.message);
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    try {
      const nomenclature = await Nomenclature.findAll();
      res.json(nomenclature);
      return res.json(nomenclature);
    } catch (e) {
      next();
    }
    return next();
  }
  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const vendorCode = await Nomenclature.findOne({ where: { id } });
      return res.json(nomenclature);
    } catch (e) {
      next();
    }
  }
}
module.exports = new NomenclatureController();
