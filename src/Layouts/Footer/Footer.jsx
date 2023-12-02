import React from 'react';
import Frame from "../../Assets/Frame.png";
import Russia from "../../Assets/ic_russia.svg";
import Vectortwo from "../../Assets/Vectortwo.svg";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer--container">
            <div className="footer--image">
              <img src={Frame} alt="error" />
            </div>
            <div className="footer--about">
              <ul>
                <li>Главная</li>
                <li>Меню</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="footer--korzinka__about">
              <div className="footer--language">
                <img src={Russia} alt="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__two">
        <div className="container">
          <div className="footer--two__container">
            <p>Copyright © 2022 sapid</p>
            <div className="footer--image__two">
              <img src={Vectortwo} alt="error" />
            </div>
            <p>Сайт создан<span>Teamwork</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;