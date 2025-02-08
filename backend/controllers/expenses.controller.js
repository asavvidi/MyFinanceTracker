import { services } from "../utils/expensesServices.js";
import { Expense } from "../models/expenses.models.js";

async function getExpenses(req, res, next) {
  const userId = req.user.id;
  const expenses = await Expense.findAll({ where: { user_id: userId } });
  if (!expenses || !expenses.length)
    return res.status(404).send({ message: "Expenses not found or empty" });
  return res
    .status(201)
    .send({ message: "Retrieve expenses succesfully ", data: expenses });
}
async function addExpense(req, res, next) {
  const { amount, category, month, year } = req.body;
  const user_id = req.user.id;
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });

  const newExpense = await Expense.create({
    user_id,
    amount,
    category,
    month,
    year,
  });
  if (!newExpense)
    return res.status(500).send({ message: "Error adding expense" });
  return res
    .status(201)
    .send({ message: "Expense add succesfully", data: newExpense });
}

async function deleteExpense(req, res, next) {
  const { id } = req.params;
  const response = await Expense.destroy({ where: { id } });
  if (!response)
    return res.status(404).send({ message: "Error deleting expense" });
  return res.status(200).send({ message: "Expense deleted succesfully" });
}

const expenseControllers = { getExpenses, addExpense, deleteExpense };

export { expenseControllers };
