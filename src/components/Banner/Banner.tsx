"use client";
import Image from "next/image";
import "./style.css";
// import { bannerImages as images } from "@/store/staticData/BannerImages";

import gs from "../../../public/assets/images/banner/banner1.svg";
import novellis from "../../../public/assets/images/banner/banner2.svg";
import comfortDelgro from "../../../public/assets/images/banner/banner3.svg";
import borusan from "../../../public/assets/images/banner/banner4.svg";
import cervin from "../../../public/assets/images/banner/banner5.svg";
import mobility from "../../../public/assets/images/banner/banner6.svg";

export const images = [
  {
    image: gs,
    width: 54,

    w1: "min-w-[54px]",
    w2: "sm:min-w-[87px]",
    w3: "xl:min-w-[130px]",
  },
  {
    image: novellis,
    width: 38,
    w1: "min-w-[38px]",
    w2: "sm:min-w-[66px]",
    w3: "xl:min-w-[90px]",
  },
  {
    image: comfortDelgro,
    width: 65,
    w1: "min-w-[65px]",
    w2: "sm:min-w-[110px]",
    w3: "xl:min-w-[130px]",
  },
  {
    image: borusan,
    width: 51,
    w1: "min-w-[51px]",
    w2: "sm:min-w-[85px]",
    w3: "xl:min-w-[125px]",
  },
  {
    image: cervin,
    width: 30,
    w1: "min-w-[30px]",
    w2: "sm:min-w-[30px]",
    w3: "xl:min-w-[50px]",
  },
  {
    image: mobility,
    width: 60,
    w1: "min-w-[61px]",
    w2: "sm:min-w-[75px]",
    w3: "xl:min-w-[92px]",
  },
];
// style={{ "--speed": `${speed}ms` }}
const Banner = ({
  speed = 5000,
  variant = "nav",
}: {
  speed: number;
  variant?: "home" | "nav";
}) => {
  return (
    <div className="inner relative overflow-hidden w-full h-5 sm:h-[60px] ">
      <div className="absolute h-full w-[50px] xl:w-[100px] z-50 left-0 top-0  bg-gradient-to-r from-[#000202] to-[#005050]/0 " />

      <div className="wrapper absolute h-full flex items-center">
        <section className="section">
          {images.map((image, id) => (
            <div className="image" key={`${id}+${image.w1}`}>
              <Image
                width={image.width}
                height={8}
                className={`img h-2 sm:h-[14px] xl:h-[18px]  ${image.w1} ${image.w2} ${image.w3} object-cover `}
                src={image.image}
                alt={`${id}`}
              />
            </div>
          ))}
        </section>
        <section className="section">
          {images.map((image, id) => (
            <div className="image" key={`${id}+${image.w2}`}>
              <Image
                width={image.width}
                height={8}
                className={`img h-2 sm:h-[14px] xl:h-[18px] ${image.w1} ${image.w2}  ${image.w3} object-cover `}
                src={image.image}
                alt={`${id}`}
              />
            </div>
          ))}
        </section>
        <section className="section">
          {images.map((image, id) => (
            <div className="image" key={`${id}+${image.w3}`}>
              <Image
                width={image.width}
                height={8}
                className={`img h-2 sm:h-[14px] xl:h-[18px] ${image.w1} ${image.w2}  ${image.w3} object-cover `}
                src={image.image}
                alt={`${id}`}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
