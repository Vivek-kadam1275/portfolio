import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import resume from "../assets/resume.pdf";
const Navbar = (props) => {
    const navigator = useNavigate();
    return (
        <div className="bg-black fixed top-0 w-full shadow-md">
            <div className=" flex w-10/12 min-w-[700px]  py-5 mx-auto justify-between px-7 flex-wrap items-center ">
                <h2 className="font-bold text-2xl text-white cursor-pointer" onClick={() => {
                    navigator('/')
                }}>PORT<span className="text-[#ff004f]">FOLIO</span></h2>
                <div>
                    <div className="text-white flex gap-6 h-10 items-center text-xl ">
                        <button onClick={() => {
                            navigator('/');
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">Home</button>

                        <button onClick={() => {
                            navigator("/about")
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">About me</button>

                        <button className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1"> <a href={resume} target="_blank">Resume</a></button>

                        <button onClick={() => {
                            navigator('/contact')
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
