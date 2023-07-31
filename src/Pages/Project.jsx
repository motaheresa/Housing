import React, { useEffect, useState } from 'react'
import Footer from './Footer/Footer';
import Pricing from './Pricing/Pricing';
import Secondry from './SecondryPage/Secondry';
import Team from './Team/Team';
import Test from './Test/Test';
import Trust from './Trust/Trust';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import { Testimonal } from './testimonal/Testimonal';
import { Func } from '../OtherPages/OurTeam/SliderShow';
import Progress from '../Progress';




const Project = () => {
    let [second, setsecond] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setsecond(++second)
            
        }, 700);
    })
    return (
        <div>
            {
                second < 3 ? <Progress /> :
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
            }

        </div>
    )
}

export default Project