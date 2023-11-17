import React, { useEffect, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(null);

    useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);

    const setEmpty = () => {
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "trips_on_map";
        const templateId = "template_8zr5xdj";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: name,
                message: message,
                phone_number: phone,
                email: email,
                subject: subject,
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setEmpty();
        }
    };

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
            <form className="contactForm">
                <div className="contactItem">
                    <p>Name</p>
                    <input
                        type="text"
                        name="Name"
                        id=""
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="contactItem">
                    <p>Email</p>
                    <input
                        type="email"
                        name="Email"
                        id=""
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="contactItem">
                    <p>Phone Number</p>
                    <input
                        type="tel"
                        name="Phone"
                        id=""
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div className="contactItem">
                    <p>Subject</p>
                    <input
                        type="text"
                        name="Subject"
                        id=""
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    />
                </div>
                <div className="contactItem">
                    <p>Message</p>
                    <textarea
                        name="Message"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                </div>
                <button
                    className="contactButton"
                    onClick={handleSubmit}
                    style={loading ? { cursor: "no-drop" } : {}}
                >
                    {loading === true ? (
                        <CircularProgress color="inherit" size="25px" />
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>
        </div>
    );
};

export default Contact;
