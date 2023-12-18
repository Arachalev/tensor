"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import dellImg from "../../public/assets/images/homePage/DELL.svg";
import ciscoImg from "../../public/assets/images/homePage/CISCO.svg";
import phillipsImg from "../../public/assets/images/homePage/PHILIPS.svg";
import SideNav from "@/components/Banner/SideNav";

export default function Home() {
  return (
    <main className=" bg-white">
      <div className="bg-[#F6FFFE]  flex justify-between   pr-6 sm:pr-4 xl:pr-[73px] py-14 pt-16 ">
        <div className="w-6  sm:min-w-[60px] xl:w-[158px] self-center relative">
          <p className="  absolute -left-6 underline font-serif text-[9px] sm:text-sm xl:text-lg text-darkGreen rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </div>
        <div className=" flex flex-col gap-9 font-inter ">
          <div className="flex flex-col gap-10 text-[15px] sm:text-xl xl:text-2xl font-semibold text-darkGreen">
            <h4 className="hidden xl:block font-medium text-xl">
              INVESTMENT INTENT DATA
            </h4>
            <p>
              You know how B2B sales teams in global companies like DELL, Cisco
              and Phillips use intent data to find out who wants to buy their
              products?
            </p>
            <p>
              At TwoTensor we&apos;re doing the same thing, but for finance. We
              analyse online hints that show us when a company might get
              investment or who might invest in them.
            </p>
            <p>
              Our models have been validated in over 400 deals, by world leading
              funds like Sequoia Capital, Andreessen Horowitz, and Index
              Ventures.
            </p>
          </div>
          <button
            type="button"
            className={`bg-darkGreen sm:mt-[30px] xl:mt-[10px] w-[154px] sm:w-[250px] xl:w-[287px] h-9 sm:h-[58px] rounded-[26px] sm:rounded-[43px] xl:rounded-[50px]
           text-softBlue font-medium text-[10px] sm:text-base xl:text-xl whitespace-nowrap`}
          >
            Complimentary Dataset
          </button>
          <div className="flex items-center gap-5">
            <Image src={dellImg} alt="dell image" className="sm:w-10 sm:h-10" />
            <Image
              src={phillipsImg}
              alt="phillips image"
              className="sm:w-8 sm:h-10"
            />
            <Image
              src={ciscoImg}
              alt="cisco image"
              className="sm:w-12 sm:h-9"
            />
          </div>
        </div>
        <div className="hidden sm:block ml-[96px]">
          <SideNav />
        </div>
      </div>
    </main>
  );
}
