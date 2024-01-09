 
import Link from "next/link";
import React from "react";
import sequoiaCapitalImg from "../../../public/assets/images/sequoia-capital.svg";
import Image from "next/image";

const Page = () => {
  return (
    <div className="font-inter w-full relative 2xl:w-[1400px]">
      <div className="xl:bg-[#F6FFFE] xl:pl-[96px] xl:pt-[60px] xl:pr-[56px]">
        <section className=" px-6 sm:px-10 xl:px-28 py-14 sm:pb-28 xl:pb-32 bg-white text-darkGreen  ">
          {/* <Link
            href="/"
            className="absolute -left-4 top-[25rem] xl:top-[40rem] min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center  "
          >
            <p className=" underline font-serif text-[9px] sm:text-sm xl:text-lg text-darkGreen rotate-[90deg] scale-y-[-1] scale-x-[-1]">
              TwoTensor
            </p>
          </Link> */}
          <div>
            <div className="mb-5 sm:mb-14">
              <div className="mb-6 sm:mb-10 sm:flex gap-2 xl:gap-20">
                <h2 className="font-bold text-3xl sm:text-4xl xl:text-6xl mb-3 sm:mb-0">
                  Sequoia Capital
                </h2>
                <div className="bg-teal w-[144px] sm:w-[200px] xl:w-[322px] h-[11px] xl:h-[30px] sm:self-end   " />
              </div>
              <h4 className="font-bold text-sm sm:text-xl xl:text-3xl mb-2">
                WALL STREET INSIGHTS®
              </h4>
              <p className="font-medium sm:font-semibold text-[10px] sm:text-xs xl:text-lg leading-4 sm:leading-[18px] sm:w-[480px] xl:w-[720px]">
                Our Wall Street Insights® offering provides the world’s leading
                equity research from all of Wall Street’s leading firms,
                including Goldman Sachs, Bank of America, J.P Morgan, Morgan
                Stanley, Citi, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-5 items-center justify-center sm:justify-start gap-4">
              <div>
                <Image
                  className=" w-[272px] sm:w-[360px] xl:w-[750px] h-[160px] sm:h-[210px] xl:h-[440px]  "
                  src={sequoiaCapitalImg}
                  alt="capital graph"
                />
              </div>
              <div className="border border-[#D5E2E5] w-[225px] sm:w-[140px] xl:w-[270px] sm:h-[210px] xl:h-[440px]   text-black py-2 flex flex-col gap-1 xl:gap-2">
                <div>
                  <h4 className="w-full h-4 xl:h-8 bg-softBlue pl-6 flex items-center font-semibold text-[7.5px] xl:text-sm xl:mb-2 ">
                    Categories Categories ⓘ
                  </h4>
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-14 ml-6 mt-1 xl:mt-3" />
                </div>
                <div>
                  <h4 className="w-full h-4 xl:h-8 bg-softBlue pl-6 flex items-center font-semibold text-[7.5px] xl:text-sm xl:mb-2 ">
                    AI
                  </h4>
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-20 ml-6 mt-1 xl:mt-3" />
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-16 ml-6 mt-1 xl:mt-3" />
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-14 ml-6 mt-1 xl:mt-3" />
                </div>
                <div>
                  <h4 className="w-full h-4 xl:h-8 bg-softBlue pl-6 flex items-center font-semibold text-[7.5px] xl:text-sm xl:mb-2 ">
                    Sub Verticals
                  </h4>
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-24 ml-6 mt-1 xl:mt-3" />
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-14 ml-6 mt-1 xl:mt-3" />
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-16 ml-6 mt-1 xl:mt-3" />
                </div>
                <div>
                  <h4 className="w-full h-4 xl:h-8 bg-softBlue pl-6 flex items-center font-semibold text-[7.5px] xl:text-sm xl:mb-2 ">
                    Business Models ⓘ
                  </h4>
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-10 ml-6 mt-1 xl:mt-3" />
                  <div className="bg-[#D9D9D9] h-[6px] xl:h-3 w-14 ml-6 mt-1 xl:mt-3" />
                </div>
              </div>
            </div>
          </div>

           
        </section>
      </div>
    </div>
  );
};

export default Page;
