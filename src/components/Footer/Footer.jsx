import React from "react";
import "./Footer.css";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="footerContainer" id="footer">
            <div className="footerDetails">
                <div className="footerInfo">
                    <img src={PF + `logo.png`} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <div className="footerIcons">
                        <div className="footerIcon">
                            <Facebook style={{ fontSize: "30px" }} />
                        </div>
                        <div className="footerIcon">
                            <Instagram style={{ fontSize: "30px" }} />
                        </div>
                        <div className="footerIcon">
                            <Twitter style={{ fontSize: "30px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerAbout">
                <div className="aboutItems">
                    <div className="aboutItem">About Us</div>
                    <div className="aboutItem">Our Story</div>
                    <div className="aboutItem">Services</div>
                    <div className="aboutItem">Blogs</div>
                </div>
            </div>
            <div className="footerSupport">
                <div className="supportItems">
                    <div className="supportItem">Support</div>
                    <div className="supportItem">Customer Support</div>
                    <div className="supportItem">Privacy & Policy</div>
                    <div className="supportItem">Terms & Conditions</div>
                </div>
            </div>
            <div className="footerContact">
                <div className="contactItems">
                    <div className="footerItem">Contact</div>
                    <div className="footerItem">Phone: 9876543210</div>
                    <div className="footerItem">
                        Email: tripsonmaps@gmail.com
                    </div>
                    <div className="footerItem"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;