  import { HD_URL } from "../constant/utildata";
  import { Link } from "react-router-dom";
  import About from "./About";
  import Contact from "./Contact";
  import { useState,useContext} from "react";
  import UserContext from "../constant/userContext";
import { useSelector } from "react-redux";
const Header=()=>{
   const [btnReact,setBtnReact]=useState("login")
   const  user=useContext(UserContext)
   const{loginUser}=user
   const ItemCart=useSelector((store)=>store.cart.items)
    return (
        <div className="flex justify-between  bg-pink-100 shadow-lg sm:bg-yellow-100">
            <div className="logo-container">
            <img className='w-25'
            src={HD_URL}
            />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4" >

                        <Link to="/">Home</Link></li>
                    <li className="px-4" ><Link to="/About">About Us</Link></li>
                    <li  className="px-4"> <Link to="/Contact">Contact US</Link></li>
                    <li>  <Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl">
                        <Link to={'/cart'}>Cart -( {ItemCart.length} items)</Link>
                        </li>
                    <button onClick={()=>btnReact==="login" ? setBtnReact(loginUser):setBtnReact("login")}>{btnReact}</button>
                    
                </ul>

            </div>
        </div>
    )
};
export default Header;