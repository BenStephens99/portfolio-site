import React from "react";
import IntroBox from "./IntroBox";
import MySkills from "./MySkills";
import Footer from "./Footer";
import './Home.css';
import { MainRefContext } from "../App";


const Home = (props) => {
    const mainRef = React.useContext(MainRefContext);

    return (
        <main ref={mainRef} className="home">
           <IntroBox delay={props.delay}/>
           <MySkills delay={props.delay}/>
           <Footer delay={props.delay}/>
        </main>
    )
}

export default Home;