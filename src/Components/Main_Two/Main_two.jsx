import React from 'react';
import Background from "../../Assets/background.png";
import Basket from "../../Assets/basket.svg";
import Food from "../../Assets/Food.png";
import Vectorone from "../../Assets/Vectorone.svg";
import Vectortwo from "../../Assets/Vectortwo.svg";
import Telephone from "../../Assets/telephone.svg";
import Email from "../../Assets/email.svg";
import Telegram from "../../Assets/telegram.svg";
import Bike from "../../Assets/bike.png";
import "./Main_two.css";

function Main_two() {
  return (
    <div className="main--two">
      <div className="container">
        <div className="main--two__navbar">
          <ul>
            <li>Все</li>
            <li>Лаваш</li>
            <li>Шаурма</li>
            <li>Бургеры</li>
            <li>Хот-дог</li>
            <li>Пицца</li>
            <li>Напитки</li>
          </ul>
           <button>
             <img src={Basket} alt="error" />
             <span>20 000</span>
           </button>
        </div>
      </div>

      {/* Cards */}

      <div className="main--two__cards">
        <div className="container">
          <div className="main--cards__all">
            <div className="main--cards__about">
                <div className="main--two__image">
                  <img src={Food} alt="error" />
                </div>
                <div className="main--two__about">
                  <h1>Саб с говядиной</h1>
                  <p>Сочная говядина гриль, кольца свежего красного лука,
                    соус "барбекю" с дымком в удлиненной пышной булочке</p>
                </div>
                <div className="main--two__sum">
                  <p>9 000 сум<span>10 000 сум</span></p>
                  <button>В карзинку</button>
                </div>
            </div>
            <div className="main--cards__about">
                <div className="main--two__image">
                  <img src={Food} alt="" />
                </div>
                <div className="main--two__about">
                  <h1>Саб с говядиной</h1>
                  <p>Сочная говядина гриль, кольца свежего красного лука,
                    соус "барбекю" с дымком в удлиненной пышной булочке</p>
                </div>
                <div className="main--two__sum">
                  <p>9 000 сум<span>10 000 сум</span></p>
                  <button>В карзинку</button>
                </div>
            </div>
            <div className="main--cards__about">
                <div className="main--two__image">
                  <img src={Food} alt="" />
                </div>
                <div className="main--two__about">
                  <h1>Саб с говядиной</h1>
                  <p>Сочная говядина гриль, кольца свежего красного лука,
                    соус "барбекю" с дымком в удлиненной пышной булочке</p>
                </div>
                <div className="main--two__sum">
                  <p>9 000 сум<span>10 000 сум</span></p>
                  <button>В карзинку</button>
                </div>
            </div>
            <div className="main--cards__about">
                <div className="main--two__image">
                  <img src={Food} alt="" />
                </div>
                <div className="main--two__about">
                  <h1>Саб с говядиной</h1>
                  <p>Сочная говядина гриль, кольца свежего красного лука,
                    соус "барбекю" с дымком в удлиненной пышной булочке</p>
                </div>
                <div className="main--two__sum">
                  <p>9 000 сум<span>10 000 сум</span></p>
                  <button>В карзинку</button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main--three */}

      <div className="main--three">
        <div className="container">
          <div className="main--background">
            <img src={Background} alt="error" />
          </div>
          <div className="main--three__container">
            <div className="main--three__delivery">
              <h1>Доставка по всему Ташкенту!</h1>
              <div className="main--place__one">
                <p>Г. Ташкент, Мирзо-Улугбекский р-н</p>
                <img src={Vectorone} alt="error" />
              </div>
              <div className="main--address">
                <div className="main--place__two">
                  <p>Г. Ташкент, Мирзо-Улугбекский р-н</p>
                  <img src={Vectortwo} alt="error" />
                </div>
                <div className="main--address__about">
                  <div className="main--address__contact">
                    <img src={Telephone} alt="error" />
                    <span>+998 (78) 777-20-20</span>
                  </div>
                  <div className="main--address__contact">
                    <img src={Email} alt="error" />
                    <p>support@macbro.uz</p>
                  </div>
                  <div className="main--address__contact">
                    <img src={Telegram} alt="error" />
                    <p>Г. Ташкент, Шайхонтахурский р-н, ул. Алишера Навои 27</p>
                  </div>
                </div>
              </div>
              <div className="main--place__three">
                <p>Г. Ташкент, Мирзо-Улугбекский р-н</p>
                <img src={Vectortwo} alt="error" />
              </div>
            </div>
            <div className="main--three__image">
              <img src={Bike} alt="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main_two;