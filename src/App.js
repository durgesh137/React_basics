import Header from "./components/Header"
/**
 * main app component
 * @returns  jsx, javascript xml
 * jsx is like a syntactic sugar to put html directly into our js.
 */
function App(){
    return  (
        //remember one parent element only allowed
        //default props configured in App.js will work
        
        <>
            <Header />            
            <div className="container">
                <h1>My App</h1>
            </div>
        </>//fragement closed
    )

}

//exporting the App
export default App