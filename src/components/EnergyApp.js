import React from "react";
import { useNavigate } from "react-router-dom";
import './EnergyApp.css';
import './Work.css'
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { MainRefContext } from "../App";
import AppDemo from "./AppDemo.js";
import github from "../images/github.svg"


function EnergyApp() {

    const mainRef = React.useContext(MainRefContext);


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
                    <div className="text">
                        <h2 className="title-medium">Energy Consumption</h2>
                        <h2 className="title-medium shadow">Monitor</h2>
                    </div>

                    <div className="text">
                        <p>I devleoped this application to allow users to view energy consumption data and prices for
                            specified properties from an energy provider's REST API. The data is displayed in a user-friendly
                            format using graphical representations and tables.</p>

                        <p>Users are able to add and remove properties, making use of Node's file system to ensure changes are saved, as well
                            being able to select custom time frames to view data between.
                        </p>

                        <p>API requests made using asynchronous Ajax calls to ensure the application remains responsive while waiting for data
                            and and means it is able to handle many properties by making multilple API calls at once.</p>

                        <p>Use the side navigation below to look around the demo.</p>

                    </div>
                    <AppDemo />

                    <div className="text">
                        <p>Graphs created using the Chart.js Libary</p>

                        <p>Developed using the Electron framework to allow cross platform compatibility.</p>

                        <p>Take a look at this project on github</p>

                        <a className="svg" href="https://github.com/BenStephens99/OctopusAppV2" target="_blank" rel="noreferrer"><img src={github} alt="LinkedIn" /></a>

                    </div>


                    <button onClick={() => goToPage('/work', 600)}>Back</button>
                </div>
            </div>
        </main>
    )
}

export default EnergyApp;