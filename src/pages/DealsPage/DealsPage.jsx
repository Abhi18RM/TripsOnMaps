import React from "react";
import "./DealsPage.css";
import { Link } from "react-router-dom";

const DealsPage = () => {
    return (
        <div className="dealsPage-container">
            <div className="dp-left">
                <div>
                    <div className="dp-logo">
                        <img src={`/images/landMain/logo.png`} alt="" />
                    </div>
                    <div className="dp-btn">
                        <Link to="/">
                            <button>Go Back</button>
                        </Link>
                    </div>
                </div>

                <div className="dp-content">
                    <div className="explore">
                        <h1>Explore Deals</h1>

                        <div className="para">
                            <div className="square"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irur
                            </p>
                            <div className="box1">
                                <h1>Hotel Deals</h1>
                                <p className="box1p">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content2">
                <div className="box3">
                    <h1>Group Deals</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </div>
                <div className="box2">
                    <h1>Monthly Deals</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </div>
            </div>
        </div>
    );
};

export default DealsPage;
