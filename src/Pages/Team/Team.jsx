import React, { useState } from "react";
import "./Team.css";
import team1 from "../../assests/team1.jpg"
import team2 from "../../assests/team2.jpg"
import team3 from "../../assests/team3.jpg"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'




const Team = () => {
    
    return (
        <div className="team py-20">
            <div className="flex flex-col items-center justify-center">
                
                <h2 className="text-5xl text-gray-100 my-5">About Our Team</h2>
                <p className="lg:w-2/5 md:w-4/5 w-10/12 text-center text-gray-200 mb-14">
                    Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.
                    Vestibulum auctor nunc vitae diam eleifend, in maximus metus
                    sollicitudin. Quisque vitae sodales lectus. Nam p orttitor justo sed mi
                    finibus, vel tristique risus faucibus.
                </p>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-6 overflow-hidden">
                <div className={`relative z-20 member overflow-hidden`}>
                    <img src={team1} className="z-10 w-full rounded-xl" alt="" />
                    <div className="absolute bottom-4 left-6 z-50">
                        <p className="text-3xl font-semibold text-white">Mo Taher</p>
                        <p className="text-lg tracking-wider text-white font-medium">Team-Manager</p>
                    </div>
                    <div className="absolute bottom-4 social-icons-team right-6 z-40 flex items-center gap-3">
                        <span className="text-white text-2xl"><BiLogoFacebook /></span>
                        <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                        <span className="text-white text-2xl"><BiLogoTwitter /></span>
                    </div>
                </div>
                <div className=" relative z-20 member duration-300 overflow-hidden">
                    <img src={team2} className="z-10 w-full rounded-xl" alt="" />
                    <div className="absolute bottom-4 left-6 z-50">
                        <p className="text-3xl font-semibold text-white">Tommy Doe</p>
                        <p className="text-lg tracking-wider text-white font-medium">Co-Founder</p>
                    </div>
                    <div className="absolute bottom-4 social-icons-team right-6 z-40 flex items-center gap-3">
                        <span className="text-white text-2xl"><BiLogoFacebook /></span>
                        <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                        <span className="text-white text-2xl"><BiLogoTwitter /></span>
                    </div>
                </div>
                <div className=" relative z-20 member duration-300 overflow-hidden">
                    <img src={team3} className="z-10 w-full rounded-xl" alt="" />
                    <div className="absolute bottom-4 left-6 z-50">
                        <p className="text-3xl font-semibold text-white">Hash Doe</p>
                        <p className="text-lg tracking-wider text-white font-medium">Co-Founder</p>
                    </div>
                    <div className="absolute bottom-4 social-icons-team right-6 z-40 flex items-center gap-3">
                        <span className="text-white text-2xl"><BiLogoFacebook /></span>
                        <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                        <span className="text-white text-2xl"><BiLogoTwitter /></span>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Team;
