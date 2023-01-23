import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EnergyApp.css';
import './Work.css'
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { MainRefContext } from "../App";

function EnergyApp (){

    const mainRef = React.useContext(MainRefContext);
    
    const [state, setState] = useState('show-card');
    const navigate = useNavigate();

    async function goToPage(des, delay) {
        scrollIntoViewWithOffset('header', 0)
        mainRef.current.classList.remove('show-card');
        mainRef.current.classList.add('hide-card');
        await wait(delay);
        navigate(des);
    }

    return (
        <main ref={mainRef} className="energyApp show-card" >
        <div id="energyApp" className={`box`}>
            <div className="box-content">
                <h2 className="title-medium">Energy Consumption</h2>
                <h2 className="title-medium shadow">Monitor</h2>
                <button onClick={ () => goToPage('/work', 600)}>Back</button>
            </div>
        </div>
        </main>
    )
}

export default EnergyApp;