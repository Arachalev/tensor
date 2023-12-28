import React from "react";
import type { Companies } from "./CompaniesThread";
import Image from "next/image";
import "./CompanyCardStyles.css";

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
    details10,
    details11,
    details2,
    details3,
    details4,
    details5,
    details6,
    details7,
    details8,
    details9,
    handleClose,
  } = props;

  return (
    <div
      className=" scale-[1.8]  bg-softBlue h-[231px] w-[186px] px-3 pt-[14px]  flex flex-col gap-2 rounded-[9px]  text-darkGreen font-inter "
      onMouseLeave={() => handleClose()}
    >
      <div className="font-bold flex items-start gap-[5px]">
        <Image src={img!} height={15} width={15} alt={name} className="rounded-full mt-1" />
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
        {details1 && (
          <div className="">
            <p className="">{details1.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details1.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details1.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details1.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details2 && (
          <div className="">
            <p className="">{details2.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details2.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details2.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details2.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details3 && (
          <div className="">
            <p className="">{details3.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details3.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details3.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details3.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details3 && (
          <div className="">
            <p className="">{details3.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details3.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details3.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details3.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details4 && (
          <div className="">
            <p className="">{details4.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details4.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details4.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details4.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details5 && (
          <div className="">
            <p className="">{details5.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details5.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details5.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details5.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details6 && (
          <div className="">
            <p className="">{details6.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details6.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details6.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details6.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details7 && (
          <div className="">
            <p className="">{details7.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details7.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details7.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details7.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details8 && (
          <div className="">
            <p className="">{details8.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details8.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details8.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details8.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details9 && (
          <div className="">
            <p className="">{details9.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details9.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details9.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details9.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details10 && (
          <div className="">
            <p className="">{details10.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details10.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details10.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details10.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
        {details11 && (
          <div className="">
            <p className="">{details11.subTitle}</p>
            <p className="font-bold ">
              Stage: <span className=" font-normal">{details11.stage}</span>
            </p>
            <p className="font-bold ">
              Money Raised:{" "}
              <span className=" font-normal">{details11.raised}</span>
            </p>
            <p className="font-bold ">
              Co-Investors:{" "}
              <span className=" font-normal ">
                {details11.co_investors.join(",")}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
