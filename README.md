# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# starting the React app
npm start

# Understanding how React is initialized
1. index.html file within public folder contains one div tag having root as id is the place where all js code is injected for front end.
2. First deleting all files present within the src folder.

# creating index.js file and inserting data to be rendered
In index.js, react and react-dom imported, further render function is used to show the data on web via main div of index.html page. 

# Working with App component
1. App.js created, using function to work with components.
2. imported in index.js, data supplied in xml syntax id ie., main app component within render function, and result shown over the webpage

# Applying strict mode, styling by using global css, index.css
1. performing few initial checks over the App using the strict mode
2. Applying css, index.css, making body data invisible.

# showing dynamic data like text, array using jsx
1. nesting result within div in app.js
2. providing unique key to each li to remove warning: Each child in a list should have a unique "key" prop
3. In arrow function, return keyword is implicit, but here return is used.