import React from "react";
import { connect } from "react-redux";
import { getSearchVideo } from "../actions/index";
import classNames from "classnames";
import "../assets/styles/Components/Search.scss";

function Search(props) {
  const { isHome, getSearchVideo } = props;
  const inputStyle = classNames("input", {
    isHome,
  });

  const handleInput = (event) => {
    getSearchVideo(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Search..."
        onChange={handleInput}
      />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchProps = {
  getSearchVideo,
};

export default connect(mapStateToProps, mapDispatchProps)(Search);
