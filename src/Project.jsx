import React from 'react'
import Footer from './Pages/Footer/Footer';
import Pricing from './Pages/Pricing/Pricing';
import Secondry from './Pages/SecondryPage/Secondry';
import Team from './Pages/Team/Team';
import Test from './Pages/Test/Test';
import Trust from './Pages/Trust/Trust';
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUs';
import { Testimonal } from './Pages/testimonal/Testimonal';
import { Func } from './OtherPages/OurTeam/SliderShow';




const Project = () => {
    return (
        <div>
            <Test />
            <Secondry />
            <WhyChooseUs />
            <Func />
            <Trust />
            <Pricing />
            <Testimonal />
            <Footer /> 
        </div>
    )
}

export default Project