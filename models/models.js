const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userName: { type: DataTypes.STRING, unique: true },
  // role: { type: DataTypes.STRING, allowNull: false, defaultValue: "USER" },
  password: { type: DataTypes.STRING },
});

const Role = sequelize.define("role", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, defaultValue: "USER" },
  description: { type: DataTypes.STRING, allowNull: false },
});

const VendorCode = sequelize.define("vendorCode", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mainImage: { type: DataTypes.STRING, allowNull: true },
  name: { type: DataTypes.STRING, allowNull: false },
  firstCoast: { type: DataTypes.INTEGER },
  erp: { type: DataTypes.INTEGER },
});
const Nomenclature = sequelize.define("nomenclature", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mainImage: { type: DataTypes.STRING, allowNull: true },
  barcode: { type: DataTypes.STRING },
  firstCoast: { type: DataTypes.INTEGER },
  erp: { type: DataTypes.INTEGER },
});
// const MappingTable = sequelize.define("mappingTable", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
const Sklad = sequelize.define("sklad", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});
const Color = sequelize.define("color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
const Size = sequelize.define("size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, allowNull: false },
});
const SalesWb = sequelize.define("salesWb", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dateBegin: { type: DataTypes.DATE, allowNull: false },
  dateEnd: { type: DataTypes.DATE, allowNull: false },
  qSales: { type: DataTypes.INTEGER },
  coastSales: { type: DataTypes.INTEGER },
  qReturn: { type: DataTypes.INTEGER },
  coastReturn: { type: DataTypes.INTEGER },
  qOnStock: { type: DataTypes.INTEGER },
});
const SalesRetail = sequelize.define("salesRetail", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dateBegin: { type: DataTypes.DATE, allowNull: false },
  dateEnd: { type: DataTypes.DATE, allowNull: false },
  qSales: { type: DataTypes.INTEGER },
  coastSales: { type: DataTypes.INTEGER },
  qReturn: { type: DataTypes.INTEGER },
  coastReturn: { type: DataTypes.INTEGER },
});

const Production = sequelize.define("production", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE, allowNull: false },
  qProdPlan: { type: DataTypes.INTEGER },
  qProdFit: { type: DataTypes.INTEGER },
  qProdSew: { type: DataTypes.INTEGER },
});

const DataSklad = sequelize.define("dataSklad", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE, allowNull: false },
  quantity: { type: DataTypes.INTEGER },
});

Role.hasMany(User);
User.belongsTo(Role);

VendorCode.hasMany(Nomenclature);
Nomenclature.belongsTo(VendorCode);

Brand.hasMany(VendorCode);
VendorCode.belongsTo(Brand);

Color.hasMany(Nomenclature);
Nomenclature.belongsTo(Color);
Size.hasMany(Nomenclature);
Nomenclature.belongsTo(Size);

Nomenclature.hasMany(DataSklad);
DataSklad.belongsTo(Nomenclature);

Sklad.hasMany(DataSklad);
DataSklad.belongsTo(Sklad);

Nomenclature.hasMany(Production);
Production.belongsTo(Nomenclature);

Nomenclature.hasMany(SalesRetail);
SalesRetail.belongsTo(Nomenclature);

Nomenclature.hasMany(SalesWb);
SalesWb.belongsTo(Nomenclature);

module.exports = {
  User,
  Role,
  VendorCode,
  Brand,
  Nomenclature,
  Color,
  Size,
  DataSklad,
  Color,
  Size,
  DataSklad,
};
