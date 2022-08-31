import PropTypes from 'prop-types' //for type-checking of props

/**
 * Generating components from ES7 React/Redux/GraphQL extension
 * using rfce extension, functional component boilerplate is generated
 * _rfce extension will not import React
 */
import React from 'react' //no need to import explicitly from React 17

//catching prop as a parameter
function Header(props) {
  return (
    //here everything need to under one parent element
    //applicable for all jsx files
    <header>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
    //writing anything outside header tag, which is parent element is not allowed.
    //header will be imported in App.js
  )
}

//default one to be used when any text is not passed
Header.defaultProps = {
    text: 'Feedback UI'
}

//defining props type
Header.propTypes = {
    //to make string compulsory to be passed
    //PropTypes.string.isRequired
    text: PropTypes.string
}
export default Header