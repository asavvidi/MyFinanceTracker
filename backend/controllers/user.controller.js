import { services } from "../utils/usersServices.js";
import { User } from "../models/users.models.js";

function addUser(req, res, next) {
  services.addUser(req, res, next, User);
}

function getAllUsers(req, res, next) {
  services.getAll(req, res, next, User);
}

function getUser(req, res, next) {
  services.getUser(req, res, next, User);
}
const userControllers = {
  addUser,
  getAllUsers,
  getUser,
};

export { userControllers };
