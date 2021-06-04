import React from 'react'
import "../assets/styles/Components/Header.scss"
import logo from "../../src/assets/static/React-video.png"
import userIcon from "../../src/assets/static/user-icon.png"
export default function Header() {
    return (
        <>
            <header className="header">
                <img className="header__img" src={logo} alt="React Video"/>
                <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="User-Icon"/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
                </div>
            </header>
        </>
    )
}
