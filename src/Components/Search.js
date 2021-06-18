import React, {useState} from "react";
import "../assets/styles/Components/Search.scss";
import classNames from "classnames"
export default function Search({isHome, props}) {
    const inputStyle = classNames('input', {
        isHome,
    })
    const [search, setSearch] = useState('');

    return (
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" className={inputStyle} placeholder="Search..." onChange={ e => setSearch(e.target.value)} />
      </section>
  );
}
