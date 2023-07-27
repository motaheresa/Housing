import React from "react";
import image1 from "../../../assests/blog.jpg";

const AboutCom4 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: "rgb(17,17,17)" }}>
            <div className=" md:py-0 py-10 ">
                <div className="text-white flex flex-col justify-center items-left w-10/12 mx-auto h-full">
                    <h5>January 22, 2019</h5>
                    <h2 className="my-3 text-4xl font-semibold">Interior Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi
                        ut aliquip.
                    </p>
                    <button className="w-fit bg-transparent text-white px-12 py-2 tracking-widest text-lg btn-border">More Details</button>
                </div>
            </div>
            <div className=" w-full ">
                <img src={image1} className="w-full" alt="" />
            </div>
        </div>
    );
};

export default AboutCom4;
