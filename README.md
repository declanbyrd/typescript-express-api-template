# TypeScript, Express, Postgres API Template

This repo contains a template for creating Express APIs using TypeScript and storing data into any SQL database using Sequelize.

## `src` Folder Structure

The `src` folder contains all source code files for the API. Within `src` there are:

- `config/` - centralised location to handle formatting of environment variables.

- `resources/` - routers, controllers and models for APIs.

- `utils/` - authentication, database connection management and re-usable controller templates.

- `index.ts` - the entry point to the application.

- `server.ts` - Express configuration and initialisation.

## Dev Container

This repo contains configuration files for the APIs to be developed in Visual Studio Code's remote container environment.

To run this repo inside a dev container, install the [remote containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for Visual Studio Code. Once installed, every time this repo is opened a prompt will be displayed to re-open the repo inside a container.

### Benefits of dev container:

- Postgres database connected to the API via Docker compose.

- Pre-installed Visual Studio Code extensions.

- More applications can be added to the Docker compose file to simulate production environment.
