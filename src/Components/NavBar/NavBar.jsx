import React from 'react';
import navImg from "../../assets/logo.png"
import dollarImg from "../../assets/10243319.png"
const NavBar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-330 mx-auto ">
            <div className="flex-1">
                <a className=" w-16 h-16 text-xl"><img src={navImg} alt="" /></a>
            </div>
            <div className="flex items-center">
                <span className="font-bold mr-2">{availableBalance} </span>
                <span > Coin </span>
                <img className="w-10 h-10" src={dollarImg} alt="" />
            </div>
        </div>
    );
};

export default NavBar;