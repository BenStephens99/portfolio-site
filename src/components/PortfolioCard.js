import React from "react";
import { useInView } from "react-intersection-observer";
import arrow from '../images/arrow.svg'

function PortfolioCard(props) {
    const { ref, inView } = useInView({
        /* Optional options */
        //threshold: 0.2,
    });

    const technologiesList = props.technologies.map(technology => {
        return <li>{technology}</li>
    })

    return (
        <div ref={ref} className={`portfolio-card ${inView ? "show" : "hidden"}`}>
            <div className="heading">
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.type}</p>
                </div>
            {props.icon}

            </div>
            <div className="techlist">
                {technologiesList}
            </div>

            <div>{props.description}</div>

            <div className="underline-on-hover" onClick={props.click}>
                <div> {props.buttonText} </div>
                <img className="svg" src={arrow} alt="" />
            </div>

            <img src={props.image} alt="" />
        </div>
    )
}

export default PortfolioCard;