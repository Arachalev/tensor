import DataSetForm from "@/components/DataSetForm";
import React from "react";
import { pricingModelData } from "@/store/staticData/pricingModelData";
import PricingModelCards from "@/components/PricingModelCards";
const Page = () => {
  return (
    <div className="font-inter flex flex-col xl:flex-row w-full relative">
      <div className="bg-[#F6FFFE] sm:pt-10 xl:order-2 xl:w-full">
        {pricingModelData.map((item, index) => (
          <PricingModelCards
            key={item.title}
            title={item.title}
            category={item.category}
            // billedSection={item.}
            details={item.details}
            packages={item.packages}
          />
        ))}
      </div>
      <div className="xl:order-1">
        <DataSetForm />
      </div>
    </div>
  );
};

export default Page;
