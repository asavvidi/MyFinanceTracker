import { Income } from "../models/incomes.models.js";

//Controller function to retrieve incomes data for a specific user
async function getIncomes(req, res, next) {
  //Extract the user id from the request object
  const user_id = req.user.id;
  // Check if user ID is available in request, otherwise return unauthorized status
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });
  //Find all the incomes based on the user_id
  const incomes = await Income.findAll({ where: { user_id: user_id } });
  //If no incomes found then return a 404 status response
  if (!incomes || incomes.length === 0)
    return res.status(404).send({ message: "Incomes are empty!" });
  //Return successful response with theretrieved income data
  return res
    .status(201)
    .send({ message: "Retrieve incomes succesfully", data: incomes });
}

//Controller function to add an new income entry
async function addIncome(req, res, next) {
  //Extract the necessary fields from the request body.
  const { amount, source, month, year } = req.body;
  const user_id = req.user.id;
  // Check if user ID is available in request, otherwise return unauthorized status
  if (!user_id) return res.status(403).send({ message: "Unauthorized" });
  // Create a new income record in the database
  const newIncome = await Income.create({
    user_id,
    amount,
    source,
    month,
    year,
  });
  //If the proccess fails then return an internal server error.
  if (!newIncome)
    return res.status(500).send({ message: "Error adding income" });
  //Return a successful response with the added income data
  return res
    .status(201)
    .send({ message: "Income add succesfully", data: newIncome });
}

//Controller function to delete an income record from the database
async function deleteIncome(req, res, next) {
  //Extract the income id from the request parameters
  const { id } = req.params;
  //Attempt to delete the record from the database
  const response = await Income.destroy({ where: { id } });
  //If the proccess fails then return an internal server error.
  if (!response)
    return res.status(500).send({ message: "Error deleting income" });
  //Return an successful response after deletion
  return res.status(200).send({ message: "Income deleted succesfully" });
}
const incomeControllers = {
  getIncomes,
  addIncome,
  deleteIncome,
};

export { incomeControllers };
