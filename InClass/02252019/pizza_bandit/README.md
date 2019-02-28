## Assignment Instructions

### Step One: Create a new simple react application using create react app

    Check that you have node and npm installed
    Create a new directory to place today's work
    run: npx create-react-app pizza_bandit
    Import other items
        cd pizza_bandit
        npm install --save bootstrap
        npm install --save jquery
        npm install --save popper.js
        npm install --save mapbox-gl
        npm install --save react-mapbox-gl
    Modify the index.js and App.js files to create referecnces

### Step Two: Create a new Github Repository and use Git to create a local repository that syncs with your Github repository

    git init - THIS IS ONLY DONE ONCE PER REPOSITORY - YOU NEVER RUN THIS AGAIN
    git add -A - adds the files in this directory 
    git commit -m "a useful message describing this update here" - you do this every time you create a new update
    Create a github repository
    copy the git remote command there
    git push -u origin master - Push to the github repository

### Step Three: Create a simple Component-based form using JSX

    Create a ReactJS Component to handle input for an email
    Create a ReactJS Component to  input for a password
    Create a ReactJS Component to serve as a parent to all form elements
    Create a button for submission in the form Componet
    Create an App Component to serve as the parent for all children components

### Step Four: Introduce a event handler methods

    Create an event handlers for:
        The email input
        The password input
        The button
    Validate form input
        ensure the email is correct
        check to see that the password is 8 characters or more and has at least 1 number and one capitalized letter
    Show form input in a separate div:
        show the results from the form as JSX output in a separate DIV

### Step Five: Create a Simple React-Mapbox component

    Create a Map element with appropriate Layer and Feature children
    Obtain position using Geolocation
    Update map in the ReactJS componentDidMount lifecycle method

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify