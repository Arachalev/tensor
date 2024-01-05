import Image from "next/image";
import React from "react";

interface HomeCardsProps {
  heading: string;
  content: string;
  link: string;
  img: string;
}

const HomeCards = (props: HomeCardsProps) => {
  const { heading, content, link, img } = props;

  return (
    <div className="h-20 w-10 font-inter flex flex-col gap-5 text-white px-6 py-5 ">
      <div>
        <h4>{heading}</h4>
        <hr className="h-[2px] m-0 border-none " />
      </div>
      <p>{content}</p>
      <Image src={img} alt={heading} />
    </div>
  );
};

export default HomeCards;
