import { Router } from "express";
import { userControllers as controller } from "../controllers/user.controller.js";

const userRouter = Router();
//Register a new user
userRouter.post("/register", controller.registerUser);
//Log in and receive an access token
userRouter.post("/login", controller.logInUser);
//Get all users
userRouter.get("/", controller.getAllUsers);
export { userRouter };
