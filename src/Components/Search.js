import React from "react";
import "../assets/styles/Components/Search.scss";
import classNames from "classnames"
export default function Search({isHome}) {
    const inputStyle = classNames('input', {
        isHome,
    })
    return (
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" className={inputStyle} placeholder="Buscar..." />
      </section>
  );
}
