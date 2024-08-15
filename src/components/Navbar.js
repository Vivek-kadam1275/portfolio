import React, { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom";
import resume from "../assets/resume.pdf";
import { GiHamburgerMenu } from "react-icons/gi";

 const Navbar = (props) => {
    const navigator = useNavigate();
    const [display,setDisplay]=useState(true);
    function burgerHandler(){
           setDisplay(!display); // Toggling the display.
           
            
    }

    useEffect(()=>{
       if(window.innerWidth<941){
        setDisplay(false);
       }
       
    },[window.innerWidth<941]);


     
    
    
    return (
        <div className="bg-gray-500 w-screen  min-h-[40px] shadow-md   fixed">
            <div className={` flex w-10/12 min-w-[360px] py-5 mx-auto justify-between  px-10  items-center gap-4 navbar-res    ${display ? "flex ":"hidden bg-transparent"} transition-all duration-200`}>
                <h2 className="font-bold text-2xl text-white cursor-pointer" onClick={() => {
                    navigator('/')
                }}>PORT<span className="text-[#ff004f]">FOLIO</span></h2>
                <div>
                    <div className="text-white flex gap-6  items-center text-xl navbar-res">
                        <button onClick={() => {
                            navigator('/');
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">Home</button>

                        <button onClick={() => {
                            navigator("/about")
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">About me</button>

                        <button className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1"> <a href={resume} target="_blank" rel="noreferrer" className="border-none p-none">Resume</a></button>
                        
                        <button className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1" onClick={()=>{
                            navigator('/projects')
                        }}>Projects</button>
                        <button onClick={() => {
                            navigator('/contact')
                        }} className="hover:bg-red-500 hover:text-black rounded-md px-2 py-1">Contact me</button>
                    </div>
                </div>
            </div>
          <div className={`absolute  right-2  gap-1  hidden burger-res cursor-pointer text-white text-2xl ${display? "top-5" : "top-2"} `} onClick={burgerHandler}>
          <GiHamburgerMenu />
            </div>            
        </div>
    )
};

export default Navbar;
