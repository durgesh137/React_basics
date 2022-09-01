import { useState } from "react"

function FeedbackItem() {
    //desctructring the state data in array
    const [rating,setRating] = useState(7)
    const [text, setText] = useState('This is an example of feedback item')
    const handleClick = () => {
        //prev keeps hold of previous value of rating here
            setRating((prev) => {
                console.log(prev);
                return prev + 1
            })
    }
  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <div onClick={handleClick}>Click</div>
    </div>
  )
}

export default FeedbackItem