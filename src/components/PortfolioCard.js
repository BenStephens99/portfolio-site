import React from "react";
import { useInView } from "react-intersection-observer";
import arrow from '../images/arrow.svg'

function PortfolioCard(props) {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`portfolio-card ${inView ? "show" : "hidden"}`}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.type}</p>
            </div>
            <div>
                <div>{props.description}</div>
                <li className="underline-on-hover" onClick={props.click}>
                    <div> {props.buttonText} </div>
                    <div><img className="svg" src={arrow} alt="" /></div>
                </li>
            </div>
            <img src={props.image} alt="" />
        </div>
    )
}

export default PortfolioCard;