import React from 'react'
import './OurTeam.css'
import OurTeamCom1 from '../../Components/OurTeamComs/OurTeamCom1/OurTeamCom1'
// import OurTeamCom2 from '../../Components/OurTeamComs/OurTeamCom2/OurTeamCom2'
import OurTeamCom3 from '../../Components/OurTeamComs/OurTeamCom3/OurTeamCom3'
import {Testimonal} from '../../Pages/testimonal/Testimonal'
import Footer from '../../Pages/Footer/Footer'
import { Func } from './SliderShow'


const OurTeam = () => {
    return (
        <div className='OurTeam'>
            <OurTeamCom1/>
            <Func/>
            <OurTeamCom3/>
            <Testimonal/>
            <Footer/>
        </div>
    )
}

export default OurTeam