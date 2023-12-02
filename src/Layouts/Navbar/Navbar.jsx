import React from 'react';
import Frame from "../../Assets/Frame.png";
import Basket from "../../Assets/basket.svg";
import Russia from "../../Assets/ic_russia.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar--container">
          <div className="navbar--image">
             <img src={Frame} alt="error" />
          </div>
          <div className="navbar--about">
            <ul>
              <li>Главная</li>
              <li>Меню</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="navbar--korzinka__about">
            <div className="navbar--korzinka">
              <img src={Basket} alt="error" />
              <h1>Карзина</h1>
            </div>
            <div className="navbar--language">
              <img src={Russia} alt="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar