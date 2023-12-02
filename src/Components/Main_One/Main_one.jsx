import React from 'react';
import Rectangle from "../../Assets/Rectangle.png";
import Rectangle2 from "../../Assets/Rectangle2.png";
import "./Main_one.css";

function Main_one() {
  return (
    <div className="main--one">
      <div className="container">
        <div className="main--one__all">
          <div className="main--one__bonus">
            <div className="main--one__present">
              <h1>10% скидки на все бургеры!</h1>
              <p>Общая сумма заказа должна быть больше или равна 70 000 сум. Предложение не распространяется на доставку. 
                Акция "Товар дня" продлится до 31.12.2022. следите за предложениями!</p>
            </div>
            <button>В меню</button>
          </div>
           <div className="main--one__images">
              <div className="main--image__one">
                <img src={Rectangle} alt="error" />
              </div>
              <div className="main--image__two">
                <img src={Rectangle2} alt="error" />
              </div>
              <span>10%</span>
              <h1>скидка</h1>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Main_one