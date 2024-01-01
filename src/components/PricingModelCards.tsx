"use client";
import Image from "next/image";
import React from "react";

interface PricingModelCardsProps {
  title: string;
  category?: string;
  // billedSection: string;
  details: string;
  packages: {
    icon: string;
    text: string;
  }[];
}

const PricingModelCards = (props: PricingModelCardsProps) => {
  const { title, category, details, packages } = props;

  let bg = "bg-[#FFFFFF]";

  switch (title) {
    case "Pay As You Go/Trial":
    case "Growing Fund":
      bg = "bg-[#F6FFFE]";
  }
  const rawDetailsArr = details.split("!");
  const detailsArr = rawDetailsArr.map((item) => item.replace("\n", "").trim());

  console.log(category);
  return (
    <div
      className={`p-6 pb-9 sm:py-6 sm:px-10 xl:pl-11 xl:pr-[84px]  ${bg} flex flex-col xl:flex-row xl:justify-between xl:w-full gap-3 sm:gap-5 text-darkGreen font-inter`}
    >
      <div className="flex flex-col gap-3 sm:gap-7 xl:gap-4 ">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6">
          <h4 className="font-bold text-xl sm:text-2xl leading-10 sm:order-1">
            {title}
          </h4>
          {category && (
            <div className="w-fit sm:w-full  sm:order-3 ">
              <p
                className={`font-semibold text-[5.8px] sm:text[8.5px] pt-[1px] text-softBlue bg-darkGreen px-[10px] sm:px-4  w-fit h-[13px] sm:h-5
                 rounded-[20px] sm:rounded-[30px] flex items-center justify-center  `}
              >
                {category}
              </p>
            </div>
          )}
          <div className="mt-1 flex items-center gap-2 sm:gap-3 sm:order-2">
            {packages.map((item, index) => (
              <div
                className={`flex items-center justify-center gap-1 sm:gap-[6px] px-[6px] h-[15px] sm:h-6 rounded-[18px] border border-darkGreen`}
                key={`${item.text}--${index}`}
              >
                <Image src={item.icon} className="h-fit" alt={item.text} />
                <p className="font-semibold text-[5px] sm:text-[8.5px] sm leading-2 whitespace-nowrap pt-[2px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs sm:text-sm leading-5 sm:w-[600px] xl:w-[780px]">
          {detailsArr.map((item, index) => {
            if (index === 1) {
              return (
                <p className="font-semibold inline" key={item}>
                  {" "}
                  {item}{" "}
                </p>
              );
            }
            return (
              <p className="inline" key={item}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <button
        className={`text-softBlue bg-darkGreen w-[76px] sm:w-[95px] h-6 sm:h-9 
         rounded-[20px] sm:rounded-30px] flex items-center justify-center text-[9.4px] sm:text-sm font-semibold`}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PricingModelCards;
