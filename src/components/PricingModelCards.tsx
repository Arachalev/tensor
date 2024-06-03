"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  const [animateBg, setAnimateBg] = useState(false);
  const [elRect, setElRect] = useState<DOMRect | null>(null);

  let bg = "bg-[#FFFFFF]";

  switch (title) {
    case "Pay As You Go/Trial":
    case "Growing Fund":
      bg = "bg-[#F6FFFE]";
  }
  const rawDetailsArr = details.split("!");
  const detailsArr = rawDetailsArr.map((item) => item.replace("\n", "").trim());

  const priceCardRef = useRef<HTMLDivElement>(null);
  const priceContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  // useGSAP(
  //   () => {
  //     gsap.from(priceCardRef.current, {
  //       y: 200,
  //     });
  //   },
  //   { scope: priceCardRef }
  // );

  // useEffect(() => {
  //   const getElementPosition = () => {
  //     const rect =
  //       priceCardRef.current && priceCardRef.current.getBoundingClientRect();

  //     if (!animateBg) {
  //       setElRect(rect);
  //       setAnimateBg(true);
  //       // console.log(rect);
  //       // console.log(animateBg);
  //     }
  //   };

  //   const priceCardEl = priceContainerRef.current;

  //   priceCardEl?.addEventListener("mouseleave", () => {
  //     setAnimateBg(false);
  //   });

  //   if (priceCardEl) {
  //     priceCardEl.addEventListener("mouseenter", getElementPosition);
  //   }

  //   return () => {
  //     priceCardEl?.removeEventListener("mouseenter", getElementPosition);
  //     priceCardEl?.removeEventListener("mouseleave", () => {
  //       setAnimateBg(false);
  //     });
  //   };
  // }, [animateBg]);

  // const animatedStyle = animateBg
  //   ? `fixed top-0 left-0 z-[1000000000] border-4 `
  //   : bg;

  useGSAP(() => {
    const hoverIn = (el: gsap.TweenTarget) => {
      gsap.to(el, {
        backgroundColor: "white",
        // color: "#005050",
        scale: 1,
        height: "100%",
      });
      gsap.to(el, {
        backgroundColor: "white",
        // color: "#005050",
        scale: 1,
        height: "100%",
      });
    };

    const buttonEls = document.getElementsByClassName("priceButtonBg");
    const buttonElsText = document.getElementsByClassName("priceButtonText");
    Array.from(buttonEls).forEach((button) => {
      button.addEventListener("mouseenter", () => hoverIn(button));
    });
    Array.from(buttonElsText).forEach((button) => {
      button.addEventListener("mouseenter", () => hoverIn(button));
    });
  });

  return (
    <div
      className="priceContainer"
      ref={priceContainerRef}
      // className={
      //   animateBg
      //     ? "fixed top-0 right-0 w-screen h-screen bg-gray-500/50 z-[1000000] "
      //     : ""
      // }
    >
      <div
        ref={priceCardRef}
        // onClick={getElementPosition}
        // onMouseOver={getElementPosition}
        // onMouseLeave={() => setAnimateBg(false)}
        className={`priceModelCard p-6 pb-9 sm:py-6 sm:px-10 xl:pl-11 xl:pr-[84px] 
       ${bg}
       flex flex-col xl:flex-row xl:gap-8 xl:w-full 2xl:w-fit gap-3 sm:gap-5 text-darkGreen font-inter`}
      >
        <div className="flex flex-col gap-3 sm:gap-7 xl:gap-4 ">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6">
            <h4 className="font-bold text-xl sm:text-2xl leading-10 sm:order-1">
              {title}
            </h4>
            {category && (
              <div className="w-fit sm:w-full  sm:order-3 ">
                <p
                  className={`font-semibold text-[5.8px] sm:text-[8.5px] pt-[1px] text-softBlue bg-darkGreen px-[10px] sm:px-4  w-fit h-[13px] sm:h-5
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
          className={`priceButton overflow-clip relative text-softBlue w-[76px] border border-darkGreen sm:w-[95px] h-6 sm:h-9 
         rounded-[20px] sm:rounded-30px] flex items-center justify-center text-[9.4px] sm:text-sm font-semibold`}
        >
          <div className="priceButtonBg absolute top-0 right-0 w-full h-full bg-darkGreen z-[-10] " />

          <p className="priceButtonText">Pay Now</p>
        </button>
      </div>
    </div>
  );
};

export default PricingModelCards;
