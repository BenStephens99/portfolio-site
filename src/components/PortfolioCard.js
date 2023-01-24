import React from "react";
import { useInView } from "react-intersection-observer";
import arrow from '../images/arrow.svg'

function PortfolioCard(props) {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
    });

    return (
        <div ref={ref} className={`portfolio-card ${inView ? "show" : "hidden"}`}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.type}</p>
            </div>
            <div>
                <div>{props.description}</div>
                <button onClick={props.click}>
                    <div> {props.buttonText} </div>
                    <div><img className="svg" src={arrow} alt="" /></div>
                </button>
            </div>
            <img src={props.image} alt="" />
        </div>
    )
}

export default PortfolioCard;