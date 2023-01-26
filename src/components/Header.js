import React from "react";
import './Header.css';
import ContactButton from "./ContactButton";
import { HomeDelay } from "../App";
import { useNavigate } from "react-router-dom";
import { MainRefContext } from "../App";
import { scrollIntoViewWithOffset } from "./functions";
import { wait } from "./functions";
import { useLocation } from "react-router-dom";

function Header () {
    const delay = React.useContext(HomeDelay);
    const location = useLocation();

    const navigate = useNavigate();
    const mainRef = React.useContext(MainRefContext);

    async function goToHome() {
        delay.turnOffDelay();
        if (location.pathname !== '/') {
            scrollIntoViewWithOffset('mainContainer', 100)
            mainRef.current.classList.remove('show-card')
            mainRef.current.classList.add('hide-card');
            await wait(1000);
            navigate('/');
        }
    }
    return (
        <header id="header">
            <h3  onClick={goToHome}>Ben Stephens</h3>
            <ContactButton />
        </header>
    )
}

export default Header;