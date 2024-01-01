import { useDispatch } from "react-redux"
import { RES_URL } from "../constant/utildata"
import { addItems } from "../constant/cartslice"
const ItemList=({items})=>{
    const dispatch=useDispatch()
    const HandleClick=(item)=>{
        
        dispatch(addItems(item))
    }
    return(
        <div>
            
            {items.map((item)=>(
                <div
                data-testid="food-items"
                key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border b-2 text-left flex justify-between"
                
                > 
                    
                        <div className="w-9/12">
                   <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>-₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100} </span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                
                <div className="W-3/12 p-4">
                        <div className="absolute">
                        <button className="p-1 mx-5 rounded-lg bg-white text-lime-600shadow-lg"
                           onClick={()=>HandleClick(item)}
                         >ADD+</button>
                        </div>
                        <img className="w-24"src={RES_URL+item.card.info.imageId} ></img> 
                </div>
                </div>
            ))}
        
            
        </div>
    )
}
export default ItemList