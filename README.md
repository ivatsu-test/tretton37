# tretton37

[Live link](https://tretton37.netlify.app/)

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

Usually I am not strictly follow the architecture and adapt it to the project. As a rule, I have `redux/` folder which has all the state-related utilities.

I like to decompose App to the smallest components possible and follow the structure when `components` and `containers`(container components) separated, but not sure whether I will be able to show it in full here.

Usually I do not use common `.css` for all the components, but due to the time limit and not being sure whether I will do any complex styling in here, I use single `.css` for all the components (at least for now). In general, I prefer having css modules files tied with a specific component, but looks there's no such support with TypeScript project, and I have no time playing around here.

## Motivation and reasoning of installed packages

I use Husky as Git hooks to setup pre-commit scripts that will execute the needed checks and dismiss/discard the commit in case if those checks fail.

I use ESLint to lint the code and enforce the code style throughout the project to eliminate any battles around `spaces`, `tabs` or indentation size.

I use commitlint (along with the Git Hooks) to provide better description and meaning to the commit messages.

I use Axios as an HTTP client because of the huge community over there, popularity, easiness in use.

I use Redux to manage the SPA's state, because it has huge popularity, it's lightweight, predictable. I use Thunk Middleware to handle requests and separate UI from making the request on their own. I think of it as a layer between UI and business logic, so that it's predictable that UI can just dispatch a needed action which will handle all the other stuff.

I use React Router because that is simple, but yet powerful package to handle routing in the SPA. Also, the important thing - it's popular.

## List of stories selected and the features chosen

My purpose was to implement as many as possible from the task matrix, because I think it will give a better overview of my skillset.

Support for color blindness: I have used this site https://davidmathlogic.com/colorblind/ to pick the suitable colors for background.

Sort by name and office: I think this task functionally done almost in full.

Use TypeScript: I am not a TypeScript expert and haven't seriously worked with this before, so I spent a lot of time figuring out the redux typing and typing for the installed dependencies. I tried to avoid `any` for the majority of cases, but there are some that I wasn't able to figure out.

Responsive design: main layout of the app is done so that it should fit all the devices from mobile to large screens. But there's not that much implemented on this task so far.

Filter by name and office: both of features are implemented. I noticed some problems while using debounce to avoid unnecessary re-renders, but haven't had enough time to fix that. The name and office is done in a different way, just to experiment and give you a few different approaches.

Use modern CSS: the app is not that styli-sh, but I have used grid for the main layout and variables to define reused colors.

Unit tests: I have added unit tests for the utility functions I came up with during the development. I think some of them do not cover edge cases.

CI/CD: I haven't done anything extraordinary here, just setup linter, test and deploy jobs with GitHub actions. So, on push, merge these tasks are executed. Lint code with ESLint, run unit tests with Jest, deploy to Netlify by triggering it's hook.

## Build & Run

1. Create .env file:
   ```
   cp .env.sample .env
   ```
   and put there correct credentials.

2. Make sure that Node version >= 16. If you use `nvm`, run:
   ```
   nvm use
   ```
   It will pick up the version used here (if you have one already installed).

3. Install npm dependencies:
   ```
   npm i
   ```

4. Run the app:
   ```
   npm start
   ```

### Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
