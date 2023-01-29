import React from "react";
import { MainRefContext } from "../App";
import './Contact.css'
import arrow from '../images/arrow.svg';

function Contact() {
    const mainRef = React.useContext(MainRefContext);

    return (
        <main ref={mainRef} className="contact show-card">
            <div className='box'>
                <div className="box-content">

                <div className="linkedin-form">
                        <h2 className="title-medium">Find me on LinkedIn</h2>
                        <a  href="https://www.linkedin.com/in/stephens-ben/" target="_blank" rel="noreferrer"><li className="underline-on-hover">
                            <div>My profile</div>
                            <div><img className="svg" src={arrow} alt="" /></div>
                        </li> </a>
                    </div>  

                    <h2>Or</h2>

                    <form action="https://formspree.io/f/maykypyz" method="POST">
                        <h2 className="title-medium">Send me a message</h2>
                        <fieldset>
                            <input type="text" name="Name" id="name" placeholder="Name" required />
                            <input type="email" name="Email" id="email" placeholder="Email" />
                            <input type="tel" name="Phone" id="tel" placeholder="Phone (Optional)" />
                            <textarea type="text" name="Message" id="message" placeholder="Message" required></textarea>
                        </fieldset>
                        <button id="submitButton" type="submit"> Submit </button>
                    </form>

                </div>
            </div>
        </main>
    )
}

export default Contact;
