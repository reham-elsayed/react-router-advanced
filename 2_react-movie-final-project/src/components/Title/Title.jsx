import React from "react";

const Title = ({ title , text}) => {
  return (
    <div className={`text-[#fafafb] flex justify-center items-center ${text? text:''}`}>
      <h1 className="text-2xl md:text-5xl lg:text-6xl py-5 font-bold flex-grow ">
        {title}
      </h1>{" "}
    </div>
  );
};

export default Title;
