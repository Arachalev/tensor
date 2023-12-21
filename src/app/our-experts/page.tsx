import ExpertsCard from "@/components/ExpertsCard";
import { expertCardsData } from "@/store/staticData/expertsCardsData";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Free Dataset</h2>
          <p>
            Please fill out the form below and a TwoTensor team member will be
            in touch to help set up your trial.
          </p>
        </div>
        <form action="">
          <div>
            <label htmlFor="">BUSINESS EMAIL</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">PHONE</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">ROLE</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">BUSINESS EMAIL</label>
            <select name="" id=""></select>
          </div>
        </form>
      </div>
      <section className="px-6 sm:px-10 xl:px-28 pt-6 sm:pt-16 xl:pt-20 pb-11 sm:pb-24 bg-fadedBlue text-darkGreen">
        <div className="text-center flex flex-col gap-2 sm:gap-3 items-center">
          <h4 className="text-[7px] sm:text-sm">OUR EXPERTS</h4>
          <h2 className="text-2xl sm:text-4xl font-bold  ">Meet TwoTensor</h2>
          <p className="font-medium text-[8px] sm:text-sm sm:w-[550px] xl:w-[900px] ">
            We operate in a sophisticated team tailored to specialist private
            equity challenges. Learning from one another, we advance AI
            boundaries while acquiring broader, more rounded insights.
          </p>
        </div>

        <div className="pt-9 xl:pt-16 flex flex-col xl:flex-row sm:grid sm:grid-cols-2 xl:flex xl:justify-center xl:items-start xl:gap-7 sm:justify-items-center gap-7 sm:gap-x-5 sm:gap-y-20 items-center">
          {expertCardsData.map((item) => (
            <ExpertsCard
              key={item.name}
              profile={item.profile}
              name={item.name}
              social={item.social}
              title={item.title}
              details={item.details}
              links={item.links}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
