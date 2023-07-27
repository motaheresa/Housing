import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assests/logo.png'
import './Header.css'
import { Link } from "react-router-dom";




export default function Example() {
    return (
        <Disclosure as="nav" className="absolute w-full z-20 md:bg-transparent bg-color-navbar text-decoration-none">
            {({ open }) => (
                <>
                    <div className=" z-20 mx-auto w-full px-2 sm:px-6 lg:px-8">
                        <div className=" flex h-16 py-10 md:pt-16 lg:px-20 md:px-10 items-center justify-between">
                        <div className=" flex items-center pr-2 sm:inset-auto sm:ml-6 sm:pr-0">
                                <img src={logo} alt="" />
                            </div>
                        <div className=" flex items-center justify-center sm:items-stretch sm:justify-end">
                                <div className="hidden sm:ml-6 sm:block">
                                    <ul className="flex justify-end space-x-12 z-30 text-white font-semibold">
                                        <Link to="/" className="text-white text-decoration-none  font-semibold li-header cursor-pointer">Home</Link>
                                        <Link to="/about" className="text-white text-decoration-none font-semibold li-header cursor-pointer">About Us</Link>
                                        <Link to="/team" className="text-white text-decoration-none font-semibold li-header cursor-pointer">Team</Link>
                                        <Link to="/work" className="text-white text-decoration-none font-semibold li-header cursor-pointer">Works</Link>
                                        <Link to="/service" className="text-white text-decoration-none font-semibold li-header cursor-pointer">Service</Link>
                                        <Link to="/blog" className="text-white text-decoration-none font-semibold li-header cursor-pointer">Blog</Link>
                                        <Link to="/contact" className="text-white text-decoration-none font-semibold li-header cursor-pointer">Contact</Link>
                                    </ul>
                                </div>
                            </div>
                            <div className=" inset-y-0 right-0  flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            
                            

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <ul className="space-y-5 px-2 pb-3 pt-2  bg-color-navbar text-decoration-none text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md py-2 text-base font-medium">
                            <Link to="/" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                Home
                            </Link>
                            <Link to="about" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                About Us
                            </Link>
                            <Link to="/team" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                Team
                            </Link>
                            <Link to="/work" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                Works
                            </Link>
                            <Link to="/service" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                Service
                            </Link>
                            <Link to="/blog" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                Blog
                            </Link>
                            <Link to="/contact" className=" bg-color-navbar text-decoration-none text-white : text-gray-300 hover:bg-gray-700 hover:text-white',
                                        block rounded-md px-3 py-2 text-base font-medium">
                                Contact
                            </Link>
                        </ul>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
