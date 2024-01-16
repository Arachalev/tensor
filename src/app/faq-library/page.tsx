"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { faqButtonsData } from "@/store/staticData/faqButtonsData";
import { faqData, faqResearchData } from "@/store/staticData/faqData";
import FaqButtons from "@/components/FaqButtons";
import plusIcon from "../../../public/assets/icons/plus.svg";
import Image from "next/image";
import LibraryCards, { libraryCardTypes } from "@/components/LibraryCards";

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

        <div className=" ">
          <div className="flex items-center sm:items-start gap-2 sm:gap-6 xl:gap-9 justify-between sm:justify-normal  mb-3 sm:mb-4">
            <div className="bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center" />
            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />
            <div className="bg-softBlue w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full " />
            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />

            <h4 className="font-sora text-sm sm:text-xl xl:text-4xl text-softBlue font-semibold px-1 xl:px-2 ">
              Library
            </h4>
            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />
            <div className="bg-softBlue w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full " />
            <div className="bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center" />

            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full" />

            <div className="bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center hidden xl:block" />
            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full hidden xl:block" />

            <div className="bg-[#417871] h-2 sm:h-3 xl:h-6 w-[1px] ml-2 self-center" />
            <div className="bg-homeCircle w-4 sm:w-6 xl:min-w-[44px] h-4 sm:h-6 xl:min-h-[44px] rounded-full " />
          </div>
          <div className="flex items-center gap-1 sm:gap-2 xl:gap-[10px] justify-center sm:justify-start mb-6 sm:mg-8">
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
            <div
              onClick={() => setOpenAllFaq((state) => !state)}
              className="flex items-center gap-1 pb-2 xl:pb-5  border-b-[#E3F8F5]/30 border-b-[2px] mb-3 sm:mb-4 xl:mb-6 cursor-pointer"
            >
              <Image
                src={plusIcon}
                className="sm:w-[8px] xl:w-4"
                alt="plus icon"
              />

              <p className="font-semibold text-[6.5px] sm:text-[9px] xl:text-lg">
                Expand All
              </p>
            </div>
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
