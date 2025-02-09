//Load environmental variables from the .env file
import {} from "dotenv/config";

//Database configuration variables
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASS = process.env.DB_PASS;
const DB_DLCT = process.env.DB_DLCT;
const DB_PORT = process.env.DB_PORT;

//Server configuration variables
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// JWT (JSON Web Token) configuration
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION;

export {
  HOST,
  PORT,
  DB_DLCT,
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
  JWT_REFRESH_EXPIRATION,
  JWT_SECRET,
};
