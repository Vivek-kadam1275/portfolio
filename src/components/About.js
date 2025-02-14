import React, { useState } from "react"
// import vivek from "../assets/vivek.png"
import Template from "./Template";
import { Skills } from "../data";
import { Education } from "../data";
import { Projects } from "../data";
const About = (props) => {
  const [about, setAbout] = useState({ Skill: true, Education: false, Project: false });
  function skillhandler() {
    setAbout({ Skill: true, Education: false, Project: false });
  }
  function educationHandler() {
    setAbout({ Skill: false, Education: true, Project: false })
  }
  function projectHandler() {
    setAbout({ Skill: false, Education: false, Project: true })
  }

  return (
    <div className=" bg-[#181c31] pb-4 flex items-center w-screen about-res    ">
      <div className="flex justify-around items-center w-10/12 min-w-[360px] mx-auto flex-wrap   " >
        <img src="https://res.cloudinary.com/dti8wm0fk/image/upload/v1738509678/vk_blazer2_ddejyq.jpg" alt="https://res.cloudinary.com/dti8wm0fk/image/upload/v1738509678/vk_blazer2_ddejyq.jpg" className=" w-1/4 rounded-full min-w-[300px] about-image-res " loading="lazy" />

        <div className=" w-1/2 min-w-[360px] text-white flex flex-col gap-8">
          <h1 className="text-center text-7xl font-bold min-w-1/2 about-title-res">About Me</h1>
          <div className="flex flex-col gap-4">
            <p className="text-[#9babab] text-[18px] w-full text-left">I'm a Information Technology Engineering Student pursuing B.E. at Progressive Education Society's, Modern College of Engineering, Pune. And here is my portfolio website. Here you’ll learn about my journey as a Web developer.
            </p>

            <div className="min-w-[200px]">
              <div className="flex w-full gap-6">
                <div>
                  <button onClick={skillhandler} className="py-1 px-2 text-[18px]">Skills</button>
                  <div className={`${about.Skill === true ? "bg-red-500" : "bg-black"} w-full h-1  `}></div>
                </div>
                <div>
                  <button onClick={educationHandler} className="py-1 px-2 text-[18px]">Education</button>
                  <div className={`${about.Education === true ? "bg-red-500" : "bg-black"} w-full h-1  `}></div>
                </div>
                <div>
                  <button onClick={projectHandler} className="py-1 px-2 text-[18px]">Projects</button>
                  <div className={`${about.Project === true ? "bg-red-500" : "bg-black"} w-full h-1  `}></div>
                </div>
              </div>
              <div >
                {about.Skill && <div className="flex flex-col gap-2">
                  {Skills.map((item) => (
                    <Template item={item} key={item.id} />
                  ))}
                </div>}

                {about.Education && <div className="flex flex-col gap-2">
                  {Education.map((item) => (
                    <Template item={item} key={item.id} />
                  ))}
                </div>}
                {about.Project && <div className="flex flex-col gap-2">
                  {Projects.map((item) => (
                    <Template item={item} key={item.id} />
                  ))}
                </div>}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
};

export default About;
