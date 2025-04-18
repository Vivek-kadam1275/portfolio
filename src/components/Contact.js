import React,{useState} from "react"
import { BsFillCursorFill } from "react-icons/bs";
import Footer from "./Footer";

const Contact = (props) => {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        subject:'',
        message:'',
        })

     const changeHandler=(e)=>{
        const {name,value}=e.target;
        
        setFormData((prev)=>{
            return {...prev,[name]:value}
        })

        

        // console.log(formData);
     }   
    function submitHandler(event) {
      event.preventDefault();
      console.log(formData);
      const {subject,message}=formData;

      const mailtoLink=`mailto:vk2567298@gmail.com?subject=${subject}&body=${message}`
      window.location.href = mailtoLink;
     }
    return (
        <div className="bg-[#e7e7e7] pt-44 w-screen ">

            <div className="flex flex-col  w-10/12 mx-auto gap-3 ">
                
                    <h1 className="text-7xl text-[#ff0045] font-semibold contact-res">Contact Me</h1>
                    <h2 className="text-[#707692] text-5xl font-semibold contact-res">Questions, thoughts, or just want to say hello?</h2>
           

              
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-4 w-4/6 mx-auto mt-24 ">
                    <input type="text" placeholder="Enter your name" value={formData.name} name="name" onChange={changeHandler} className="border-[1px] border-black px-4 py-2 text-lg" />

                    <input type="email" placeholder="Enter your email address "  value={formData.email} name="email" onChange={changeHandler} className="border-[1px] border-black px-4 py-2 text-lg" />

                    <input type="text" placeholder=" Enter your subject" value={formData.subject} name="subject" onChange={changeHandler} className="border-[1px] border-black px-4 py-2 text-lg" />

                    <textarea placeholder="Enter your message" value={formData.message} name="message" onChange={changeHandler} className="border-[1px] border-black px-4 py-2 text-lg" rows={10} cols={10}  />


                    <button className="bg-red-500 hover:bg-white hover:text-black  transition-all duration-300 w-1/3 min-w-[200px]  py-2 px-3 text-white text-3xl  flex justify-center items-center gap-4  contact-btn-res"><span>Send Message</span>
                    <BsFillCursorFill />
                     </button>
            </form>
            <Footer/>


        </div>
    )
};

export default Contact;
