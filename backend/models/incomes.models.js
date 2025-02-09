import { DataTypes } from "sequelize";
import { database } from "../database/index.js";

//Define income model
const Income = database.define(
  "Income",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 2015 },
    },
  },
  { tableName: "incomes", timestamps: true, createdAt: false, updatedAt: true }
);

export { Income };
