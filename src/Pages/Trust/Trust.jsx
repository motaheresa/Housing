import React from 'react'
import './Trust.css'
import image1 from '../../assests/mocks.png'


const Trust = () => {
    return (
        <div className='trust'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={image1} alt="" />
                </div>
                <div className='text-white my-14 flex flex-col text-left items-left mx-6 md:mx-auto justify-center w-3/4'>
                    <span className='text-3xl'>You can trust us</span>
                    <h2 className='text-4xl font-semibold my-5'>We Made Your Design</h2>
                    <p className='text-gray-300 pr-5 md:pr-16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada,
                        nisl non rutrum commodo, sem magna.
                    </p>
                    <button className='text-left mt-5 w-fit px-14 text-lg rounded py-2 contact-trust-btn'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Trust