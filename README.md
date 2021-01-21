# Project

This project built with:
- create-react-app
- React
- Typescript
- Redux
- React Router
- Sass
- Bootstrap v5

## Structures

```
-- src
--- clients // includes data fetching services eg. REST, file, etc
--- components // common re-useable components
--- hooks // common re-useable functions for component
--- layouts // container components for html structure
--- pages // components with routes
--- store // redux related stuffs
--- styles // high level css for whole application
```

## Clients

The application supports simple switching of data fetching client. Currently consists of:
- MockClient - Will load data from static json files under `./mocks` folder.
- RestClient - Not implemented, meant for HTTP Rest api.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Start scripts able to run with mock client by using `MOCK=true` arguments.

```
MOCK=true npm start

true - MockClient
false - RestClient
```
### `npm test`

Launches the test runner in the interactive watch mode.

Test also supports `MOCK` arguments.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

All the static json under `./mocks` folder will be bundled and includes in `js` folder.
