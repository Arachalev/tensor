"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/store/contexts/appContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "./Banner/Banner";
import MobileNav from "@/components/MobileNav";
import SideNav from "./SideNav";
import LoadingScreen from "./LoadingScreen";

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const { deviceWidth, updateDeviceWidth } = useContext(AppContext);

  const path = usePathname();
  useEffect(() => {
    const handleSizeChange = () => {
      updateDeviceWidth(window.outerWidth);
    };
    window.addEventListener("resize", handleSizeChange);
    return () => window.removeEventListener("resize", handleSizeChange);
  }, [updateDeviceWidth, path]);

  useEffect(() => {
    // setFirstLoad(true);
    const firstLoadTimer = setTimeout(() => {
      setFirstLoad(false);
    }, 4000);

    return () => clearTimeout(firstLoadTimer);
  }, []);

  // stop scrolling in body when menu is open
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    if (showMobileNav) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [showMobileNav]);

  return (
    <nav className="bg-[#026969] w-screen  h-[52px] sm:h-[60px] ">
      {firstLoad && <LoadingScreen />}
      <div className="h-8 sm:h-full items-end flex ">
        <Link
          href="/"
          className="pl-[10px] w-[84px] sm:min-w-[164px] xl:min-w-[200px] h-full flex items-center justify-center gap-[2px] sm:gap-1 bg-[#E3F8F5] pb-1 sm:pb-0"
        >
          <div>
            <Image
              className="sm:h-[14px] xl:h-[17px] sm:w-[17px] xl:w-[20px]"
              alt="logo"
              src="/assets/images/logo.png"
              width={10}
              height={10}
            />
          </div>
          <div className="font-serif ">
            <h2 className=" text-[6.5px] sm:text-xs xl:text-sm">
              Looking Glass
            </h2>
            <h4 className=" text-[4.15px] sm:text-[8px] xl:text-[10px]">
              by The Engineers at TwoTensor
            </h4>
          </div>
        </Link>

        <div className="flex justify-between sm:items-center  pb-1 sm:pb-0 w-full sm:w-fit sm:h-full sm:mr-8">
          <div className="pl-2 sm:pl-3 xl:pl-8 font-inter font-semibold text-[6px] sm:text-xs xl:text-sm text-white flex flex-col flex-end">
            <h2 className="">TRUSTED / VALIDATED</h2>
            <h2 className=" whitespace-nowrap  ">BY WORLD LEADING FUNDS</h2>
          </div>
          <div
            onClick={() => {
              setShowMobileNav((state) => !state);
            }}
            className=" flex flex-end sm:hidden pr-4 "
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
        <div className="hidden sm:block w-full relative">
          <Banner speed={5000} />
          <div className="absolute h-full w-[50px] xl:w-[100px] z-50 right-0 top-0  bg-gradient-to-l from-[#026969] via-[#026969]/50 to-[#005050]/0 " />
        </div>
      </div>
      <div className="sm:hidden flex w-full relative">
        <Banner speed={5000} />
        <div className="absolute h-full w-[50px] xl:w-[100px] z-50 right-0 top-0  bg-gradient-to-l from-[#026969] via-[#026969]/50 to-[#005050]/0 " />
      </div>
      {showMobileNav && <MobileNav closeNav={() => setShowMobileNav(false)} />}
      <div className="hidden sm:block fixed top-36 right-6 sm:right-10 xl:right-11 z-[1000]">
        <SideNav showInvestor />
      </div>
    </nav>
  );
};

export default NavBar;
