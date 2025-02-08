import { services } from "../utils/incomesServices.js";
import { Income } from "../models/incomes.models.js";

async function getIncomes(req, res, next) {
  const userId = req.user.id;

  const incomes = await Income.findAll({ where: { user_id: userId } });
  if (!incomes || incomes.length === 0)
    return res.status(404).send({ message: "Incomes are empty!" });
  return res
    .status(201)
    .send({ message: "Retrieve incomes succesfully", data: incomes });
}

async function addIncome(req, res, next) {
  const { amount, source, month, year } = req.body;
  const user_id = req.user.id;
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });

  const newIncome = await Income.create({
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

async function deleteIncome(req, res, next) {
  const { id } = req.params;

  const response = await Income.destroy({ where: { id } });
  if (!response)
    return res.status(404).send({ message: "Error deleting income" });
  return res.status(200).send({ message: "Income deleted succesfully" });
}
const incomeControllers = {
  getIncomes,
  addIncome,
  deleteIncome,
};

export { incomeControllers };
