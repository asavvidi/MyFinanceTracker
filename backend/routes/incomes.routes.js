import { Router } from "express";
import { incomeControllers as controller } from "../controllers/incomes.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const incomesRouter = Router();

incomesRouter.get("/", authenticateToken, controller.getIncomes);
incomesRouter.post("/", authenticateToken, controller.addIncome);
incomesRouter.delete("/:id", authenticateToken, controller.deleteIncome);

export { incomesRouter };
