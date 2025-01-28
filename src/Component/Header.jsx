import React from "react";
import './Header.css'

const Header =()=>{
    return(
        <header>
            <div className="header">
                <div className="logo">
                    <h2 className="flex p-6 text-white">EHR</h2>
                    <p className="p-4 text-white">Help </p>
                </div>
                <div className="navbar">
                    <a href="" className="Signin">Sign In 🔐</a>
                </div>
            </div>
        </header>
    )
}

export default Header