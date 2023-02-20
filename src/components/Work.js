import React from "react";
import './Work.css';
import PortfolioCard from "./PortfolioCard";
import octopusLaptop from "../images/octopusLaptop.png"
import jtreat from "../images/JTreat.png";
import cyber from "../images/cyber-assure.png"
import universityPortfolioImage from '../images/oldwebsite.png'
import piapp from '../images/piapp.png'
import agentEscape from '../images/agentEscape.jpg'
import houseEscape from '../images/houseEscape.jpg'
import fitnessApp from '../images/FitnessApp.jpg'
import jumpGame from '../images/jumpGame.png'
import pong from '../images/pong.jpg'
import npcSystem from '../images/NPCSystem.png'
import inventorySystem from '../images/inventorySystem.png'
import { useNavigate } from "react-router-dom";
import { wait } from "./functions";
import { MainRefContext } from "../App";
import { scrollIntoViewWithOffset } from "./functions";
import YouTubeIcon from "./YouTubeIcon";


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
                            technologies={["Javascript", "Node.js"]}
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
                            title="JTreat"
                            technologies={["HTML", "CSS", "JavaScript"]}
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
                            title="Home Device Controller"
                            technologies={["JavaScript", "Node.js"]}
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
                            title="Cyber-Assure"
                            technologies={["HTML", "CSS", "JavaScript"]}
                            type="Website"
                            description={<p>A simple but clear, and responsive site for a cyber security company.</p>}
                            image={cyber}
                            buttonText="View Website"
                            click={() => window.open('https://cyber-assure.co.uk/', '_blank').focus()}
                        />

                        <PortfolioCard
                            title="NPC System"
                            icon={<YouTubeIcon link="https://youtu.be/YgO0Hp3tTcU" />}
                            technologies={["C++", "C#", "Unity"]}
                            type="Website"
                            
                            description={<>
                                <p>NPC spawner/controller/manager. Created to inject life into open world-games.
                                    Making use of performant algorithms to create non-playable characters
                                    and control their actions with dynamic real time decision making.
                                </p>
                            </>}
                            buttonText="Visit GitHub Repo"
                            image={npcSystem}
                            click={() => window.open('https://github.com/BenStephens99/RealisticGameAI', '_blank')}
                        />


                        <PortfolioCard
                            title="Pong"
                            technologies={["C++", "Java"]}
                            icon={<YouTubeIcon link="https://youtu.be/PHW4R1WP5VU" />}
                            type="Client-Server Multiplayer Game"
                            description={<>
                                <p>A two player pong game using sockets with extensions to the Java FXGL engine to
                                    create and run the game on the server side and a C++ client to render and
                                    control the game for the players.
                                </p>
                            </>}
                            buttonText="Visit GitHub Repo"
                            image={pong}
                            click={() => window.open('https://github.com/BenStephens99/PongMultiplayer/tree/main/CI628-%20Client/src', '_blank')}
                        />



                        <PortfolioCard
                            title="Agent Escape"
                            technologies={["C#", "Unity"]}
                            icon={<YouTubeIcon link="https://youtu.be/Scqq1rdLMAE" />}
                            type="Unity Game"
                            description={<>
                                <p>Top down 2D game.
                                    With enemy AI, a fun combat system, unique art style and
                                    multiple levels with increasing difficulty.
                                </p>
                            </>}
                            buttonText="Watch Demo on YouTube"
                            image={agentEscape}
                            click={() => window.open('https://youtu.be/Scqq1rdLMAE', '_blank')}
                        />


                        <PortfolioCard
                            title="House Escape"
                            technologies={["Unreal Engine", "Blueprints"]}
                            type="Unreal Game"
                            icon={<YouTubeIcon link="https://youtu.be/po3CW4mqzdI" />}
                            description={<>
                                <p>3D Unreal Engine Game
                                    Escape room style game made with the Unreal Engine and blueprints
                                    visual programming.
                                </p>
                            </>}
                            buttonText="Watch Demo on YouTube"
                            image={houseEscape}
                            click={() => window.open('https://youtu.be/po3CW4mqzdI', '_blank')}
                        />


                        <PortfolioCard
                            title="Fitness App"
                            technologies={["Java", "Android Studio"]}
                            type="Android App"
                            description={<>
                                <p>Mobile app to help follow and create custom workout routines.
                                    Android application developed in Android Studio
                                    with Java to create workout routines with user chosen exercises and timings
                                </p>
                            </>}
                            buttonText="Visit GitHub Repo"
                            image={fitnessApp}
                            click={() => window.open('https://github.com/BenStephens99/FitnessApp', '_blank')}
                        />


                        <PortfolioCard
                            title="Jump Game"
                            technologies={["Phaser.js", "JavaScript"]}
                            type="Phaser 3 Game"
                            description={<>
                                <p>In-browser infinite jumping game

                                    Javascript game created with the Phaser 3 framework

                                    Making use of object pooling to continuously re-use
                                    the same group of platforms.
                                </p>
                            </>}
                            buttonText="Play in Browser (Desktop)"
                            image={jumpGame}
                            click={() => window.open('https://ben.stephens.uk.net/old/jumpGame/jumpGame.html', '_blank')}
                        />

                        <PortfolioCard
                            title="Inventory System"
                            technologies={["C++"]}
                            type="Engine Extention"
                            description={<>
                                <p>Allows for the collection and dropping of
                                    in game objects depending on their weight and set size of the inventory.
                                    Keeps track of the game objects and where
                                    they're currently stored.
                                </p>
                            </>}
                            buttonText="Vist GitHub Repo"
                            image={inventorySystem}
                            click={() => window.open('https://github.com/BenStephens99/InventorySystem/tree/main/xcube/src', '_blank')}
                        />


                        <PortfolioCard
                            title="Old Portfolio"
                            technologies={["HTML", "CSS", "JavaScript"]}
                            type="Website"
                            description={<>
                                <p>Orginal Portfolio Website, designed for showcasing university projects
                                </p>
                            </>}
                            buttonText="View Website"
                            image={universityPortfolioImage}
                            click={() => window.open('https://ben.stephens.uk.net/old/index.html', '_blank')}
                        />


                    </div>
                </div>
            </div>
        </main>
    )
}

export default Work;