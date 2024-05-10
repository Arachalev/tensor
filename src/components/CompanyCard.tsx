import React, { useRef } from "react";
import type { Companies } from "./CompaniesThread";
import Image from "next/image";
import "./CompanyCardStyles.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface CompanyCardProps extends Companies {
  handleClose: () => void;
}

const CompanyCard = (props: CompanyCardProps) => {
  const {
    img,
    name,
    deals,
    value,
    leadDays,
    details1,
    details2,
    details3,
    details4,
    details5,
    details6,
    details7,
    details8,
    details9,
    details10,
    details11,
    handleClose,
  } = props;

  const detailsArray = [
    details1,
    details2,
    details3,
    details4,
    details5,
    details6,
    details7,
    details8,
    details9,
    details10,
    details11,
  ];

  gsap.registerPlugin(useGSAP);

  const containerRef = useRef(null);

  useGSAP(
    () => {
      let cardTl = gsap.timeline();

      const containerTween = gsap.from(".company-card", {
        x: 100,
        ease: "back.inOut",
        scale: 0.01,
      });
    }
    // { scope: containerRef, revertOnUpdate: true, dependencies:[] }
  );

  return (
    <div
      // ref={containerRef}
      className="company-card z-[1000] scale-[1.8]  bg-softBlue h-[231px] w-[186px] px-3 pt-[14px]  flex flex-col gap-2 rounded-[9px]  text-darkGreen font-inter"
      onMouseLeave={() => handleClose()}
    >
      <div className="font-bold flex items-start gap-[5px]">
        <Image
          src={img!}
          height={15}
          width={15}
          alt={name}
          className="rounded-full mt-1"
        />
        <div>
          <h4 className=" text-sm  ">{name}</h4>
          <p className="text-[7px] ">{deals} Deals</p>
        </div>
      </div>
      <div className="font-bold flex items-center gap-[6px]">
        <div className="bg-darkGreen flex items-center justify-center w-[89px] h-[22px] text-center whitespace-nowrap rounded-[2px] ">
          <p className="text-[5.5px] text-softBlue ">
            Investment Value: {`${value}`}
          </p>
        </div>
        <div className="bg-inherit border border-darkGreen rounded-[2px] w-[67px] h-5 flex items-center justify-center ">
          <p className="text-[5.5px] text-darkGreen ">{leadDays} Lead Days</p>
        </div>
      </div>
      <hr className="bg-[#87BFBF]/40 border-none min-h-[1px] w-full" />
      <div
        className=" companyCard text-[6px] flex flex-col gap-3 overflow-y-scroll pb-4"
        // style={{ scrollbarWidth: "none" }}
      >
        {detailsArray.map((detail) => {
          if (detail) {
            return (
              <div key={detail?.subTitle} className="">
                <p className="">{detail?.subTitle}</p>
                <p className="font-bold ">
                  Stage: <span className=" font-normal">{detail?.stage}</span>
                </p>
                <p className="font-bold ">
                  Money Raised:{" "}
                  <span className=" font-normal">{detail?.raised}</span>
                </p>
                <p className="font-bold ">
                  Co-Investors:{" "}
                  <span className=" font-normal ">
                    {detail?.co_investors.join(",")}
                  </span>
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CompanyCard;
