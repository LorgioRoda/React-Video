import React from "react";
import "../assets/styles/Components/Carousel.scss";

export default function Carousel({ children }) {
  return (
    <section className="carousel">
      <div className="carousel__container">{children}</div>
    </section>
  );
}
