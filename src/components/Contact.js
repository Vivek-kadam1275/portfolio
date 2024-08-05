import React from "react"
import { BsFillCursorFill } from "react-icons/bs";

const Contact = (props) => {
    function submitHandler(event) {
      event.preventDefault();

     }
    return (
        <div className="bg-[#e7e7e7] pt-44 pb-10">

            <div className="flex flex-col  w-10/12 mx-auto gap-3 ">
                
                    <h1 className="text-7xl text-[#ff0045] font-semibold">Contact Me</h1>
                    <h2 className="text-[#707692] text-5xl font-semibold">Questions, thoughts, or just want to say hello?</h2>
           

              
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-4 w-4/6 mx-auto mt-24 ">
                    <input type="text" placeholder="Enter your name" className="border-[1px] border-black px-4 py-2 text-lg" />
                    <input type="email" placeholder="Enter your email address " className="border-[1px] border-black px-4 py-2 text-lg" />
                    <input type="text" placeholder=" Enter your subject" className="border-[1px] border-black px-4 py-2 text-lg" />
                    <textarea placeholder="Enter your message" className="border-[1px] border-black px-4 py-2 text-lg" rows={10} cols={10}  />

                    <button className="bg-red-500 hover:bg-white hover:text-black  transition-all duration-300 w-1/3 py-2 px-3 text-white text-3xl flex justify-center items-center gap-4 "><span>Send Message</span>
                    <BsFillCursorFill />
                     </button>
            </form>


        </div>
    )
};

export default Contact;
