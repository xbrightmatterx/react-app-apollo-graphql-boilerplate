
# React Redux Babel Webpack Boilerplate WebClient

This is a boilerplate configuration for React 16+ with Redux.

Feel free to slim it down, or it can be used directly with `node-server-boilerplate-with-graphql`
- Default User is `admin@imfake.ai` with a password of `admin.mockserver` (requires `node-server-boilerplate-with-graphql` to be active for this to work)

- Gives you the ability to have Private, Auth'd access (see `PrivateRoute` component)
- Or, public page access without auth. (see `App/index.js`) for insertion points

React / Babel / Yarn / Node

* React 16+
* AirBnB style syntax and ES linting
* Prettier on precommit to verify your code style is consistent
* LESS + Entire customizability to Semantic UI Themes
* Node used to serve bundled assets (bundle.js, styles.css, imgs, fonts, etc.)
* Uses Jest for tests
* Code-splitting via `react-loadable`
* lint-watcher ```yarn run lint:watch```
* test-watcher ```yarn run test:watch```
* Auth: includes client-side validation for password/email parameters

## Directory Structure

* `package.json` - Configure dependencies
* `src/index.js` - Entrypoint into React App
* `src/config` - WebClient env vars (such as URLs for API calls for Prod/Staging/Dev)
* `src/components` - All React Components
  * `src/components/common` - shared components such as a Transition
* `src/lib/request` - Function to use for any common GET/POST/PUT request (uses Axios)
* `src/lib/constants` - Global Constants
* `src/testSetup` -  Global Test setup
* `src/styling` - Global setup for Less, Semantic UI (includes entire theming lib), and global classes
* `public/views` - Where index.ejs and other template sections live

## Install Dependencies

```
yarn install
```

## Testing & Linting

```
yarn test
yarn lint
```

Global Test Setup Files can be found in ```src/testSetup```

`setupTests.js` for any global setup, and the folder testMockData can add any mock data needed.

Any new tests should go inside of the appropriate Component/Redux folder under a folder ```__tests___```

See https://github.com/arnaudbenard/redux-mock-store to understand how you can mock Redux state.

http://airbnb.io/enzyme/ -> Mount Components and test them

REMEMBER: Any connected components will need to have a named export AS WELL as a default, if trying to just access the unconnected Component for unit tests.

You can use ```npm run lint:watch``` in a window to constantly scan for linting errors
```npm run lint``` will be called during the precommit process.

## Running in Development

To start the webpack server:

```
yarn start
```

You now have a bundle.js file being served from ```http://localhost:8080```

If you are not using localhost to talk from WebClient to Server, go to `src/config/default.js` and update the apiRoot from `http://localhost:3005` to something else.

Example: Going to ```http://localhost:8080``` in your browser should render the WebClient.

## Code-Splitting

https://github.com/jamiebuilds/react-loadable
