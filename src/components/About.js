import React from "react";
import { MainRefContext } from "../App";
import './About.css';
import Qualification from "./Qualification";
import me from '../images/me.jpeg'


function About() {
    const mainRef = React.useContext(MainRefContext);

    return (
        <div>
            <main ref={mainRef} className="aboutMe show-card">
                <div className='box'>
                    <div className="box-content">
                        <div className="text">
                        <h2 className="title-medium">About me</h2>
                            <p>My name is Ben and I am a recent graduate from the University of Brighton with a first-class
                                degree in Computer Science. I am excited to begin my journey as a Front-End Developer and
                                am eager to apply my skills and knowledge to create engaging and user-friendly websites
                                and web applications.</p>

                            <p>Throughout my time at university, I have had the opportunity to work on a variety of
                                projects, both individually and as part of a team. These projects have allowed me to
                                develop my skills in HTML, CSS, JavaScript, and other front-end technologies. I am also
                                well-versed in web design principles and user experience design, which I believe are crucial
                                for creating websites that are both visually appealing and easy to navigate.</p>

                            <p>On my portfolio website, you will find a selection of my most recent projects,
                                along with detailed explanations of the technologies and techniques I used to create them.
                                I am confident that my skills and experience make me a strong candidate for any Front-End Developer
                                position and I look forward to the opportunity to work with a team of talented developers to create
                                innovative and engaging websites and web applications.</p>
                        </div>

                        <div className="qualifications">

                            <div className="profile-pic">
                                <img src={me} alt="Ben"/>
                            </div>

                            <Qualification
                                title="Front-End Developer Professional Certificate"
                                issuer="Meta"
                                time="January 2023"
                                bullets={["Link to certificate"]}
                            />

                            <Qualification
                                title="Computer Science for Games BSc Hons"
                                issuer="University of Brighton"
                                time="June 2022"
                                bullets={["First Class Honours"]}
                            />

                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;