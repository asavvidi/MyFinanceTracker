import { useState } from "react";
import { myMonths, myYears } from "../myData";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Select from "../components/Select";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function IncomesPage({ onAddIncome, incomes }) {
  const navigate = useNavigate();
  const months = myMonths;
  const years = myYears;

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!month || !year || !amount || !source) return;
    const id = crypto.randomUUID();
    const newIncome = {
      id,
      amount,
      source,
      month,
      year,
    };

    onAddIncome(newIncome);

    setAmount("");
    setSource("");
    setMonth("");
    setYear("");
  }

  return (
    <div className="incomes">
      <Header />
      <div className="logistics">
        <h2 className="highlight">Add incomes</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <InputField
              placeholder="Enter the amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Select a Source"
            >
              <option>Salary</option>
              <option>Part-time Job</option>
              <option>Investment</option>
              <option>Capital gains</option>
              <option>Consulting</option>
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
          <Button
            className="subButton"
            disabled={!amount || !month || !year || !source}
            onClick={() => navigate("/finance")}
          >
            Add income
          </Button>
        </Form>
        <div className="btn">
          <Link className="navTo" to="/finance">
            Finish
          </Link>
        </div>
        {incomes?.map((income) => {
          return (
            <div key={income?.id}>
              <span>{income?.amount} </span>
              <span>{income?.month} </span>
              <span>{income?.year} </span>
              <span>{income?.source} </span>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
