import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isSure, setIsSure] = useState(false);
  const token = localStorage.getItem("token");

  //Function to logout a user by removing his token from local storage and navigate him to the login
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <header className="header">
      {!isSure ? (
        <>
          <h1 onClick={!token ? () => navigate("/") : undefined}>
            MyFinanceTracker: Your personal finance tracker online
          </h1>
          {token && (
            <Button
              className="navTo"
              onClick={() => setIsSure((curr) => !curr)}
            >
              Exit
            </Button>
          )}
        </>
      ) : (
        <>
          <div className="sureCont">
            <h1>
              Are you sure? <span>🤔</span>
            </h1>
            <div className="sureBtnCont">
              <span className="sureBtn" onClick={handleLogout}>
                👍
              </span>
              <span
                className="sureBtn"
                onClick={() => setIsSure((curr) => !curr)}
              >
                👎
              </span>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
