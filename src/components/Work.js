import React from "react";
import './Work.css';
import PortfolioCard from "./PortfolioCard";
import octopusLaptop from "../images/octopusLaptop.png"
import jtreat from "../images/JTreat.png";
import cyber from "../images/cyber-assure.png"
import universityPortfolioImage from '../images/NPCSystem.png'
import piapp from '../images/piapp.png'
import { useNavigate } from "react-router-dom";
import { wait } from "./functions";
import { MainRefContext } from "../App";
import { scrollIntoViewWithOffset } from "./functions";



function Work() {
    const navigate = useNavigate();

    const mainRef = React.useContext(MainRefContext);
    const portfolioCardsRef = React.useRef(null)

    const arrowPressed = () => {
        portfolioCardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    async function goToPage(des, delay) {
        scrollIntoViewWithOffset('mainContainer', 100)
        mainRef.current.classList.remove('show-card');
        mainRef.current.classList.add('hide-card');
        await wait(delay);
        navigate(des);
    }


    return (
        <main ref={mainRef} className="work show-card">
            <div className='box'>
                <div className="box-content">
                    <div className="portfolio-intro">
                        <h2 className="title-medium">Portfolio</h2>
                        <div className="text">
                            <p>Welcome to my portfolio section! Here, you will find a collection of my work, including projects completed for clients,
                                assignments completed during my time at university, and personal projects that showcase my skills and interests. </p>

                            <p>Each project is accompanied by a brief description and images, so you can get a sense of my process and the final product. </p>

                            <p>I am constantly updating my portfolio with new and exciting projects, so please check back often to see my latest work. Thank you for
                                taking the time to visit, and I hope you enjoy what you see.</p>
                        </div>
                        <span onClick={arrowPressed} className={`down-arrow`}>V</span>
                    </div>

                    <div ref={portfolioCardsRef} className="portfolio-cards">
                        <PortfolioCard
                            title="Energy App"
                            type="Desktop Application"
                            image={octopusLaptop}
                            description={<>
                                <p>A cross-platform desktop application for monitoring and displaying real time energy consumption
                                    data from an energy providers REST API.
                                </p>
                            </>}
                            buttonText="View Project"
                            click={() => goToPage('/work/energy-app', 1000)}
                        />


                        <PortfolioCard
                            title="Home Device Controller"
                            type="Personal Project"
                            description={<>
                                <p>Node.js Application to control home devices with asyncronous javascript fetch requests to
                                    smart plugs and speakers deployed on a raspberry pi.
                                </p>
                            </>}
                            buttonText="Vist GitHub Repo"
                            image={piapp}
                            click={() => window.open('https://github.com/BenStephens99/pi-app-v2', '_blank')}
                        />
                        
                        <PortfolioCard
                            title="JTreat"
                            type="Website"
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
                            type="Website"
                            description={<p>A simple but clear, and responsive site for a cyber security company.</p>}
                            image={cyber}
                            buttonText="View Website"
                            click={() => window.open('https://cyber-assure.co.uk/', '_blank').focus()}
                        />

                        <PortfolioCard
                            title="University Works"
                            type="Portfolio"
                            description={<>
                                <p>A selection of work completed during my time at university.
                                </p>
                            </>}
                            buttonText="Vist University Portfolio"
                            image={universityPortfolioImage}
                            click={() => window.open('https://ben.stephens.uk.net/old/portfolio.html', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Work;