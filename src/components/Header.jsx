import PropTypes from 'prop-types' //for type-checking of props


import React from 'react' //no need to import explicitly from React 17

//catching prop as a parameter
//bgColor and textColor are not used just shown as an example to apply css
function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor : bgColor, 
        color: textColor
    }
  return (
    //here everything need to be under one parent element
    //applicable for all jsx files
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
    //writing anything outside header tag, which is parent element is not allowed.
    //header will be imported in App.js
  )
}

//default one to be used when any text is not passed
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor: '#ff6a'
}

//defining props type
Header.propTypes = {
    //to make string compulsory to be passed
    //PropTypes.string.isRequired
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header