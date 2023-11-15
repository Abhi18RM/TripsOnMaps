import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

const Navbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [navExpanded, isNavExpanded] = useState(false);

    const handleClick = () => {
        isNavExpanded(!navExpanded);
    };

    console.log(navExpanded);

    return (
        <div className="nav-container">
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        <img src={PF + `logo.png`} alt="" />
                    </Link>
                </div>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <a href="#intro">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#visa">Global Visa Services</a>
                    </li>
                    <li>
                        <a href="#destinations">Our Destinations</a>
                    </li>
                    <li>
                        <a href="#wedding">Wedding Destinations</a>
                    </li>
                    <li>
                        <a href="/deals">Deals</a>
                    </li>
                    <li>
                        <a href="#cruises">Cruises</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="right">
                {!navExpanded ? (
                    <MenuIcon className="navIcon" onClick={handleClick} />
                ) : (
                    <ClearIcon className="navIcon" onClick={handleClick} />
                )}
                {navExpanded && (
                    <div className="resNav">
                        <ul>
                            <li>
                                <a href="#intro">Home</a>
                            </li>
                            <li>
                                <a href="#about">About Us</a>
                            </li>
                            <li>
                                <a href="#visa">Global Visa Services</a>
                            </li>
                            <li>
                                <a href="#destinations">Our Destinations</a>
                            </li>
                            <li>
                                <a href="#wedding">Wedding Destinations</a>
                            </li>
                            <li>
                                <a href="/#">Deals</a>
                            </li>
                            <li>
                                <a href="#cruises">Cruises</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
