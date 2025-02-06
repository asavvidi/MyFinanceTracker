import { Link } from "react-router-dom";
function DataNotFound() {
  return (
    <div className="dataNot">
      <h1>
        No financial records found. Start adding your incomes and expenses!
      </h1>
      <div className="auth-link-container">
        <Link to="/incomes" className="navTo">
          Incomes
        </Link>
        <Link to="/expenses" className="navTo">
          Expenses
        </Link>
      </div>
    </div>
  );
}

export default DataNotFound;
