import React from "react";
import "./MainPage.css";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Feedback from "../../components/Feedback/Feedback";
import Destinations from "../../components/Destinations/Destinations";
import Wedding from "../../components/Wedding/Wedding";
import Cruises from "../../components/Cruises/Cruises";
import Visa from "../../components/Visa/Visa";

const MainPage = () => {
    return (
        <div>
            <Intro />
            <About />
            <Visa />
            <Destinations />
            <Wedding />
            <Cruises />
            <Feedback />
            <Contact />
            <Footer />
        </div>
    );
};

export default MainPage;
