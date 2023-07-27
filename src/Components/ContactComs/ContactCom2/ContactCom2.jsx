import React from "react";
import { FaLocationDot } from 'react-icons/fa6'
import Form from 'react-bootstrap/Form';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const ContactCom2 = () => {
    return (
        <div style={{ backgroundColor: "rgb(15,15,15)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-44 px-6 gap-2w  py-20">
                <div className="grid-span-1 text-white my-5 space-y-8">
                    <div>
                        <h3 className="text-3xl font-semibold">Get in Touch</h3>
                        <p>
                            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                            dapibus eu, fermentum et, dapibus sed, urna.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold tracking-wider mb-4">Our Office</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start justify-start gap-4">
                                <span className="text-xl"><FaLocationDot /></span>
                                <span className="w-2/4 text-white">
                                    70 Washington Square South New York, NY 10012, United States
                                </span>
                            </div>

                            <div className="flex items-start justify-start gap-4">
                                <span className="text-xl"><HiOutlineMail /></span>
                                <span className="w-2/4 text-white">
                                    Mo.Taher@Gmail.com
                                </span>
                            </div>
                            <div className="flex items-start justify-start gap-4">
                                <span className="text-xl"><BsFillTelephoneFill /></span>
                                <span className="w-2/4 text-white">
                                    +0127 909 8049
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-span-1 py-10 rounded" style={{ backgroundColor: "rgb(20,20,20)" }}>
                    <form className="px-4 space-y-5">
                        <div>
                            <label htmlFor="name" className="text-white">Name</label>
                            <Form.Control id="name" size="normal" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-white">email</label>
                            <Form.Control id="email" size="normal" type="text" placeholder="email" />
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-white">Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </div>
                        <div>
                            <button className="w-fit bg-transparent text-white px-12 py-0.5 tracking-widest text-lg btn-border">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactCom2;
