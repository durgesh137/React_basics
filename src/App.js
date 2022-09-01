import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
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
                <FeedbackItem/>
            </div>
        </>//fragement closed
    )

}

//exporting the App
export default App