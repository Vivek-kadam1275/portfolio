import React from "react"
import home from "../assets/home.jpg"
import TypedDescription from "./TypedDescription";
import Navbar from "./Navbar";
const Home = (props) => {
  return (

    <div className="">
      
      <div className="relative -z-10   ">
        <div className="absolute -z-20  h-[100vh] ">
          <img src={home} alt="home page" loading="eager" className="h-full w-screen " />
        </div>
        <div className="flex flex-col min-w-[360px] h-[100vh]  justify-center w-10/12 mx-auto gap-3  flex-wrap">
          <h2 className="text-5xl text-white">Hello, I'm</h2>
          <h1 className="text-6xl font-bold text-white">Vivek Dadasaheb Kadam</h1>
          <TypedDescription />



        </div>
      </div>
    </div>
  )
};

export default Home;
