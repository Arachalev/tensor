"use client";

import Image from "next/image";
 
import homeTensor from "../../public/assets/images/homePage/homeTensor.svg";
import SideNav from "@/components/SideNav";
import {
  companiesThreadData,
  mediumCompaniesThreadData,
  mobileCompaniesThreadData,
} from "@/store/staticData/companiesThreadData";
import CompaniesThread from "@/components/CompaniesThread";
import { useContext, useEffect } from "react";
import { AppContext } from "@/store/contexts/appContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Banner } from "@/components/Banner/Banner";

export default function Home() {
  const { deviceWidth } = useContext(AppContext);
  // sm:pr-4 xl:pr-[73px]
  const router = useRouter();

  //  pr-6 sm:pr-[60px] xl:pr-[73px]

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.style.backgroundImage = "linear-gradient(to top right, #000202, #025A5A )";
  }, [router]);

  // bg-gradient-to-tr from-[#000202] to-[#025A5A]
  return (
    <main className="w-full   ">
      <section className="relative h-full min-h-[100vh]  flex font-inter px-6 sm:px-10 xl:px-28 pt-7 sm:pt-14 xl:pt-20 pb-16 sm:pb-[73px] xl:pb-[200px] text-white w-full">
        {/* <Link
          href="/"
          className="absolute -left-7 sm:-left-14 xl:-left-10 top-[10rem] xl:top-[16rem] min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center  "
        >
          <p className=" underline font-serif text-base  sm:text-4xl xl:text-[44px] text-fadedBlue rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </Link> */}
        <div className="flex flex-col  gap-14 sm:gap-28 items-center justify-between sm:w-full ">
          {/* hero section */}
          <div className="w-full relative flex items-center gap-11 ">
            <Image
              src={homeTensor}
              alt="two tensor"
              className="min-h-[321px] sm:min-h-[435px]"
            />
            <div className="w-full">
              <CompaniesThread
                companies={
                  deviceWidth > 1280
                    ? companiesThreadData.companies
                    : deviceWidth > 640
                    ? mediumCompaniesThreadData.companies
                    : mobileCompaniesThreadData.companies
                }
              />
            </div>
            {/* <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-[#005050]/90 to-[#005050]/40 hidden sm:block" /> */}
          </div>
          <div className="mt-4 pr-6 w-full">
            <p className="font-medium text-[7px] sm:text-[10px] xl:text-sm mb-1">
              INVESTMENT INTENT DATA
            </p>
            <h4 className="font-semibold text-xl sm:text-3xl xl:text-5xl">
              Investment Intent Signals for <br /> Smarter and Faster Deals.
            </h4>
            <p className="text-[9px] sm:text-sm xl:text-lg mb-1  xl:mt-2 ">
              Cut waste from false leads and ill timed efforts using a
              searchable universe <br />
              of investment intent signals.
            </p>
            <div className="flex items-end justify-between mt-8 xl:mt-11 ">
              <Banner variant="home" speed={0} />
            </div>
          </div>
        </div>
        {/* 
        pr-6  sm:pr-[60px] xl:pr-[73px] 
        */}
        <div className="hidden sm:block absolute h-[435px] sm:w-40 xl:w-52 right-0 top-0  bg-gradient-to-r from-[#005050]/0 via-darkGreen/80 to-[#005050]/40" />

        {/* <div className="absolute right-[40px] xl:right-[57px] hidden sm:block z-20">
          <SideNav variant="light" showInvestor />
        </div> */}
      </section>
      <section className="bg-[#F6FFFE] xl:w-[1123px] xl:min-h-[100vh] relative flex justify-between px-[24px] sm:px-[60px] xl:px-[142px] py-14 pt-16 xl:py-32 ">
        <div className=" font-inter sm:w-[440px] xl:w-[680px] ">
          <div className="flex flex-col gap-10 text-[15px]  text-darkGreen">
            <h4 className="block font-bold text-sm xl:text-lg">
              We amplify impact by delivering our research in practical,
              actionable formats.
            </h4>

            <div></div>

            <p className="sm:text-xl xl:text-2xl">
              Intellectual curiosity and lifelong learning, are fundamental in
              achieving extraordinary repeat success.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
