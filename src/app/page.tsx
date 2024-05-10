"use client";

import Image from "next/image";

import SideNav from "@/components/SideNav";
import {
  companiesThreadData,
  mediumCompaniesThreadData,
  mobileCompaniesThreadData,
} from "@/store/staticData/companiesThreadData";
import CompaniesThread from "@/components/CompaniesThread";
import { DOMElement, useContext, useEffect, useRef } from "react";
import { AppContext } from "@/store/contexts/appContext";
import Link from "next/link";

import { Banner } from "@/components/Banner/Banner";
import { homePageData } from "@/store/staticData/homePageCardsData";
import HomeCards from "@/components/HomeCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const { deviceWidth } = useContext(AppContext);
  // sm:pr-4 xl:pr-[73px]

  //  pr-6 sm:pr-[60px] xl:pr-[73px]

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.style.backgroundColor = "#022525";
  }, []);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const threadsContainer = useRef(null);

  // GSAP animation for company threads
  useGSAP(
    () => {
      let heroTL = gsap.timeline();
      const compTween = gsap.from(".comp-thread", {
        y: (index) => {
          return index % 2 == 0 ? 100 : -100;
        },
        ease: "back.inOut",
        scale: 0.01,
        opacity: 0,
        stagger: {
          each: 0.04,
          from: "center",
          grid: "auto",
        },
        clearProps: "all",
      });

      const sideNavTween = gsap.from(".sideNav ", {
        opacity: 0,
        x: 100,
        scale: 1.05,
        duration: 2.5,
        backgroundColor: "rgb(1 37 37)",
        ease: "elastic.out(1.2,0.8)",
      });
      const loginTween = gsap.from(".userLogin", {
        x: -100,
        ease: "elastic.out(1.2,0.8)",
        duration: 2.5,
      });

      heroTL.add(compTween).add(sideNavTween, "+=0.5").add(loginTween, "-=2.5");
    },
    // undefined
    { revertOnUpdate: false, dependencies: undefined }
  );

  useGSAP(
    () => {
      gsap.from(".investmentData", {
        scrollTrigger: {
          trigger: ".investmentData",
          end: "bottom 50%",
          // start: 300,
          toggleActions: "play none restart reset",
        },
        duration: 1.5,
        y: 300,
      });
    },
    { revertOnUpdate: true }
  );

  // useGSAP(
  //   () => {
  //     let newsTL = gsap.timeline();

  //     gsap.utils.toArray(".cardNewsScroll").forEach((card) => {
  //       if (card instanceof Element) {
  //         gsap.to(card, {
  //           scale: 1.2,
  //           x: 200,
  //           // y: "50vh",
  //           scrollTrigger: {
  //             trigger: card,
  //             start: "top center",
  //             pin: true,
  //             pinSpacing: false,
  //             scrub: true,
  //             markers: {
  //               startColor: "white",
  //               endColor: "white",
  //               fontSize: "18px",
  //               fontWeight: "bold",
  //               indent: 20,
  //             },
  //           },
  //         });
  //       }
  //     });
  //   },
  //   { revertOnUpdate: true }
  // );

  // bg-gradient-to-tr from-[#000202] to-[#025A5A]
  return (
    <main className="w-full flex flex-col items-center max-w-[2000px]">
      <section className="relative h-full min-h-[100vh]  flex font-inter px-6 sm:px-10 2xl:px-28 pt-14 xl:pt-20 pb-16 sm:pb-[73px] xl:pb-[200px] text-white w-full ">
        <div className="flex flex-col  gap-14 sm:gap-28 items-cente justify-between w-full ">
          {/* hero section */}
          <div className="w-full relative flex items-center">
            <div className="w-full" ref={threadsContainer}>
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
            <div className="absolute bottom-0 right-0 h-full w-56  bg-gradient-to-l from-[#022525]/40 via-[#022525]/50 to-[#022525]/0 " />

            {/* <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-[#005050]/90 to-[#005050]/40 hidden sm:block" /> */}
          </div>
          <div className="investmentData mt-4 pr-6 w-full  2xl:w-[1400px]">
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
            <div className="flex items-center gap-3 sm:gap-10 xl:gap-20 mt-8 xl:mt-11 relative">
              <div className="absolute h-full w-[50px] xl:w-[100px]  right-0 top-0  bg-gradient-to-l from-[#022525] to-[#022525]/0 z-10" />
              <h4 className="text-[#E2FFFB] font-semibold text-[6px] sm:text-xs xl:text-[15px] whitespace-nowrap">
                TRUSTED / VALIDATED <br />
                BY WORLD LEADING FUNDS
              </h4>
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
      <section className="cardNewsContainer  border-4 border-blue-500 min-h-[100vh] relative flex justify-between   py-14 pt-16 xl:py-32  2xl:w-[1400px] ">
        <div className=" max-w-full font-inter px-[24px] sm:px-[60px] xl:px-[142px] pt-6 pb-24">
          <div className="flex flex-col items-center justify-center gap-10 ">
            <div className="w-full flex flex-col gap-4  sm:gap-14 pb-4 border-b-2 border-b-[#417871]">
              <div className="cardsNewsScrollContainer border-4 border-red-400 w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-10 xl:gap-20 ">
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
                  Outside the 100-mile preference radius of your target
                  geography?
                </h4>
                <div className="text-[9px] xl:text-base xl:w-1/2 font-medium flex flex-col gap-4 xl:gap-6">
                  <p>
                    Your local competitors have a 126% to 144% higher chance of
                    closing a deal than you, Hochberg et al, Journal of Finance.
                  </p>
                  <p>
                    <span className="underline">Investment Intent signals</span>
                    : a live, deal-by-deal dataset for timing investors&apos;
                    moves when you can&apos;t be there.
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
