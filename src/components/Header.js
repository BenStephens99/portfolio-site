import React from "react";
import './Header.css';
import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";
import { HomeDelay } from "../App";

function Header () {
    const delay = React.useContext(HomeDelay)
    return (
        <header id="header" onClick={delay.turnOffDelay}>
            <h3 ><Link to='/'>Ben Stephens</Link></h3>
            <ContactButton />
        </header>
    )
}

export default Header;