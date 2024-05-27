import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface HomeCardsProps {
  heading: string;
  content: string;
  link: string;
  img: StaticImageData;
}

const HomeCards = (props: HomeCardsProps) => {
  const { heading, content, link, img } = props;

  return (
    <div className="cardNewsScroll w-full h-screen flex items-center justify-center">
      <Link
        href={link}
        target="_blank"
        className=" font-inter w-[250px] h-[320px] flex flex-col gap-3 text-black bg-white px-6 py-5 "
      >
        <div>
          <h4 className="font-semibold text-sm sm:text-base pb-1 border-b-2 border-b-black">
            {heading}
          </h4>
          <hr className="h-[2px] m-0 border-none " />
        </div>
        <p className="text-[9px] sm:text-xs font-bold">{content}</p>
        <Image className="" src={img} alt={heading} />
      </Link>
    </div>
  );
};

export default HomeCards;
