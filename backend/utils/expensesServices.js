async function getExpenses(req, res, next, Model) {
  const expenses = await Model.findAll();
  if (!expenses || !expenses.length)
    return res.status(204).send({ message: "Expenses not found or empty" });
  return res
    .status(201)
    .send({ message: "Retrieve expenses succesfully ", data: expenses });
}

async function addExpense(req, res, next, Model) {
  const { user_id, amount, category, month, year } = req.body;
  if (!user_id) return res.status(400).send({ message: "user id is required" });

  const newExpense = await Model.create({
    user_id,
    amount,
    category,
    month,
    year,
  });
  if (!newExpense)
    return res.status(404).send({ message: "Error adding expense" });
  return res
    .status(201)
    .send({ message: "Income add succesfully", data: newExpense });
}

const services = { getExpenses, addExpense };
export { services };
