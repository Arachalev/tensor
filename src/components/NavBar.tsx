"use client";
import React, { useContext, useEffect } from "react";
import { AppContext } from "@/store/contexts/appContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "./Banner/Banner";

const NavBar = () => {
  const { deviceWidth, updateDeviceWidth } = useContext(AppContext);
  const path = usePathname();
  useEffect(() => {
    const handleSizeChange = () => {
      updateDeviceWidth(window.outerWidth);
    };
    window.addEventListener("resize", handleSizeChange);
    return () => window.removeEventListener("resize", handleSizeChange);
  }, [updateDeviceWidth, path]);

  return (
    <nav className="bg-[#026969]  h-[52px] sm:h-[60px] ">
      <div className="h-8 sm:h-full items-end flex pr-4 ">
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
            <h2 className=" text-[6.5px] sm:text-xs xl:text-sm">Looking Glass</h2>
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
          <div className=" flex flex-end sm:hidden ">
            <Image
              src="/assets/icons/hamburger.svg"
              width={11}
              height={9}
              alt="menu"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden sm:block ">
          <Banner   speed={5000} />
        </div>
      </div>
      <div className="sm:hidden flex w-full">
        <Banner   speed={5000} />
      </div>
    </nav>
  );
};

export default NavBar;
