import React from "react";
import "./WhyChooseUs.css"


const WhyChooseUs = () => {
    return (
        <div className="why-choose-us py-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <h2 className="text-5xl font-semibold my-auto ml-12 mr-0 md:mx-auto">why choose us?</h2>
                <div className="mx-12 text-left space-y-3">
                    <p className="text-gray-300 mr-0 md:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus
                        sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi
                        finibus, vel tristique risus faucibus.
                    </p>
                    <p className="text-gray-300 mr-0 md:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Quisque vitae sodales lectus, vel tristique risus faucibus.
                    </p>
                </div>
            </div>
            <ul className="grid gap-y-12 md:gap-4 lg:gap-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-10 md:mx-20 lg:mx-36 my-10 items-center justify-center">
                <li>
                    <h2 className="number-color text-3xl font-semibold">01.</h2>
                    <h3 className="text-white font-xl font-semibold py-1">MODERN DESIGN</h3>
                    <p className="text-gray-300 mr-0 lg:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae lectus.
                    </p>
                </li>
                <li>
                    <h2 className="number-color text-3xl font-semibold">02.</h2>
                    <h3 className="text-white font-xl font-semibold py-1">FULLY SUPPORT</h3>
                    <p className="text-gray-300 mr-0 lg:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae lectus.
                    </p>
                </li>
                <li>
                    <h2 className="number-color text-3xl font-semibold">03.</h2>
                    <h3 className="text-white font-xl font-semibold py-1">MAINTENANCE SUPPORT</h3>
                    <p className="text-gray-300 mr-0 lg:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae lectus.
                    </p>
                </li>
                <li>
                    <h2 className="number-color text-3xl font-semibold">04.</h2>
                    <h3 className="text-white font-xl font-semibold py-1">EXPERT DEVELOPER</h3>
                    <p className="text-gray-300 mr-0 lg:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae lectus.
                    </p>
                </li>
                <li>
                    <h2 className="number-color text-3xl font-semibold">05.</h2>
                    <h3 className="text-white font-xl font-semibold py-1">COMPLIANCE SOLUTION</h3>
                    <p className="text-gray-300 mr-0 lg:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae lectus.
                    </p>
                </li>
                <li>
                    <h2 className="number-color text-3xl font-semibold">06.</h2>
                    <h3 className="text-white font-xl font-semibold py-1">24 / 7 Support</h3>
                    <p className="text-gray-300 mr-0 lg:mr-12">
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                        suscipit. Vestibulum auctor nunc vitae lectus.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default WhyChooseUs;
