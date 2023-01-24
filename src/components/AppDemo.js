import React, { useState } from "react";
import './AppDemo.css'
import overviewDemo from "../images/app-demo/overview-app-demo.png";
import myHousesDemo from "../images/app-demo/myHouses-app-demo.png";
import windDemo from "../images/app-demo/wind-app-demo.png";
import millDemo from "../images/app-demo/mill-app-demo.png";
import manoDemo from "../images/app-demo/mano-app-demo.png";
import kingDemo from "../images/app-demo/king-app-demo.png";
import victDemo from "../images/app-demo/vict-app-demo.png";
import yorkDemo from "../images/app-demo/york-app-demo.png";
import highDemo from "../images/app-demo/high-app-demo.png";


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
        image: windDemo,
    },
    mill: {
        class: 'mill',
        image: millDemo,
    },
    mano: {
        class: 'mano',
        image: manoDemo,
    },
    king: {
        class: 'king',
        image: kingDemo,
    },
    vict: {
        class: 'vict',
        image: victDemo,
    },
    york: {
        class: 'york',
        image: yorkDemo,
    },
    high: {
        class: 'high',
        image: highDemo,
    },
}


function AppDemo () {
    const [demoState, setDemoState] = useState(states.overview);

    return (
        <div className="appDemo">
        <div className="demo-header">
            Interactive Demo
        </div>
        <div className="demo-navigation">
            <ul>
                <li onClick={() => setDemoState(states.overview)} className={demoState.class === 'overview' ? 'selected' : ''}>Overview</li>
                <li onClick={() => setDemoState(states.myHouses)} className={demoState.class === 'overview' ? '' : 'selected'}>My Houses</li>
                <ul className={`demo-houses-list ${demoState.class === 'overview' ? '' : 'selected'}`}>
                    <li onClick={() => setDemoState(states.wind)} className={demoState.class === 'wind' ? 'selectedHouse' : ''}>21 Windsor Road</li>
                    <li onClick={() => setDemoState(states.mill)} className={demoState.class === 'mill' ? 'selectedHouse' : ''}>88 Mill Lane</li>
                    <li onClick={() => setDemoState(states.mano)} className={demoState.class === 'mano' ? 'selectedHouse' : ''}>117 Manor Road</li>
                    <li onClick={() => setDemoState(states.king)} className={demoState.class === 'king' ? 'selectedHouse' : ''}>13 Kings Road</li>
                    <li onClick={() => setDemoState(states.vict)} className={demoState.class === 'vict' ? 'selectedHouse' : ''}>88 Victoria Road</li>
                    <li onClick={() => setDemoState(states.york)} className={demoState.class === 'york' ? 'selectedHouse' : ''}>3 York Road</li>
                    <li onClick={() => setDemoState(states.high)} className={demoState.class === 'high' ? 'selectedHouse' : ''}>86 Highfield Road</li>
                </ul>
            </ul>
        </div>
        <div className="demo-main">
            <img src={demoState.image} alt="Demo version of application" />
        </div>
    </div>
    )
} 

export default AppDemo;