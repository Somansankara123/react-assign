import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory=({data,showItems,setShowIndex})=>{

    
    const handleClick=()=>{
        setShowIndex()
    }
    console.log(data)
    return(
        <div>
            {/*header*/}
            <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" 
                  onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                
            </div>
            {/*header*/}
             {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategory;