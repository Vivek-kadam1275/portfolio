import React from "react"
import { IoMdMail } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = (props) => {
    return (
        <div className="bg-black pt-14 pb-5 mt-20">
            <div className="w-10/12  mx-auto flex flex-col gap-5 ">
                <div className="text-[#9babab] flex justify-around  items-center min-w-[700px] text-lg">
                    <p className="flex items-center gap-2 "> <IoMdMail /> <span>vk2567298@gmail.com</span></p>
                    <p className="flex items-center gap-2"><FaRegAddressCard /><span>Patan,Maharashtra-415205</span>                </p>
                    <p className="flex items-center gap-2"><FaPhoneAlt /><span>  +91-7287239379</span>              </p>
                </div>
                <div className="flex justify-center items-center gap-6 min-w-[700px] ">
                    <div className="rounded-full w-12 h-12 bg-[#ff004f] flex items-center justify-center hover:scale-125 transition-all duration-200"><FaLinkedin className="text-4xl  " /></div>

                    <div className="rounded-full w-12 h-12 bg-[#ff004f] flex items-center justify-center hover:scale-125 transition-all duration-200">
                    <FaGithub className="text-4xl  "/>
                    </div>
                    <div className="rounded-full w-12 h-12 bg-[#ff004f] flex items-center justify-center hover:scale-125 transition-all duration-200">
                    <IoLogoInstagram className="text-4xl  "/>
                    </div>

                </div>
                <p className="flex text-[#9babab] text-lg items-center justify-center min-w-[700px]">
                    <FaRegCopyright /><span> CopyRight By Vivek Kadam</span>
                </p>
            </div>
        </div>
    )
};

export default Footer;
