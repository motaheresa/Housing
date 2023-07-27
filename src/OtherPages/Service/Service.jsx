import React from 'react'
import ServiceCom1 from '../../Components/ServiceComs/ServiceCom1/ServiceCom1'
import ServiceCom2 from '../../Components/ServiceComs/ServiceCom2/ServiceCom2'

import Footer from '../../Pages/Footer/Footer'
import { Testimonal } from '../../Pages/testimonal/Testimonal'

const Service = () => {
    return (
        <div>
            <ServiceCom1/>
            <ServiceCom2/>
            <Testimonal/>
            <Footer/>
        </div>
    )
}

export default Service