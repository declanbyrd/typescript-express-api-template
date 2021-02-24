import { start } from './server';
import { sequelize } from './utils/db';

const init = async () => {
  try {
    // Test the connection to the database
    await sequelize.authenticate();
    // Sync models to tables in database
    await sequelize.sync();
    start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

init();
