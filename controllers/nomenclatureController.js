const uuid = require("uuid");
const path = require("path");
const { Nomenclature } = require("../models/models");
const ApiError = require("../error/ApiError");

class NomenclatureController {
  async create(req, res, next) {
    try {
      const { barcode, firstCoast, erp, vendorCodeId, colorId, sizeId } =
        req.body;
      const { mainImage } = req.files;
      let fileName = uuid.v4() + ".jpg";
      mainImage.mv(path.resolve(__dirname, "..", "static", fileName));

      const nomenclature = await Nomenclature.create({
        barcode,
        firstCoast,
        erp,
        vendorCodeId,
        colorId,
        sizeId,
        mainImage: fileName,
      });
      return res.json(nomenclature);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {}
  async getOne(req, res) {}
}
module.exports = new NomenclatureController();
