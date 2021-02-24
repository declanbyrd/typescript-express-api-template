import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 5000,
  auth: {
    issuer: process.env.AUTH_ISSUER || 'localhost',
    audience: process.env.AUTH_AUDIENCE || 'http://localhost:5000',
  },
  database: {
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'postgres',
    port: parseInt(process.env.DB_PORT as string) || 5432,
  },
};

export default baseConfig;
