import React from "react";
import image1 from "../../../assests/service3.jpg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './ServiceCom2.css'

const ServiceCom2 = () => {
    const serviceCom2 = {
        backgroundColor: "rgb(17,17,17)",
    }
    const Design_Word_Color = {
        color: "rgb(200,177,111)"
    }
    const background_p = {
        backgroundColor: "rgb(51,51,51)",
        fontFamily: "cursive",
        borderColor: "rgb(200,177,111)"
    }
    const style = {
        bgcolor: '#333333',
        color: "white",
    };

    return (
        <div style={serviceCom2}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 md:px-44 py-12">
                <div className="col-span-2">
                    <img src={image1} alt="" />
                    <div className="text-white text-2xl my-7">
                        MODERN <span style={Design_Word_Color}>DESIGN</span>
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
                <div className="col-span-1 space-y-12 mt-10 lg:mt-0 lg:space-y-8">
                <List className="w-full" sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="All Works" />
                        </ListItem>
                        <Divider className=" bg-gray-400" />
                        <ListItem className=" bg-zinc-800 cursor-pointer" >
                            <ListItemText primary="Modern Design" />
                        </ListItem>
                        <Divider className=" bg-gray-400" />
                        <ListItem button>
                            <ListItemText primary="Interior" />
                        </ListItem>
                        <Divider className=" bg-gray-400" />
                        <ListItem button>
                            <ListItemText primary="Architecture" />
                        </ListItem>
                        <Divider className=" bg-gray-400" />
                        <ListItem button>
                            <ListItemText primary="Exterior" />
                        </ListItem>
                    </List>
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

export default ServiceCom2;
