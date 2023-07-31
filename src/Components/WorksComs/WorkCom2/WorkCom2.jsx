import React, { useState } from 'react'
import image1 from '../../../assests/1.jpg'
import image2 from '../../../assests/2.jpg'
import image3 from '../../../assests/3.jpg'
import image4 from '../../../assests/1.jpg'
import image5 from '../../../assests/4.jpg'
import image6 from '../../../assests/5.jpg'
import { AiOutlineClose } from 'react-icons/ai'

import {
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import './WorkCom2.css'
import { EyeIcon } from '@heroicons/react/24/outline'
import { BsEyeFill } from 'react-icons/bs'





const WorkCom2 = () => {
    const work = {
        backgroundColor: "rgb(18,18,18)",
    }
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6,setOpen6]=useState(false)
    const [open7,setOpen7]=useState(false)
    const [open8,setOpen8]=useState(false)
    const [open9,setOpen9]=useState(false)
    return (
        <div style={work} className={`flex relative pt-16 justify-center items-center w-full mx-auto pb-44 px-6 md:px-20 lg:px-44 `}>
            <MDBRow className='space-y-5'>
                <MDBCol lg={4} md={6} sm={12} className=' mb-lg-0'>
                    <div onClick={() => setOpen1(true)} className='relative hoverImage cursor-pointer duration-500'>
                        <img
                            src={image1}
                            className=' w-100 transform  cursor-pointer h-full shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Start Gallery
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>
                    </div>
                    <div className={`fixed ${open1 ? "showimage" : "hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image1} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={() => setOpen1(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose />
                            </span>
                        </div>
                    </div>
                    <div onClick={() => setOpen2(true)} className='relative hoverImage cursor-pointer duration-500 '>
                        <img
                            src={image2}
                            className='w-100 object-cover cursor-pointer shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Gallery Show
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                        <div className={`fixed ${open2 ? "showimage" : "hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                            <div className='flex justify-center items-center'>
                                <img src={image2} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                                <span onClick={() => setOpen2(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                    <AiOutlineClose />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`fixed ${open2 ? "showimage" : "hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image2} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={() => setOpen2(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose />
                            </span>
                        </div>
                    </div>
                    <div onClick={() => setOpen3(true)} className='relative hoverImage cursor-pointer  duration-500'>
                        <img
                            src={image5}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Big Gallery
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open3 ? "showimage" : "hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image3} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={() => setOpen3(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose />
                            </span>
                        </div>
                    </div>

                </MDBCol>

                <MDBCol lg={4} md={6} sm={12} className='space-y-3 mb-4 mb-lg-0 '>
                    <div onClick={() => setOpen4(true)} className='relative hoverImage h-2/5 cursor-pointer  duration-500'>
                        <img
                            src={image3}
                            className='w-100 h-full object-cover duration-500 cursor-pointer hoverImage shadow-1-strong rounded mb-4'
                            alt='Mountains in the Clouds'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Main Gallery
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open4 ? "showimage" : "hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image3} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={() => setOpen4(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose />
                            </span>
                        </div>
                    </div>
                    <div onClick={() => setOpen5(true)} className='relative  hoverImage cursor-pointer duration-500'>
                        <img
                            src={image3}
                            className='w-100  shadow-1-strong duration-500 cursor-pointer hoverImage rounded mb-4'
                            alt='Boat on Calm Water'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Gallery Mode
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open5 ? "showimage" : "hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image3} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={() => setOpen5(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose />
                            </span>
                        </div>
                    </div>
                    <div onClick={() => setOpen6(true)} className="relative hoverImage cursor-pointer duration-500">
                        <img
                            src={image2}
                            className='w-100 shadow-1-strong duration-500 cursor-pointer hoverImage rounded mb-4'
                            alt='Boat on Calm Water'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Show Gallery
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open6?"showimage":"hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image2} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={()=>setOpen6(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose/>
                            </span>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol lg={4} md={6} sm={12} className='space-y-3 mb-4  mb-lg-0'>
                    <div onClick={() => setOpen7(true)} className='relative hoverImage cursor-pointer  duration-500'>
                        <img
                            src={image5}
                            className='w-100 h-full object-cover shadow-1-strong duration-500 cursor-pointer hoverImage rounded mb-4'
                            alt='Waves at Sea'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Dark Mode Gallery
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open7?"showimage":"hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image5} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={()=>setOpen7(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose/>
                            </span>
                        </div>
                    </div>
                    <div onClick={() => setOpen8(true)} className='relative hoverImage cursor-pointer  duration-500 h-2/5'>
                        <img
                            src={image2}
                            className='w-100 h-full shadow-1-strong duration-500 cursor-pointer hoverImage rounded mb-4'
                            alt='Waves at Sea'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Variations Gallery
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open8?"showimage":"hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image2} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={()=>setOpen8(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose/>
                            </span>
                        </div>
                    </div>

                    <div onClick={() => setOpen9(true)} className='relative hoverImage cursor-pointer  duration-500 h-2/5'>
                        <img
                            src={image6}
                            className='w-100 h-full object-cover hoverImage shadow-1-strong duration-500 cursor-pointer rounded mb-4'
                            alt='Yosemite National Park'
                        />
                        <p className='absolute bottom-3 left-5 text-white text-xl font-medium'>
                            Variations Mode
                        </p>
                        <span className='eye-work text-3xl text-gray-200 -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4'><BsEyeFill/></span>

                    </div>
                    <div className={`fixed ${open9?"showimage":"hideimage"} items-center justify-center left-0 w-full bottom-0 z-20 h-full bg-black`}>
                        <div className='flex justify-center items-center'>
                            <img src={image6} className='absolute top-2/4 -translate-y-2/4 w-3/4 mx-auto rounded' alt="" />
                            <span onClick={()=>setOpen9(false)} className='absolute right-10 bg-gray-400 hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer text-white duration-500 z-50  top-10'>
                                <AiOutlineClose/>
                            </span>
                        </div>
                    </div>
                    
                </MDBCol>

            </MDBRow>
        </div>
    );
}

export default WorkCom2