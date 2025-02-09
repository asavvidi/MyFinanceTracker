import { database } from "../database/index.js";
//Get the datatypes to specify the datatypes that we are using
import { DataTypes } from "sequelize";

//The define takes 3 arguments, the model name, the attributes we want to add to the model and also the options for the model
//Define the user model
const User = database.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: false,
    updatedAt: true,
  }
);

export { User };
