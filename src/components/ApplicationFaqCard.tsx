"use client";
import React, { useState } from "react";
import faqCloseIcon from "../../public/assets/icons/faqClose.svg";
import faqOpenIcon from "../../public/assets/icons/faqOpen.svg";
import Image from "next/image";

interface ApplicationFaqCardProps {
  question: string;
  answer: string;
}

const ApplicationFaqCard = (props: ApplicationFaqCardProps) => {
  const [showAnswer, setshowAnswer] = useState(false);

  const { question, answer } = props;
  return (
    <div className="font-inter">
      <div className="flex items-center gap-2 sm:gap-3 xl:gap-10 bg-softBlue pl-3 sm:pl-7 pr-6 py-2 sm:py-4 xl:py-5">
        <Image
          onClick={() => {
            setshowAnswer((state) => !state);
          }}
          src={showAnswer ? faqCloseIcon : faqOpenIcon}
          className="h-4 sm:h-[30px] w-4 sm:w-[30px] cursor-pointer"
          alt="close/open icon"
        />
        <h4 className="font-semibold text-[10px] sm:text-base xl:text-2xl ">{question}</h4>
      </div>
      {showAnswer && (
        <div className="px-8 sm:px-[70px] xl:px-24 py-1 mt-1 sm:mt-3 xl:mt-5">
          <p className=" text-[9px] sm:text-[15px] xl:text-2xl sm:leading-7 font-medium">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default ApplicationFaqCard;
