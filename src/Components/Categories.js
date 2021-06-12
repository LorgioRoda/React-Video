import React from "react";
import "../assets/styles/Components/Categories.scss";

export default function Categories({ children, title }) {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
}
