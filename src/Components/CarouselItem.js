import React from "react";
import "../assets/styles/Components/CarouselItem.scss";
import Play from "../assets/static/play-icon.png"
import Plus from "../assets/static/plus-icon.png"

export default function CarouselItem() {
  return (
      <div className="carousel-item">
        <img
          className="carousel-item__img"
          src="https://images-na.ssl-images-amazon.com/images/I/81-6K6AdkCL._AC_SL1500_.jpg"
          alt=""
        />
        <div className="carousel-item__details">
          <div>
            <img
              className="carousel-item__details--img"
              src={Play}
              alt="Play Icon"
            />
            <img
              className="carousel-item__details--img"
              src={Plus}
              alt="Plus Icon"
            />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">
            2019 16+ 114 minutos
          </p>
        </div>
      </div>
  );
}
