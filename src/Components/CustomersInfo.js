import CustomerSay from "./CustomersSay";
const cusInfo=[
        {
        id:1,
        getUserPhoto:() => require('../images/customer1.png'),
        getRating:()=>require('../images/star.png'),
        review:"so delicous I would like to try it again",
        },{
        id:2,
        getUserPhoto:() => require('../images/customer2.png'),
        getRating:()=>require('../images/star.png'),
        review:"so delicous I would like to try it again",
        },{
        id:3,
        getUserPhoto:() => require('../images/customer5.png'),
        getRating:()=>require('../images/star.png'),
        review:"so delicous I would like to try it again",
        },
        {
        id:4,
        getUserPhoto:() => require('../images/customer4.png'),
        getRating:()=>require('../images/star.png'),
        review:"so delicous I would like to try it again",
        }
]
const CustomerInfo=()=>{
return(
    <div className="coco">
        {
        cusInfo.map((info)=>{
            return(
            <CustomerSay
            key={info.id}
            getUserPhoto={info.getUserPhoto()}
            getRating={info.getRating()}
            review={info.review}
            />)
        })}
    </div>
);
}
export default CustomerInfo;