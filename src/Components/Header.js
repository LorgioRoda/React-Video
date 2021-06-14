import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //Link
import "../assets/styles/Components/Header.scss";
import logo from "../../src/assets/static/React-video.png";
import userIcon from "../../src/assets/static/user-icon.png";
export default function Header() {
  return (
      <header className="header">
        <Link to="/">
          <img className="header__img" src={logo} alt="React Video" />
        </Link>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={userIcon} alt="User-Icon" />
            <p>Perfil</p>
          </div>
          <ul>
            <Link>
              <li>Cuenta</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/">
              <li>Cerrar Sesión</li>
            </Link>
          </ul>
        </div>
      </header>
  );
}
