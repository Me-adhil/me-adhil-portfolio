import React, { useState, useEffect } from "react";
import workdataset from './../assets/workdataset';

const Projects = () => {
  const [selectCategory, setSelectCategory] = useState("webdesign");
  const [displayData, setDisplayData] = useState([]);
  
  

  // ✅ Initialize displayData on first render
  useEffect(() => {
    setDisplayData(workdataset.webData);
  }, []);

  // ✅ Function to switch category
  const setCategory = (value) => {
    setSelectCategory(value);
    if (value === "webdesign") {
      setDisplayData(workdataset.webData);
    } else if (value === "graphicdesign") {
      setDisplayData(workdataset.graphicData);
    } else if (value === "videoediting") {
      setDisplayData(workdataset.videoEditingData);
    } 
  };

  return (
    <div className="px-5 md:px-15 lg:px-30 mt-20" id="projects">
      <h4 className="font-regular text-[#F34F1C]  text-md md:text-md lg:text-2xl scroll-animation">My Awesome</h4>
      <h2 className="font-bold text-4xl sm:text-6xl md:text-4xl lg:text-6xl bg-gradient-to-r from-white mt-[-12px] to-[#979797] text-transparent bg-clip-text scroll-animation">
        Projects.
      </h2>
      <h6 className="leading-4 md:leading-3 lg:leading-4 text-sm md:text-[10px] lg:text-[15px] text-white max-w-4xl scroll-animation">
        A showcase of what I love building — from web apps to motion graphics, blending functionality with creativity.
      </h6>

      {/* Category buttons */}
      <div className="flex justify-center md:justify-start items-start mt-10 scroll-animation">
        <div className="rounded-3xl  text-sm border border-gray-700 text-white font-medium grid grid-cols-2 md:flex justify-center md:justify-between items-center px-2 py-2 ">
          {["webdesign", "graphicdesign", "videoediting"].map(
            (cat) => (
              <button
                key={cat}
                className={`w-40 h-8 rounded-3xl transition-colors duration-300 ${
                  selectCategory === cat
                    ? "bg-[#F34F1C] text-white"
                    : "bg-transparent hover:bg-[#181818]"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat === "webdesign"
                  ? "Web Design"
                  : cat === "graphicdesign"
                  ? "Graphic Design"
                  : "Video Editing"}
              </button>
            )
          )}
        </div>
      </div>

      {/* Display section */}
      <div className=" mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayData.map((item, index) => (
         
            <div
            key={index}
            className="border  scroll-animation border-gray-700 bg-[#181818] rounded-3xl px-4 py-4 hover:scale-103 transition-transform duration-300"
          > <a href={item.link}>
            <div className="h-60 bg-[#000000]  rounded-3xl mb-3 flex items-center justify-center text-white text-xl">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                "Image Placeholder"
              )}
            </div>
            </a>
            <h4 className="font-medium text-white text-xl ">{item.title}</h4>
            <p className="leading-5 text-gray-300 text-sm mt-2">
              {item.describe}
            </p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
