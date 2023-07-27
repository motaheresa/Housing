import React from 'react'
import "./WorkCom1.css"
import Header from '../../Header/Header'


const WorkCom1 = () => {
    return (
        <div className='work-com1 relative'>
            <Header />
            <div className='absolute bottom-5 w-full flex md:flex-row flex-col gap-1 md:justify-around items-left md:mx-0 ml-5   md:items-center'>
                <h3 className=' text-white text-5xl font-semibold'>Portofolio</h3>
                <h6 className=' text-white tracking-wider text-2xl'>Home / Portofolio</h6>
            </div>
        </div>
    )
}

export default WorkCom1