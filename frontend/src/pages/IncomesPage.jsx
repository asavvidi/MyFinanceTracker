import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Select from "../components/Select";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addIncomeData } from "../services/api";

export default function IncomesPage() {
  const navigate = useNavigate();

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!month || !year || !amount || !source) return;

    const newIncome = {
      user_id: "697afb7d-21ec-4600-8b24-a868c9fd7ff8",
      amount,
      source,
      month,
      year,
    };

    try {
      const response = await addIncomeData(newIncome).catch((err) =>
        console.log(err)
      );

      console.log(response?.data);

      setAmount("");
      setSource("");
      setMonth("");
      setYear("");
    } catch (err) {
      console.log(`Error adding income`, err);
    }
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
            disabled={!amount || !month || !year || !source}
            onClick={() => navigate("/expenses")}
          >
            Add income
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
