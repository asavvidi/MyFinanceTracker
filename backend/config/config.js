import {} from "dotenv/config";

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASS = process.env.DB_PASS;
const DB_DLCT = process.env.DB_DLCT;
const DB_PORT = process.env.DB_PORT;

const PORT = process.env.PORT;
const HOST = process.env.HOST;

export { HOST, PORT, DB_DLCT, DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER };
