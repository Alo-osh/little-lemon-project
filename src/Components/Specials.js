import {Link} from "react-router-dom"
const Specials=({ImageSrc,dish,price,description,link})=>{
    return(
        <div className="specials">
            <Link to="/Ordering">
            <img src={ImageSrc}></img>
            <h4>{dish}<span>{price}</span></h4>
            <p>{description}</p>
            <Link to="/Ordering"><h4>{link}</h4></Link>
            </Link>

        </div>
    )
}
export default Specials;