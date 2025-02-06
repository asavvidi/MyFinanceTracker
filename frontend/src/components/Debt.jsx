function Debt({ totalIncomes, totalExpenses, totalDebt }) {
  function calculateBack(totalDebt) {
    return totalDebt > 0
      ? "linear-gradient(135deg, #4ade80, #16a34a)"
      : totalDebt < 0
      ? "linear-gradient(135deg, #f87171, #dc2626)"
      : "linear-gradient(135deg, #a3a3a3, #737373)";
  }
  return (
    <div className="debtCont" style={{ background: calculateBack(totalDebt) }}>
      <p>Total incomes: {totalIncomes} $</p>
      <p>Total expenses: {totalExpenses} $</p>
      {totalDebt > 0 ? <p>Net: {totalDebt} $ </p> : <p>Debt: {totalDebt} $</p>}
      {totalDebt > 0 ? (
        <p>Great! You have a surplus. Keep saving! 🎉</p>
      ) : totalDebt < 0 ? (
        <p>Warning! You are in debt. Consider reducing expenses. ⚠️</p>
      ) : (
        <p>You're breaking even. Try to save more! 🙂</p>
      )}
    </div>
  );
}

export default Debt;
