"use client";

import Image from "next/image";

import SideNav from "@/components/SideNav";
import {
  companiesThreadData,
  mediumCompaniesThreadData,
  mobileCompaniesThreadData,
} from "@/store/staticData/companiesThreadData";
import CompaniesThread from "@/components/CompaniesThread";
import { useContext, useEffect } from "react";
import { AppContext } from "@/store/contexts/appContext";
import Link from "next/link";

import { Banner } from "@/components/Banner/Banner";
import { homePageData } from "@/store/staticData/homePageCardsData";
import HomeCards from "@/components/HomeCards";

export default function Home() {
  const { deviceWidth } = useContext(AppContext);
  // sm:pr-4 xl:pr-[73px]

  //  pr-6 sm:pr-[60px] xl:pr-[73px]

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.style.backgroundImage =
      "linear-gradient(to top right, #000202, #000202, #000202, #025A5A )";
  }, []);

  // bg-gradient-to-tr from-[#000202] to-[#025A5A]
  return (
    <main className="w-full 2xl:w-[1400px]   ">
      <section className="relative h-full min-h-[100vh]  flex font-inter px-6 sm:px-10 xl:px-28  pt-7 sm:pt-14 xl:pt-20 pb-16 sm:pb-[73px] xl:pb-[200px] text-white w-full">
        <div className="flex flex-col  gap-14 sm:gap-28 items-center justify-between w-full ">
          {/* hero section */}
          <div className="w-full relative flex items-center gap-6 xl:gap-11 ">
            <div className="w-full">
              <CompaniesThread
                companies={
                  deviceWidth > 1280
                    ? companiesThreadData.companies
                    : deviceWidth > 640
                    ? mediumCompaniesThreadData.companies
                    : mobileCompaniesThreadData.companies
                }
              />
            </div>
            {/* <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-[#005050]/90 to-[#005050]/40 hidden sm:block" /> */}
          </div>
          <div className="mt-4 pr-6 w-full">
            <p className="font-medium text-[7px] sm:text-[10px] xl:text-sm mb-1">
              INVESTMENT INTENT DATA
            </p>
            <h4 className="font-semibold text-xl sm:text-3xl xl:text-5xl">
              Investment Intent Signals for <br /> Smarter and Faster Deals.
            </h4>
            <p className="text-[9px] sm:text-sm xl:text-lg mb-1  xl:mt-2 ">
              Cut waste from false leads and ill timed efforts using a
              searchable universe <br />
              of investment intent signals.
            </p>
            <div className="flex items-end justify-between mt-8 xl:mt-11 relative  ">
              <div className="absolute h-full w-[50px] xl:w-[100px] z-50 right-0 top-0  bg-transparent" />
              <Banner variant="home" speed={0} />
            </div>
          </div>
        </div>
        {/* 
        pr-6  sm:pr-[60px] xl:pr-[73px] 
        */}
        {/* <div className="hidden sm:block absolute h-[435px] sm:w-40 xl:w-52 right-0 top-20  bg-gradient-to-r from-[#005050]/0 via-darkGreen/80 to-[#005050]/40" /> */}

        {/* <div className="absolute right-[40px] xl:right-[57px] hidden sm:block z-20">
          <SideNav variant="light" showInvestor />
        </div> */}
      </section>
      <section className="min-h-[100vh] relative flex justify-between   py-14 pt-16 xl:py-32 ">
        <div className=" max-w-full font-inter px-[24px] sm:px-[60px] xl:px-[142px] pt-6 pb-24">
          <div className="flex flex-col items-center justify-center gap-10 ">
            <div className="w-full flex flex-col gap-4  sm:gap-14 pb-4 border-b-2 border-b-[#6A8682]">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-10 xl:gap-20 ">
                {homePageData.map((item, index) => (
                  <HomeCards
                    key={`${(item.heading, index)}`}
                    heading={item.heading}
                    content={item.content}
                    link={item.link}
                    img={item.img}
                  />
                ))}
              </div>
              <p className="text-xs text-white self-end">TWOTENSOR</p>
            </div>

            <div className="flex flex-col gap-10  text-[#E3F8F5]">
              <div className="mt-5 xl:mt-10 sm:flex gap-6 xl:gap-14">
                <h4 className="font-bold xl:text-4xl leading-6 xl:leading-[60px] mb-4">
                  Amplify impact by delivering our research in practical.
                </h4>
                <div className="text-[9px] xl:text-base xl:w-1/2 font-medium flex flex-col gap-4 xl:gap-6">
                  <p>
                    Artificial intelligence and machine learning models built in
                    labs typically fail in an evolving operational context - but
                    that’s where the stakes are highest.
                  </p>
                  <p>
                    Gotham’s built-in feedback loops train and refine models
                    that augment human analysis and decision making during
                    operations. In turn, operator actions improve these models
                    over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
