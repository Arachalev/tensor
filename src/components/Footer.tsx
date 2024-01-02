import Image from "next/image";
import Link from "next/link";
import React from "react";
import mailIcon from "../../public/assets/icons/footer/mail.svg";
import arxicIcon from "../../public/assets/icons/footer/arxic.svg";
import doiIcon from "../../public/assets/icons/footer/doi.svg";
import githubIcon from "../../public/assets/icons/footer/github.svg";
import linkedinIcon from "../../public/assets/icons/footer/linkedin.svg";
import mediumIcon from "../../public/assets/icons/footer/medium.svg";
import xIcon from "../../public/assets/icons/footer/x.svg";

// import { useRouter } from "next/navigation";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="w-screen bg-darkGreen text-softBlue px-10 sm:px-[77px] xl:pl-[229px] xl:pr-[153px] pt-16 sm:pt-[117px] xl:pt-[173px] pb-8 sm:pb-14 xl:pb-[120px] sm:pbfont-inter flex flex-col gap-10 sm:gap-x-[146px] xl:gap-x-[121px] sm:gap-y-[114px] xl:gap-y-12 sm:grid sm:grid-cols-2 xl:grid-cols-4">
      <div>
        <h4 className="font-semibold border-b-2 border-b-softBlue w-fit mb-3 xl:text-2xl ">
          Who We Are
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-lg">
          <li>
            <Link href="/who-we-are#leadership">Leadership</Link>
          </li>
          <li>
            <Link href="/who-we-are#founder" >
              Founder
            </Link>
          </li>
          <li>
            <Link href="/who-we-are#our-people">Our People</Link>
          </li>
          <li>
            <Link href="/who-we-are#diversity">Diversity</Link>
          </li>
          <li>
            <Link href="/who-we-are#principles">Core Principles</Link>
          </li>
          <li>
            <Link href="/who-we-are#community">Community Impact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold  border-b-2 border-b-softBlue w-fit mb-3 xl:text-2xl ">
          What We Do
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-lg">
          <li>
            <Link href="/how-it-works">Our Product</Link>
          </li>
          <li>
            <Link href="/pricing-model">Pricing</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold border-b-2 border-b-softBlue w-fit mb-3 xl:text-2xl ">
          How to Join
        </h4>

        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-lg">
          <li>
            <Link href="/how-to-join#career">Career Development</Link>
          </li>
          <li>
            <Link href="/how-to-join#path">Choose Your Path</Link>
          </li>
          <li>
            <Link href="/how-to-join#interview">Interviewing</Link>
          </li>
          <li>
            <Link href="/how-to-join#internships">Internships</Link>
          </li>
          <li>
            <Link href="/how-to-join#fellowship">Fellowship Profram</Link>
          </li>
          <li>
            <Link href="/how-to-join#faq">Application FAQ</Link>
          </li>
        </ul>
      </div>
      <div className=" sm:col-span-1 ">
        <ul className="flex flex-col gap-[6px] list-none text-sm sm:text-lg">
          <li>
            <Link href="/faq-library">Library</Link>
          </li>
          <li>
            <Link href="/faq-library">Contact</Link>
          </li>
          <li>
            <Link href="/our-experts">Complimentary Dataset</Link>
          </li>
        </ul>
      </div>
      <div className=" sm:col-span-2 xl:col-span-4 ">
        <ul className="flex items-center gap-3 w-full">
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="" className="">
              <Image src={mailIcon} className="sm:w-5 h-3" alt="mail link" />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={linkedinIcon}
                alt="linkedin link"
                className="sm:w-4 sm:h-4"
              />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image src={xIcon} alt="x link" className="sm:h-5 sm:w-4" />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={mediumIcon}
                alt="medium link"
                className="sm:h-6 sm:w-5"
              />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image src={doiIcon} alt="doi link" className="sm:w-6 sm:h-5" />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={githubIcon}
                alt="github link"
                className="sm:w-9 sm:h-9"
              />{" "}
            </Link>
          </li>
          <li className="bg-[#74DDD0] w-6 sm:w-9 h-6 sm:h-9 rounded-full flex items-center justify-center ">
            <Link href="">
              <Image
                src={arxicIcon}
                alt="arxic link"
                className="sm:w-6 sm:h-6"
              />{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-[8px] sm:text-base ">
        <Link href="" className=" border-b-2 border-b-softBlue ">
          Online Statement
        </Link>{" "}
        <br />
        <Link href="" className=" border-b-2 border-b-softBlue ">
          Important Disclosures
        </Link>
        <p className="text-[7px] sm:text-sm no-underline whitespace-nowrap mt-1 ">
          COPYRIGHT {year} TWOTENSOR . ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
