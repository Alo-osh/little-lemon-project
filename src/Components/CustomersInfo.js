import { useNavigate } from "react-router-dom";
import CustomerSay from "./CustomersSay";
const cusInfo=[
        {
        id:1,
        Name:"Sofia",
        getUserPhoto:() => require('../images/customer1.png'),
        getRating:"★★★★★",
        review:"So delicous I would like to try it again",
        },{
        id:2,
        Name:"Mario",
        getUserPhoto:() => require('../images/customer2.png'),
        getRating:"★★★★☆",
        review:"Absolutely amazing food and very fresh ingredients",
        },{
        id:3,
        Name:"Xei",
        getUserPhoto:() => require('../images/customer5.png'),
        getRating:"★★★☆☆",
        review:"The best Mediterranean meal I have ever had",
        },
        {
        id:4,
        Name:"Sarah",
        getUserPhoto:() => require('../images/customer4.png'),
        getRating:"★★★★☆",
        review:"Grate taste and perfect service i really enjoyed it",
        }
]
const CustomerInfo=()=>{
   const navigate=useNavigate();
   const handleClick=()=>{
    navigate("/Review");
   }
return(
    <div className="coco">
        {
        cusInfo.map((info)=>{
            return(
            <CustomerSay
            key={info.id}
            Name={info.Name}
            getUserPhoto={info.getUserPhoto()}
            getRating={info.getRating}
            UserReview={info.review}
            />)
        })}
        <div className="RButton">
        <button type="submit" onClick={handleClick}>Add Review</button>
        </div>
    </div>
);
}
export default CustomerInfo;