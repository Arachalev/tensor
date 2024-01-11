"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../public/assets/icons/arrow.svg";
import arrowWhite from "../../public/assets/icons/arrow-white.svg";
import { AppContext } from "@/store/contexts/appContext";
import { useRouter } from "next/navigation";

const SideNav = ({ showInvestor = true }: { showInvestor?: boolean }) => {
  const [variant, setVariant] = useState("light");
  // const [hideLogin, setHideLogin] = useState(false);

  const { showNav, updateShowNav } = useContext(AppContext);

  const router = useRouter();

  // useEffect(() => {
  //   const updateLogin = () => {
  //     if (window.scrollY == 0) {
  //       setHideLogin(false);
  //     } else {
  //       setHideLogin(true);
  //     }
  //   };

  //   window.addEventListener("scroll", updateLogin);
  //   return () => window.removeEventListener("scroll", updateLogin);
  // }, []);

  return (
    <div id="sideNav">
      {/* {!hideLogin && (
        <Link href="" className={`font-semibold text-[13px] text-[#74DDD0] ml-4`}>
          User Login
        </Link>
      )} */}
      <div
        className={`z-50 font-inter bg-[#012525]/80 py-4 rounded-[4px] flex flex-col mt-5 gap-4 w-[147px] ${
          variant === "light" ? " sm:px-4" : ""
        }`}
      >
        <Link
          href="/"
          className={`font-semibold text-[13px] hover:text-white ${
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
            className={`cursor-pointer flex items-center gap-[6px] font-semibold text-[13px] ${
              variant === "dark" ? "text-darkGreen" : "text-white"
            }`}
          >
            <Image
              onClick={() => updateShowNav("whatWedDo")}
              src={variant === "dark" ? arrow : arrowWhite}
              alt="arrow"
            />
            <h4
              className="hover:text-[#74DDD0]"
              onClick={() => router.push("/how-it-works")}
            >
              What We Do
            </h4>
          </div>
          {showNav.whatWedDo && (
            <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
              <Link className={`hover:text-white`} href="/how-it-works">
                Our Product
              </Link>
              <Link className={`hover:text-white`} href="/pricing-model">
                Pricing
              </Link>
            </div>
          )}
        </div>
        <div
          className={` ${
            variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
          } font-semibold text-[10px] `}
        >
          <div
            className={`cursor-pointer flex items-center gap-[6px] font-semibold text-xs ${
              variant === "dark" ? "text-darkGreen" : "text-white"
            }`}
          >
            <Image
              onClick={() => updateShowNav("whoWeAre")}
              src={variant === "dark" ? arrow : arrowWhite}
              alt="arrow"
            />

            <h4
              className="hover:text-[#74DDD0]"
              onClick={() => router.push("/who-we-are")}
            >
              Who We Are
            </h4>
          </div>
          {showNav.whoWeAre && (
            <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
              <Link
                className={`hover:text-white`}
                href="/who-we-are#leadership"
              >
                Leadership
              </Link>
              <Link className={`hover:text-white`} href="/who-we-are#founder">
                Founder
              </Link>
              <Link
                className={`hover:text-white`}
                href="/who-we-are#our-people"
              >
                Our People
              </Link>
              <Link className={`hover:text-white`} href="/who-we-are#diversity">
                Diversity
              </Link>
              <Link
                className={`hover:text-white`}
                href="/who-we-are#principles"
              >
                Core Principles
              </Link>
              <Link className={`hover:text-white`} href="/who-we-are#community">
                Community
              </Link>
            </div>
          )}
        </div>
        <div
          className={` ${
            variant === "dark" ? "text-darkGreen/70" : "text-[#B7E5EF]"
          } font-semibold text-[10px] `}
        >
          <div
            className={` cursor-pointer flex items-center gap-[6px] font-semibold text-xs ${
              variant === "dark" ? "text-darkGreen" : "text-white"
            }`}
          >
            <Image
              onClick={() => updateShowNav("join")}
              src={variant === "dark" ? arrow : arrowWhite}
              alt="arrow"
            />

            <h4
              className="hover:text-[#74DDD0]"
              onClick={() => router.push("/how-to-join")}
            >
              How to Join
            </h4>
          </div>
          {showNav.join && (
            <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
              <Link className={`hover:text-white`} href="/how-to-join#career">
                Career Development
              </Link>
              <Link className={`hover:text-white`} href="/how-to-join#path">
                Choose Your Path
              </Link>
              <Link
                className={`hover:text-white`}
                href="/how-to-join#interview"
              >
                Interviewing
              </Link>
              <Link
                className={`hover:text-white`}
                href="/how-to-join#internships"
              >
                internships
              </Link>
              <Link
                className={`hover:text-white`}
                href="/how-to-join#fellowship"
              >
                Fellowship Program
              </Link>
              <Link className={`hover:text-white`} href="/how-to-join#faq">
                Application FAQ
              </Link>
            </div>
          )}
        </div>
        <button
          type="button"
          className={`  text-darkGreen hover:text-[#74DDD0]  ${
            variant === "dark"
              ? "bg-inherit border-darkGreen border-[2px] "
              : "bg-[#E2FFFB] hover:bg-inherit hover:border-darkGreen hover:border-[2px] "
          }    w-[94px]  h-7 rounded-[3px]  
          font-medium text-[9px]  whitespace-nowrap`}
        >
          Schedule Demo
        </button>

        <div
          className={`${
            variant === "dark" ? "text-darkGreen/70" : "text-white"
          } font-semibold  text-[13px] ml-4 flex flex-col gap-1`}
        >
          <Link className={`hover:text-[#74DDD0]`} href="/faq-library">
            FAQ
          </Link>
          <Link className={`hover:text-[#74DDD0]`} href="/faq-library">
            Library
          </Link>
          <Link className={`hover:text-[#74DDD0]`} href="/pricing-model">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
