import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contactContainer" id="contact">
            <div className="contactHeading">
                <h1>Contact Us</h1>
            </div>
            <div className="contactInfo">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque iure repellendus voluptates mollitia ut rem, veritatis
                </p>
            </div>
            <div className="contactForm">
                <div className="contactItem">
                    <p>Name</p>
                    <input type="text" name="Name" id="" />
                </div>
                <div className="contactItem">
                    <p>Email</p>
                    <input type="email" name="Email" id="" />
                </div>
                <div className="contactItem">
                    <p>Phone Number</p>
                    <input type="tel" name="Phone" id="" />
                </div>
                <div className="contactItem">
                    <p>Subject</p>
                    <input type="text" name="Subject" id="" />
                </div>
                <div className="contactItem">
                    <p>Message</p>
                    <textarea
                        name="Message"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <button className="contactButton">Send Message</button>
            </div>
        </div>
    );
};

export default Contact;
