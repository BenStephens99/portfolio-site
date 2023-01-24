import React from "react";
import { MainRefContext } from "../App";

function Contact() {
    const mainRef = React.useContext(MainRefContext);

    return (
        <div>
            <main ref={mainRef} className="contact show-card">
                <div className='box'>
                    <div className="box-content">
                        <h2 className="title-medium">Get in Touch</h2>
                        <div className="text"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact;
