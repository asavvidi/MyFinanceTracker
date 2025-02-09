import { databaseConnect } from "./database.js";

//Send user data to the backend to register a new user
async function registerUser(data) {
  const response = await databaseConnect
    .post("api/user/register", data)
    .catch((err) => console.log(err));
  return response;
}

//Login a user sending user data to the backend
async function loginUser(data) {
  const response = await databaseConnect
    .post("api/user/login", data)
    .catch((err) => console.log(err));

  return response;
}

//Make a request to the backend and fetch all the income data
async function getIncomesData() {
  const incomeResponse = await databaseConnect
    .get("api/incomes")
    .catch((err) => console.log(err));

  const incomeData = incomeResponse?.data;
  return incomeData;
}

//Make a request to the backend and fetch all the expense data
async function getExpenseData() {
  const expenseResponse = await databaseConnect
    .get("api/expenses")
    .catch((err) => console.log(err));

  const expenseData = expenseResponse?.data;
  return expenseData;
}

// Add new income by sending income details to the backend
async function addIncomeData(data) {
  const response = await databaseConnect
    .post("api/incomes", data)
    .catch((err) => console.log(err));
  return response;
}

// Add new expense by sending income details to the backend
async function addExpenseData(data) {
  const response = await databaseConnect
    .post("api/expenses", data)
    .catch((err) => console.log(err));
  return response;
}

//Delete an income record by ID
async function deleteIncomeData(id) {
  const response = await databaseConnect
    .delete(`api/incomes/${id}`)
    .catch((err) => console.log(err));

  return response;
}

//Delete an expense record by ID
async function deleteExpenseData(id) {
  const response = await databaseConnect
    .delete(`api/expenses/${id}`)
    .catch((err) => console.log(err));

  return response;
}

export {
  getExpenseData,
  getIncomesData,
  deleteExpenseData,
  deleteIncomeData,
  addExpenseData,
  addIncomeData,
  registerUser,
  loginUser,
};
