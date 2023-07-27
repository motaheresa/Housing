import React from "react";
import "./Pricing.css";
import { PiCheckFatFill } from 'react-icons/pi'
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing = () => {
    return (
        <div className="pricing py-10">
            <div className="flex flex-col items-center justify-center">
                <p className="head-team pb-1 text-2xl text-gray-200 tracking-wider mb-5">
                    Our Pricing
                </p>
                <h2 className="text-5xl text-gray-100 my-5">Easy Pricing</h2>
                <p className="lg:w-2/5 md:w-4/5 w-10/12 text-center text-gray-200 mb-14">
                    Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                    suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus
                    sollicitudin. Quisque vitae sodales lectus. Nam p orttitor justo sed
                    mi finibus, vel tristique risus faucibus.
                </p>
            </div>
            <ul className="flex items-center flex-wrap pl-0 justify-center gap-3 mx-3">
                <li className=" pb-9 px-2 bg-transparent border-zinc-700 border-pricing">
                    <div className="price-header text-center text-3xl text-white border-pricing-color py-4">
                        Basic
                    </div>
                    <div className="price-number text-center space-x-3 border-pricing-color py-4">
                        <span className=" text-5xl font-semibold">$29</span>
                        <small className="text-gray-400">Month</small>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                            <span className=""><PiCheckFatFill /></span>
                            <span className="text-sm font-sm ">Full Acces</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">Unlimited Bandwidth</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">Admin Panel</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">Email Account</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">8 Weeks Free Service</span>
                    </div>
                </li>
                <li className=" pb-9 px-2 bg-transparent border-zinc-700 border-pricing">
                    <div className="price-header text-center text-3xl text-white border-pricing-color py-4">
                        Standard
                    </div>
                    <div className="price-number text-center space-x-3 border-pricing-color py-4">
                        <span className=" text-5xl font-semibold">$39</span>
                        <small className="text-gray-400">Month</small>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                            <span className=""><PiCheckFatFill /></span>
                            <span className="text-sm font-sm">Full Access</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">Unlimited Bandwidth</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">Admin Panel</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">Email Account</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">8 Weeks Free Service</span>
                    </div>
                </li>
                <li className=" pb-9 px-2 bg-transparent border-zinc-700 border-pricing">
                    <div className="price-header text-center text-3xl text-white border-pricing-color py-4">
                        Advanced
                    </div>
                    <div className="price-number text-center space-x-3 border-pricing-color py-4">
                        <span className=" text-5xl font-semibold">$49</span>
                        <small className="text-gray-400">Month</small>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                            <span className=""><PiCheckFatFill /></span>
                            <span className="text-sm font-sm">Full Acces</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">Unlimited Bandwidth</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">Admin Panel</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">Email Account</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm">8 Weeks Free Service</span>
                    </div>
                </li>
                <li className=" pb-9 px-2 bg-transparent border-zinc-700 border-pricing">
                    <div className="price-header text-center text-3xl text-white border-pricing-color py-4">
                        Premium
                    </div>
                    <div className="price-number text-center space-x-3 border-pricing-color py-4">
                        <span className=" text-5xl font-semibold ">$59</span>
                        <small className="text-gray-400">Month</small>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                            <span className=""><PiCheckFatFill /></span>
                            <span className="text-sm font-sm ">Full Acces</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">Unlimited Bandwidth</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">Admin Panel</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">Email Account</span>
                    </div>
                    <div className="flex items-center gap-2 border-pricing-color text-white py-2.5">
                        <span className=""><PiCheckFatFill /></span>
                        <span className="text-sm font-sm ">8 Weeks Free Service</span>
                    </div>
                </li>
            </ul>
        </div >
    );
};

export default Pricing;
