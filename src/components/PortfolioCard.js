import React from "react";
import { useInView } from "react-intersection-observer";

function PortfolioCard (props){
    const {ref, inView} = useInView();
    return (
        <div ref={ref} className={`portfolio-card ${inView ? "show" : "hidden"}`}>
            <h3>{props.title}</h3>
            <img src={props.image} alt=""/>
            <div className="text">{props.description}</div>
            <button onClick={props.click}>{props.buttonText}</button>
        </div>
    ) 
}

export default PortfolioCard;