# tretton37

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Lints the files inside `/src` folder with the ESLint applying Airbnb styles.

## `npm run prepare`

Runs installation of the Husky Git hooks, so it's not missed and then possible to run the `pre-commit` (to lint the code) and `commit-msg` (to verify the correctness of the commit message). If you want to write that the app is killing you in the commit, you should think first whether it is a `fix:` or `feat:` 😁.

## Product description

I have been working on a different branches. The `main` is the source of truth, but the others are set so, that it is seen the progress within the time, i.e. `hour-1` - means committed changes after the 1st hour, etc.

The CI is simple:
1. Just to make sure that the code linting is fine and correct, I have setup the GitHub Workflow Action that will run `npm run lint` on `push` and `pull request`.

## Thoughts behind the code design

## Motivation and reasoning of installed packages

I use Husky as Git hooks to setup pre-commit scripts that will execute the needed checks and dismiss/discard the commit in case if those checks fail.

I use ESLint to lint the code and enforce the code style throughout the project to eliminate any battles around `spaces`, `tabs` or indentation size.

I use commitlint (along with the Git Hooks) to provide better description and meaning to the commit messages.

I use Axios as an HTTP client because of the huge community over there, popularity, easiness in use.

I use Redux to manage the SPA's state, because it has huge popularity, it's lightweight, predictable. I use Thunk Middleware to handle requests and separate UI from making the request on their own. I think of it as a layer between UI and business logic, so that it's predictable that UI can just dispatch a needed action which will handle all the other stuff.

## List of stories selected and the features chosen

## Build & Run

1. Create .env file:
   ```
   cp .env.sample .env
   ```
   and put there correct credentials.

### Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
