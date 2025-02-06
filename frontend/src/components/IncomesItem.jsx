import { useState } from "react";

function IncomesItem({ income, onDelete }) {
  const [isSure, setIsSure] = useState(false);
  return (
    <div className="incomesItemCont">
      {!isSure ? (
        <>
          <p>Amount: {income.amount} $</p>
          <p>Source: {income.source}</p>
          <p>
            Date: {income.month} / {income.year}
          </p>
          {income.amount > 0 && income.amount <= 1000 && <span>😊</span>}
          {income.amount > 1000 && income.amount <= 2000 && <span>😄</span>}
          {income.amount > 2000 && <span>😁</span>}
          <span className="dltItem" onClick={() => setIsSure((curr) => !curr)}>
            ❌
          </span>
        </>
      ) : (
        <>
          <div className="sureCont">
            <h1>
              Are you sure? <span>🤔</span>
            </h1>
            <div className="sureBtnCont">
              <span className="sureBtn" onClick={() => onDelete(income.id)}>
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
    </div>
  );
}

export default IncomesItem;
