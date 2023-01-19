import React from "react";
import './Header.css';
import ContactButton from "./ContactButton";

function Header () {
    return (
        <header id="header">
            <h3>Ben Stephens</h3>
            <ContactButton />
        </header>
    )
}

export default Header;