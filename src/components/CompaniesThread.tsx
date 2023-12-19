import React from "react";
import Image from "next/image";

interface Details {
  subTitle: string;
  stage: string;
  raised?: string;
  co_investors: string[];
}

interface Companies {
  img?: string;
  name: string;
  deals: number;
  value: string;
  leadDays: number;
  details1?: Details;
  details2?: Details;
  details3?: Details;
  details4?: Details;
  details5?: Details;
  details6?: Details;
  details7?: Details;
  details8?: Details;
  details9?: Details;
  details10?: Details;
  details11?: Details;
}

export interface CompaniesThreadProps {
  companies: {
    comp1?: Companies;
    comp2?: Companies;
    comp3?: Companies;
    comp4?: Companies;
    comp5?: Companies;
    comp6?: Companies;
  }[];
}

const CompaniesThread = (props: CompaniesThreadProps) => {
  const { companies } = props;

  return (
    <div className="flex items-center justify-between  ">
      {companies.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-[3px]">
          {item.comp1 ? (
            <div
              className={`${
                item.comp1.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp1.img && (
                <Image
                  width={30}
                  height={30}
                  className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
                  src={item.comp1.img}
                  alt={item.comp1.name}
                />
              )}
            </div>
          ) : (
            <div className="h-[30px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px]  min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
          {item.comp2 ? (
            <div
              className={`${
                item.comp2.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp2.img && (
                <Image
                  width={30}
                  height={30}
                  className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
                  src={item.comp2.img}
                  alt={item.comp2.name}
                />
              )}
            </div>
          ) : (
            <div className="h-[30px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px]  min-w-[1px] bg-[#417871] " />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
          {item.comp3 ? (
            <div
              className={`${
                item.comp3.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp3.img && (
                <Image
                  width={30}
                  height={30}
                  className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
                  src={item.comp3.img}
                  alt={item.comp3.name}
                />
              )}
            </div>
          ) : (
            <div className="h-[30px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px]  min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4 w-[1px]  sm:min-h-[24px]  bg-[#417871]" />
          {item.comp4 ? (
            <div
              className={`${
                item.comp4.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp4.img && (
                <Image
                  width={30}
                  height={30}
                  className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
                  src={item.comp4.img}
                  alt={item.comp4.name}
                />
              )}
            </div>
          ) : (
            <div className="h-[30px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px]  min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4 w-[1px]  sm:min-h-[24px]  bg-[#417871]" />
          {item.comp5 ? (
            <div
              className={`${
                item.comp5.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp5.img && (
                <Image
                  width={30}
                  height={30}
                  className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
                  src={item.comp5.img}
                  alt={item.comp5.name}
                />
              )}
            </div>
          ) : (
            <div className="h-[30px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
          {item.comp6 ? (
            <div
              className={`${
                item.comp6.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp6.img && (
                <Image
                  width={30}
                  height={30}
                  className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
                  src={item.comp6.img}
                  alt={item.comp6.name}
                />
              )}
            </div>
          ) : (
            <div className="h-[30px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px]  min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
        </div>
      ))}
    </div>
  );
};

export default CompaniesThread;
