import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <Header />

      <h1 className="homeH1">
        Take control of your finances.
        <br />
        MyFinanceTracker makes it effortless.
      </h1>
      <h2 className="homeH2">
        Track your income and expenses with ease. Gain insights into your
        spending habits through interactive charts. Stay on top of your
        financial health—all in one place.
      </h2>
      <div className="auth-link-container">
        <Link to="/register" className="navTo">
          Register
        </Link>
        <Link to="/login" className="navTo">
          Login
        </Link>
        <Link to="/incomes" className="navTo">
          Incomes
        </Link>
        <Link to="/expenses" className="navTo">
          Expenses
        </Link>
        <Link to="/finance" className="navTo">
          Finance
        </Link>
      </div>

      <Footer />
    </div>
  );
}
