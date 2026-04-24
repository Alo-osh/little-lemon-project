import {useState} from 'react'
import star from "../images/star.png"

const handleClick=()=>{
    alert("Thank you for your review")
}
const Review = () => {
    const [review,setReview]=useState();
    const [rating,setRating]=useState(0);
  return (
        <div className="UrReview">
            <div className="score">
                <label htmlFor='rating'>Your rating: </label>
                {[1,2,3,4,5].map((star)=>{
              return(
            <span id='rating' key={star} onClick={()=>setRating(star)}>{star<=rating ? "★" : "☆"}</span>)})}
            </div>
            <div className="review">
            <textarea id="review" name="review" value={review} onChange={(e)=>{setReview(e.target.value)}} placeholder="Write your review here" required></textarea>
            </div>
            <button type="submit" onClick={handleClick}>Submit</button>
        </div>
  )
}
export default Review;