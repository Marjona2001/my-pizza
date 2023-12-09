import Frame from "../../Assets/Frame.png";
import Basket from "../../Assets/basket.svg";
import Russia from "../../Assets/ic_russia.svg";
import { Link } from "react-router-dom";
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
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <a href="#menu">Меню</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
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
  );
}

export default Navbar;

// import React from 'react';

// class Korzinka extends React.Component {
//   handleClick = () => {
//     // Bu funksiya "Карзина" bosilganda chaqiriladi
//     // Ushbu funksiya orqali kerakli harakatni bajarishingiz mumkin
//     console.log('Карзина bosildi! Kerakli harakatni bajarish uchun kodni qo\'shing');
//     // Boshqa harakatlar yoki serverga so'rov jo'natish uchun kerakli funksionalni qo'shing
//   };

//   render() {
//     return (
//       <div className="navbar--korzinka__about">
//         <div className="navbar--korzinka" onClick={this.handleClick}>
//           <img src={Basket} alt="error" />
//           <h1>Карзина</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default Korzinka;

// onClick={this.handleClick}
