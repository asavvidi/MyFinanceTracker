import { useState } from "react";
import { myMonths, myYears } from "../myData";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Select from "../components/Select";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ExpensesPage({ onAddExpense, expenses }) {
  const months = myMonths;
  const years = myYears;

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmound] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!month || !year || !amount || !category) return;
    const id = crypto.randomUUID();
    const newExpense = {
      id,
      amount,
      category,
      month,
      year,
    };

    onAddExpense(newExpense);

    setAmound("");
    setCategory("");
    setMonth("");
    setYear("");
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
              onChange={(e) => setAmound(Number(e.target.value))}
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
              onChange={(e) => setMonth(e.target.value)}
              options={months}
            ></Select>

            <Select
              value={year}
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
              options={years}
            ></Select>
          </div>
          <Button className="subButton">Add expense</Button>
        </Form>
        <div className="btn">
          <Link className="navTo" to="/finance">
            Finish
          </Link>
        </div>
        {/*expenses?.map((expense) => {
        return (
          <div key={expense?.id}>
            <span>{expense?.amount}</span>
            <span>{expense?.month}</span>
            <span>{expense?.year}</span>
            <span>{expense?.cactegory}</span>
          </div>
        );
      })*/}
      </div>
      <Footer />
    </div>
  );
}
