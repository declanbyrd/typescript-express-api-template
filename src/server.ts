import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';

import itemRouter from './resources/item/item.router';
import listRouter from './resources/list/list.router';
import userRouter from './resources/user/user.router';

import { checkJwt, checkScopes } from './utils/auth';

export const app = express();

//Hide that API is served using Express.
app.disable('x-powered-by');

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api/item', checkJwt, itemRouter);
app.use('/api/list', checkJwt, listRouter);
app.use('/api/user', checkJwt, userRouter);

export const start = async () => {
  try {
    app.listen(config.port, () =>
      console.log(`REST API on http://localhost:${config.port}/api`)
    );
  } catch (error) {
    console.error(error);
  }
};
