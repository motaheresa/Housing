import React, { useEffect, useState } from 'react'
import ContactCom1 from '../../ContactComs/ContactCom1/ContactCom1'
import ContactCom2 from '../../ContactComs/ContactCom2/ContactCom2'
import Footer from '../../../Pages/Footer/Footer'
import Progress from '../../../Progress'


const Contact = () => {
    let [second, setsecond] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setsecond(++second)

        }, 700);
    })
    return (
        second < 3 ? <Progress /> :
        <div>
            <ContactCom1 />
            <ContactCom2 />
            <Footer />
        </div>
    )
}

export default Contact