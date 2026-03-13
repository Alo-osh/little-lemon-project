import restauranfood from '../images/restauranfood.jpg'

function Headers(){
    return(
        <div>
            <header>
                <div>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>We are family owned Mediterranean restaurant in Chicago ,focused on traditional recipes served with a modern twist, using fresh ingredients and authentic flavors to create a warm and memorable dining experirnce for our guests.</p>
            <button>Reserve a table</button>
            </div>
            <div>
                <img src={restauranfood}></img>
            </div>
            </header>
        </div>
    );
}
export default Headers;