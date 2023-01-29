import React from "react";
import './Header.css';
import { HomeDelay } from "../App";
import { useNavigate } from "react-router-dom";
import { MainRefContext } from "../App";
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { useLocation } from "react-router-dom";
import { MenuContext } from "../App";

function Header () {
    const delay = React.useContext(HomeDelay);
    const location = useLocation();

    const navigate = useNavigate();
    const mainRef = React.useContext(MainRefContext);

    const menuState = React.useContext(MenuContext);

    async function go(des, time) {
        delay.turnOffDelay();
        if (menuState.menuOpen === "open") {
            menuState.toggleMenu();
        }
        if (location.pathname !== des) {
            scrollIntoViewWithOffset('mainContainer', 100)
            mainRef.current.classList.remove('show-card')
            mainRef.current.classList.add('hide-card');
            await wait(time);
            navigate(des);
        }
    }

    return (
        <header id="header">
            <h3  onClick={() => go('/', 1000)}>Ben Stephens</h3>
            <button onClick={() => go('/contact', 1000)} className="contact-button">CONTACT</button>
            <button onClick={menuState.toggleMenu} className="menu-button">Menu</button>
        </header>
    )
}

export default Header;