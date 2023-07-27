import React from "react";
import Slider from "react-slick";
import './Testimonal.css'

export const Testimonal = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <div className="testimonal py-10 flex items-center overflow-hidden justify-center">
            <div className="w-full  px-6 sm:px-12 lg:px-44 space-10 py-8 md:py-16">
            <Slider {...settings} className="flex space-x-6">
                    <div className="text-white">
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                            metus sollicitudin.
                        </p>
                        <h4>Taher, Guest</h4>
                    </div>
                    <div className="text-white">
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                            metus sollicitudin.
                        </p>
                        <h4>Mohamed, Guest</h4>
                    </div>
                    <div className="text-white">
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                            metus sollicitudin.
                        </p>
                        <h4>John Doe, Guest</h4>
                    </div>
                    <div className="text-white">
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                            metus sollicitudin.
                        </p>
                        <h4>NoOne, Guest</h4>
                    </div>
                    <div className="text-white">
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                            metus sollicitudin.
                        </p>
                        <h4>Alamie, Guest</h4>
                    </div>
                </Slider>
            </div>
        </div>
    );
};
