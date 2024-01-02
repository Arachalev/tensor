"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ExpertsCardProps {
  profile: StaticImageData;
  name: string;
  social: {
    img: string;
    name: string;
    link: string;
  }[];
  title: string;
  details: string;
  links: { link: string; text: string }[];
  variant?: "experts" | "about";
}

const ExpertsCard = (expertDetails: ExpertsCardProps) => {
  const {
    profile,
    name,
    social,
    title,
    details,
    links,
    variant = "about",
  } = expertDetails;

  const rawDetailsArr = details.split("!");
  const detailsArr = rawDetailsArr.map((item) => item.replace("\n", "").trim());
  // console.log(detailsArr);

  //   detailsArr.forEach(item => ())

  return (
    <div
      className={`font-inter w-[250px] sm:w-[305px] ${
        variant === "about" ? "xl:w-[277px]" : "xl:w-[217px]"
      } `}
    >
      <Image
        src={profile}
        alt={name}
        className={`mb-3 w-[250px] sm:w-[305px]  h-[230px] sm:h-[275px] ${
          variant === "about"
            ? "xl:h-[217px] xl:w-[277px]"
            : "xl:h-[199px] xl:w-[217px]"
        } `}
      />
      <div className="px-3 flex flex-col gap-3 ">
        <h4
          className={`text-darkGreen font-bold ${
            variant === "about" ? " text-xl" : "text-base"
          }`}
        >
          {name}
        </h4>
        <div className="flex items-center gap-2">
          {social.map((item, index) => (
            <Link href={item.link} key={`${item.name}--1${index}`}>
              <Image src={item.img} alt={item.name} />
            </Link>
          ))}
        </div>
        <p className="text-darkGreen/70 font-medium text-xs">{title}</p>
        {/* <p>{details}</p> */}
        <div className="font-medium text-xs leading-6 ">
          {detailsArr.map((item, index) => {
            let link;
            let text;
            links.forEach((linksItem) => {
              if (item === linksItem.text) {
                link = (
                  <Link key={item} className="underline" href={linksItem.link}>
                    {linksItem.text.trim()}{" "}
                  </Link>
                );
              } else {
                text = (
                  <p key={`${item}`} className="inline">
                    {item.trim()}{" "}
                  </p>
                );
              }
            });
            if (link) {
              return link;
            } else {
              return text;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
