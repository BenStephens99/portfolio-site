import React from "react";
import './EnergyApp.css';

function EnergyApp (props){
    return (
        <div id="energyApp" className={`box ${props.state}`}>
            <div className="box-content">
                <h2 className="title-medium">Energy Consumption</h2>
                <h2 className="title-medium shadow">Monitor</h2>
                <button onClick={props.click}>Back</button>
            </div>
        </div>
    )
}

export default EnergyApp;