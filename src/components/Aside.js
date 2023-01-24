import React from "react";
import './Aside.css';
import linkedIn from '../images/linkedIn.svg'
import email from '../images/email.svg'
import github from '../images/github.svg'
import ThemeToggler from "./ThemeToggler";
import { Link } from "react-router-dom";
import { HomeDelay } from "../App";
import { MainRefContext } from "../App";
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'



function Aside() {
    const homeDelay = React.useContext(HomeDelay);
    const mainRef = React.useContext(MainRefContext);

    const navigate = useNavigate();
    const location = useLocation();

    async function goToPage(des, delay) {
        homeDelay.turnOffDelay();
        if (location.pathname !== des) {
            scrollIntoViewWithOffset('header', 0)
            mainRef.current.classList.remove('show-card')
            mainRef.current.classList.add('hide-card');
            await wait(delay);
            navigate(des);
        }
    }

    return (
        <aside id="aside">
            <ThemeToggler />
            <nav>
                <li onClick={() => goToPage('/', 700)}>Home</li>
                <li onClick={() => goToPage('/work', 700)}>Portfolio</li>
                <li><Link>About</Link></li>
                <li><Link>Contact</Link></li>
            </nav>
            <div className="socials">
                <a className="svg" href="https://www.linkedin.com/in/stephens-ben/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn" /></a>
                <a className="svg" href="mailto:ben@stephens.uk.net"><img src={email} alt="Email" /></a>
                <a className="svg" href="https://github.com/BenStephens99" target="_blank" rel="noreferrer"><img src={github} alt="LinkedIn" /></a>

            </div>
        </aside>
    )
}

export default Aside;