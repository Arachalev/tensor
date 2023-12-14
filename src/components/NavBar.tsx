"use client";
import React, { useContext, useEffect } from "react";
import { AppContext } from "@/store/contexts/appContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    <nav className="bg-[#026969]  h-[52px] ">
      <div className="h-8 items-end flex   pr-4 ">
        <Link
          href="/"
          className="pl-[10px] w-[84px] h-full flex items-center gap-[2px] bg-[#E3F8F5] pb-1"
        >
          <div>
            <Image
              className=""
              alt="logo"
              src="/assets/images/logo.png"
              width={10}
              height={10}
            />
          </div>
          <div className="font-serif ">
            <h2 className=" text-[6.5px]">Looking Glass</h2>
            <h4 className=" text-[4.15px] ">by The Engineers at TwoTensor</h4>
          </div>
        </Link>

        <div className="flex justify-between  pb-1 w-full">
          <div className="pl-2 font-inter font-semibold text-[6px] text-white flex flex-col flex-end">
            <h2>TRUSTED/VALIDATED</h2>
            <h2>BY WORLD LEADING FUNDS</h2>
          </div>
          <div className=" flex flex-end ">
            <Image
              src="/assets/icons/hamburger.svg"
              width={11}
              height={9}
              alt="menu"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
