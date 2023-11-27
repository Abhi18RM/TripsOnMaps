import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Intro.css";

const Intro = () => {
    return (
        <div className="container" id="into">
            <Navbar />
            <div className="content">
                <div className="heading">
                    <h1>Make Your Trip Amazing With Us</h1>
                </div>
                <div className="info">
                    <p>
                        Trips on Maps ensures all travellers experience the
                        utmost peace of mind throughout their booking with us by
                        striving to fulfil every requirement they may have. We
                        aim to go above and beyond all expectations on every
                        single one of our tours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
