import { services } from "../utils/expensesServices.js";
import { Expense } from "../models/expenses.models.js";

function getExpenses(req, res, next) {
  services.getExpenses(req, res, next, Expense);
}
function addExpense(req, res, next) {
  services.addExpense(req, res, next, Expense);
}

function deleteExpense(req, res, next) {
  services.deleteExpense(req, res, next, Expense);
}

const expenseControllers = { getExpenses, addExpense, deleteExpense };

export { expenseControllers };
