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
3. Each element in jsx version should be placed within one parent element.
4. In arrow function, return keyword is implicit, but here return is used.

# working with jsx conditionals done...
restored to normal state for creating feedback application

# creating first Component
1. create components folder within src folder to hold all the jsx files which are created.
2. For Header.jsx, or .js extension can also be used.

# passing props to component
1. props are the properties of a component, can be passed to a component
2. Whenver props is passed to a component, it needs to caught within the component.
3. The props caught as parameter within a component function.
4. Using defaultProps on component, if required props is not passed.
5. prop type for checking the type of props in react here. the prop type can be specified. For that first import the prop-types
6. If other data type is supplied to props after setting the props type, warning would occur.
7. For example, react-jsx-dev-runtime.development.js:87 Warning: Failed prop type: Invalid prop `text` of type `number` supplied to `Header`, expected `string`.
8. Typically propsTypes are not used, TypeScript is used if any specific requirement comes normally.