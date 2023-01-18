import React from "react";

function PortfolioCard (props){
    return (
        <div className="portfolio-card">
            <h3>{props.title}</h3>
            <img src={props.image} alt=""/>
            <div className="text">{props.description}</div>
            <button>View project</button>
        </div>
    ) 
}

export default PortfolioCard;