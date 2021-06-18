import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import "../assets/styles/Components/Player.scss";
import { getVideoSource } from "../actions/index";
import NotFound from "./NotFound";
function Player(props) {
  const { id = {} } = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0

  useLayoutEffect(()=> {
    props.getVideoSource(id)
  }, [])

    return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack() }>Back</button>
      </div>
    </div>
  ) : <NotFound/>
}
const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}
const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player) //props