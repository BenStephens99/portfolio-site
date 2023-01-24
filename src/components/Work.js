import React, { useState } from "react";
import './Work.css';
import PortfolioCard from "./PortfolioCard";
import octopusLaptop from "../images/octopusLaptop.png"
import jtreat from "../images/JTreat.png";
import cyber from "../images/cyber-assure.png"
import { useNavigate } from "react-router-dom";
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { MainRefContext } from "../App";


function Work() {
    const navigate = useNavigate();

    const mainRef = React.useContext(MainRefContext);

    async function goToPage(des, delay) {
        scrollIntoViewWithOffset('header', 0)
        mainRef.current.classList.remove('show-card');
        mainRef.current.classList.add('hide-card');
        await wait(delay);
        mainRef.current.classList.remove('hide-card')
        navigate(des);
        mainRef.current.classList.add('show-card');
    }


    return (
        <main ref={mainRef} className="work show-card">
            <div id="work">
                <div className='box'>
                    <div className="box-content">
                        <h2 className="title-medium">Work</h2>
                        <div className="portfolio-cards">
                            <PortfolioCard
                                title="Energy App"
                                image={octopusLaptop}
                                description={<>
                                    <p>A cross platform desktop application for monitoring and displaying real time energy consumption
                                        data from an energy providers REST API.
                                    </p>
                                </>}
                                buttonText="View Project"
                                click={() => goToPage('/energy-app', 600)}
                            />
                            <PortfolioCard
                                title="JTreat"
                                image={jtreat}
                                description={<>
                                    <p>A modern and responsive website with an integrated booking system, contact form and maps integration for a
                                        physiotherapy business.
                                    </p>
                                </>}
                                buttonText="View Website"
                                click={() => window.open('https://www.jtreat.co.uk/', '_blank').focus()}

                            />
                            <PortfolioCard
                                title="Cyber-Assure"
                                image={cyber} buttonText="View Website"
                                click={() => window.open('https://cyber-assure.co.uk/', '_blank').focus()}
                            />

                            <PortfolioCard
                                title="University Works" buttonText="Coming Soon"/>

                                
                            <PortfolioCard
                                title="Personal Projects" buttonText="Coming Soon"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Work;