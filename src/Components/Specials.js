
const Specials=({ImageSrc,dish,price,description,link})=>{
    return(
        <div className="specials">
            <a href="#online">
            <img src={ImageSrc}></img>
            <h4>{dish}<span>{price}</span></h4>
            <p>{description}</p>
            <h4>{link}</h4>
            </a>

        </div>
    )
}
export default Specials;