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
                        <h2>Get in touch!</h2>
                        <p>If you would like to get in contact regarding working together 
                            or you have any questions don't hesitate to send me a messsage.
                        </p>
                        <div>
                        <p>Or find me on LinkedIn</p>
                        <a href="https://www.linkedin.com/in/stephens-ben/" target="_blank" rel="noreferrer"><li className="underline-on-hover">
                            <div>My profile</div>
                            <img className="svg" src={arrow} alt="" />
                        </li> </a>
                        </div>
                    </div>

                    <form action="https://formspree.io/f/maykypyz" method="POST">
                

                        <fieldset>

                            <div className="inputBox">
                                <input type="text" name="name" id="name" placeholder="." required />
                                <label for="name">Name</label>
                            </div>

                            <div className="inputBox">
                                <input type="email" name="email" id="email" placeholder="." required />
                                <label for="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <textarea type="text" name="message" id="message" placeholder="." required></textarea>
                                <label for="name">Message</label>
                            </div>

                            <button id="submitButton" type="submit"> Send </button>
                        </fieldset>

                    </form>


         



                </div>
            </div>
        </main>
    )
}

export default Contact;
