import React,{useEffect,useRef} from "react"
import Typed from "typed.js";
const TypedDescription = (props) => {
    const el = useRef(null);
    const typed = useRef(null);
  
    useEffect(() => {
      const options = {
        strings: [
          "Full Stack Developer",
          "Web Developer",
          "UI-UX Designer",
          "Backend Developer",
          "Coder",
        ],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
        loop: true,
      };
  
      // Initialize Typed.js
      typed.current = new Typed(el.current, options);
  
      // Clean up on component unmount
      return () => {
        typed.current.destroy();
      };
    }, []);
  
    return (
      <div className="text-[#fe1e1e] text-5xl font-semibold ">
        a <span ref={el} />
      </div>
    );
};

export default TypedDescription;
