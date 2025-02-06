import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>
        MyFinanceTracker: Your personal finance tracker online
      </h1>
    </header>
  );
}
