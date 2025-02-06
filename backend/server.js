import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import { database, syncDatabase } from "./database/index.js";
import { PORT, HOST } from "./config/config.js";
import { config } from "./config/index.js";
import { userRouter } from "./routes/user.routes.js";
import { incomesRouter } from "./routes/incomes.routes.js";
import { expensesRouter } from "./routes/expenses.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const log = config.development.log();

function connectToPostgres() {
  database
    .authenticate()
    .then(() => log.info(`Connection to database was succesfull`))
    .catch((error) =>
      log.error(`❌ Unable to connect to the database:`, error.message)
    );

  return database;
}
// syncDatabase();
connectToPostgres();
app.get("/", (req, res) => {
  res.send("Hello my friends");
});
app.use("/api/user", userRouter);
app.use("/api/incomes", incomesRouter);
app.use("/api/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${HOST}:${PORT}`);
});
