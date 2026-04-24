import { useNavigate } from 'react-router-dom';
import Specials from './Specials';
import { useItems } from './ItemsContext';
function Catagorey(){
const navigate=useNavigate();
const {objects}=useItems();
return(
    <div className='catagorey'>
        <div className='firstTwoObjects'>
            <h1>Specials</h1>
            <button onClick={()=>navigate("/OnlineOrdering")}>Online Menu</button>
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