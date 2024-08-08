import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import resume from "../assets/resume.pdf";
const Navbar = (props) => {
    const navigator = useNavigate();
    return (
        <div className="bg-black   w-screen min-w-[360px] shadow-md overflow-y-hidden ">
            <div className=" flex w-10/12 min-w-[360px] py-5 mx-auto justify-between   flex-wrap items-center gap-4 ">
                <h2 className="font-bold text-2xl text-white cursor-pointer" onClick={() => {
                    navigator('/')
                }}>PORT<span className="text-[#ff004f]">FOLIO</span></h2>
                <div>
                    <div className="text-white flex gap-6  items-center text-xl flex-wrap">
                        <button onClick={() => {
                            navigator('/');
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">Home</button>

                        <button onClick={() => {
                            navigator("/about")
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">About me</button>

                        <button className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1"> <a href={resume} target="_blank" className="border-none p-none">Resume</a></button>

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
