import { services } from "../utils/usersAuth.js";
import { User } from "../models/users.models.js";

function registerUser(req, res, next) {
  services.registerUser(req, res, next, User);
}

function getAllUsers(req, res, next) {
  services.getAll(req, res, next, User);
}

function logInUser(req, res, next) {
  services.logInUser(req, res, next, User);
}
const userControllers = {
  registerUser,
  logInUser,
  getAllUsers,
};

export { userControllers };
