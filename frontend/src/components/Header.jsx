import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1>MyFinanceTracker: Your personal finance tracker online</h1>
      <Button className="navTo" onClick={() => navigate("/")}>
        Exit
      </Button>
    </header>
  );
}
