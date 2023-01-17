import React from "react";
import './IntroBox.css';

function IntroBox() {
    return (
        <div id="intro" className="box">
            <div className="box-content">
                <h1 className="title-large solid">Aspiring</h1>
                <h1 className="title-large solid">Front-End</h1>
                <h1 className="title-large shadow">Developer</h1>
                <div className="text">
                    <p>Recent Computer Science graduate from the University of Brighton.</p>
                    <p>Looking to put to use the skills I've
                        gained during my time at university, side projects and professional certificates. </p>
                </div>
            </div>
        </div>
    )
}

export default IntroBox;