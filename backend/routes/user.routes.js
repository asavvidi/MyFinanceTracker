import { Router } from "express";
import { userControllers as controller } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", controller.addUser);
userRouter.get("/", controller.getAllUsers);
userRouter.get("/:email", controller.getUser);

export { userRouter };
