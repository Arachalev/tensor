import React from "react";
import arrowIcon from "../../public/assets/icons/rightArrow.svg";
import Image from "next/image";

// {
//     location: "NYC",
//     type: "Administration",
//     role: "Space Planner",
//     description: `TwoTensor seeks an experienced
//         individual to join the firm as a space planner,
//         This role will facilitate the process, planning
//         and expansion of our office space...`,
//   },

interface JobPostCardProps {
  location: String;
  type: String;
  role: String;
  description: String;
}

const JobPostCard = (props: JobPostCardProps) => {
  const { location, type, role, description } = props;
  return (
    <div className="border-b-softBlue border-b-[1px] text-softBlue py-2 font-inter sm:w-[419px]">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <div className="flex items-center gap-2 font-medium text[9px] sm:text-sm ">
          <p>{location}</p>
          <p>{type}</p>
        </div>
        <span className="rounded-full min-h-[13px] sm:min-h-[20px] min-w-[13px] sm:min-w-[20px] border-white border-[1.3px]" />
      </div>
      <div className="flex items-start pr-2">
        <Image src={arrowIcon} alt="arrow" className="mr-1 sm:mt-[6px] sm:min-w-[18px]" />
        <p className="text-[10px] sm:text-base sm:leading-6">
          <span className="font-semibold ">{role}</span>: {description}
        </p>
      </div>
    </div>
  );
};

export default JobPostCard;
