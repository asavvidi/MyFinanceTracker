import { User } from "../models/users.models.js";

async function getIncomes(req, res, next, Model) {
  const userId = req.user.id;

  const incomes = await Model.findAll({ where: { user_id: userId } });
  if (!incomes || incomes.length === 0)
    return res.status(404).send({ message: "Incomes are empty!" });
  return res
    .status(201)
    .send({ message: "Retrieve incomes succesfully", data: incomes });
}

async function addIncome(req, res, next, Model) {
  const { amount, source, month, year } = req.body;
  const user_id = req.user.id;
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });

  /*const user = await User.findOne({ where: { id: user_id } });
  if (!user) return res.status(404).send({ message: "User not found" });*/

  const newIncome = await Model.create({
    user_id,
    amount,
    source,
    month,
    year,
  });
  if (!newIncome)
    return res.status(500).send({ message: "Error adding income" });
  return res
    .status(201)
    .send({ message: "Income add succesfully", data: newIncome });
}

async function deleteIncome(req, res, next, Model) {
  const { id } = req.params;

  const response = await Model.destroy({ where: { id } });
  if (!response)
    return res.status(404).send({ message: "Error deleting income" });
  return res.status(200).send({ message: "Income deleted succesfully" });
}

const services = { getIncomes, addIncome, deleteIncome };
export { services };
