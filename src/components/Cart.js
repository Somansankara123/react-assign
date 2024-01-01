import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { removeItems } from "../constant/cartslice"

const Cart=()=>{
    const dispatch=useDispatch()
    const clearcart=()=>{
        dispatch(removeItems())
    }
    const CartItems=useSelector((store)=>store.cart.items)
    return(
        <div className="font-bold m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <button className="p-2 m-2 bg-black text-white rounded-lg"onClick={clearcart}>
                 clearCart
                </button>
{(CartItems.length===0&& <h1> Cart is Empty please add items</h1>)}
                <ItemList items={CartItems}/>
            </div>

        </div>
    )
}
export default Cart