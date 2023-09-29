import React, { useState } from "react";
import "./Header.css"
import {BiMenuAltRight} from "react-icons/bi"

const Header = () => {
  const[menuOpened, setMenuOpen] = useState(false)
  const getMenuStyles= (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return { right: !menuOpened && "-100%", top: !menuOpened && "-100%" };
    }
  }
  return (
    <section className="head-wrapper">
      <div className="flexCenter paddings innerWidth head-container">
        <img src="./logo3.png" alt="logo" height={50} />
        <div className="flexCenter head-menu"
        style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>{
          setMenuOpen((prev)=>!prev)
        }}>
        <BiMenuAltRight size={40}/>
      </div>
      </div>
      
    </section>
  );
};

export default Header;
