import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import './EnergyApp.css';
import './Work.css'
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { MainRefContext } from "../App";
import overviewDemo from "../images/app-demo/overview-app-demo.png";
import myHousesDemo from "../images/app-demo/myHouses-app-demo.png";


function EnergyApp (){

    const mainRef = React.useContext(MainRefContext);
    
    const [demoState, setDemoState] = useState('overview');
    const navigate = useNavigate();

    async function goToPage(des, delay) {
        scrollIntoViewWithOffset('header', 0)
        mainRef.current.classList.remove('show-card');
        mainRef.current.classList.add('hide-card');
        await wait(delay);
        navigate(des);
    }

    const states = {
        overview: {
            class: 'overview',
            image: overviewDemo,
        },
        myHouses: {
            class: 'myHouses',
            image: myHousesDemo,
        },
        wind: {
            class: 'wind',
            image: overviewDemo,
        },
        mill: {
            class: 'mill',
            image: overviewDemo,
        },
        mano: {
            class: 'mano',
            image: overviewDemo,
        },
        king: {
            class: 'king',
            image: overviewDemo,
        },
        vict: {
            class: 'vict',
            image: overviewDemo,
        },
        york: {
            class: 'york',
            image: overviewDemo,
        },
        high: {
            class: 'high',
            image: overviewDemo,
        },
    }


    return (
        <main ref={mainRef} className="energyApp show-card" >
        <div id="energyApp" className={`box`}>
            <div className="box-content">
                <h2 className="title-medium">Energy Consumption</h2>
                <h2 className="title-medium shadow">Monitor</h2>
                <div className="appDemo">
                    <div className="demo-header">
                        Interactive Demo
                    </div>
                    <div className="demo-navigation">
                        <ul>
                            <li onClick={() => setDemoState(states.overview)} className={demoState.class === 'overview' ? 'selected' : ''}>Overview</li>
                            <li onClick={() => setDemoState(states.myHouses)} className={demoState.class === 'overview' ? '' : 'selected'}>My Houses</li>
                            <ul className={`demo-houses-list ${demoState.class === 'overview' ? '' : 'selected'}`}>
                                <li onClick={() => setDemoState(states.wind)} className={demoState === 'wind' ? 'selected' : ''}>21 Windsor Road</li>
                                <li onClick={() => setDemoState(states.mill)} className={demoState === 'mill' ? 'selected' : ''}>88 Mill Lane</li>
                                <li onClick={() => setDemoState(states.mano)}  className={demoState === 'mano' ? 'selected' : ''}>117 Manor Road</li>
                                <li onClick={() => setDemoState(states.king)}  className={demoState === 'king' ? 'selected' : ''}>13 Kings Road</li>
                                <li onClick={() => setDemoState(states.vict)}  className={demoState === 'vict' ? 'selected' : ''}>88 Victoria Road</li>
                                <li onClick={() => setDemoState(states.york)}  className={demoState === 'york' ? 'selected' : ''}>3 York Road</li>
                                <li onClick={() => setDemoState(states.york)}  className={demoState === 'heigh' ? 'selected' : ''}>86 Highfield Road</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="demo-main">
                        <img src={demoState.image} alt="Demo version of application"/>
                    </div>
                </div>
                <button onClick={ () => goToPage('/work', 600)}>Back</button>
            </div>
        </div>
        </main>
    )
}

export default EnergyApp;