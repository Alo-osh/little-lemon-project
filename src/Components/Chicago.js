import Adrian from "../images/Mario and Adrian A.jpg"
import Mario from "../images/Mario and Adrian b.jpg"

function Chicago(){
    return(
        <div className="chicago">
        <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>We are family owned Mediterranean restaurant in Chicago ,focused on traditional recipes served with a modern twist, using fresh ingredients and authentic flavors to create a warm and memorable dining experirnce for our guests,Our menu is inspired by the rich culinary heritage of the Mediterranean region, offering a variety of dishes that bring comfort and freshness to every table. From hearty classics to lighter modern options, there is something for everyone to enjoy.
            </p>
            <div>
            <img className="img1" alt="Mario and Adrian A" src={Adrian}></img>
            <img className="img2" alt="Mario and Adrian B" src={Mario}></img>
            </div>
        </div>
    )
}
export default Chicago;