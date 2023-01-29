import React from "react";
import './Aside.css';
import linkedIn from '../images/linkedIn.svg'
import github from '../images/github.svg'
import cv from '../images/cv.svg';
import ThemeToggler from "./ThemeToggler";
import { HomeDelay } from "../App";
import { MainRefContext } from "../App";
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { MenuContext } from "../App";



function Aside() {
    const homeDelay = React.useContext(HomeDelay);
    const mainRef = React.useContext(MainRefContext);
    const menuState = React.useContext(MenuContext);

    const navigate = useNavigate();
    const location = useLocation();

    async function goToPage(des, delay) {
        homeDelay.turnOffDelay();
        if (menuState.menuOpen === "open") {
            menuState.toggleMenu();
        }
        if (location.pathname !== des) {
            scrollIntoViewWithOffset('mainContainer', 100)
            mainRef.current.classList.remove('show-card')
            mainRef.current.classList.add('hide-card');
            await wait(delay);
            navigate(des);
        }
    }

    return (
        <aside id="aside" className={menuState.menuOpen}>
            <ThemeToggler />
            <nav>
                <li onClick={() => goToPage('/', 1000)}>Home</li>
                <li onClick={() => goToPage('/work', 1000)}>Portfolio</li>
                <li onClick={() => goToPage('/about', 1000)}>About</li>
                <li onClick={() => goToPage('/contact', 1000)}>Contact</li>
            </nav>
            <div className="socials">
                <a className="svg" href="https://www.linkedin.com/in/stephens-ben/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn" /></a>
                <a className="svg" href="./cv.pdf" target="_blank" rel="noreferrer"><img src={cv} alt="CV" /></a>
                <a className="svg" href="https://github.com/BenStephens99" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" /></a>

            </div>
        </aside>



    )
}

export default Aside;