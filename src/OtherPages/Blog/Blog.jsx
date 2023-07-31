import React, { useEffect, useState } from 'react'
import BlogCom2 from '../../Components/BlogComs/BlogCom2/BlogCom2'
import BlogCom1 from '../../Components/BlogComs/BlogCom1/BlogCom1'
import { Testimonal } from '../../Pages/testimonal/Testimonal'
import Footer from '../../Pages/Footer/Footer'
import Progress from '../../Progress'

const Blog = () => {
    let [second, setsecond] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setsecond(++second)

        }, 700);
    })
    return (
        second < 3 ? <Progress /> :
        <div>
            <BlogCom1 />
            <BlogCom2 />
            <Testimonal />
            <Footer />
        </div>
    )
}

export default Blog