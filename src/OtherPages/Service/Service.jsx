import React, { useEffect, useState } from 'react'
import ServiceCom1 from '../../Components/ServiceComs/ServiceCom1/ServiceCom1'
import ServiceCom2 from '../../Components/ServiceComs/ServiceCom2/ServiceCom2'

import Footer from '../../Pages/Footer/Footer'
import { Testimonal } from '../../Pages/testimonal/Testimonal'
import Progress from '../../Progress'

const Service = () => {
    let [second, setsecond] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setsecond(++second)

        }, 700);
    })
    return (
        second < 3 ? <Progress /> :
            <div>

                <ServiceCom1 />
                <ServiceCom2 />
                <Testimonal />
                <Footer />
            </div>
    )
}

export default Service