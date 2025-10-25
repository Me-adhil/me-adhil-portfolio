import hero from "../assets/hero.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaLinkedin, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="scroll-down-animation">
      <div className=" grid fade-in md:grid-cols-2 grid-1 pt-10 md:pt-25 z-99 scroll-animation">
        <div className="w-full fade-in flex flex-col justify-end items-start pl-5 pt-5 md:pt-0 md:pl-15 lg:pl-30 pr-5 md:pr-15 md:order-1 order-2  ">
          <button className="fade-in cursor-pointer border rounded-full text-white text-sm lg:text-md px-4 bg-[#181818] py-2 border-gray-700 flex items-center hover:bg-[#F34F1C] hover:border-transparent transition-all duration-300 ease-in-out">
            Get in Touch <FaArrowRight className="ml-2" />
          </button>
          <h4 className="font-regular fade-in  text-[#F34F1C]  text-md md:text-md lg:text-2xl mt-2 ">
            Hello I’m a{" "}
          </h4>
          <h2 className="fade-in  font-bold text-4xl sm:text-6xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white mt-[-12px] to-[#979797] text-transparent bg-clip-text">
            Muhammed
            <br />
            Adhil P
          </h2>
          <h6 className="fade-in  leading-4 md:leading-3 lg:leading-4 text-sm md:text-[10px] lg:text-[15px] text-white ">
            I design and develop modern, interactive, and high-performing
            websites that tell a story. From concept to deployment, I bring
            digital ideas to life with a perfect blend of creativity and clean
            code. Every project I craft focuses on seamless user experience and
            striking visual appeal.
          </h6>
        </div>
        <div className="fade-in pr-5 pl-5  md:pl-0  pt-0 md:pr-15 lg:pr-30 md:pt-5 flex flex-col md:order-2 order-1">
          <div className="fade-in text-white text-md md:text-sm lg:text-[16px] font-medium flex justify-between px-8 sm:px-30 md:px-6 lg:px-10 xl:px-20 mb-4 ">
            <a href="">Home</a>
            <a href="" className="text-gray-500">
              About
            </a>
            <a href="" className="text-gray-500">
              Protfolio
            </a>
            <a href="" className="text-gray-500">
              Contact
            </a>
          </div>
          <div className="fade-in w-full h-80  rounded-2xl bg-gradient-to-r  from-[#F34F1C] to-[#c01711] hover:scale-103 transition-transform duration-300">
            <img
              src={hero}
              className="h-full  object-cover rounded-2xl opacity-35"
              alt=""
            />
          </div>
          <div className="fade-in w-full flex justify-center items-center h-30  mt-5 rounded-2xl border border-gray-700 bg-[#181818] font-bold text-4xl sm:text-6xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white  to-[#979797] text-transparent bg-clip-text">
            <Typewriter
              cursorColor="white"
              words={["Developer", "Designer", "Video Editor"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </div>
        </div>
      </div>
      <div className="fade-in px-5 md:px-15 lg:px-30 flex justify-center md:justify-end mt-5 space-x-2">
        <div className=" group w-8 h-8 border hover:bg-white hover:border-0 transition ease-in-out duration-300 border-gray-700 bg-[#181818] rounded-full flex items-center justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" group-hover:text-[#181818] text-[#F34F1C] transition"
          >
            <FaInstagram size={16} />
          </a>
        </div>
        <div className=" group w-8 h-8 border hover:bg-white hover:border-0 transition ease-in-out duration-300 border-gray-700 bg-[#181818] rounded-full  flex items-center justify-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" group-hover:text-[#181818]   text-[#F34F1C] transition"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
