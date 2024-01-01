import SideNav from "@/components/SideNav";
import Link from "next/link";
import React from "react";
import coreArrowIcon from "../../../public/assets/icons/coreArrow.svg";
import targetIcon from "../../../public/assets/icons/target.svg";
import stockIcon from "../../../public/assets/icons/stock.svg";
import shakeIcon from "../../../public/assets/icons/shake.svg";
import searchIcon from "../../../public/assets/icons/search.svg";
import Image from "next/image";

const Page = () => {
  return (
    <div className="font-inter w-full relative">
      <section className=" px-6 sm:px-10 xl:px-28 py-11 bg-darkGreen text-softBlue  ">
        <Link
          href="/"
          className="absolute -left-4 top-[10rem] xl:top-[22rem] min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center  "
        >
          <p className=" underline font-serif text-[9px] sm:text-sm xl:text-lg text-softBlue rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </Link>

        <div className="sm:w-[545px] lg:w-full">
          <div className=" w-full  flex items-center justify-center border-b-2 border-b-[#6A8682]  pb-4 xl:pb-8  ">
            <div className="w-full   bg-black h-[230px] sm:h-[365px] lg:h-[684px] lg:text-4xl flex items-center justify-center">
              VIDEO GOES HERE
            </div>
          </div>
          <div className="mt-5 xl:mt-10 sm:flex gap-6">
            <h4 className="font-bold xl:text-4xl leading-6 xl:leading-[60px] mb-4">
              AI Deployed to the Operational Edge
            </h4>
            <div className="text-[9px] xl:text-base xl:w-1/2 font-medium flex flex-col gap-4 xl:gap-6">
              <p>
                Artificial intelligence and machine learning models built in
                labs typically fail in an evolving operational context - but
                that’s where the stakes are highest.
              </p>
              <p>
                Gotham’s built-in feedback loops train and refine models that
                augment human analysis and decision making during operations. In
                turn, operator actions improve these models over time.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-[32px] right-[20px] xl:right-[72px]">
          <SideNav variant="light" showInvestor={true} />
        </div>
      </section>
      <section className=" px-6 sm:px-10 xl:px-28 pt-7 sm:pt-24 pb-16 sm:pb-0 bg-fadedBlue sm:bg-darkGreen text-softBlue  ">
        <div className="sm:bg-fadedBlue sm:px-11 xl:px-16 sm:pb-20 sm:pt-14 xl:pt-24 xl:flex xl:gap-20">
          <div className="text-darkGreen/90 sm:w-[288px] flex flex-col gap-6 mb-16">
            <p className="text-[8px] sm:text-[10px] xl:text-xs ">
              LOOKING GLASS OS
            </p>
            <h4 className="font-bold text-2xl sm:text-3xl xl:text-[34px] leading-8 xl:leading-10 whitespace-nowrap  ">
              THE TWOTENSOR <br className="hidden xl:block" /> ONTOLOGY
            </h4>
            <p className="font-semibold sm:text-lg xl:text-xl whitespace-nowrap">
              Harness insights with precision <br /> and depth.
            </p>
            <button
              type="button"
              className={`bg-darkGreen sm:mt-[10px] xl:mt-[10px] w-[187px] sm:w-[219px] xl:w-[259px] h-9 sm:h-[43px] xl:h-[52px] rounded-[32px] sm:rounded-[38px] xl:rounded-[45px]
           text-softBlue font-medium text-[13px] sm:text-base xl:text-lg whitespace-nowrap`}
            >
              Complimentary Dataset
            </button>
          </div>

          <div className="bg-[#8CEDE1] text-darkGreen rounded-[10px] sm:flex sm:gap-6 sm:px-6 sm:pb-7 xl:w-full">
            <div className="h-[185px] px-3 py-6 flex flex-col  border-b-2 border-b-darkGreen sm:border-none">
              <p className="font-bold text-[12px] sm:text-[13px] xl:text-base mb-5">
                GLASS OS
              </p>{" "}
              <div className="bg-darkGreen/70 h-[1.5px] w-[103px] mb-5" />{" "}
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl leading-6 xl:leading-8">
                ONTOLOGY
              </h4>{" "}
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-lg sm:text-xl border-b-2 border-b-darkGreen">
                  CORE
                </h4>
                <Image src={coreArrowIcon} alt="arrow" />
              </div>
            </div>

            <div className="flex flex-col text-darkGreen/90 w-full sm:mt-[64px]">
              <div className="h-[185px] sm:h-[81px] xl:h-[90px] flex px-1 xl:px-3 py-5  gap-5 border-y-2 border-y-darkGreen">
                <Image
                  src={searchIcon}
                  className="h-[60px] sm:hidden"
                  alt="search"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={searchIcon}
                      className="sm:justify-self-start h-[60px] sm:h-[50px] xl:h-[55px] hidden sm:block"
                      alt="search"
                    />
                  </div>
                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px] xl:text-[10px]">
                      LAYER / 01
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      IDENTIFY
                    </h4>
                  </div>
                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Traditional Source</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />
                    <p>Digital</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />
                    <p>Client Centric</p>
                  </div>
                </div>
              </div>
              <div className="h-[185px]  sm:h-[81px] xl:h-[90px] px-1 xl:px-3 py-5 flex gap-5 border-b-2 border-b-darkGreen">
                <Image
                  src={shakeIcon}
                  className="h-[51px]  sm:hidden"
                  alt="handshake"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={shakeIcon}
                      className="sm:justify-self-start h-[46px] xl:h-[50px] hidden sm:block"
                      alt="handshake"
                    />
                  </div>
                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px]  xl:text-[10px]">
                      LAYER / 02
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      ACQUIRE
                    </h4>
                  </div>

                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Automated Collections</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Collaborative Agreements</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Exclusive Access</p>
                  </div>
                </div>
              </div>
              <div className="h-[185px]  sm:h-[81px] xl:h-[90px] px-1 xl:px-3 py-5 flex gap-5 border-b-2 border-b-darkGreen">
                <Image
                  src={stockIcon}
                  className="h-[51px] sm:hidden"
                  alt="stock"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={stockIcon}
                      className="sm:justify-self-start h-[44px] xl:h-[50px] hidden sm:block"
                      alt="stock"
                    />
                  </div>
                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px] xl:text-[10px]">
                      LAYER / 03
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      ANALYSE
                    </h4>
                  </div>

                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Multi Layer AI</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Human Insights</p>
                  </div>
                </div>
              </div>
              <div className="h-[185px] sm:h-[81px] xl:h-[90px] px-1 xl:px-3 py-5 flex gap-5 ">
                <Image
                  src={targetIcon}
                  className="h-[53px] sm:hidden"
                  alt="target"
                />
                <div className="sm:flex sm:justify-between sm:gap-11 sm:items-center  sm:w-full">
                  <div className="sm:w-[60px]">
                    <Image
                      src={targetIcon}
                      className="  h-[48px] xl:h-[53px] hidden sm:block"
                      alt="target"
                    />
                  </div>

                  <div className="sm:w-[100px]  sm:flex sm:flex-col ">
                    <p className="font-medium text-[11px] sm:text-[8.5px] xl:text-[10px]">
                      LAYER / 04
                    </p>
                    <h4 className="font-semibold text-2xl sm:text-xl xl:text-2xl">
                      EXECUTE
                    </h4>
                  </div>

                  <div className="sm:w-[150px]  text-[11px] sm:text-[8px] xl:text-[10px] font-semibold  flex flex-col gap-1 mt-4 sm:mt-0  ">
                    <p>Integrated Platform</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Information Discovery</p>
                    <hr className="w-[92px] sm:w-[68px] h-[1.5px] m-0 border-none bg-darkGreen/70" />

                    <p>Data Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
