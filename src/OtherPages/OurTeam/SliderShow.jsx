import React, { Component } from "react";
import Slider from "react-slick";
import team4 from "../../assests/team4.jpg";
import '../../Components/OurTeamComs/OurTeamCom2/OurTeamCom2.css'
import team1 from "../../assests/img1.jpg"
import team2 from "../../assests/team2.jpg"
import team3 from "../../assests/team3.jpg"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

export const Func = () => {
    const image = {
        width: "500px",
        height: "400px",
    };
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
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
        <div className=" overflow-hidden bg-black">
            <div className="w-full mx-auto items-start" style={{ maxWidth: "80%" }}>
                <Slider {...settings} className=" py-20 overflow-hidden">
                    <div className={`relative z-20 member2 px-2 overflow-hidden`}>
                        <img src={team2} className="z-10 rounded-xl" alt="" />
                        <div className="absolute bottom-4 left-6 z-50">
                            <p className="text-xl md:text-3xl font-semibold text-white">Timmy Doe</p>
                            <p className="text-md md:text-lg tracking-wider text-white font-medium">Co-Founder</p>
                        </div>
                        <div className="absolute bottom-4 social-icons-team right-6 hidden md:flex z-40 items-center gap-3">
                            <span className="text-white text-2xl"><BiLogoFacebook /></span>
                            <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                            <span className="text-white text-2xl"><BiLogoTwitter /></span>
                        </div>
                    </div>
                    <div className={`relative z-20 member2 px-2 overflow-hidden`}>
                        <img src={team1} className="z-10 rounded-xl" alt="" />
                        <div className="absolute bottom-4 left-6 z-50">
                            <p className="text-xl md:text-3xl font-semibold text-white">Hash Doe</p>
                            <p className="text-md md:text-lg tracking-wider text-white font-medium">Co-Founder</p>
                        </div>
                        <div className="absolute bottom-4 social-icons-team right-6 hidden md:flex z-40 items-center gap-3">
                            <span className="text-white text-2xl"><BiLogoFacebook /></span>
                            <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                            <span className="text-white text-2xl"><BiLogoTwitter /></span>
                        </div>
                    </div>
                    <div className={`relative z-20 member2 px-2 overflow-hidden`}>
                        <img src={team3} className="z-10 rounded-xl" alt="" />
                        <div className="absolute bottom-4 left-6 z-50">
                            <p className="text-xl md:text-3xl font-semibold text-white">Tom</p>
                            <p className="text-md md:text-lg tracking-wider text-white font-medium">Co-Founder</p>
                        </div>
                        <div className="absolute bottom-4 social-icons-team right-6 hidden md:flex z-40 items-center gap-3">
                            <span className="text-white text-2xl"><BiLogoFacebook /></span>
                            <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                            <span className="text-white text-2xl"><BiLogoTwitter /></span>
                        </div>
                    </div>
                    <div className={`relative z-20 member2 px-2 overflow-hidden`}>
                        <img src={team4} className="z-10 rounded-xl" alt="" />
                        <div className="absolute bottom-4 left-6 z-50">
                            <p className="text-xl md:text-3xl font-semibold text-white">Mo Taher</p>
                            <p className="text-md md:text-lg tracking-wider text-white font-medium">Team-Manager</p>
                        </div>
                        <div className="absolute bottom-4 social-icons-team right-6 hidden md:flex z-40 items-center gap-3">
                            <span className="text-white text-2xl"><BiLogoFacebook /></span>
                            <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                            <span className="text-white text-2xl"><BiLogoTwitter /></span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};
