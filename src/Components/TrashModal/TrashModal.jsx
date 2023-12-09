import React from "react";
import Pizza from "../../Assets/Rectangle3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import "./TrashModal.css";

function TrashModal() {
  return (
    <div className="trash">
      <div className="trash--modal__inner">
        <div className="trash--karzinka">
          <h1>Карзина</h1>
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className="trash--cards">
          <div className="trash--cards__inner">
            <img src={Pizza} alt="error" />
            <div className="cards--about">
              <div className="cards--title">
                <p>Саб с говядиной</p>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <div className="cards--about__inner">
                <p>9 000 сум</p>
                <div className="cards--count">
                  <button>-</button>
                  <span>99</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="trash--cards__inner">
            <img src={Pizza} alt="error" />
            <div className="cards--about">
              <div className="cards--title">
                <p>Саб с говядиной</p>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <div className="cards--about__inner">
                <p>9 000 сум</p>
                <div className="cards--count">
                  <button>-</button>
                  <span>99</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="trash--cards__inner">
            <img src={Pizza} alt="error" />
            <div className="cards--about">
              <div className="cards--title">
                <p>Саб с говядиной</p>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <div className="cards--about__inner">
                <p>9 000 сум</p>
                <div className="cards--count">
                  <button>-</button>
                  <span>99</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all--orders">
        <div className="prices">
          <h1>Всего</h1>
          <div className="old-price">
            <p>27 000 сум</p>
            <span>28 000 сум</span>
          </div>
        </div>
        <button>Заказать</button>
      </div>
    </div>
  );
}

export default TrashModal;
