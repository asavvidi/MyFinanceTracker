import { Sequelize } from "sequelize";
import { config } from "../config/index.js";

// Initialize Sequelize instance using development database settings
const database = new Sequelize(config.development.postgres.options);

/**
 * Function to sync the database schema
 * The options we have is either {force:true} or {alter:true}
 * Setting { force: true } will drop existing tables and recreate them (not the best option)
 * Setting { alter: true } will update tables without losing data
 */
async function syncDatabase() {
  await database
    .sync({ force: true })
    .then(() => {
      console.log(`✅ Database synced successfully!`);
    })
    .catch((error) => console.log(`❌ Error syncing database:`, error.message));
}

export { database, syncDatabase };
