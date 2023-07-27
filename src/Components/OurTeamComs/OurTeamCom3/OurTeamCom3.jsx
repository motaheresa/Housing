import React from 'react'
import './OurTeamCom3.css'
import team1 from "../../../assests/team1.jpg"
import team2 from "../../../assests/team2.jpg"
import team3 from "../../../assests/team3.jpg"
import team4 from "../../../assests/img4.jpg"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

const OurTeamCom3 = () => {
    return (
        <div className='team-com3 py-24'>
            <div className="flex items-center flex-wrap justify-center gap-6 overflow-hidden">
                <div className={`relative z-20 member3 overflow-hidden`}>
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
                <div className=" relative z-20 member3 duration-300 overflow-hidden">
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
                <div className=" relative z-20 member3 duration-300 overflow-hidden">
                    <img src={team4} className="z-10 w-full rounded-xl" alt="" />
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
                <div className=" relative z-20 member3 duration-300 overflow-hidden">
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
    )
}

export default OurTeamCom3