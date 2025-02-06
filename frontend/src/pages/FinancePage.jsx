import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IncomesItem from "../components/IncomesItem";
import ExpensesItem from "../components/ExpensesItem";
import Debt from "../components/Debt";
import Chart from "../components/Chart";
import Loader from "../components/Loader";
import DataNotFound from "../components/DataNotFound";
import { getExpenseData, getIncomesData } from "../services/api.js";

const URL = `http://localhost:9000`;

export default function FinancePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [debt, setDebt] = useState(0);

  function sortNet(net) {
    return net.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;

      return a.month - b.month;
    });
  }

  useEffect(() => {
    async function fetchIncomes() {
      try {
        setIsLoading(true);
        setError("");

        const response = await getIncomesData();
        const data = response?.data;
        if (!data) {
          throw new Error("Incomes data are not found");
        }
        const sortedData = sortNet(data);
        console.log(sortedData);

        setIncomes(sortedData);
        setError("");
      } catch (error) {
        console.log(`Error occured while fetching`, error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIncomes();
  }, [incomes]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        setIsLoading(true);
        setError("");
        const response = await getExpenseData();
        const data = response?.data;
        if (!data) {
          throw new Error("Expenses data are not found");
        }
        const sortedData = sortNet(data);
        setExpenses(sortedData);
        setError("");
      } catch (error) {
        console.log(`Error occured while fetching`, error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchExpenses();
  }, [expenses]);

  function calculateTotalIncomes(incomes) {
    return incomes
      .reduce((sum, income) => sum + parseFloat(income.amount), 0)
      .toFixed(2);
  }
  function calculateTotalExpenses(expenses) {
    return expenses
      .reduce((sum, expense) => sum + parseFloat(expense.amount), 0)
      .toFixed(2);
  }

  function calculateDebt() {
    const totalIncomes = calculateTotalIncomes(incomes);
    const totalExpenses = calculateTotalExpenses(expenses);
    return totalIncomes - totalExpenses;
  }

  useEffect(() => {
    setDebt(calculateDebt());
  }, [incomes, expenses]);

  return (
    <div className="finance">
      <Header />
      <div className="tracker">
        {isLoading && <Loader />}
        {!incomes.length && !expenses.length && !isLoading && <DataNotFound />}
        {(incomes.length || expenses.length) && !error && !isLoading && (
          <>
            <Chart incomes={incomes} expenses={expenses} />

            <Debt
              totalIncomes={calculateTotalIncomes(incomes)}
              totalExpenses={calculateTotalExpenses(expenses)}
              totalDebt={calculateDebt()}
            />
            {incomes.map((income) => (
              <IncomesItem income={income} />
            ))}
            {expenses.map((expense) => (
              <ExpensesItem expense={expense} />
            ))}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
