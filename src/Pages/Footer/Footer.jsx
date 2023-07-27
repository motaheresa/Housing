import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";
import { PiFacebookLogo } from "react-icons/pi";
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { Divider } from "@mantine/core";

const Footer = () => {
    return (
        <div className="footer m-0 text-start text-muted">
            <section className="py-10 lg:px-0 px-6">
                <div className=" text-start">
                    <div className="grid grid-cols-4 px-6 gap-3 md:px-20 lg:px-44">
                        <div  className="col-span-4 lg:col-span-1 mb-4">
                            <h6 className="text-uppercase text-3xl fw-bold mb-4 text-white">
                                <MDBIcon icon="gem" />
                                About Us
                            </h6>
                            <p className="text-white">
                                Donec mollis quisque convallis libero in sapien pharetra
                                tincidunt. Aliquam elit ante, Maecenas suscipit.
                            </p>
                            
                        </div>

                        
                        <div  className="footer mb-4 col-span-2 ml-0 lg:ml-6 lg:col-span-1 text-white">
                            <h6 className=" text-uppercase fw-bold mb-4">Usefull link</h6>
                            <p>
                                <span className="text-reset border-footer">Frequently Asked</span>
                            </p>
                            <p>
                                <span className="text-reset border-footer">
                                    Terms & Conditions
                                </span>
                            </p>
                            <p>
                                <span className="text-reset border-footer">
                                    Help Center
                                </span>
                            </p>
                            <p>
                                <span className="text-reset border-footer">
                                    Contact Us
                                </span>
                            </p>
                        </div>

                        <div className="mb-4  col-span-2 lg:col-span-1 lg:ml-0 text-white">
                            <h6 className="text-uppercase fw-bold mb-4">Features</h6>
                            <p>
                                <span className="text-reset border-footer">
                                    Career
                                </span>
                            </p>
                            <p>
                                <span className="text-reset border-footer">
                                    Brand Identity
                                </span>
                            </p>
                            <p>
                                <span className="text-reset border-footer">
                                    Investment
                                </span>
                            </p>
                            <p>
                                <span className="text-reset border-footer">
                                    Agency Patner
                                </span>
                            </p>
                        </div>
                        

                        <div className="col-span-4 lg:col-span-1 mb-md-0 mb-4 text-white">
                            <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
                            <p>Malesuada id, tempor eu, gravida id, odio. Maecenas suscipit.</p>
                            <ul className="flex items-center pl-0 gap-2">
                                <li className="text-2xl border-social-footer rounded-sm px-2 py-2"><BiLogoFacebook/></li>
                                <li className="text-2xl border-social-footer rounded-sm px-2 py-2"><BiLogoWhatsapp/></li>
                                <li className="text-2xl border-social-footer rounded-sm px-2 py-2"><BiLogoLinkedin/></li>
                                <li className="text-2xl border-social-footer rounded-sm px-2 py-2"><BiLogoGithub/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgb(17,17,17)",color:"#fff" }}
            >
                © 2023 Copyright : 
                <span className=" text-white fw-bold">
                    MoTaher.com
                </span>
            </div>
        </div>
    );
};

export default Footer;
