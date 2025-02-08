import { databaseConnect } from "./database.js";

async function registerUser(data) {
  const response = await databaseConnect
    .post("api/user/register", data)
    .catch((err) => console.log(err));
  return response;
}

async function loginUser(data) {
  const response = await databaseConnect
    .post("api/user/login", data)
    .catch((err) => console.log(err));

  return response;
}

async function getIncomesData() {
  const incomeResponse = await databaseConnect
    .get("api/incomes")
    .catch((err) => console.log(err));

  const incomeData = incomeResponse?.data;
  return incomeData;
}

async function getExpenseData() {
  const expenseResponse = await databaseConnect
    .get("api/expenses")
    .catch((err) => console.log(err));

  const expenseData = expenseResponse?.data;
  return expenseData;
}

async function addIncomeData(data) {
  const response = await databaseConnect
    .post("api/incomes", data)
    .catch((err) => console.log(err));
  return response;
}

async function addExpenseData(data) {
  const response = await databaseConnect
    .post("api/expenses", data)
    .catch((err) => console.log(err));
  return response;
}

async function deleteIncomeData(id) {
  const response = await databaseConnect
    .delete(`api/incomes/${id}`)
    .catch((err) => console.log(err));

  return response;
}

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
