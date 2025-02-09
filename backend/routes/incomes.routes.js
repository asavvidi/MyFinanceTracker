import { Router } from "express";
import { incomeControllers as controller } from "../controllers/incomes.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const incomesRouter = Router();
//We make us of the authenticateToken middleware to protect all routes

//Route to get all the incomes data from the database
incomesRouter.get("/", authenticateToken, controller.getIncomes);
//Route to add a new income record to the database
incomesRouter.post("/", authenticateToken, controller.addIncome);
//Route to delete an income record based on his ID
incomesRouter.delete("/:id", authenticateToken, controller.deleteIncome);

export { incomesRouter };
