import { Expense } from "../models/expenses.models.js";

//Controller function to get expenses for a specific user.
async function getExpenses(req, res, next) {
  //Take the user id from the request object
  const user_id = req.user.id;
  // Check if user ID is available in request, otherwise return unauthorized status
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });
  //Find all expenses that the user_id matches the id of the user.
  const expenses = await Expense.findAll({ where: { user_id: user_id } });
  //If the expenses response is empty or the length is equal to 0, then return a 404 status.
  if (!expenses || !expenses.length)
    return res.status(404).send({ message: "Expenses not found or empty" });

  //If the extract is succesfull then return a success response with retrieved expenses
  return res
    .status(201)
    .send({ message: "Retrieve expenses succesfully ", data: expenses });
}

//Controller function to add a new expense
async function addExpense(req, res, next) {
  //Extract the necessary fields from the request boyd.
  const { amount, category, month, year } = req.body;
  const user_id = req.user.id;
  // Check if user ID is available in request, otherwise return unauthorized status
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });
  //Create a new expense record in the database
  const newExpense = await Expense.create({
    user_id,
    amount,
    category,
    month,
    year,
  });
  //If the creations fails, then return internal server error
  if (!newExpense)
    return res.status(500).send({ message: "Error adding expense" });
  //Otherwise, return a success response with the added expense data
  return res
    .status(201)
    .send({ message: "Expense add succesfully", data: newExpense });
}

//Controller function to delete an expense record from the database
async function deleteExpense(req, res, next) {
  //Extract the expense id from the request parameters
  const { id } = req.params;
  //Attempt to delete the record from the database
  const response = await Expense.destroy({ where: { id } });
  //If the proccess fails, then return an internal server error.
  if (!response)
    return res.status(500).send({ message: "Error deleting expense" });
  //Otherwise return a success response
  return res.status(200).send({ message: "Expense deleted succesfully" });
}

const expenseControllers = { getExpenses, addExpense, deleteExpense };

export { expenseControllers };
