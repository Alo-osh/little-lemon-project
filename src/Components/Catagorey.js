import Specials from './Specials';
    const objects=[
        {
        getImgSrc:() => require('../images/GreekSalad.png'),
        dish:"Greek salad",
        price:"$12.99",
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        link:"Order a delivery",
    }
    ,
    {
        getImgSrc:()=>require('../images/Bruchetta.png'),
        dish:"Bruchetta",
        price:"$5.99",
        description:"our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        link:"Order a delivery",
    }
    ,
    {
        getImgSrc:()=>require('../images/lemon dessert.jpg'),
        dish:"Lemon Dessert",
        price:"$5.00",
        description:"This comes straight from grandma`s recipe book,every last ingredients has been sourced and is as authentic as can be imagined.",
        link:"Order a delivery",
    }
];
function Catagorey(){
return(
    <div className='catagorey'>
        <div className='fistTwoObjects'>
            <h1>Specials</h1>
            <button>Online Menu</button>
            </div>
            <div className='dishes'>
    {objects.map((object)=>(
        <Specials
        key={object.dish}
        ImageSrc={object.getImgSrc()}
        dish={object.dish}
        price={object.price}
        description={object.description}
        link={object.link}
        />
    ))}
    </div>
</div>
);
}
export default Catagorey;