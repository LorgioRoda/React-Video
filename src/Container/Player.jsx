import React from "react";
import "../assets/styles/Components/Player.scss";

export default function Player(props) {
  const { id } = props.match.params
    return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack() }>Back</button>
      </div>
    </div>
  );
}
