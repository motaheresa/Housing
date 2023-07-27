import React from "react";
import "./AboutUs2.css";

const AboutCom2 = () => {
    return (
        <div className="about-com2 py-16 md:py-20">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 text-white">
            <div className="flex justify-start md:ml-0 ml-5 md:justify-center items-center">
                <h2 className="font-semibold text-3xl md:text-4xl">Perfection concept Design</h2>
            </div>
            <div className="ml-5 md:ml-0 flex justify-center items-center flex-col w-11/12 md:w-10/12">
                <p className="tracking-wider">
                    et lobortis Nulla in odio quis augue ultrices blandit. Phasellus ipsum
                    nibh, porta non sapien non efficitur pulvinar neque. Sed ut
                    perspiciatis unde omnis iste natus errorsit voluptatem accusantium
                    natus error sit.Mauris interdum libero vitae tellus vestibulum, nec
                    sollicitudin dui mollis.
                </p>
                <p className="tracking-wider">
                    Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                    suscipit. Quisque vitae sodales lectus, vel tristique risus faucibus.
                </p>
            </div>
            </div>
        </div>
    );
};

export default AboutCom2;
