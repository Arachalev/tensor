"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import arrow from "../../public/assets/icons/arrow.svg";
import arrowWhite from "../../public/assets/icons/arrow-white.svg";
import { AppContext } from "@/store/contexts/appContext";

const SideNav = ({ closeNav }: { closeNav: () => void }) => {
  const { showNav, updateShowNav } = useContext(AppContext);

  return (
    <div
      className={`z-[10000] font-inter flex flex-col gap-4 px-6 pt-8 bg-darkGreen fixed w-screen h-screen right-0 top-[0px] overflow-hidden `}
    >
      <div className="flex items-end flex-col self-end  pb-1 sm:pb-0 w-full sm:w-fit sm:h-full sm:mr-8">
        <div
          onClick={() => {
            closeNav();
          }}
          className=""
        >
          <Image
            src="/assets/icons/hamburger.svg"
            width={11}
            height={9}
            alt="menu"
            className="cursor-pointer"
          />
        </div>
      </div>

      <Link
        onClick={() => closeNav()}
        href=""
        className={`font-semibold text-xs text-white ml-4 `}
      >
        User Login
      </Link>

      <Link
        onClick={() => closeNav()}
        href="/"
        className={`font-semibold text-xs  text-[#74DDD0] ml-4 `}
      >
        Home
      </Link>
      <div
        className={` text-[#B7E5EF] font-semibold pb-4 border-b  border-b-[#CDE9C6]`}
      >
        <div
          onClick={() => {
            updateShowNav("whatWedDo");
          }}
          className={`cursor-pointer flex items-center gap-[6px] text-xs text-white`}
        >
          <Image src={arrowWhite} alt="arrow" />
          <h4>What We Do</h4>
        </div>
        {showNav.whatWedDo && (
          <div className="ml-4 flex flex-col gap-1 mt-1 text-[10px]">
            <Link onClick={() => closeNav()} href="/how-it-works">
              Our Product
            </Link>
            <Link onClick={() => closeNav()} href="/pricing-model">
              Pricing
            </Link>
          </div>
        )}
      </div>
      <div
        className={` text-[#B7E5EF] font-semibold pb-4 border-b  border-b-[#CDE9C6]`}
      >
        <div
          onClick={() => {
            updateShowNav("whoWeAre");
          }}
          className={`cursor-pointer flex items-center gap-[6px] text-xs text-white`}
        >
          <Image src={arrowWhite} alt="arrow" />

          <h4>Who We Are</h4>
        </div>
        {showNav.whoWeAre && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
            <Link onClick={() => closeNav()} href="/who-we-are#leadership">
              Leadership
            </Link>
            <Link onClick={() => closeNav()} href="/who-we-are#founder">
              Founder
            </Link>
            <Link onClick={() => closeNav()} href="/who-we-are#our-people">
              Our People
            </Link>
            <Link onClick={() => closeNav()} href="/who-we-are#diversity">
              Diversity
            </Link>
            <Link onClick={() => closeNav()} href="/who-we-are#principles">
              Core Principles
            </Link>
            <Link onClick={() => closeNav()} href="/who-we-are#community">
              Community
            </Link>
          </div>
        )}
      </div>
      <div className={` text-[#B7E5EF] font-semibold pb-4 `}>
        <div
          onClick={() => updateShowNav("join")}
          className={`cursor-pointer flex items-center gap-[6px] text-xs text-white`}
        >
          <Image src={arrowWhite} alt="arrow" />

          <h4>How to Join</h4>
        </div>
        {showNav.join && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
            <Link onClick={() => closeNav()} href="/how-to-join#career">
              Career Development
            </Link>
            <Link onClick={() => closeNav()} href="/how-to-join#path">
              Choose Your Path
            </Link>
            <Link onClick={() => closeNav()} href="/how-to-join#interview">
              Interviewing
            </Link>
            <Link onClick={() => closeNav()} href="/how-to-join#internships">
              internships
            </Link>
            <Link onClick={() => closeNav()} href="/how-to-join#fellowship">
              Fellowship Program
            </Link>
            <Link onClick={() => closeNav()} href="/how-to-join#faq">
              Application FAQ
            </Link>
          </div>
        )}
      </div>

      <button
        type="button"
        className={`my-4  text-darkGreen  bg-[#E2FFFB]
          w-[94px]  h-7 rounded-[3px]  
          font-medium text-[9px]  whitespace-nowrap`}
      >
        Schedule Demo
      </button>

      <div
        className={`text-white font-semibold  text-xs ml-4 flex flex-col gap-1`}
      >
        <Link onClick={() => closeNav()} href="/faq-library">
          FAQ
        </Link>
        <Link onClick={() => closeNav()} href="/faq-library">
          Library
        </Link>
        <Link onClick={() => closeNav()} href="/pricing-model">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
