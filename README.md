# TypeScript, Express, Sequelize API Template

This repo contains a template for creating Express APIs using TypeScript and storing data into any SQL database using Sequelize.

## Notable features

- Nodemon for hot-reload during development.
- Vs Code dev container to connect to a database inside a docker container during development.
- Sequelize for querying database. When migrating between sequel databases, this API doesn't need to change.
- JWT authentication and authorization.
- Written in TypeScript.

## Quick tour

The `src` folder contains all source code files for the API. Within `src` there are:

- `config/` - centralised location to handle formatting of environment variables.
- `resources/` - routers, controllers and models for APIs.
- `utils/` - authentication, database connection management and re-usable controller templates.
- `index.ts` - the entry point to the application.
- `server.ts` - Express configuration and initialisation.

## Useful commands

- `yarn dev` - Starts the development server and enables hot-reloading to restart the server when files are changed.
- `yarn build` - Uses the TypeScript compiler to output the src folder as JavaScript.
- `yarn start` - Starts the JavaScript server file created from yarn build. You will likely only need this in production.
- `yarn test` - Starts Jest and monitors unit tests for the API.

## Dev Container

This repo contains configuration files for the APIs to be developed in Visual Studio Code's remote container environment.

To run this repo inside a dev container, install the [remote containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for Visual Studio Code. Once installed, every time this repo is opened a prompt will be displayed to re-open the repo inside a container.

### Benefits of dev container:

- Postgres database connected to the API via Docker compose.
- Pre-installed Visual Studio Code extensions.
- More applications can be added to the Docker compose file to simulate production environment.

## Resources

- [Express js](https://expressjs.com/).
- [Sequelize](https://sequelize.org/master/).
- [Auth0 guide for authenticating Express APIs](https://auth0.com/docs/quickstart/backend/nodejs).
