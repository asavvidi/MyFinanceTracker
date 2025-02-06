function IncomesItem({ income }) {
  return (
    <div className="incomesItemCont">
      <p>Amount: {income.amount} $</p>
      <p>Source: {income.source}</p>
      <p>
        Date: {income.month} / {income.year}
      </p>
      {income.amount > 0 && income.amount <= 1000 && <span>😊</span>}
      {income.amount > 1000 && income.amount <= 2000 && <span>😄</span>}
      {income.amount > 2000 && <span>😁</span>}
      <span></span>
    </div>
  );
}

export default IncomesItem;
