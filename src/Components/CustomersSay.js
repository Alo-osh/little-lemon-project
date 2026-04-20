function CustomersSay({Name,getRating,getUserPhoto,UserReview}){
   
    return(
        <div className="customers">
            <span>{getRating}</span>
            <img alt="userPhoto" src={getUserPhoto}></img>
            <h4>{Name}</h4>
            <p>{UserReview}</p>
        </div>
    )
}
export default CustomersSay;