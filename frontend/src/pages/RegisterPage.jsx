import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/api.js";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) return;

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    try {
      const response = await registerUser(newUser);
      if (!response || !response?.data) {
        console.log(`Register failed, no register data found`);
        return;
      }
      console.log(`User register:`, response?.data);

      const loginResponse = await loginUser({ email, password });
      if (loginResponse?.data?.accessToken) {
        localStorage.setItem("token", loginResponse?.data?.accessToken);
        navigate("/incomes");
      } else {
        console.log(`Failed to login after register`);
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error while trying to register user", error);
    }
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

          <Button className="subButton" type="submit">
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
