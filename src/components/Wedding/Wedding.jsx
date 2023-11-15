import React, { useEffect, useState } from "react";
import "./Wedding.css";

const Wedding = () => {
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
        const { innerWidth, innerHeight } = window;
        return innerWidth;
    }

    return (
        <div className="weddingContainer" id="wedding">
            <div className="weddingLeft">
                <div className="weddingImage">
                    <img src={PF + `/weddings/italy.png`} alt="" />
                </div>
                <div className="leftInfo">
                    <h3>The Amalfi Coast, Italy</h3>
                </div>
            </div>
            <div className="weddingCenter">
                <div className="weddingInfo">
                    <h1>Destination Weddings</h1>
                    <p>
                        Make your Big Day innovative, luxurious and well
                        arranged in our work passionated hands.
                    </p>
                    <button>See More</button>
                </div>
                <div className="weddingImage">
                    <img src={PF + "/weddings/greece.png"} alt="" />
                </div>
                <div className="centerInfo">
                    <h3>Santorini, Greece</h3>
                </div>
            </div>
            <div className="weddingRight">
                <div className="weddingImage">
                    <img src={PF + "/weddings/spain.png"} alt="" />
                </div>
                <div className="rightInfo">
                    <h3>Marbella, Spain</h3>
                </div>
            </div>
        </div>
    );
};

export default Wedding;
