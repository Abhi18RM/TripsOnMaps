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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat deserunt hic est expedita alias
                        consequuntur fuga quod quia, adipisci impedit.
                        Voluptates quo eveniet maxime sapiente, deleniti eos
                        excepturi commodi voluptas fugit soluta quod vitae
                        molestias quidem est nam odit ad.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
