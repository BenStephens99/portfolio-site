import React from "react";
import './Work.css';
import PortfolioCard from "./PortfolioCard";
import octopusLaptop from "../images/octopusLaptop.png"
import jtreat from "../images/JTreat.png";
import cyber from "../images/cyber-assure.png"

function Work() {

    return (
        <div id="work" className="box">
            <div className="box-content">
                <h2 className="title-medium">Work</h2>
                <div className="portfolio-cards">
                    <PortfolioCard
                        title="Energy App"
                        image={octopusLaptop}
                        description={<>
                            <p>A cross platform desktop application for monitoring and displaying real time energy consumption
                                from an energy providers REST API.
                            </p>
                        </>}
                    />
                    <PortfolioCard
                        title="JTreat"
                        image={jtreat}
                        description={<>
                            <p>A modern and responsive website with an integrated booking system, contact form and maps integration for a
                                physiotherapy business.
                            </p>
                        </>}
                    />
                    <PortfolioCard title="Cyber-Assure" image={cyber} />

                    <PortfolioCard title="University Works" />
                </div>
            </div>
        </div>
    )
}

export default Work;