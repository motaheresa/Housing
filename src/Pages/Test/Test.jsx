import React from 'react'
import "./Test.css"
import Header from '../../Components/Header/Header'
const Test = () => {
    return (
        <>
            <Header />
            <section class="hero">
                <ul class="slideshow">
                    <li>
                        <span>Image 01</span>
                        <div>
                            <h3 className=''>
                                Automotive
                            </h3>
                        </div>
                    </li>
                    <li>
                        <span>Image 02</span>
                        <div>
                            <h3>Innovation</h3>
                        </div>
                    </li>
                    <li>
                        <span>Image 03</span>
                        <div>
                            <h3>Technology</h3>
                        </div>
                    </li>
                    <li>
                        <span>Image 04</span>
                        <div>
                            <h3>Passion</h3>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Test