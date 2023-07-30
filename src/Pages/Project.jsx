import React from 'react'
import Footer from './Footer/Footer';
import Pricing from './Pricing/Pricing';
import Secondry from './SecondryPage/Secondry';
import Team from './Team/Team';
import Test from './Test/Test';
import Trust from './Trust/Trust';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import { Testimonal } from './testimonal/Testimonal';
import { Func } from '../OtherPages/OurTeam/SliderShow';




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