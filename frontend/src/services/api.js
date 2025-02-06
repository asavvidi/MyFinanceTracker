import { databaseConnect } from "./database.js";

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

export { getExpenseData, getIncomesData };
