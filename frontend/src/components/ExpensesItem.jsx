function ExpensesItem({ expense }) {
  return (
    <div className="expensesItemCont">
      <p>Amount: {expense.amount} $</p>
      <p>Category: {expense.source}</p>
      <p>
        Date: {expense.month} / {expense.year}
      </p>
      {expense.amount > 0 && expense.amount <= 1000 && <span>😔</span>}
      {expense.amount > 1000 && expense.amount <= 2000 && <span>🥲</span>}
      {expense.amount > 2000 && <span>😭</span>}
      <span></span>
    </div>
  );
}

export default ExpensesItem;
