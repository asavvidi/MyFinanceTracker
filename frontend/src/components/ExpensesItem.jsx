import { useState } from "react";

function ExpensesItem({ expense, onDelete }) {
  const [isSure, setIsSure] = useState(false);
  return (
    <div className="expensesItemCont">
      {!isSure ? (
        <>
          <p>Amount: {expense.amount} $</p>
          <p>Category: {expense.category}</p>
          <p>
            Date: {expense.month} / {expense.year}
          </p>
          {expense.amount > 0 && expense.amount <= 1000 && <span>😔</span>}
          {expense.amount > 1000 && expense.amount <= 2000 && <span>🥲</span>}
          {expense.amount > 2000 && <span>😭</span>}
          <span className="dltItem" onClick={() => setIsSure((curr) => !curr)}>
            ❎
          </span>
        </>
      ) : (
        <>
          <div className="sureCont">
            <h1>
              Are you sure? <span>🤔</span>
            </h1>
            <div className="sureBtnCont">
              <span className="sureBtn" onClick={() => onDelete(expense.id)}>
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

export default ExpensesItem;
