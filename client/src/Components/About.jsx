
const About = () => {
  
  return (
    <div className=" fade-in px-5 md:px-15 lg:px-30 mt-30 lg:mt-50 transition-all ease-in-out">
      <h4 className="scroll-animation font-regular text-[#F34F1C]  text-md md:text-md lg:text-2xl  ">Introduction</h4>
      <h2 className="scroll-animation font-bold  text-4xl sm:text-6xl md:text-4xl lg:text-6xl bg-gradient-to-r from-white mt-[-12px] to-[#979797] text-transparent bg-clip-text">
        Overview.
      </h2>
      <h6 className=" scroll-animation leading-4 md:leading-3 lg:leading-4 text-sm md:text-[10px] lg:text-[15px] text-white ">
        I’m Muhammed Adhil P, a passionate Full Stack Web Developer and creative designer from India. I specialize in building engaging web applications using MERN stack, Next.js, and React. My mission is to create digital solutions that are not only functional but also visually captivating.
      </h6>
      <div className="scroll-animation grid grid-cols-3 md:grid-cols-6 text-sm md:text-md lg:text-md gap-3 mt-15">
        <div className="w-full h-15 card rounded-2xl border-2 border-white flex items-center justify-center text-center "><h2 className="text-white font-medium leading-4 ">Responsive<br/>Web Design</h2></div>
        <div className="w-full h-15 card rounded-2xl border-2 border-white flex items-center justify-center text-center "><h2 className="text-white font-medium leading-4">Full-Stack<br/>Applications</h2></div>
        <div className="w-full h-15 card rounded-2xl border-2 border-white flex items-center justify-center text-center "><h2 className="text-white font-medium leading-4">UI/UX<br/>Design</h2></div>
        <div className="w-full h-15 card rounded-2xl border-2 border-white flex items-center justify-center text-center "><h2 className="text-white font-medium leading-4">Graphic<br/>Designing</h2></div>
        <div className="bg-gradient-to-r card  w-full h-15 rounded-2xl border-2 border-white flex items-center justify-center text-center "><h2 className="text-white font-medium leading-4">Video<br/>Editing</h2></div>
        <div className="w-full h-15 card rounded-2xl border-2 border-white flex items-center justify-center text-center "><h2 className="text-white font-medium leading-4">Motion<br/>Graphics</h2></div>
      </div>
    </div>
  );
};

export default About;
