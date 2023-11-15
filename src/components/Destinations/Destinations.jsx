import React, { useRef } from "react";
import "./Destinations.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Destinations = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const slider = useRef();

    const places = [
        {
            id: 1,
            name: "Switzerland",
            img: "/places/switzerland.png",
        },
        {
            id: 2,
            name: "Oman",
            img: "/places/oman.png",
        },
        {
            id: 3,
            name: "Italy",
            img: "/places/italy.png",
        },
        {
            id: 4,
            name: "Sweden",
            img: "/places/sweden.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        initialSlide: 0,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const PreviousButton = ({ onClick }) => {
        return (
            <button
                className="slick-prev"
                onClick={() => onClick()}
                style={{ color: "black" }}
            >
                <ArrowLeft style={{ fontSize: "50px" }} />
            </button>
        );
    };

    const NextButton = ({ onClick }) => {
        return (
            <button
                className="slick-next"
                onClick={() => onClick()}
                style={{ color: "black" }}
            >
                <ArrowRight style={{ fontSize: "50px" }} />
            </button>
        );
    };

    return (
        <div className="destinationsContainer" id="destinations">
            <div className="destinationsHead">
                <h1>Our Most Popular Destinations</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore{" "}
                </p>
            </div>
            <div className="destinationsItems">
                <Slider
                    ref={slider}
                    {...settings}
                    prevArrow={
                        <PreviousButton onClick={() => slider.slickPrev()} />
                    }
                    nextArrow={
                        <NextButton onClick={() => slider.slickNext()} />
                    }
                >
                    {places.map((p) => (
                        <div className="allItems" key={p.id}>
                            <div className="destinationItem">
                                <div className="destinationImage">
                                    <img src={PF + p.img} alt="" />
                                    <h3 className="destinationName">
                                        {p.name}
                                    </h3>
                                </div>
                                <div className="destinationButton">
                                    <button className="dealsButton">
                                        View Deals
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Destinations;
