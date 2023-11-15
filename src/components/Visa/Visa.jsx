import React from "react";
import "./Visa.css";

const Visa = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="visaContainer" id="visa">
            <div className="visaHead">
                <h1>Our Global Visa Services</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque maxime neque fuga odit necessitatibus?
                </p>
            </div>
            <div className="visaImg">
                <img src={PF + "/visa.png"} alt="" />
            </div>
        </div>
    );
};

export default Visa;
