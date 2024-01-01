import useRestaurantMenu from "../constant/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

import { Link } from "react-router-dom";
const RestaurantMenu=()=>{
    const {resId}=useParams()
    const resInfo=useRestaurantMenu(resId)
    const[showIndex,setShowIndex]=useState(0)
    if (resInfo===null) return <Shimmer />
    const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = restaurantInfo ;
    
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card)
    
    // Rest of your code...
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // Check if categories is an array before using filter
    const filteredCategories = Array.isArray(categories)
      ? categories.filter((card) =>
          card?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      : [];
    
   
    

    

    return(
        <div className="text-center" >
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(",")}-{costForTwoMessage}
            </p>{
             filteredCategories.map((c,index)=>(
                <RestaurantCategory  key={c?.card?.card.title}data={c?.card?.card}showItems={index===showIndex?true:false} setShowIndex={()=> setShowIndex(index)
                }/>
             ))
            }
            
        </div>
    )
    
}
export default RestaurantMenu;