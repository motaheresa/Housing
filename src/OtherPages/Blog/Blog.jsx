import React from 'react'
import BlogCom2 from '../../Components/BlogComs/BlogCom2/BlogCom2'
import BlogCom1 from '../../Components/BlogComs/BlogCom1/BlogCom1'
import {Testimonal} from '../../Pages/testimonal/Testimonal'
import Footer from '../../Pages/Footer/Footer'

const Blog = () => {
    return (
        <div>
            <BlogCom1/>
            <BlogCom2/>
            <Testimonal/>
            <Footer/>
        </div>
    )
}

export default Blog