"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import mailIcon from "../../public/assets/icons/footer/mail.svg";
import arxicIcon from "../../public/assets/icons/footer/arxic.svg";
import doiIcon from "../../public/assets/icons/footer/doi.svg";
import githubIcon from "../../public/assets/icons/footer/github.svg";
import linkedinIcon from "../../public/assets/icons/footer/linkedin.svg";
import mediumIcon from "../../public/assets/icons/footer/medium.svg";
import xIcon from "../../public/assets/icons/footer/x.svg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [bg, setBg] = useState("bg-darkGreen");
  const date = new Date();
  const year = date.getFullYear();

  const path = usePathname();
  // bg-[#000202]
  useEffect(() => {
    if (path === "/" || path === "/how-it-works" || path === "/faq-library") {
      setBg(``);
    } else {
      setBg("bg-darkGreen");
    }
  }, [path]);

  const hideFooter = path === "/pricing-model" || path === "/our-experts";

  return !hideFooter ? (
    <footer
      className={`${bg} min-h-[100vh] w-screen  2xl:w-[1400px]  text-softBlue px-6 sm:px-10 xl:pl-28 pt-16 sm:pt-[117px] xl:pt-[173px] 
    pb-8 sm:pb-14 xl:pb-[120px] sm:pbfont-inter flex flex-col gap-10 sm:gap-x-[146px] xl:gap-x-[121px] sm:gap-y-[110px] 
     sm:grid sm:grid-cols-2 xl:grid-cols-3  xl:grid-rows-2`}
    >
      <div className="">
        <h4 className="font-semibold border-b-2 border-b-[#417871] w-[300px] mb-3 xl:text-2xl ">
          Most Visited
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
          <li>
            <Link href="">2023 In Numbers</Link>
          </li>
          <li>
            <Link href="">Intent Data One Pager</Link>
          </li>
          <li>
            <Link href="">Product Demo</Link>
          </li>
          <li>
            <Link href="">FAQ</Link>
          </li>
          <li>
            <Link href="">Research</Link>
          </li>
        </ul>
      </div>
      <div className=" xl:col-span-3">
        <h4 className="font-semibold border-b-2 border-b-[#417871] w-fit xl:w-[300px] mb-3 xl:text-2xl ">
          Stress Testing
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
          <li>
            <Link href="">Comfort Del Gro</Link>
          </li>
          <li>
            <Link href="">GS Futures</Link>
          </li>
          <li>
            <Link href="">Mobility Fund</Link>
          </li>
          <li>
            <Link href="">Cervin</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Link href= "/who-we-are" className="font-semibold border-b-2 border-b-[#417871] w-fit xl:w-[300px] mb-3 xl:text-2xl">
          Who We Are
        </Link>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
          <li>
            <Link href="/who-we-are#leadership">Leadership</Link>
          </li>
          <li>
            <Link href="/who-we-are#founder">Founder</Link>
          </li>
          <li>
            <Link href="/who-we-are#our-people">Our People</Link>
          </li>
          <li>
            <Link href="/who-we-are#diversity">Diversity</Link>
          </li>
          <li>
            <Link href="/who-we-are#principles">Core Principles</Link>
          </li>
          <li>
            <Link href="/who-we-are#community">Community Impact</Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <h4 className="font-semibold  border-b-2 border-b-[#417871] w-fit xl:w-[300px] mb-3 xl:text-2xl  ">
          What We Do
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
          <li>
            <Link href="/how-it-works">Our Product</Link>
          </li>
          <li>
            <Link href="/pricing-model">Pricing</Link>
          </li>
        </ul>
      </div> */}
      <div>
        <Link href="/how-to-join" className="font-semibold border-b-2 border-b-[#417871] w-fit xl:w-[300px] mb-3 xl:text-2xl ">
          How to Join
        </Link>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
          <li>
            <Link href="/how-to-join#career">Career Development</Link>
          </li>
          <li>
            <Link href="/how-to-join#path">Choose Your Path</Link>
          </li>
          <li>
            <Link href="/how-to-join#interview">Interviewing</Link>
          </li>
          <li>
            <Link href="/how-to-join#faq">Application FAQ</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold border-b-2 border-b-[#417871] w-fit xl:w-[300px] mb-3 xl:text-2xl ">
          Performance Review
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-base">
          <li>
            <Link href="">2023 Verified Results</Link>
          </li>
        </ul>
      </div>

      <div className=" sm:col-span-2 xl:col-span-4 ">
        <ul className="flex items-center gap-3 w-full">
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="" className="">
              <Image src={mailIcon} className="sm:w-5 h-3" alt="mail link" />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={linkedinIcon}
                alt="linkedin link"
                className="sm:w-4 sm:h-4"
              />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image src={xIcon} alt="x link" className="sm:h-5 sm:w-4" />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={mediumIcon}
                alt="medium link"
                className="sm:h-6 sm:w-5"
              />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image src={doiIcon} alt="doi link" className="sm:w-6 sm:h-5" />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={githubIcon}
                alt="github link"
                className="sm:w-9 sm:h-9"
              />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={arxicIcon}
                alt="arxic link"
                className="sm:w-6 sm:h-6"
              />{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-[8px] sm:text-base ">
        <Link href="" className=" border-b-2 border-b-softBlue ">
          Online Statement
        </Link>{" "}
        <br />
        <Link href="" className=" border-b-2 border-b-softBlue ">
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
