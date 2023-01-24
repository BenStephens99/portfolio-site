import React from "react";

function IntroBox(props) {
    return (
        <div id="intro" className={`box ${props.delay}`}>
            <div className="box-content">
                <div>
                    <h1 className="title-large solid">Front-End</h1>
                    <h1 className="title-large shadow">Developer</h1>

                    <div className="text">
                        <p>Welcome to my website! I'm Ben, a computer science graduate from the University of Brighton, England, with a
                            passion for front-end development. </p>

                        <p>On this portfolio site, you will find a selection of my most recent projects.
                            Please feel free to take a look around and do not hesitate to contact me if you have
                            any questions or would like to discuss working together. </p>
                    </div>
                </div>
                <div className="links">
                    <button>More about me</button>
                    <button>View my Work</button>
                </div>


            </div>
        </div>
    )
}

export default IntroBox;