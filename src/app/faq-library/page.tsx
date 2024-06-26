"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { faqButtonsData } from "@/store/staticData/faqButtonsData";
import { faqData, faqResearchData } from "@/store/staticData/faqData";
import FaqButtons from "@/components/FaqButtons";
import plusIcon from "../../../public/assets/icons/plus.svg";
import Image from "next/image";
import LibraryCards, { libraryCardTypes } from "@/components/LibraryCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  const [activeFaq, setActiveFaq] = useState(["FAQ"]);
  const [openAllFaq, setOpenAllFaq] = useState(false);

  const updateActiveFaq = (name: string) => {
    if (activeFaq.includes(name)) {
      let tempData = activeFaq.filter((words) => words !== name);
      setActiveFaq(tempData);
    } else {
      setActiveFaq([name]);
    }
  };

  const libraryData = activeFaq.includes("FAQ")
    ? faqData
    : activeFaq.includes("Research") ||
      activeFaq.includes("Technology") ||
      activeFaq.includes("Thought Leadership")
    ? faqResearchData
    : [];

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.style.backgroundColor = "#022525";
  }, []);

  gsap.registerPlugin(useGSAP);

  const circlesRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".faqCircles", {
        x: -100,
        opacity: 0,
        scale: 0.5,
        // ease: "bounce.inOut",
        stagger: {
          each: 0.1,
        },
      });

      gsap.from(".faqButtons", {
        y: 50,
        stagger: {
          each: 0.1,
        },
      });

      gsap.from(".libraryHead", {
        scale: 0.1,
        x: -300,
        opacity: 0,
        duration: 1,
      });
    },
    // null
    {
      revertOnUpdate: true,
      dependencies: [circlesRef.current],
      scope: circlesRef,
    }
  );

  useGSAP(
    () => {
      gsap.utils.toArray(".faqLibraryCards").forEach((card) => {
        if (card instanceof Element) {
          gsap.from(card, {
            y: 300,
            scale: 0.5,
            duration: 0.8,
            stagger: {
              each: 0.1,
            },
            scrollTrigger: {
              trigger: card,
              // markers: true,
              toggleActions: "play none restart reset",
              // end: "-=300px",
              start: "-200px bottom",
            },
          });
        }
      });
    },
    {
      dependencies: [],
    }
  );

  return (
    <div className="font-inter w-full 2xl:w-[1400px] relative">
      <section className=" px-6 sm:px-10 xl:px-28 py-14 sm:py-20 xl:pt-40 xl:pb-80 text-softBlue  ">
        {/* <Link
          href="/"
          className="absolute -left-4 top-[20rem] xl:top-[40rem] min-w-[10px] h-20 sm:min-w-[60px] xl:w-[100px] self-center  "
        >
          <p className=" underline font-serif text-[9px] sm:text-sm xl:text-lg text-softBlue rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </Link> */}

        <div className=" " ref={circlesRef}>
          <div className="flex items-center sm:items-start gap-2 sm:gap-6 xl:gap-9 justify-between sm:justify-normal  mb-3 sm:mb-4">
            <div className="faqCircles bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center" />
            <div className="faqCircles bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />
            <div className="faqCircles bg-softBlue w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full " />
            <div className="faqCircles bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />

            <h4 className="libraryHead font-sora text-sm sm:text-xl xl:text-4xl text-softBlue font-semibold px-1 xl:px-2 ">
              Library
            </h4>
            <div className="faqCircles bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />
            <div className="faqCircles bg-softBlue w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full " />
            <div className="faqCircles bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center" />

            <div className="faqCircles bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />

            <div className="faqCircles bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center hidden xl:block" />
            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full hidden xl:block" />

            <div className="faqCircles bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center" />
            <div className="faqCircles bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full " />
          </div>
          <div className="faqButtonsContainer flex items-center gap-1 sm:gap-2 xl:gap-[10px] justify-center sm:justify-start mb-6 sm:mg-8">
            {faqButtonsData.map((item, index) => (
              <FaqButtons
                key={`${item.name}-${index}`}
                name={item.name}
                bg={item.bg}
                isActive={activeFaq.includes(item.name)}
                onClick={() => {
                  updateActiveFaq(item.name);
                }}
              />
            ))}
          </div>

          <div className=" sm:w-[505px] xl:w-[980px]">
            {!openAllFaq ? (
              <div
                onClick={() => setOpenAllFaq(true)}
                className="flex items-center gap-2 pb-2 xl:pb-5  border-b-[#E3F8F5]/30 border-b-[2px] mb-3 sm:mb-4 xl:mb-6 cursor-pointer"
              >
                <div className=" min-w-[12px] sm:min-w-[16px] xl:max-w-[24px]">
                  <Image
                    src={plusIcon}
                    className="sm:w-[8px] xl:w-4"
                    alt="plus icon"
                  />
                </div>

                <p className="font-semibold text-[6.5px] sm:text-[9px] xl:text-lg">
                  Expand All
                </p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setOpenAllFaq(false);
                }}
                className="flex items-center gap-2 pb-2 xl:pb-5  border-b-[#E3F8F5]/30 border-b-[2px] mb-3 sm:mb-4 xl:mb-6 cursor-pointer"
              >
                <div className=" min-w-[12px] sm:min-w-[16px] xl:max-w-[24px] h-[3px] bg-softBlue " />
                <p className="font-semibold text-[6.5px] sm:text-[9px] xl:text-lg">
                  Collapse All
                </p>
              </div>
            )}
            <div className="flex flex-col gap-3 sm:gap-5 xl:gap-14 ">
              {libraryData.map((item, index) => (
                <LibraryCards
                  key={`${item.title}==${index}`}
                  title={item.title}
                  content={item.content}
                  type={item.type as libraryCardTypes[]}
                  socials={item.socials}
                  date={item.date}
                  link={item.link}
                  readTime={item.readTime}
                  openFaq={openAllFaq}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
