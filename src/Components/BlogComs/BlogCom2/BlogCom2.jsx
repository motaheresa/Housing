import React from "react";
import image1 from "../../../assests/service.jpg";
import image2 from "../../../assests/2.jpg";
import image3 from "../../../assests/service3.jpg";
import image4 from '../../../assests/service4.jpg'
import './BlogCom2.css'


const BlogCom2 = () => {
    const serviceCom2 = {
        backgroundColor: "rgb(17,17,17)",
    }
    const recent = {
        borderColor: "rgb(200,177,111)"
    }
    const background_p = {
        backgroundColor: "rgb(51,51,51)",
        fontFamily: "cursive",
        borderColor: "rgb(200,177,111)"
    }

    return (
        <div style={serviceCom2}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 md:px-44 py-12">
                <div className="col-span-2">
                    <img src={image4} alt="" />
                    <div className="text-white text-2xl my-7">
                        EXTERIOR
                    </div>
                    <p className="text-white">
                        An international firm of architects, planners and interior designers
                        specialising in a wide range of commercial, residential and public
                        sector projects.
                    </p>
                    <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting
                    </p>
                    <div style={background_p} className="text-gray-400 my-4 px-3 py-6 border-l-4">
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi
                        erat porttitor ligula, eget lacinia odio sem nec elit. Integer
                        posuere erat a ante venenatis dapibus posuere velit aliquet.
                    </div>
                    <div className="text-white">
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum. Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus,
                        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer
                        posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean
                        eu leo quam.
                    </div>
                </div>
                <div className="col-span-1 w-full space-y-12 mt-10 lg:mt-0 lg:space-y-8">
                    <h3 className="text-3xl text-white pb-2 border-b w-fit tracking-wider" style={recent}>Recent posts</h3>
                    <div className="flex flex-col">
                        <div className=" flex items-center gap-2 justify-center">
                            <img src={image1} className="w-1/5 h-20 object-cover" alt="" />
                            <div className="flex flex-col ">
                                <p className="text-lg font-semibold text-white m-0">Lorem ipsum dolor sit</p>
                                <p className="text-gray-300">
                                    Mazim alienum appellantur eu cu ullum officiis pro pri
                                </p>
                            </div>
                        </div>
                        <div className=" flex items-center gap-2 justify-center">
                            <img src={image2} className="w-1/5 h-20 object-cover" alt="" />
                            <div className="flex flex-col ">
                                <p className="text-lg font-semibold text-white m-0">Et mei iusto dolorum</p>
                                <p className="text-gray-300">
                                    Mazim alienum appellantur eu cu ullum officiis pro pri
                                </p>
                            </div>
                        </div>
                        <div className=" flex items-center gap-2 justify-center">
                            <img src={image3} className="w-1/5 h-20 object-cover" alt="" />
                            <div className="flex flex-col ">
                                <p className="text-lg font-semibold text-white m-0">Maiorum ponderum eum</p>
                                <p className="text-gray-300">
                                    Mazim alienum appellantur eu cu ullum officiis pro pri
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl text-white pb-2 mb-5 border-b w-fit tracking-wider" style={recent}>Tags</h3>
                        <div className="flex flex-wrap gap-3">
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Interior</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Trend</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Photography</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Design</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Exterior</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Website</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">React Js</button>
                            <button className="btns-hover duration-300 px-3 py-0.5 bg-transparent border text-white">Creative</button>
                        </div>
                    </div>
                    <div className="bg-widget  flex flex-col justify-center items-center py-12">
                        <h3 className="text-white">Get A quote</h3>
                        <p className="text-white">
                            With Experts Advice
                        </p>
                        <button className="w-fit bg-transparent text-white px-4 py-2 tracking-widest btn-border">
                            Download Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCom2;
