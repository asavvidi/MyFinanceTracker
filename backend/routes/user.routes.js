import { Router } from "express";
import { userControllers as controller } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", controller.registerUser);
userRouter.post("/login", controller.logInUser);
userRouter.get("/", controller.getAllUsers);
export { userRouter };
