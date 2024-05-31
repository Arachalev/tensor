"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// for some reason, dynamically adding the border from the array isn't reflecting in tailwind==================================

interface FaqButtonsProps {
  name: string;
  bg: string;
  onClick: () => void;
  isActive: boolean;
}

const FaqButtons = (props: FaqButtonsProps) => {
  const [isActive, setIsActive] = useState(false);

  const { name, onClick, isActive: activeFAQ } = props;
  useEffect(() => {
    setIsActive(activeFAQ);
  }, [activeFAQ]);

  let borderColor;
  let bg;

  //   const tempBorder = borderColor ? `border border-${borderColor}` : "";

  switch (name) {
    case "Research":
      borderColor = "border border-[#FF5A5A]";
      bg = "bg-[#FF5A5A]";
      break;
    case "Case Studies":
      borderColor = "border border-[#9C9C9C]";
      bg = "bg-[#9C9C9C]";
      break;
    case "Thought Leadership":
      borderColor = "border border-[#52B9AC]";
      bg = "bg-[#52B9AC]";
      break;
    case "FAQ":
      borderColor = "border border-[#29B2FF]";
      bg = "bg-[#29B2FF]";
      break;
    case "Technology":
      borderColor = "border border-[#075AD7]";
      bg = "bg-[#075AD7]";
      break;
    case "News":
      borderColor = "border border-[#C101AE]";
      bg = "bg-[#C101AE]";
      break;
  }

  const buttonStyle = isActive ? bg : borderColor;

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const hoverEnter = (element: gsap.TweenTarget) => {
      gsap.to(element, {
        scale: 1.1,
        // x: 10,
        // color: "#417871",
      });
    };
    const hoverLeave = (element: gsap.TweenTarget) => {
      gsap.to(element, {
        scale: 1,
        // x: 0,
        // color: "white",
      });
    };

    const buttonElements = document.getElementsByClassName("faqButtons");
    Array.from(buttonElements).forEach((btn) => {
      btn.addEventListener("mouseenter", () => hoverEnter(btn));
      btn.addEventListener("mouseleave", () => hoverLeave(btn));
    });

    return () => {
      Array.from(buttonElements).forEach((btn) => {
        btn.removeEventListener("mouseenter", () => hoverEnter(btn));
        btn.removeEventListener("mouseleave", () => hoverLeave(btn));
      });
    };
  });

  return (
    <button
      type="button"
      className={`faqButtons text-white font-sora text-[6px] sm:text-[8px] xl:text-xs 
       px-1 sm:px-2 xl:px-3 h-[14px] xl:h-[29px] sm:h-5 flex items-center justify-center  ${buttonStyle}`}
      onClick={() => {
        setIsActive((state) => !state);
        onClick();
      }}
    >
      {name}
    </button>
  );
};

export default FaqButtons;
