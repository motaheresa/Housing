import React from "react";
import './OurTeamCom2.css'
import team1 from "../../../assests/img1.jpg"
import team2 from "../../../assests/team2.jpg"
import team3 from "../../../assests/team3.jpg"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'




const OurTeamCom2 = () => {
    return (
        <div style={{ backgroundColor: "rgb(17,17,17)" }} className="">
            <div className="mx-auto items-start" style={{maxWidth:"80%"}}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <h2 className="text-5xl text-gray-100 mt-5 mb-0 md:my-5">About Our Team</h2>
                    <div className="flex flex-col py-10 items-center justify-center h-full">
                        <p className="text-white">
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus
                            sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi
                            finibus, vel tristique risus faucibus.
                        </p>
                        <p className="text-white">
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                            suscipit. Quisque vitae sodales lectus, vel tristique risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flex items-center md:flex-wrap justify-center pb-32 gap-6 overflow-hidden">
                    <div className={`relative z-20 member2 overflow-hidden`}>
                        <img src={team1}  className="z-10 rounded-xl" alt="" />
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
                    <div className=" relative z-20 member2 duration-300 overflow-hidden">
                        <img src={team2} className="z-10 w-full rounded-xl" alt="" />
                        <div className="absolute bottom-4 left-6 z-50">
                            <p className="text-xl md:text-3xl font-semibold text-white">Tommy Doe</p>
                            <p className="text-md md:text-lg tracking-wider text-white font-medium">Co-Founder</p>
                        </div>
                        <div className="absolute bottom-4 social-icons-team hidden md:flex right-6 z-40 items-center gap-3">
                            <span className="text-white text-2xl"><BiLogoFacebook /></span>
                            <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                            <span className="text-white text-2xl"><BiLogoTwitter /></span>
                        </div>
                    </div>
                    <div className=" relative md:flex hidden z-20 member2 duration-300 overflow-hidden">
                        <img src={team3} className="z-10 w-full rounded-xl" alt="" />
                        <div className="absolute bottom-4 left-6 z-50">
                            <p className="text-xl md:text-3xl font-semibold text-white">Hash Doe</p>
                            <p className="text-md md:text-lg tracking-wider text-white font-medium">Co-Founder</p>
                        </div>
                        <div className="absolute bottom-4 social-icons-team hidden md:flex right-6 z-40 flex items-center gap-3">
                            <span className="text-white text-2xl"><BiLogoFacebook /></span>
                            <span className="text-white text-2xl"><BiLogoLinkedin /></span>
                            <span className="text-white text-2xl"><BiLogoTwitter /></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurTeamCom2;
