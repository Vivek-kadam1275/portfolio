import React from "react"
 
// import Pathocare from '../assets/Pathocare.mp4'
const Projects = (props) => {
    return (
        <div className="bg-[#181c31] w-screen  pt-20 overflow-y-scroll ">

            <div className="w-10/12 min-w-[360px] mx-auto flex gap-y-6 flex-wrap justify-around py-10 project-container-res">
                <div className="flex flex-col items-center gap-1">
                    {/* <video width="600" height="400" poster="" controls>
                        <source src={Pathocare} type="video/mp4" />
                        Your browser does not support the video tag.
                    
                    </video> */}
                    <iframe src="https://www.youtube.com/embed/zAV-iP7xWrs?si=lHm0xZapvCHxW9aT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  width="560px" height="315px" className="project-res"/>

                    <h2 className="text-white text-xl u">PathoCare</h2>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <video width="560" height="315" className="project-res" controls>
                        <source src="https://res.cloudinary.com/dti8wm0fk/video/upload/v1738511466/ECOMZY_t6rz9c.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="text-white text-xl">ECOMZY</h2>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <video width="560" height="315"className="project-res" controls>
                        <source src="https://res.cloudinary.com/dti8wm0fk/video/upload/v1738511534/weatherNow_w4egnf.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="text-white text-xl uppercase">weatherNow</h2>
                </div>




            </div>


        </div>
    )
};

export default Projects;
