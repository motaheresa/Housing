import React, { useEffect, useState } from 'react'
import WorkCom1 from '../../Components/WorksComs/WorkCom1/WorkCom1'
import AboutCom2 from '../../Components/AboutComs/AboutCom2/AboutCom2'
import WorkCom2 from '../../Components/WorksComs/WorkCom2/WorkCom2'
import Footer from '../../Pages/Footer/Footer'
import Progress from '../../Progress'

const Work = () => {
    const workcomtwo = {
        backgroundColor: "#000"
    }
    let [second, setsecond] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setsecond(++second)

        }, 700);
    })
    return (
        second < 3 ? <Progress /> :
            <div div className='' >
                <WorkCom1 />
                <div style={workcomtwo}><AboutCom2 /></div>
                <WorkCom2 />
                <Footer />
            </div >
    )
}

export default Work