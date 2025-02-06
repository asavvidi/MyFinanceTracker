import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage({ onAddUser, onIsRegister }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) return;

    const id = crypto.randomUUID();
    const newUser = {
      id,
      firstName,
      lastName,
      email,
      password,
    };
    console.log(newUser);
    onAddUser(newUser);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    onIsRegister();
  }

  return (
    <div className="register">
      <Header />
      <div className="auth-container">
        <h2 className="highlight">Register</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <InputField
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <InputField
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

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

          <Button className="subButton" onClick={() => navigate("/incomes")}>
            Submit
          </Button>
        </Form>
        <Link to="/login" className="navL">
          Already have an account?
        </Link>
      </div>
      <Footer />
    </div>
  );
}
