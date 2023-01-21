import React, { useState } from "react";
import './Work.css';
import PortfolioCard from "./PortfolioCard";
import octopusLaptop from "../images/octopusLaptop.png"
import jtreat from "../images/JTreat.png";
import cyber from "../images/cyber-assure.png"
import EnergyApp from "./EnergyApp";

function Work() {
    const [state, setState] = useState('menu')

    function toggleState() {
        state === 'menu' ? setState('energyApp') : setState('menu')
    }

    return (
        <div id="work">
            <div className={`box menu ${state === 'menu' ? 'show-card' : 'hide-card'}`}>
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
                            click={toggleState}
                            buttonText="View Project"
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

                        />
                        <PortfolioCard
                            title="Cyber-Assure" image={cyber} buttonText="View Website" />

                        <PortfolioCard
                            title="University Works" />
                    </div>
                </div>
            </div>
            <EnergyApp state={`${state === 'energyApp' ? 'show-card' : 'hide-card'}`} click={toggleState}/>
        </div>
    )
}

export default Work;