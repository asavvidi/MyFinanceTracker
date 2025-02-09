import { Router } from "express";
import { expenseControllers as controller } from "../controllers/expenses.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const expensesRouter = Router();
//We make us of the authenticateToken middleware to protect all routes

//Route to get all the expenses data.
expensesRouter.get("/", authenticateToken, controller.getExpenses);
//Route to add a new expense record to the database
expensesRouter.post("/", authenticateToken, controller.addExpense);
//Route to delete an expense based on his ID
expensesRouter.delete("/:id", authenticateToken, controller.deleteExpense);

export { expensesRouter };
