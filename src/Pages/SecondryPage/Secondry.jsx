import React from "react";
import "./Secondry.css";
import image1 from "../../assests/bg-serv-1.jpg";
import image2 from "../../assests/bg-serv-2.jpg";
import image3 from "../../assests/bg-serv-3.jpg";

const Secondry = () => {
    return (
        <ul className="grid md:grid-cols-3 grid-cols-1 m-0 p-0">
            <li className="ser1">
                <div className="py-16 flex justify-center items-center flex-col h-full text-center">
                    <h3 className="text-2xl head-ser">Concept Design</h3>
                    <p className="mx-12 my-3 text-gray-300 font-thin text-md tracking-wider">
                        Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius
                        elitr saperet,ocurreret pertinacia pri an. No mei nibh consectetuer
                    </p>
                    <button className="bg-transparent text-white px-12 py-2 tracking-widest text-lg btn-border">Read More</button>
                </div>
            </li>
            <li className="ser2">
                <div className="py-16 flex justify-center items-center flex-col h-full text-center">
                    <h3 className="text-2xl head-ser">Interior</h3>
                    <p className="mx-12 my-3 text-gray-300 font-thin text-md tracking-wider">
                        Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius
                        elitr saperet,ocurreret pertinacia pri an. No mei nibh consectetuer
                    </p>
                    <button className="bg-transparent text-white px-12 py-2 tracking-widest text-lg btn-border">Read More</button>
                </div>
            </li>
            <li className="ser3">
            <div className="py-16 flex justify-center items-center flex-col h-full text-center">
                    <h3 className="text-2xl head-ser">Architecture</h3>
                    <p className="mx-12 my-3 text-gray-300 font-thin text-md tracking-wider">
                        Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius
                        elitr saperet,ocurreret pertinacia pri an. No mei nibh consectetuer
                    </p>
                    <button className="bg-transparent text-white px-12 py-2 tracking-widest text-lg btn-border">Read More</button>
                </div>
            </li>
        </ul>
    );
};

export default Secondry;
