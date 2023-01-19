import React from "react";
import './Aside.css';
import profilePic from '../images/me-grad-small.jpg'
import linkedIn from '../images/linkedIn.svg'
import email from '../images/email.svg'
import ThemeToggler from "./ThemeToggler";

function Aside() {
    return (
        <aside id="aside">

            <ThemeToggler />
            <nav>
                <li>About</li>
                <li>Education</li>
                <li>Work</li>
                <li>Contact</li>
            </nav>
            <div className="socials">
                <img src={linkedIn} alt="LinkedIn" />
                <img src={email} alt="Email" />
            </div>
        </aside>
    )
}

export default Aside;