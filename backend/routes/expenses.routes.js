import { Router } from "express";
import { expenseControllers as controller } from "../controllers/expenses.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const expensesRouter = Router();

expensesRouter.get("/", authenticateToken, controller.getExpenses);
expensesRouter.post("/", authenticateToken, controller.addExpense);
expensesRouter.delete("/:id", authenticateToken, controller.deleteExpense);

export { expensesRouter };
