import { User } from "../models/users.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_REFRESH_EXPIRATION, JWT_SECRET } from "../config/config.js";

//Controller function to register a new user
async function registerUser(req, res, next) {
  //Extract the user details from the request body
  const { first_name, last_name, email, password } = req.body;
  //Check if a user with the same email already exists
  const existingUser = await User.findOne({ where: { email: email } });
  //If exists then return a 404 status
  if (existingUser)
    return res.status(404).send({ message: `Email already used` });
  //Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 15);
  // Create a new user record
  const result = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
  });
  //If the attempt to add a user fails then return an internal server error
  if (!result)
    return res.status(500).send({ message: `Error while register user` });
  // Return success response with user data
  return res.status(201).send({ message: `Added succesfully`, data: result });
}

// Controller function to retrieve all registered users
async function getAllUsers(req, res, next) {
  // Fetch all users from the database
  const allUsers = await User.findAll();
  // If no users exist, return an error response
  if (!allUsers.length)
    return res
      .status(404)
      .send({ message: "Users not found or there is no user add yet" });
  //Return success response with all the users data
  return res
    .status(201)
    .send({ message: "Users retrieve succesfully", data: allUsers });
}

//Controller function to authenticate a user and generate a token
async function logInUser(req, res, next) {
  //Extract the user details from the request body
  const { email, password } = req.body;

  //Find the user by the email from the database
  const user = await User.findOne({ where: { email: email } });
  //If the user is not found then return an error response
  if (!user)
    return res.status(404).send({ message: "No user found with that email" });

  //Compare the password with the hashed password from the database
  const verifyPassword = await bcrypt.compare(password, user.password);
  //If the password is not verified then return an error response
  if (!verifyPassword) {
    return res.status(404).send({ message: "Incorrect password" });
  }
  // Generate a JWT token for authenticated user
  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRATION || "1h",
  });

  // Return successful response with user details and access token
  return res.status(200).json({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    accessToken: token,
  });
}
const userControllers = {
  registerUser,
  logInUser,
  getAllUsers,
};

export { userControllers };
