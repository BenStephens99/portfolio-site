import React from "react";

function Qualification (props) {

    return (
        <div className="qualification">
        <h3>{props.title}</h3>
        <div className="grade">
            <p>{props.issuer}</p>
            <p>{props.time}</p>
        </div>
        
        <ul>
            <li>{props.bullets[0]}</li>
            <li>{props.bullets[1]}</li>
            <li>{props.bullets[2]}</li>
            <li>{props.bullets[3]}</li>
        </ul>
    </div>
    )

}

export default Qualification;