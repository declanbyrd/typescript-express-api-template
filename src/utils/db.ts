import { Sequelize } from 'sequelize';
import config from '../config';

export const sequelize = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.password,
  {
    port: config.database.port,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);
