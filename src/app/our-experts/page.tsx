import DataSetForm from "@/components/DataSetForm";
import ExpertsCard from "@/components/ExpertsCard";
import { expertCardsData } from "@/store/staticData/expertsCardsData";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:min-h-[100vh]">
      <section className="w-full flex flex-col items-center px-6 sm:px-10 xl:px-11 pt-6 sm:pt-16 xl:pt-9 pb-11 sm:pb-24 bg-fadedBlue text-darkGreen xl:order-2">
        <div className="text-center flex flex-col gap-2 sm:gap-3 items-center">
          <h4 className="text-[7px] sm:text-sm">OUR EXPERTS</h4>
          <h2 className="text-2xl sm:text-4xl font-bold  ">Meet TwoTensor</h2>
          <p className="font-medium text-[8px] sm:text-sm sm:w-[550px] xl:w-[700px] ">
            We operate in a sophisticated team tailored to specialist private
            equity challenges. Learning from one another, we advance AI
            boundaries while acquiring broader, more rounded insights.
          </p>
        </div>

        <div className="max-w-[1200px] pt-9 pb-20 xl:pt-16 flex flex-col xl:flex-row sm:grid sm:grid-cols-[305px_305px] xl:flex sm:justify-center sm:items-start xl:gap-4 sm:justify-items-center gap-7 sm:gap-x-5 sm:gap-y-20 items-center">
          {expertCardsData.map((item) => (
            <ExpertsCard
              key={item.name}
              profile={item.profile}
              name={item.name}
              social={item.social}
              title={item.title}
              details={item.details}
              links={item.links}
              variant="experts"
            />
          ))}
        </div>
      </section>
      <div className=" xl:order-1 ">
        <DataSetForm />
      </div>
    </div>
  );
};

export default Page;
