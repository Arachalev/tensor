"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";
import { footerData, footerImagesData } from "@/store/staticData/footerData";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { link } from "fs";

const Footer = () => {
  const [bg, setBg] = useState("bg-darkGreen");
  const date = new Date();
  const year = date.getFullYear();

  const path = usePathname();
  // bg-[#000202]
  useEffect(() => {
    if (
      path === "/" ||
      path === "/how-it-works" ||
      path === "/faq-library" ||
      path === "/how-to-join"
    ) {
      setBg(``);
    } else if (path === "/who-we-are") {
      setBg("bg-white");
    } else {
      setBg("bg-darkGreen");
    }
  }, [path]);

  useEffect(() => {
    const el = document.getElementById("footer");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const footerRef = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    (context, contextSafe) => {
      // gsap.utils.toArray(".footerCard").forEach((card) => {
      //   if (card instanceof Element) {
      //     gsap.from(card, {
      //       opacity: 0,
      //       y: 400,
      //       duration: 2.5,
      //       stagger: {
      //         each: 0.05,
      //         grid: "auto",
      //       },
      //       scrollTrigger: {
      //         trigger: footerRef.current,
      //         start: "top center",
      //         markers: true,
      //         toggleActions: "play none restart reset",
      //       },
      //     });
      //   }
      // });

      let footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top center",
          markers: true,
          toggleActions: "play none restart reset",
        },
        stagger: {
          each: 0.1,
          ease: "expo.inOut",
        },
      });

      let footerCardTween = gsap.from(".footerCard", {
        opacity: 0,
        y: 400,
        duration: 1,
        stagger: {
          each: 0.2,
        },
        // scrollTrigger: {
        //   trigger: footerRef.current,
        //   start: "top center",
        //   markers: true,
        //   toggleActions: "play none restart reset",
        // },
      });

      let linksTween = gsap.from(".footerLinks", {
        y: -50,
        x: -10,
        opacity: 0,
        // delay: 1,
        clearProps: "all",
        stagger: {
          each: 0.1,
          // ease: "expo.inOut",
        },
      });

      // const linksHoverTween = gsap.to(".footerLinks", {
      //   x: 50,
      //   scale: 1.05,
      // });

      const hoverEnter = contextSafe!((element) => {
        console.log("entereddd");
        gsap.to(element, {
          x: 50,
          scale: 1.05,
        });
      });
      const hoverLeave = contextSafe!((element) => {
        gsap.to(element, {
          x: 0,
          scale: 1,
        });
      });

      const linksElements = document.getElementsByClassName(".footerLinks");
      Array.from(linksElements).forEach((link) => {
        link.addEventListener("mouseenter", hoverEnter);
        link.addEventListener("mouseleave", hoverLeave);
      });

      footerCardTween.play();
      linksTween.play();

      return () => {
        Array.from(linksElements).forEach((link) => {
          link.removeEventListener("mouseenter", hoverEnter);
          link.removeEventListener("mouseleave", hoverLeave);
        });
      };

      // footerTl.add(footerCardTween).add(linksTween,"+=0.5");
    },
    { scope: footerRef, revertOnUpdate: true }
  );

  const hideFooter = path === "/pricing-model" || path === "/our-experts";

  return !hideFooter ? (
    <footer
      id="footer"
      ref={footerRef}
      className={`${bg} border-red-900 border-4 min-h-[100vh] w-screen  2xl:w-[1400px]  ${
        path === "/who-we-are" ? "text-black" : "text-softBlue"
      } px-6 sm:px-10 xl:pl-28 pt-16 sm:pt-[117px] xl:pt-[173px] 
    pb-8 sm:pb-14 xl:pb-[120px] sm:pbfont-inter flex flex-col gap-10 sm:gap-x-[146px] xl:gap-x-[121px] sm:gap-y-[110px] 
     sm:grid sm:grid-cols-2 xl:grid-cols-3  xl:grid-rows-2`}
    >
      {footerData.map((linkData) => (
        <div
          className={` overflow-y-clip overflow-x-clip h-fit ${
            linkData.style ? "xl:col-span-3" : ""
          }`}
          key={linkData.heading}
        >
          <div className={` footerCard`}>
            <h4 className="font-semibold border-b-2 border-b-[#417871] w-fit xl:w-[300px] mb-3 xl:text-2xl ">
              {linkData.heading}
            </h4>

            <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
              {linkData.links.map((singleLink) => (
                <li key={singleLink.text} className=" footerLinks">
                  <Link href={singleLink.href}>{singleLink.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className=" sm:col-span-2 xl:col-span-4 ">
        <ul className="flex items-center gap-3 w-full">
          {footerImagesData.map((dataImages) => (
            <li
              key={dataImages.alt}
              className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center "
            >
              <Link href="" className="">
                <Image
                  src={dataImages.image}
                  className="sm:w-5 h-3"
                  alt={dataImages.alt}
                />{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-[8px] sm:text-base ">
        <Link href="" className=" border-b-2 border-b-[#417871] ">
          Online Statement
        </Link>{" "}
        <br />
        <Link href="" className=" border-b-2 border-b-[#417871] ">
          Important Disclosures
        </Link>
        <p className="text-[7px] sm:text-sm no-underline whitespace-nowrap mt-1 ">
          COPYRIGHT &copy; {year} TWOTENSOR . ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  ) : (
    <div></div>
  );
};

export default Footer;
