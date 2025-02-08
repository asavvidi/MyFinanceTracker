import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { loginUser } from "../services/api";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    const user = {
      email,
      password,
    };

    try {
      const response = await loginUser(user);
      if (!response || !response?.data) {
        console.log(`Login failed, no login data`);
        return;
      }
      console.log(response?.data?.id);
      localStorage.setItem("token", response?.data?.token);
      setEmail("");
      setPassword("");

      navigate("/incomes");
    } catch (error) {
      console.log("Error while trying to log in", error);
    }
  }

  return (
    <div className="login">
      <Header />
      <div className="auth-container">
        <h2 className="highlight">Login</h2>
        <Form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button className="subButton" type="submit">
            Submit
          </Button>
        </Form>
        <div className="login-options">
          <Link to="/register" className="navL">
            Do you want to register?
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
