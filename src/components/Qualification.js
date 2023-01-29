import React from "react";

function Qualification (props) {

    return (
        <div className="qualification">
        <h3>{props.title}</h3>
        <div className="grade">
            <p>{props.issuer}</p>
            <p>{props.time}</p>
        </div>
    </div>
    )

}

export default Qualification;