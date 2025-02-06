import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <Header />
      <div className="auth-container">
        <h2 className="highlight">Login</h2>
        <form>
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />

          <Button className="subButton" onClick={() => navigate("/incomes")}>
            Submit
          </Button>
        </form>
        <div className="login-options">
          <Link to="" className="navL">
            Do you forgot you password?
          </Link>
          <Link to="/register" className="navL">
            Do you want to register?
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
