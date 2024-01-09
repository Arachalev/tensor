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
import homeTensor from "../../public/assets/images/tensor.png";

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

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

  useEffect(() => {
    const updateLogin = () => {
      if (window.scrollY == 0) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", updateLogin);
    return () => window.removeEventListener("scroll", updateLogin);
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

  const bg =
    path === "/" || path === "/how-it-works" || path === "/faq-library"
      ? ""
      : "bg-[#026969 sm:bg-inherit";

  const showSideNav = path !== "/our-experts" && path !== "/pricing-model";

  return (
    <nav
      className={`z-[50] ${bg} w-screen h-[52px] sm:h-[0px] fixed top-0 2xl:flex 2xl:items-center 2xl:justify-center`}
    >
      {/* {firstLoad && <LoadingScreen />} */}
      <div className="h-full items-center  sm:h-full w-full 2xl:w-[1400px] flex relative ">
        <Link
          href="/"
          className="z-[50] fixed sm:-left-10 top-32 sm:top-48 xl:top-80 w-[80px] h-20 sm:min-w-[60px] xl:w-[158px] self-center rotate-[-90deg] "
        >
          <Image src={homeTensor} alt="two tensor" className="w-20" />
        </Link>

        {showMenu && (
          <div className="flex items-end flex-col self-end  pb-3 sm:pb-0 w-full sm:w-fit sm:h-full sm:mr-8">
            <div
              onClick={() => {
                setShowMobileNav((state) => !state);
              }}
              className=" flex flex-end sm:hidden mr-4 bg-darkGreen p-2 "
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
        )}
        {showSideNav && (
          <div className="hidden sm:block absolute top-20 right-6 sm:right-10 xl:right-11 z-[500]">
            <SideNav showInvestor />
          </div>
        )}
      </div>

      {showMobileNav && <MobileNav closeNav={() => setShowMobileNav(false)} />}
    </nav>
  );
};

export default NavBar;
