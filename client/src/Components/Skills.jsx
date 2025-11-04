import React from "react";
import AnimatedCircle from "./Skillcircle";


const Skills = () => {
  const skills = [
  { name: "JavaScript", percentage: 80 },
  { name: "React Js", percentage: 70 },
  { name: "Node Js", percentage: 70 },
  { name: "MongoDb", percentage: 70 },
  { name: "TailwindCSS", percentage: 85 },
  { name: "GIT", percentage: 65 },
  { name: "Express Js", percentage: 60 },
  { name: "Figma", percentage: 70},
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 85 },
  { name: "Python", percentage: 85 },
  { name: "Photoshop", percentage: 95 },
  { name: "After Effect", percentage: 95 },
  { name: "Premire Pro", percentage: 95 },
  { name: "Illustrator", percentage: 65 },
  { name: "Blender", percentage: 55 },
];
  return (
    <div className="px-5 md:px-15 lg:px-30 mt-20 transition-all ease-in-out">
      <h4 className="scroll-animation font-regular text-[#F34F1C]  text-md md:text-md lg:text-2xl ">Incredible</h4>
      <h2 className="scroll-animation font-bold  text-4xl sm:text-6xl md:text-4xl lg:text-6xl bg-gradient-to-r from-white mt-[-12px] to-[#979797] text-transparent bg-clip-text">
        Skills.
      </h2>
      <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 py-10 gap-0 md:gap-4 ">
        {skills.map((skill) =>(

          <AnimatedCircle name={skill.name} precentage={skill.percentage} />
        ))}
       
      </div>
    </div>
  );
};

export default Skills;
