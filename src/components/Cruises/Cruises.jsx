import React from "react";
import "./Cruises.css";

const Cruises = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="cruisesContainer" id="cruises">
            <div className="cruisesTop">
                <div className="topLeft">
                    <h1>Our Cruises</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Temporibus fugiat
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

export default Cruises;
