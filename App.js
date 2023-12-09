import React from 'react';
import  ReactDOM  from "react-dom/client";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className='logo'
            src="https://tse3.mm.bing.net/th?id=OIP.xkZoYbIt45PWqxHWCNpIKAHaJU&pid=Api&P=0&h=180"
            />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li> Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
};
const Restaurant =()=>{
    return (
        <div className="res-list" style={{backgroundColor:"0f0f0f"}}>
        
            <img className='res-logo'
             alt="res-logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7139719793bebb18d020baa9d88f3431'
            />
            <h3> Grilled Hut</h3>
            <h4> Biryani North-Indian</h4>
            <h4> 4.5 STARS</h4>
            <h5>38 MINS</h5>
        </div>
        
    )
}
const Body =()=>(
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
        </div>

    </div>
)
const Applayout=()=>{
    return (<div className="app">
        <Header/>
        <Body/>
    </div>)
}
const Title=()=>(
    <h1 className='head' tabIndex="5">This is Title component</h1>

);
const Heading=()=>{
    <div id='container'>
        <Title/>
        <h1 className='heading'>This is heading component</h1>
    </div>
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)