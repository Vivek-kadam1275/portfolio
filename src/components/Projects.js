import React from "react"
import weatherNow from '../assets/weatherNow.mp4';
import ECOMZY from '../assets/ECOMZY.mp4';
// import Pathocare from '../assets/Pathocare.mp4'
const Projects = (props) => {
    return (
        <div className="bg-[#181c31] w-screen  pt-20 overflow-y-scroll ">
            {/* <div className="">
                <iframe src="https://www.youtube.com/embed/zAV-iP7xWrs?si=lHm0xZapvCHxW9aT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-[560px] h-[315px] project-res" allowfullscreen></iframe>
                <p className="text-white font-semibold text-center">PathoCare: Pathology Management System </p>
            </div> */}
            <div className="w-10/12  mx-auto flex gap-y-6 flex-wrap justify-around py-10">
                <div className="flex flex-col items-center gap-1">
                    <video width="600" height="400" poster="" controls>
                        <source src={Pathocare} type="video/mp4" />
                        Your browser does not support the video tag.
                    
                    </video>
                    <h2 className="text-white text-xl">PathoCare</h2>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <video width="600" height="400" loadin controls>
                        <source src={ECOMZY} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="text-white text-xl">ECOMZY</h2>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <video width="600" height="400" controls>
                        <source src={weatherNow} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="text-white text-xl">weatherNow</h2>
                </div>




            </div>


        </div>
    )
};

export default Projects;
