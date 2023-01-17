import React from "react";
import './MySkills.css';

function MySkills () {
    return (
        <div id="mySkills" className="box">
            <div className="box-content">
                <h2 className="title-medium">My</h2>
                <h2 className="title-medium shadow">Skills</h2>
                <ul className="skills">
                    <li>HTML + CSS -</li>
                    <li>JavaScript -</li>
                    <li>React.js -</li>
                    <li>Bootstrap -</li>
                    <li>Node.js -</li>
                    <li>Electron.js -</li>
                </ul>
            </div>
        </div>
    )
}

export default MySkills;