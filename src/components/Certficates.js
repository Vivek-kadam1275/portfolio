import React, { useState } from "react"
import { CertificatesData } from "../data";
import CertificateCard from "./CertficateCard";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Certificates = (props) => {
    // console.log(CertificatesData.length)
    const [index, setIndex] = useState(0);
    const leftClickHandler = () => {
        index === 0 ? setIndex(CertificatesData.length - 1) : setIndex(index - 1)
    }
    const rightClickHandler = () => {
        index === CertificatesData.length - 1 ? setIndex(0) : setIndex(index + 1);

    }
    return (

        <div className="bg-[#e7e7e7] w-screen h-screen flex flex-col justify-center items-center gap-4 certificate-bg-res  pt-[40px]">

            <CertificateCard certificate={CertificatesData[index]} />
            <button onClick={()=>{
                setIndex(0);
            }} className="bg-red-500 hover:bg-red-700 hover:text-white px-2 py-1 rounded-md ">Refresh</button>
            <div className="flex justify-center gap-10">
                <MdOutlineKeyboardArrowLeft onClick={leftClickHandler} className="text-4xl hover:text-gray-500" />
                <MdOutlineKeyboardArrowRight onClick={rightClickHandler} className="text-4xl hover:text-gray-500" />
            </div>
        </div>
    )
};

export default Certificates;
