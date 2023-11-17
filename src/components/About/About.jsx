import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="abtContainer" id="about">
            <div className="abtInfo">
                <div className="abtInfoHeading">
                    <h1>Who are We?</h1>
                </div>
                <div className="abtInfoContent">
                    Trips on Maps Tours & Travel is a full-service travel agency
                    committed to provide completely dependable and useful tour
                    and travel options while also giving the most affordable
                    prices available. Tourism is our passion and not just a
                    business. We provide you better and affordable service we
                    believe more in delivering than just promising. We
                    understand the needs of the customer and offer a quality,
                    well-versed service through our wide range of expertise in
                    the global tourism industry.
                </div>
                <div className="abtInfoBoxes">
                    <div className="abtInfoBox">Affordable</div>
                    <div className="abtInfoBox">Better Services</div>
                    <div className="abtInfoBox">Skilled Guides</div>
                    <div className="abtInfoBox">Global Industry</div>
                    <div className="abtInfoBox">Satisfy</div>
                    <div className="abtInfoBox">Customizable</div>
                    <div className="abtInfoBox">Quality</div>
                </div>
            </div>
            <div className="abtImg">
                <img src={`/images/abtImg.png`} alt="" />
            </div>
        </div>
    );
};

export default About;
