import React, { useEffect, useState } from "react";
import "./Cruises.css";

const Cruises = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth } = window;
        return innerWidth > 650;
    }

    const FullResDes = () => {
        return (
            <div className="cruisesContainer" id="cruises">
                <div className="cruisesTop">
                    <div className="topLeft">
                        <h1>Our Cruises</h1>
                        <p>
                            Make your Big Day innovative, luxurious and well
                            arranged in our work passionated hands.
                        </p>
                        <div className="buttonContainer">
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="topCenter">
                        <img src={PF + "/cruises/celebrity.png"} alt="" />
                    </div>
                    <div className="topRight">
                        <img src={PF + "/cruises/princess.png"} alt="" />
                    </div>
                </div>
                <div className="cruisesBottom">
                    <div className="bottomLeft">
                        <img
                            className="shipImg"
                            src={PF + "/cruises/bottomleft.png"}
                            alt=""
                        />
                        <div className="bLTopL">
                            <img src={PF + "/cruises/norwegian.png"} alt="" />
                        </div>
                        <div className="bLBottomR">
                            <img src={PF + "/cruises/royal.png"} alt="" />
                        </div>
                    </div>
                    <div className="bottomRight">
                        <img
                            src={PF + "/cruises/bottomright.png"}
                            alt=""
                            className="shipImg"
                        />
                        <div className="bRTopL">
                            <img src={PF + "/cruises/holland.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ResDes = () => {
        return (
            <div className="resCruCon">
                <div className="top">
                    <h1>Our Cruises</h1>
                    <p style={{ textAlign: "center" }}>
                        Make your Big Day innovative, luxurious and well
                        arranged in our work passionated hands.
                    </p>
                    <div
                        className="buttonContainer"
                        style={{ justifyContent: "center" }}
                    >
                        <button>See More</button>
                    </div>
                </div>
                <div className="cruiseImages">
                    <div
                        className="cruiseImage"
                        style={{ backgroundColor: "#E0F7FF" }}
                    >
                        <img src={PF + "/cruises/princess.png"} alt="" />
                    </div>
                    <div className="cruiseImage">
                        <img src={PF + "/cruises/celebrity.png"} alt="" />
                    </div>
                    <div
                        className="cruiseImage"
                        style={{ backgroundColor: "#E0F7FF" }}
                    >
                        <img src={PF + "/cruises/norwegian.png"} alt="" />
                    </div>
                    <div className="cruiseImage">
                        <img src={PF + "/cruises/royal.png"} alt="" />
                    </div>
                    <div
                        className="cruiseImage"
                        style={{ backgroundColor: "#090E2C" }}
                    >
                        <img src={PF + "/cruises/holland.png"} alt="" />
                    </div>
                </div>
            </div>
        );
    };

    return <>{windowSize ? <FullResDes /> : <ResDes />}</>;
};

export default Cruises;
