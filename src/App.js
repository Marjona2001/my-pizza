import React, { useState } from "react";
import Navbar from "./Layouts/Navbar/Navbar";
import Footer from "./Layouts/Footer/Footer";
import SwiperSlideComponent from "./Components/Swiper/Swiper";
import Main_two from "./Components/MainTwo/MainTwo";
import Food from "./Assets/Food.png";
import "./App.css";
import TrashModal from "./Components/TrashModal/TrashModal";
function App() {
  const [trashModalVisible, setTrashModalVisible] = useState(false);
  const data = [
    {
      id: 1,
      image: Food,
      title: "Саб с говядиной",
      description:
        "Сочная говядина гриль, кольца свежего красного лука, соус 'барбекю' с дымком в удлиненной пышной булочке",
      old_price: 12,
      price: 10,
    },
    {
      id: 2,
      image: Food,
      title: "Саб с говядиной",
      description:
        "Сочная говядина гриль, кольца свежего красного лука, соус 'барбекю' с дымком в удлиненной пышной булочке",
      old_price: 12,
      price: 12,
    },
    {
      id: 3,
      image: Food,
      title: "Саб с говядиной",
      description:
        "Сочная говядина гриль, кольца свежего красного лука, соус  'барбекю' с дымком в удлиненной пышной булочке",
      old_price: 12,
      price: 15,
    },
    {
      id: 3,
      image: Food,
      title: "Саб с говядиной",
      description:
        "Сочная говядина гриль, кольца свежего красного лука, соус  'барбекю' с дымком в удлиненной пышной булочке",
      old_price: 12,
      price: 15,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <SwiperSlideComponent />
      <Main_two data={data} />
      <Footer />
      {/* {trashModalVisible ?  : ""} */}

      <div className={`trash-modal ${trashModalVisible && "active"}`}>
        <TrashModal />
      </div>
    </div>
  );
}

export default App;
