import { User } from "../models/users.models.js";

async function getIncomes(req, res, next, Model) {
  const incomes = await Model.findAll();
  if (!incomes || incomes.length === 0)
    res.status(204).send({ message: "Incomes are empty!" });
  res
    .status(201)
    .send({ message: "Retrieve incomes succesfully", data: incomes });
}

async function addIncome(req, res, next, Model) {
  const { user_id, amount, source, month, year } = req.body;
  if (!user_id) return res.status(400).send({ message: "user id is required" });

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
    return res.status(404).send({ message: "Error adding income" });
  return res
    .status(201)
    .send({ message: "Income add succesfully", data: newIncome });
}

const services = { getIncomes, addIncome };
export { services };
