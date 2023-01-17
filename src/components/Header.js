import React from "react";
import ThemeToggler from "./ThemeToggler";
import './Header.css';
import ContactButton from "./ContactButton";

function Header () {
    return (
        <header>
            <h3>Ben Stephens</h3>
            <ThemeToggler />
            <ContactButton />
        </header>
    )
}

export default Header;