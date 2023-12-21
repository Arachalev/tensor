"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExpertsCardProps {
  profile: string;
  name: string;
  social: {
    img: string;
    name: string;
    link: string;
  }[];
  title: string;
  details: string;
  links: { link: string; text: string }[];
}

const ExpertsCard = (expertDetails: ExpertsCardProps) => {
  const { profile, name, social, title, details, links } = expertDetails;

  const rawDetailsArr = details.split("!");
  const detailsArr = rawDetailsArr.map((item) => item.replace("\n", "").trim());
  console.log(detailsArr);

  //   detailsArr.forEach(item => ())

  return (
    <div>
      <Image src={profile} alt={name} />
      <h4>{name}</h4>
      <div>
        {social.map((item, index) => (
          <Link href={item.link} key={item.name}>
            <Image src={item.img} alt={item.name} />
          </Link>
        ))}
      </div>
      <p>{title}</p>
      {/* <p>{details}</p> */}
      <div className="">
        {detailsArr.map((item) => {
          let link;
          let text;
          links.forEach((linksItem) => {
            if (item === linksItem.text) {
              link = (
                <Link className="underline" href={linksItem.link}>
                  {linksItem.text.trim()} {" "}
                </Link>
              );
            } else {
              text = <p className="inline">{item.trim()} </p>;
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
  );
};

export default ExpertsCard;
