import Header from "./components/Header"
/**
 * main app component
 * @returns  jsx, javascript xml
 * jsx is like a syntactic sugar to put html directly into our js.
 */
function App(){
    return  (
        //remember one parent element only allowed
        //wrapping everything within a fragement and header should be first 
        <>
            <Header/>
            <div className="container">
                <h1>My App</h1>
            </div>
        </>//fragement closed
        
        
    )

}

//exporting the App
export default App