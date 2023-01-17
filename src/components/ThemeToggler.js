import React from "react";
import { ThemeContext } from "../App";
import "./ThemeToggler.css"

function ThemeToggler() {
    const theme = React.useContext(ThemeContext)

    return (
        <div className="theme-toggle-button">
            <div className="outer-toggle-button" onClick={theme.toggleTheme}>
                <div className="inner-toggle-button"></div>
            </div>
        </div>

    )
}

export default ThemeToggler;