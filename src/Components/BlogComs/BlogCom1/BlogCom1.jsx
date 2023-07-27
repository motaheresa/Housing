import React from 'react'

import Header from '../../Header/Header'



const BlogCom1= () => {
    return (
        <div className='about-com1 relative'>
            <Header />
            <div className='absolute bottom-5 w-full flex md:flex-row flex-col gap-1 md:justify-around items-left md:mx-0 ml-5   md:items-center'>
                <h3 className=' text-white text-5xl font-semibold'>Blog</h3>
                <h6 className=' text-white tracking-wider text-2xl'>Home / Blog</h6>
            </div>
        </div>
    )
}

export default BlogCom1