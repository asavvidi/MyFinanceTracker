import {} from "dotenv/config";
import bunyan from "bunyan";
import { readFileSync } from "fs";
import {
  DB_DLCT,
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} from "./config.js";

const pjs = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url))
);

const { name, version } = pjs;

const getLogger = (serviceName, serviceVersion, level) =>
  bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level });

const config = {
  development: {
    name,
    version,
    serviceTimeout: 30,
    postgres: {
      options: {
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME,
        dialect: DB_DLCT,
        username: DB_USER,
        password: DB_PASS,
        //With the log when we grab actually something form the database it will give  us the sql query
        logging: (msg) => getLogger(name, version, "debug").info(msg),
      },
      client: null,
    },
    log: () => getLogger(name, version, "debug"),
  },
  production: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, "info"),
  },
  test: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, "fatal"),
  },
};

export { config };
