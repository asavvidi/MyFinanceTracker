import { where } from "sequelize";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { JWT_REFRESH_EXPIRATION, JWT_SECRET } from "../config/config.js";

async function registerUser(req, res, next, Model) {
  const { first_name, last_name, email, password } = req.body;

  const existingUser = await Model.findOne({ where: { email: email } });
  if (existingUser)
    return res.status(404).send({ message: `Email already used` });
  const result = await Model.create({
    first_name,
    last_name,
    email,
    password: await bcrypt.hash(password, 15),
  });
  if (!result) res.status(404).send({ message: `Error while register user` });
  return res.status(201).send({ message: `Added succesfully`, user: result });
}

async function getAll(req, res, next, Model) {
  const allUsers = await Model.findAll();
  if (!allUsers.length)
    return res
      .status(404)
      .send({ message: "Users not found or there is no user add yet" });
  return res
    .status(201)
    .send({ message: "Users retrieve succesfully", data: allUsers });
}

async function logInUser(req, res, next, Model) {
  const { email, password } = req.body;

  const user = await Model.findOne({ where: { email: email } });
  if (!user)
    return res.status(404).send({ message: "No user found with that email" });

  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    res.status(404).send({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRATION || "1h",
  });

  res.status(200).json({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    accessToken: token,
  });
}

const services = { registerUser, logInUser, getAll };
export { services };
