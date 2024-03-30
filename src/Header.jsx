import React from "react";
import logo from './assets/Screenshot_2022-08-03-18-21-18-67_a63b0f8076346d26cbdc1b971a1da2a7.jpg';
const Header=()=>{
    return(
        <>
        <div className="header" >
        <img src={logo} alt="logo" width='70' height = '70'/>
        <h1>Ram Notes</h1>
        </div>
        </>
    )
}
export default Header;