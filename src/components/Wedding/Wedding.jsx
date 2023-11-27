import React, { useEffect, useState } from "react";
import "./Wedding.css";

const Wedding = () => {
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
        return innerWidth > 750;
    }

    const FullSizeDesign = () => {
        return (
            <div className="weddingContainer" id="wedding">
                <div className="weddingLeft">
                    <div className="weddingImage">
                        <img src={`/images/weddings/italy.png`} alt="" />
                    </div>
                    <div className="leftInfo">
                        <h3>The Amalfi Coast</h3>
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
                        <img src={"/images/weddings/greece.png"} alt="" />
                    </div>
                    <div className="centerInfo">
                        <h3>Santorini</h3>
                    </div>
                </div>
                <div className="weddingRight">
                    <div className="weddingImage">
                        <img src={"/images/weddings/spain.png"} alt="" />
                    </div>
                    <div className="rightInfo">
                        <h3>Marbella</h3>
                    </div>
                </div>
            </div>
        );
    };

    const ResponsiveDesign = () => {
        return (
            <div className="weddingConRes">
                <div className="weddingInfoRes">
                    <h1>Destination Weddings</h1>
                    <p>
                        Make your Big Day innovative, luxurious and well
                        arranged in our work passionated hands.
                    </p>
                    <button>See More</button>
                </div>
                <div className="weddingImg">
                    <img src={`/images/weddings/italy.png`} alt="" />
                    <div className="topInfo">
                        <h3>The Amalfi Coast, Italy</h3>
                    </div>
                </div>
                <div
                    className="weddingImg"
                    style={{
                        justifyContent: "flex-end",
                        transform: "translateY(-50px)",
                    }}
                >
                    <img src={"/images/weddings/greece.png"} alt="" />
                    <div className="middleInfo">
                        <h3>Santorini, Greece</h3>
                    </div>
                </div>
                <div
                    className="weddingImg"
                    style={{
                        transform: "translateY(-100px)",
                    }}
                >
                    <img src={"/images/weddings/spain.png"} alt="" />
                    <div className="bottomInfo">
                        <h3>Marbella, Spain</h3>
                    </div>
                </div>
            </div>
        );
    };

    return <>{windowSize ? <FullSizeDesign /> : <ResponsiveDesign />}</>;
};

export default Wedding;
