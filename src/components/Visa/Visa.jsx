import React from "react";
import "./Visa.css";

const Visa = () => {
    return (
        <div className="visaContainer" id="visa">
            <div className="visaHead">
                <h1>Our Global Visa Services</h1>
                <p>
                    Make your journey safe in our professionally experienced
                    hands, committed to provide the highest level of hassle free
                    service to our clients.
                </p>
            </div>
            <div className="visaImg">
                <img src={"/images/visa.png"} alt="" />
            </div>
        </div>
    );
};

export default Visa;
