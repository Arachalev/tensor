"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../public/assets/icons/arrow.svg";
import arrowWhite from "../../public/assets/icons/arrow-white.svg";
import { AppContext } from "@/store/contexts/appContext";
import { useRouter } from "next/navigation";

const SideNav = ({ showInvestor = false }: { showInvestor?: boolean }) => {
  const [variant, setVariant] = useState("light");
  const { showNav, updateShowNav } = useContext(AppContext);
  const router = useRouter();

  // function isColorDarker(color1: string, color2: string): boolean {
  //   // Convert HEX color to RGB
  //   function hexToRgb(hex: string): [number, number, number] | null {
  //     const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  //     if (!match) {
  //       return null;
  //     }
  //     return [
  //       parseInt(match[1], 16),
  //       parseInt(match[2], 16),
  //       parseInt(match[3], 16),
  //     ];
  //   }

  //   // Calculate brightness (lightness) of a color
  //   function calculateBrightness(rgb: [number, number, number]): number {
  //     return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  //   }

  //   // Parse RGBA values
  //   const rgbaValues1 = color1
  //     .match(/rgba?\(([^)]+)\)/)?.[1]
  //     .split(",")
  //     .map((value) => parseFloat(value.trim()));
  //   const rgbaValues2 = color2.startsWith("#") ? hexToRgb(color2) : null;

  //   // If conversion fails for either color, return false
  //   if (
  //     !rgbaValues1 ||
  //     rgbaValues1.length !== 4 ||
  //     !rgbaValues2 ||
  //     rgbaValues2.length !== 3
  //   ) {
  //     return false;
  //   }

  //   // Calculate brightness of the colors
  //   const brightness1 = calculateBrightness(
  //     rgbaValues1 as [number, number, number]
  //   );
  //   const brightness2 = calculateBrightness(
  //     rgbaValues2 as [number, number, number]
  //   );

  //   // Compare brightness and return true if color1 is darker than color2
  //   return brightness1 < brightness2;
  // }

  // Example usage
  const color1 = "rgba(255, 0, 0, 0.5)"; // a red color with alpha in RGBA format
  const color2 = "#336699"; // a shade of blue in HEX format

  // if (isColorDarker(color1, color2)) {
  //     console.log(`${color1} is darker than ${color2}`);
  // } else {
  //     console.log(`${color1} is not darker than ${color2}`);
  // }

  useEffect(() => {
    let sideNav = document.getElementById("sideNav");
    let sideNavRect = sideNav?.getBoundingClientRect();

    if (sideNavRect) {
      let elementUnderneath = document.elementFromPoint(
        sideNavRect.left,
        sideNavRect.top
      );

      let bgUnder = window.getComputedStyle(elementUnderneath!).backgroundColor;
      // // console.log(bgUnder);
      // const variantDark = "#005050";
      // const variantLight = "#B7E5EF";

      // let light = isColorDarker(bgUnder, variantLight);
      // let dark = isColorDarker(bgUnder, variantDark);

      // console.log(bgUnder)
      // console.log(light, dark);
    }
  }, []);

  return (
    <div
      className={`z-50 font-inter bg-darkGreen py-4 rounded-xl flex flex-col gap-4 ${
        variant === "light" ? " sm:px-4" : ""
      }`}
      id="sideNav"
    >
      {showInvestor && (
        <Link
          href=""
          className={`font-semibold text-[13px] text-[#8F9C8B] ml-4 `}
        >
          User Login
        </Link>
      )}
      <Link
        href=""
        className={`font-semibold text-[13px] ${
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
          <h4 onClick={() => router.push("/how-it-works")}>What We Do</h4>
        </div>
        {showNav.whatWedDo && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
            <Link href="/how-it-works">Our Product</Link>
            <Link href="/pricing-model">Pricing</Link>
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

          <h4 onClick={() => router.push("/who-we-are")}>Who We Are</h4>
        </div>
        {showNav.whoWeAre && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
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
          className={` cursor-pointer flex items-center gap-[6px] font-semibold text-xs ${
            variant === "dark" ? "text-darkGreen" : "text-white"
          }`}
        >
          <Image
            onClick={() => updateShowNav("join")}
            src={variant === "dark" ? arrow : arrowWhite}
            alt="arrow"
          />

          <h4 onClick={() => router.push("/how-to-join")}>How to Join</h4>
        </div>
        {showNav.join && (
          <div className="ml-4 flex flex-col gap-1 mt-1  text-[10px]">
            <Link href="/how-to-join#career">Career Development</Link>
            <Link href="/how-to-join#path">Choose Your Path</Link>
            <Link href="/how-to-join#interview">Interviewing</Link>
            <Link href="/how-to-join#internships">internships</Link>
            <Link href="/how-to-join#fellowship">Fellowship Program</Link>
            <Link href="/how-to-join#faq">Application FAQ</Link>
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
        } font-semibold  text-[13px] ml-4 flex flex-col gap-1`}
      >
        <Link href="/faq-library">FAQ</Link>
        <Link href="/faq-library">Library</Link>
        <Link href="/pricing-model">Contact</Link>
      </div>
    </div>
  );
};

export default SideNav;
