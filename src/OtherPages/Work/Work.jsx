import React from 'react'
import WorkCom1 from '../../Components/WorksComs/WorkCom1/WorkCom1'
import AboutCom2 from '../../Components/AboutComs/AboutCom2/AboutCom2'
import WorkCom2 from '../../Components/WorksComs/WorkCom2/WorkCom2'
import Footer from '../../Pages/Footer/Footer'

const Work = () => {
    const workcomtwo={
        backgroundColor:"#000"
    }
    return (
        <div className=''>
            
            <WorkCom1 />
            <div style={workcomtwo}><AboutCom2 /></div>
            <WorkCom2 />
            <Footer/>
        </div>
    )
}

export default Work