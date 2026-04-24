import { createContext,useContext } from "react";
const itemsContext=createContext(undefined);
export const ItemsProvider=({children})=>{
    const objects=[
        {
        getImgSrc:() => require('../images/GreekSalad.png'),
        dish:"Greek salad",
        id:"1",
        price:"$12.99",
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        link:"Order Delivery 🚴",
    }
    ,
    {
        getImgSrc:()=>require('../images/Bruchetta.png'),
        dish:"Bruchetta",
        id:"2",
        price:"$5.99",
        description:"our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        link:"Order Delivery 🚴",
    }
    ,
    {
        getImgSrc:()=>require('../images/lemon dessert.jpg'),
        dish:"Lemon Dessert",
        price:"$5.00",
        id:"3",
        description:"This comes straight from grandma`s recipe book,every last ingredients has been sourced and is as authentic as can be imagined.",
        link:"Order Delivery 🚴",
    }
];

return(
 <itemsContext.Provider
 value={{objects}}>
    {children}
 </itemsContext.Provider>
);
};
export const useItems=()=>useContext(itemsContext);