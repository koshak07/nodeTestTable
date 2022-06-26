const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User } = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id, userName, roleId) => {
  return jwt.sign({ id, userName, roleId }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserController {
  async registration(req, res, next) {
    const { userName, password, roleId = 2 } = req.body;
    if (!userName || !password) {
      return next(ApiError.badRequest("Wrong username or password"));
    }
    const candidate = await User.findOne({ where: { userName } });
    if (candidate) {
      return next(ApiError.badRequest("Username is already exists!"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      userName,
      roleId,
      password: hashPassword,
    });
    const token = generateJwt(user.id, user.userName, user.roleId);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return next(ApiError.badRequest("Username not found!"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Wrong username or password"));
    }
    const token = generateJwt(user.id, user.userName, user.roleId);

    return res.json({ token });
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.userName, req.user.roleId);
    return res.json({ token });
  }
}

module.exports = new UserController();
