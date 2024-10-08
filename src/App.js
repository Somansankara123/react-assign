import React ,{lazy, useEffect, useState}from 'react';
import  ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import { Suspense } from 'react';
import UserContext from './constant/userContext';
import { setuid } from 'process';
import { data } from 'autoprefixer';
import { Provider } from 'react-redux';
import appStore from './constant/appStore';
import Cart from './components/Cart';
//import Grocery from './components/Grocery';
const Grocery=lazy(()=> import("./components/Grocery"))

const Applayout=()=>{
    const[userName,setUserName]=useState()
useEffect(()=>{
    const data={
        name:""
}
  setUserName(data.name)  
},[])
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loginUser:userName, setUserName}}>
        <div className="app">
        <Header />
        <Outlet />
    </div>
    
    </UserContext.Provider>
    </Provider>
    )
}
const approuter= createBrowserRouter(
     [
        {
            path:"/",
            element:<Applayout/>,
            children:[
                {
                    path:'/',
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About />
                },
                {
                    path:"/contact",
                    element:<Contact />
                },{
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu/>
                },{
                    path:"/grocery",
                    element:<Suspense fallback={
                        
                            <h1>loading</h1>
                        
                    }><Grocery/></Suspense>
                },{
                    path:"/cart",
                    element:<Cart/>
                }
            ],
            errorElement: <Error/>
        }
       
    ]
)    

    

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter}/>)