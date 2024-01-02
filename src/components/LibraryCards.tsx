import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import libraryArrawIcon from "../../public/assets/icons/library-arrow.svg";
import plusIcon from "../../public/assets/icons/plus.svg";

export type libraryCardTypes =
  | "Research"
  | "Case Studies"
  | "Thought Leadership"
  | "FAQ"
  | "Technology"
  | "News";

interface LibraryCardsProps {
  title: string;
  content: string;
  type: libraryCardTypes[];
  socials: { img: string; name: string; href: string }[];
  date: string;
  link: string;
  readTime: string;
  openFaq: boolean;
}

const LibraryCards = (props: LibraryCardsProps) => {
  const [showFaq, setShowFaq] = useState(true);

  const { title, content, type, socials, date, link, readTime, openFaq } =
    props;

  useEffect(() => {
    setShowFaq(true);
  }, [openFaq]);

  let bg = {
    Research: "",
    "Case Studies": "",
    "Thought Leadership": "",
    FAQ: "",
    Technology: "",
    News: "",
  };

  switch (true) {
    case type.includes("Research"):
      bg.Research = "bg-[#FF5A5A]";

    case type.includes("Case Studies"):
      bg["Case Studies"] = "bg-[#9C9C9C]";

    case type.includes("Thought Leadership"):
      bg["Thought Leadership"] = "bg-[#52B9AC]";

    case type.includes("FAQ"):
      bg.FAQ = "bg-[#29B2FF]";

    case type.includes("Technology"):
      bg.Technology = "bg-[#075AD7]";

    case type.includes("News"):
      bg.News = "bg-[#C101AE]";
  }

  return (
    <div className="text-softBlue font-inter pb-3 sm:pb-6 xl:pb-8 border-b border-b-[#E3F8F5]">
      <div className="flex items-center justify-between mb-3 sm:mb-5 xl:mb-14">
        <div className="flex items-center gap-3 xl:gap-6 font-sora">
          <p className=" font-medium font-sora text-[5px] sm:text-[7px] xl:text-sm">
            {date}
          </p>
          <div className="flex items-center gap-1">
            {type.map((item, index) => (
              <p
                className={`${bg[item]} text-[4.5px] sm:text-[6.6px] xl:text-xs text-white h-[10px] sm:h-4 xl:h-7
                 px-1 sm:px-2 xl:px-3 flex items-center justify-center`}
                key={`${item}-${index}`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-3">
          {socials.map((item, index) => (
            <Link
              key={`${index}-${item.name}`}
              className="rounded-full w-[10px] sm:w-4 xl:w-7 h-[10px] sm:h-4 xl:h-7 flex items-center justify-center bg-teal"
              href={item.href}
            >
              <Image
                className="sm:min-w-[9px] xl:min-w-[14px] sm:min-h-[9px] xl:min-h-[14px] "
                src={item.img}
                alt="social media links"
              />
            </Link>
          ))}
          {readTime && (
            <p className="font-sora font-medium text-[4.5px] sm:text-[7.5px] xl:text-sm ml-1">
              {readTime}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-3">
        <div className="min-w-[12px] sm:min-w-[20px] xl:min-w-[35px]">
          {showFaq ? (
            <div
              onClick={() => setShowFaq(false)}
              className="min-w-[12px] sm:min-w-[16px] xl:min-w-[30px] h-[2px] bg-softBlue mt-2 sm:mt-4 xl:mt-6 cursor-pointer"
            />
          ) : (
            <Image
              onClick={() => setShowFaq(true)}
              className="cursor-pointer w-3 sm:w-4 xl:w-8 h-fit mt-2 sm:mt-3 "
              src={plusIcon}
              alt="plusicon"
            />
          )}
        </div>
        <div className="pr-2 sm:pr-8">
          <h4 className="font-bold text-[10px] sm:text-lg xl:text-3xl leading-4 sm:leading-8 xl:leading-[55px] mb-3 sm:mb-5 xl:mb-9">
            {title}
          </h4>
          {showFaq && (
            <p className="font-medium text-[8px] sm:text-sm xl:text-xl leading-[14px] sm:leading-6 xl:leading-9">
              {content}
            </p>
          )}
          {link && (
            <div className="mt-2 sm:mt-4 xl:mt-8 flex items-center gap-1 sm;gap-2 xl:gap-3">
              <Link
                className=" font-serif font-bold text-[9px] sm:text-base xl:text-3xl text-white border-b border-b-softBlue"
                href={link}
              >
                Read All
              </Link>{" "}
              <Image
                src={libraryArrawIcon}
                className="sm:w-4 xl:w-8"
                alt="right arrow"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryCards;
