import React from "react";
import "./loadingStyle.css";

const LoadingScreen = () => {
  return (
    <div className="text-softBlue bg-darkGreen w-screen h-screen flex flex-col items-center justify-center  fixed top-0 right-0  z-[50000]">
      <div className="loadingBg"></div>
      <div>
        <h4 className="text-3xl sm:text-[54px] xl:text-[80px] pb-4 border-b-[3px] border-b-softBlue font-serif mb-1">
          TwoTensor
        </h4>
        <p className="font-inter text-[6px] sm:text-xs xl:text-lg text-white">
          INVESTMENT INTENT DATA
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
