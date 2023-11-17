import "./LandingPage.css";
import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [isLogoVisible, setLogoVisible] = useState(false);
    const [isHeadingVisible, setHeadingVisible] = useState(false);
    const [isInfoVisible, setInfoVisible] = useState(false);

    useEffect(() => {
        // Delay the logo visibility change by 1 second (1000 milliseconds)
        const logoDelay = setTimeout(() => {
            setLogoVisible(true);
        }, 1000);

        // Delay the heading visibility change by 1.5 seconds (1500 milliseconds)
        const headingDelay = setTimeout(() => {
            setHeadingVisible(true);
        }, 1500);

        // Delay the info visibility change by 2 seconds (2000 milliseconds)
        const infoDelay = setTimeout(() => {
            setInfoVisible(true);
        }, 2000);

        return () => {
            clearTimeout(logoDelay);
            clearTimeout(headingDelay);
            clearTimeout(infoDelay);
        };
    }, []);

    return (
        <div className="landContainer">
            {isLogoVisible && (
                <img
                    src={`/images/landMain/logo.png`}
                    alt="logo.png"
                    className="landLogo visible"
                />
            )}

            <div className={`landHeading ${isHeadingVisible ? "fade-in" : ""}`}>
                <h1
                    style={{
                        margin: "auto 0",
                        fontWeight: "600",
                        textAlign: "center",
                    }}
                >
                    Discover Great {/* Add a space character here */}
                    <span
                        style={{
                            color: "white",
                            fontWeight: "600",
                            marginLeft: "10px",
                        }}
                    >
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Locations", "Cruises", "Deals"]}
                            loop={10}
                            cursor
                            cursorStyle="|"
                            typeSpeed={120}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            <div className={`landInfo ${isInfoVisible ? "fade-in" : ""}`}>
                <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
            <div className="btn">
                <Link to="/home">
                    <button>Next</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
