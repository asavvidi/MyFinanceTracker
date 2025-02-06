import { Sequelize } from "sequelize";
import { config } from "../config/index.js";

const database = new Sequelize(config.development.postgres.options);

async function syncDatabase() {
  await database
    .sync({ force: true })
    .then(() => {
      console.log(`✅ Database synced successfully!`);
    })
    .catch((error) => console.log(`❌ Error syncing database:`, error.message));
}

export { database, syncDatabase };
