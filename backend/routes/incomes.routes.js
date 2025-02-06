import { Router } from "express";
import { incomeControllers as controller } from "../controllers/incomes.controller.js";

const incomesRouter = Router();

incomesRouter.get("/", controller.getIncomes);
incomesRouter.post("/", controller.addIncome);
incomesRouter.delete("/:id", controller.deleteIncome);

export { incomesRouter };
