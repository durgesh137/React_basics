/**
 * Generating components from ES7 React/Redux/GraphQL extension
 * using rfce extension, now React not be imported
 * _rfce extension will not import React
 */
import React from 'react' //no need to import explicitly from React 17

function Header() {
  return (
    //here everything need to under one parent element
    //applicable for all jsx files
    <header>
        <div className='container'>
            <h2>Feedback UI</h2>
        </div>
    </header>
    //writing anything outside header tag, which is parent element is not allowed.
    //header will be imported in App.js
  )
}

export default Header