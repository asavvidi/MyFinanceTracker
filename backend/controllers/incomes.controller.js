import { services } from "../utils/incomesServices.js";
import { Income } from "../models/incomes.models.js";

function getIncomes(req, res, next) {
  services.getIncomes(req, res, next, Income);
}

function addIncome(req, res, next) {
  services.addIncome(req, res, next, Income);
}
const incomeControllers = {
  getIncomes,
  addIncome,
};

export { incomeControllers };
