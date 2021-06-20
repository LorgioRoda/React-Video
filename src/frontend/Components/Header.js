import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //Link
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/Components/Header.scss";
import logo from "../../src/assets/static/React-video.png";
import userIcon from "../../src/assets/static/user-icon.png";
import classNames from "classnames";
function Header(props) {
  const { user, isLogin, isRegister = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      {" "}
      <Link to="/">
        <img className="header__img" src={logo} alt="React Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User-Icon" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);