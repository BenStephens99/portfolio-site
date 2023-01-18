import React from "react";
import './Aside.css';
import profilePic from '../images/me-grad-small.jpg'


function Aside() {
    return (
        <aside>
            <div></div>
            <nav>
                <li>About</li>
                <li>Education</li>
                <li>Work</li>
                <li>Contact</li>
            </nav>
            <div className="socials">
                <li>In</li>
                <li>Em</li>
            </div>
        </aside>
    )
}

export default Aside;