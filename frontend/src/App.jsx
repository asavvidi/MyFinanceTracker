import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IncomesPage from "./pages/IncomesPage";
import ExpensesPage from "./pages/ExpensesPage";
import FinancePage from "./pages/FinancePage";
import PageNotFound from "./pages/PageNotFound";
import { Navigate } from "react-router-dom";

function App() {
  function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    {
      return token ? children : <Navigate to="/login" />;
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="incomes"
          element={
            <ProtectedRoute>
              <IncomesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="expenses"
          element={
            <ProtectedRoute>
              <ExpensesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="finance"
          element={
            <ProtectedRoute>
              <FinancePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
