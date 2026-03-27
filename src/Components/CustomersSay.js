function CustomersSay({getRating,getUserPhoto,review}){
    return(
        <div className="customers">
            <img src={getRating}></img>
            <img src={getUserPhoto}></img>
            <h4>{review}</h4>
        </div>
    )
}
export default CustomersSay;