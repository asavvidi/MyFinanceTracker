import { Router } from "express";
import { expenseControllers as controller } from "../controllers/expenses.controller.js";

const expensesRouter = Router();

expensesRouter.get("/", controller.getExpenses);
expensesRouter.post("/", controller.addExpense);

export { expensesRouter };
