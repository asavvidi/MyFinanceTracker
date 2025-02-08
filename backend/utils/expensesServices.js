async function getExpenses(req, res, next, Model) {
  const expenses = await Model.findAll();
  if (!expenses || !expenses.length)
    return res.status(404).send({ message: "Expenses not found or empty" });
  return res
    .status(201)
    .send({ message: "Retrieve expenses succesfully ", data: expenses });
}

async function addExpense(req, res, next, Model) {
  const { amount, category, month, year } = req.body;
  const user_id = req.user.id;
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });

  const newExpense = await Model.create({
    user_id,
    amount,
    category,
    month,
    year,
  });
  if (!newExpense)
    return res.status(500).send({ message: "Error adding expense" });
  return res
    .status(201)
    .send({ message: "Expense add succesfully", data: newExpense });
}

async function deleteExpense(req, res, next, Model) {
  const { id } = req.body;
  const response = await Model.destroy({ where: { id } });
  if (!response)
    return res.status(404).send({ message: "Error deleting expense" });
  return res.status(200).send({ message: "Expense deleted succesfully" });
}

const services = { getExpenses, addExpense, deleteExpense };
export { services };
