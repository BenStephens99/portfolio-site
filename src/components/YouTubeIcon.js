import React from "react";
import ytlogo from "../images/youtube.svg"

const ytstyle = {
    display: "flex",
}


function YouTubeIcon (props) {
    return (
        <a style={ytstyle} href={props.link} target="_blank" rel="noreferrer"><img  className="svg" src={ytlogo} alt="YouTube"/></a>
    )
}

export default YouTubeIcon;