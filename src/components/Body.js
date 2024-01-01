import { withPromptedLabel } from "./Restaurant";
import Restaurant from "./Restaurant";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
 import UserContext from "../constant/userContext";


const Body =()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("");
    const onlineStatus=useOnlineStatus()
    
    const{setUserName,loginUser}=useContext(UserContext)
    console.log(listOfRestaurant)
    useEffect(()=>{
        getData()
    },[])
    const getData= async ()=>{
        
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
         
            const json = await data.json();
            console.log(json)
            const listOfRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
           console.log(listOfRestaurants)
            setListOfRestaurant(listOfRestaurants);
            setFilteredRestaurant(listOfRestaurants);
        
          
    }
    if(onlineStatus===false){
        return <h1>OOPS PLEASE TURN ON YOUR INTERNET</h1>
    }
    if (listOfRestaurant.length===0) {
        return < Shimmer/>

    }
  
  return  (
    <div className='body'>
        <div className='filter flex'>
            <div className=" search m-4 p-4">
            <input type="text" className="border border-solid border-black"  value={searchText} onChange={
                    (e)=>{
                        setSearchText(e.target.value)

                    }
                } />
                <button  
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                   const filteredRestaurant= 
                   listOfRestaurant.filter((Resta)=>(
                        Resta.info.name.toLowerCase().includes(searchText.toLowerCase())
                        
                    ))
                    
                   
                    setFilteredRestaurant(filteredRestaurant)
                   }
                }
                   
                >search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100" 
                 onClick={()=>{
                    const filteredList=listOfRestaurant.filter((rest)=>
                        rest.info.avgRating>4
                        
                    )
                    
                    setFilteredRestaurant(filteredList)
                 }}
            >Top Rated Restaurant</button>

            </div>
            <div className="Search m-4 p-4 flex items-center">
                <label>UserName:</label>
                <input 
                className="border border-black p-2"
                value={loginUser}
                onChange={(e)=>setUserName(e.target.value)}
                
                ></input>
            </div>
           
        </div>
        <div className='flex flex-wrap'>
            {
                
            filteredRestaurant.map((Res) => (
                <Link key={Res.info.id}to={"/restaurants/" + Res.info.id}>
                    
                    <Restaurant  ResData={Res}/>
            
                   </Link>
              
           )) }
        </div>
         
    </div>
    )
}
export default Body;
