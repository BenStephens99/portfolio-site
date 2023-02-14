import React from "react";

const Footer = (props ) => {
    return (
        <footer className={`box ${props.delay}`}>
            <div>
            <p>&#169; 2023 Ben Stephens</p> <br></br>
            <a href="https://github.com/BenStephens99/portfolio-site" target="_blank" rel="noreferrer">Source Code</a>
            </div>

        </footer>
    )
}

export default Footer;