/**
 * main app component
 * @returns  jsx, javascript xml
 * jsx is like a syntactic sugar to put html directly into our js.
 */
function App(){
   //show dynamic data using jsx 
    const title =  'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id : 1, text : 'Comment one'},
        {id : 2, text : 'Comment two'},
        {id : 3, text : 'Comment three'},
    ]

    //conditionals
    const loading = false
    const showComments = true
    
    const commentBlock =  
    <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
        {
            comments.map(
                (comment, index) => {
                    return  <li key = {index}>{comment.text}</li>
                }
            )
        }
        </ul>
    </div>
    
    if(loading) return <h1>Loading...</h1>

    return  (
        // a container is returned having dynamic text and list
        <div className="container">
                <h1>{title.toUpperCase()}</h1>
                <p>{body}</p>

            {showComments &&  commentBlock}
        </div>

    )

}

//exporting the App
export default App