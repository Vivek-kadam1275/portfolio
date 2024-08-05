import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import resume from "../assets/resume.pdf";
const Navbar = (props) => {
    const navigator=useNavigate();
    return (
        <div className="bg-black fixed top-0 w-full shadow-md">
            <div className=" flex w-10/12 min-w-[1080px] py-5 mx-auto justify-between px-7">
                <h2 className="font-bold text-2xl text-white" onClick={()=>{
    navigator('/')
                }}>PORT<span className="text-[#ff004f]">FOLIO</span></h2>
                <div>
                    <div className="text-white flex gap-6 h-10 items-center text-xl ">
                         <NavLink to="/">Home</NavLink>
                         <NavLink to="/about">About me</NavLink>
                         <a href={resume} target="_blank">Resume</a>
                         <NavLink to="/contact">Contact me</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
