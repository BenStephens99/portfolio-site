import React from "react";
import arrow from '../images/arrow.svg'
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { useNavigate } from "react-router-dom";
import { MainRefContext } from "../App";
import { HomeDelay } from "../App";


function IntroBox(props) {

    const navigate = useNavigate();
    const mainRef = React.useContext(MainRefContext);
    const homeDelay = React.useContext(HomeDelay);

    async function goToPage(des, delay) {
        homeDelay.turnOffDelay();
        scrollIntoViewWithOffset('mainContainer', 100)
        mainRef.current.classList.remove('show-card');
        mainRef.current.classList.add('hide-card');
        await wait(delay);
        navigate(des);
    }

    return (
        <div id="intro" className={`box ${props.delay}`}>
            <div className="box-content">
                <div>
                    <h1 className="title-large solid">Front-End</h1>
                    <h1 className="title-large shadow">Developer</h1>

                    <div className="text">
                        <p>Welcome to my website! I'm Ben, a computer science graduate from the University of Brighton, England, with a
                            passion for front-end development. </p>

                        <p>On this site, you will find a selection of my most recent projects.
                            Please feel free to take a look around and do not hesitate to contact me if you have
                            any questions or would like to discuss working together. </p>
                    </div>
                    <div className="underline-on-hover" onClick={() => goToPage('./about', 1000)}>
                        <div>More about me</div>
                        <img className="svg" src={arrow} alt="" />
                    </div>
                </div>
                <div className="links">
                    <button onClick={() => goToPage('/work', 1000)}>View My Work</button>
                </div>


            </div>
        </div>
    )
}

export default IntroBox;