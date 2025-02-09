import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Select from "../components/Select";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addExpenseData } from "../services/api";

export default function ExpensesPage() {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!month || !year || !amount || !category) return;
    const newExpense = {
      amount,
      category,
      month,
      year,
    };

    try {
      const response = await addExpenseData(newExpense).catch((err) =>
        console.log(err)
      );

      // console.log(response?.data);

      setAmount("");
      setCategory("");
      setMonth("");
      setYear("");
    } catch (err) {
      console.log("Error adding expense", err);
    }
  }

  return (
    <div className="expenses">
      <Header />
      <div className="logistics">
        <h2 className="highlight">Add expenses</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <InputField
              placeholder="Enter the amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />

            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select a category"
            >
              <option>Housing</option>
              <option>Food</option>
              <option>Debt Payments</option>
              <option>Entertainment</option>
              <option>Internet</option>
            </Select>
            <Select
              value={month}
              placeholder="Month"
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {Array.from({ length: 12 }, (_, i) => {
                return <option key={i + 1}>{i + 1}</option>;
              })}
            </Select>

            <Select
              value={year}
              placeholder="Year"
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {Array.from({ length: 11 }, (_, i) => {
                return <option key={i + 2015}>{i + 2015}</option>;
              })}
            </Select>
          </div>
          <Button
            className="subButton"
            disabled={!amount || !month || !year || !category}
          >
            Add expense
          </Button>
        </Form>
        <div className="btn">
          <Link className="navTo" to="/finance">
            Finish
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
