import React from 'react'
import AboutCom from '../../Components/AboutComs/AboutCom1/AboutCom'
import AboutCom2 from '../../Components/AboutComs/AboutCom2/AboutCom2'
import AboutCom3 from '../../Components/AboutComs/AboutCom3/AboutCom3'
import AboutCom4 from '../../Components/AboutComs/AboutCom4/AboutCom4'
import Footer from '../../Pages/Footer/Footer'
import { Testimonal } from '../../Pages/testimonal/Testimonal'


const AboutUs = () => {
    return (
        <div>
            <AboutCom/>
            <AboutCom2/>
            <AboutCom3/>
            <AboutCom4/>
            <Testimonal/>
            <Footer/>
        </div>
    )
}

export default AboutUs