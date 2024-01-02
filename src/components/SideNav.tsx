"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import arrow from "../../public/assets/icons/arrow.svg";
import arrowWhite from "../../public/assets/icons/arrow-white.svg";
import { AppContext } from "@/store/contexts/appContext";
const SideNav = ({
  variant = "dark",
  showInvestor = false,
}: {
  variant?: "light" | "dark";
  showInvestor?: boolean;
}) => {
  const { showNav, updateShowNav } = useContext(AppContext);
  return (
    <div
      className={`z-50 font-inter flex flex-col gap-4 ${
        variant === "light" ? " sm:px-4" : ""
      }`}
    >
      {showInvestor && (
        <Link
          href=""
          className={`font-semibold text-xs text-[#8F9C8B]/70 ml-4 `}
        >
          Investor Login
        </Link>
      )}
      <Link
        href=""
        className={`font-semibold text-xs ${
          variant === "dark" ? "text-darkGreen" : "text-[#74DDD0]"
        }  ml-4 `}
      >
        Home
      </Link>
      <div
        className={` ${
          variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
        } font-semibold text-[10px] `}
      >
        <div
          onClick={() => updateShowNav("whatWedDo")}
          className={`cursor-pointer flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image src={variant === "dark" ? arrow : arrowWhite} alt="arrow" />
          <h4>What We Do</h4>
        </div>
        {showNav.whatWedDo && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[9px]">
            <Link href="/how-it-works">Our Product</Link>
            <Link  href="/pricing-model">Pricing</Link>
          </div>
        )}
      </div>
      <div
        className={` ${
          variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
        } font-semibold text-[10px] `}
      >
        <div
          onClick={() => updateShowNav("whoWeAre")}
          className={`cursor-pointer flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image src={variant === "dark" ? arrow : arrowWhite} alt="arrow" />

          <h4>Who We Are</h4>
        </div>
        {showNav.whoWeAre && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[9px]">
                       <Link href="/who-we-are#leadership">Leadership</Link>
            <Link href="/who-we-are#founder">Founder</Link>
            <Link href="/who-we-are#our-people">Our People</Link>
            <Link href="/who-we-are#diversity">Diversity</Link>
            <Link href="/who-we-are#principles">Core Principles</Link>
            <Link href="/who-we-are#community">Community</Link>
          </div>
        )}
      </div>
      <div
        className={` ${
          variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
        } font-semibold text-[10px] `}
      >
        <div
          onClick={() => updateShowNav("join")}
          className={` cursor-pointer flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image src={variant === "dark" ? arrow : arrowWhite} alt="arrow" />

          <h4>How to Join</h4>
        </div>
        {showNav.join && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[9px]">
             <Link  href="/how-to-join#career">Career Development</Link>
            <Link  href="/how-to-join#path">Choose Your Path</Link>
            <Link  href="/how-to-join#interview">Interviewing</Link>
            <Link href="/how-to-join#internships">internships</Link>
            <Link  href="/how-to-join#fellowship">Fellowship Program</Link>
            <Link  href="/how-to-join#faq">Application FAQ</Link>
          </div>
        )}
      </div>
      <button
        type="button"
        className={`  text-darkGreen ${
          variant === "dark"
            ? "bg-inherit border-darkGreen border-[2px] "
            : "bg-[#74DDD0]"
        }    w-[109px]  h-7 rounded-[14px]  
            font-medium text-[8px]  whitespace-nowrap`}
      >
        Complimentary Dataset
      </button>

      <div
        className={`${
          variant === "dark" ? "text-darkGreen/70" : "text-white"
        } font-semibold  text-xs ml-4 flex flex-col gap-1`}
      >
  <Link href="/faq-library">FAQ</Link>
        <Link href="/faq-library">Library</Link>
        <Link href="/pricing-model">Contact</Link>
      </div>
    </div>
  );
};

export default SideNav;
