import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrow from "../../public/assets/icons/arrow.svg";

const SideNav = ({ variant = "dark" }: { variant?: "light" | "dark" }) => {
  return (
    <div className="font-inter flex flex-col gap-4">
      {variant === "light" && (
        <Link
          href=""
          className={`font-semibold text-xs text-[#F3F0F0]/70 mb-2 ml-4 `}
        >
          Investor Login
        </Link>
      )}
      <Link
        href=""
        className={`font-semibold text-xs ${
          variant === "dark" ? "text-darkGreen" : "text-[#74DDD0]"
        } mb-2 ml-4 `}
      >
        Home
      </Link>
      <div
        className={` ${
          variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
        } font-semibold text-[10px] `}
      >
        <div
          className={`flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image src={arrow} alt="arrow" />
          <h4>What We Do</h4>
        </div>
        <div className="ml-4 flex flex-col gap-1 mt-1">
          <Link href="">Our Product</Link>
          <Link href="">Pricing</Link>
        </div>
      </div>
      <div
        className={` ${
          variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
        } font-semibold text-[10px] `}
      >
        <div
          className={`flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image src={arrow} alt="arrow" />
          <h4>Who We Are</h4>
        </div>
        <div className="ml-4 flex flex-col gap-1 mt-1">
          <Link href="">Leadership</Link>
          <Link href="">Founder</Link>
          <Link href="">Our People</Link>
          <Link href="">Diversity</Link>
          <Link href="">Core Principles</Link>
          <Link href="">Community</Link>
        </div>
      </div>
      <div
        className={` ${
          variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
        } font-semibold text-[10px] `}
      >
        <div
          className={`flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image src={arrow} alt="arrow" />
          <h4>How to Join</h4>
        </div>
        <div className="ml-4 flex flex-col gap-1 mt-1">
          <Link href="">Career Development</Link>
          <Link href="">Choose Your Path</Link>
          <Link href="">Interviewing</Link>
          <Link href="">internships</Link>
          <Link href="">Fellowship Program</Link>
          <Link href="">Application FAQ</Link>
        </div>
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
        <Link href="">FAQ</Link>
        <Link href="">Library</Link>
        <Link href="">Contact</Link>
      </div>
    </div>
  );
};

export default SideNav;
