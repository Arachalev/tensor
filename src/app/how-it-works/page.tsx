"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import coreArrowIcon from "../../../public/assets/icons/coreArrow.svg";
import targetIcon from "../../../public/assets/icons/target.svg";
import stockIcon from "../../../public/assets/icons/stock.svg";
import shakeIcon from "../../../public/assets/icons/shake.svg";
import searchIcon from "../../../public/assets/icons/search.svg";
import Image from "next/image";
import dellImage from "../../../public/assets/images/homePage/DELL.svg";
import phillipsImage from "../../../public/assets/images/homePage/PHILIPS.svg";
import ciscoImage from "../../../public/assets/images/homePage/CISCO.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.style.backgroundColor = "#022525";
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const coreTimeline = useRef(
    gsap.timeline({
      scrollTrigger: {
        trigger: ".coreContainer",
        toggleActions: "play pause restart reset",
      },
    })
  );

  useGSAP(() => {
    // coreTimeline.current = gsap.timeline();
    gsap.utils.toArray(".worksAIText").forEach((item) => {
      if (item instanceof Element) {
        gsap.from(item, {
          y: 250,
          duration: 1.25,
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            toggleActions: "play pause restart reset",
          },
        });
      }
    });

    const cardTween = gsap.from(".ontologyCards", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });

    const imageTween = gsap.from(".coreImage", {
      scale: 0.8,
      ease: "bounce.inOut",
      duration: 0.35,
      stagger: {
        each: 0.1,
      },
    });

    let logoTween: gsap.core.TimelineChild | gsap.core.Tween[] = [];
    gsap.utils.toArray(".ontologyImages").forEach((item) => {
      if (item instanceof Element) {
        const tween = gsap.from(item, {
          rotation: 360,
          x: -100,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
        });
        logoTween.push(tween);
      }
    });

    coreTimeline.current.add(cardTween).add(imageTween).add(logoTween);
  }, {});


  return (
    <div className="font-inter w-full 2xl:w-[1400px] relative ">
      <section className="min-h-[100vh] px-6 sm:px-10 xl:px-28 py-14 sm:pt-20 xl:pt-40 text-softBlue  ">
        {/* <Link
          href="/"
          className="absolute -left-4 top-[10rem] xl:top-[22rem] min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center  "
        >
          <p className="font-plantagenet tracking-[5px] text-[9px] sm:text-sm xl:text-lg text-softBlue rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            [2]TENSOR
          </p>
        </Link> */}

        <div className="sm:w-[545px] lg:w-full">
          <div className=" w-full  flex items-center justify-center border-b-2 border-b-[#6A8682]  pb-4 xl:pb-8  ">
            <div className="w-full   bg-black h-[230px] sm:h-[365px] lg:h-[684px] lg:text-4xl flex items-center justify-center">
              VIDEO GOES HERE
            </div>
          </div>
          <div className="mt-5 xl:mt-10 sm:flex gap-6 xl:gap-14">
            <h4 className="worksAIText font-bold xl:text-4xl leading-6 xl:leading-[60px] mb-4">
              AI Deployed to the Operational Edge
            </h4>
            <div className="worksAIText text-[9px] xl:text-base xl:w-1/2 font-medium flex flex-col gap-4 xl:gap-6">
              <p>
                Artificial intelligence and machine learning models built in
                labs typically fail in an evolving operational context - but
                that’s where the stakes are highest.
              </p>
              <p>
                Gotham’s built-in feedback loops train and refine models that
                augment human analysis and decision making during operations. In
                turn, operator actions improve these models over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="worksAIText min-h-[100vh] bg-fadedBlue sm:bg-inherit  px-6 sm:px-10 xl:px-28 pt-7 sm:pt-24 pb-16 sm:pb-0  text-softBlue flex justify-center items-center ">
        <div className="sm:bg-fadedBlue sm:px-11 xl:px-16 sm:pb-20 sm:pt-14 xl:pt-24 xl:flex xl:gap-20 2xl:justify-center w-fit">
          <div className="text-darkGreen/90 sm:w-[288px] flex flex-col gap-6 justify-between mb-16 xl:mb-0 xl:py-8 ">
            <h4 className="font-bold text-2xl sm:text-3xl xl:text-[34px] leading-8 xl:leading-10 whitespace-nowrap  ">
              THE TWOTENSOR <br className="hidden xl:block" /> ONTOLOGY
            </h4>
            <p className=" sm:text-lg xl:text-xl">
              TwoTensor like the B2B strategies of DELL, Cisco, and Phillips,
              uses intent data in private markets to predict deals, validated by
              giants like Sequoia Capital, Andreessen Horowitz in over 400
              deals.
            </p>
            <div className="flex items-center gap-6">
              <Image
                src={dellImage}
                alt="dell"
                className="ontologyImages xl:w-10"
              />
              <Image
                src={phillipsImage}
                alt="phiilps"
                className="ontologyImages xl:w-8"
              />
              <Image
                src={ciscoImage}
                alt="cisco"
                className="ontologyImages xl:w-12"
              />
            </div>
          </div>

          <div className="coreContainer bg-[#8CEDE1] text-darkGreen rounded-[10px] px-6 pt-6 sm:pb-7 w-full xl:w-[750px]">
            <div className="  flex  items-center gap-2 mb-2">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl leading-6 xl:leading-8">
                ONTOLOGY
              </h4>{" "}
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-lg sm:text-xl xl:text-2xl leading-6 xl:leading-8 border-b-2 border-b-darkGreen">
                  CORE
                </h4>
                <Image src={coreArrowIcon} alt="arrow" />
              </div>
            </div>

            <div className="flex flex-col text-darkGreen/90 w-full ">
              <div className="ontologyCards h-[185px] sm:h-[81px] xl:h-[90px] flex px-1 xl:px-3 py-5  gap-5 border-y-2 border-y-darkGreen">
                <Image
                  src={searchIcon}
                  className="h-[60px] sm:hidden"
                  alt="search"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={searchIcon}
                      className="coreImage sm:justify-self-start h-[60px] sm:h-[50px] xl:h-[55px] hidden sm:block"
                      alt="search"
                    />
                  </div>
                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px] xl:text-[10px]">
                      LAYER / 01
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      IDENTIFY
                    </h4>
                  </div>
                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Traditional Source</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />
                    <p>Digital</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />
                    <p>Client Centric</p>
                  </div>
                </div>
              </div>
              <div className="ontologyCards h-[185px] sm:h-[81px] xl:h-[90px] px-1 xl:px-3 py-5 flex gap-5 border-b-2 border-b-darkGreen">
                <Image
                  src={shakeIcon}
                  className="coreImage h-[51px] sm:hidden"
                  alt="handshake"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={shakeIcon}
                      className="coreImage sm:justify-self-start h-[46px] xl:h-[50px] hidden sm:block"
                      alt="handshake"
                    />
                  </div>
                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px]  xl:text-[10px]">
                      LAYER / 02
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      ACQUIRE
                    </h4>
                  </div>

                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Automated Collections</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Collaborative Agreements</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Exclusive Access</p>
                  </div>
                </div>
              </div>
              <div className="ontologyCards h-[185px] sm:h-[81px] xl:h-[90px] px-1 xl:px-3 py-5 flex gap-5 border-b-2 border-b-darkGreen">
                <Image
                  src={stockIcon}
                  className="coreImage h-[51px] sm:hidden"
                  alt="stock"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={stockIcon}
                      className="coreImage sm:justify-self-start h-[44px] xl:h-[50px] hidden sm:block"
                      alt="stock"
                    />
                  </div>
                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px] xl:text-[10px]">
                      LAYER / 03
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      ANALYSE
                    </h4>
                  </div>

                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Multi Layer AI</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Human Insights</p>
                  </div>
                </div>
              </div>
              <div className="ontologyCards h-[185px] sm:h-[81px] xl:h-[90px] px-1 xl:px-3 py-5 flex gap-5 ">
                <Image
                  src={targetIcon}
                  className="coreImage h-[53px] sm:hidden"
                  alt="target"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={targetIcon}
                      className="coreImage h-[48px] xl:h-[53px] hidden sm:block"
                      alt="target"
                    />
                  </div>

                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px] xl:text-[10px]">
                      LAYER / 04
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      EXECUTE
                    </h4>
                  </div>

                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Integrated Platform</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Information Discovery</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Data Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
