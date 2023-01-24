import React from "react";
import { MainRefContext } from "../App";


function About() {
    const mainRef = React.useContext(MainRefContext);

    return (
        <div>
            <main ref={mainRef} className="aboutMe show-card">
                <div className='box'>
                    <div className="box-content">
                        <h2 className="title-medium">About me</h2>
                        <div className="text"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;