import React from "react";
import "./Feedback.css";
import { Star } from "@mui/icons-material";
// import Flickity from "react-flickity-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const data = [
        {
            id: 1,
            name: "Saumya Sah",
            img: `/feedback/saumya.png`,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 2,
            name: "Adarsh",
            img: `/feedback/adarsh.png`,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 3,
            name: "Abhiram",
            img: `/feedback/abhi.png`,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 4,
            name: "Sandeep",
            img: `/feedback/adarsh.png`,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 5,
            name: "Abhiram",
            img: `/feedback/abhi.png`,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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

    return (
        <div className="feedbackContainer" id="feedback">
            <div className="feedbackHead">
                <h1>What our happy customers are saying?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum ratione laborum atque dicta. Maiores, nesciunt beatae!
                </p>
            </div>
            <div className="feedbackCarousel">
                <div className="feedbackItems">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="allFeeds">
                                <div className="feedbackItem" key={d.id}>
                                    <div className="feedbackImage">
                                        <img src={PF + d.img} alt="" />
                                    </div>
                                    <div className="feedbackDetails">
                                        <p className="feedbackName">{d.name}</p>
                                        <p className="feedbackReview">
                                            {d.review}
                                        </p>
                                        <div className="feedbackStars">
                                            <Star
                                                style={{
                                                    color: "gold",
                                                    padding: "5px",
                                                }}
                                            />
                                            <Star
                                                style={{
                                                    color: "gold",
                                                    padding: "5px",
                                                }}
                                            />
                                            <Star
                                                style={{
                                                    color: "gold",
                                                    padding: "5px",
                                                }}
                                            />
                                            <Star
                                                style={{
                                                    color: "gold",
                                                    padding: "5px",
                                                }}
                                            />
                                            <Star
                                                style={{
                                                    color: "gold",
                                                    padding: "5px",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
