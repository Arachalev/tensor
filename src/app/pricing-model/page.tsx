import DataSetForm from "@/components/DataSetForm";
import React from "react";
import { pricingModelData } from "@/store/staticData/pricingModelData";
import PricingModelCards from "@/components/PricingModelCards";
const Page = () => {
  return (
    <div className="font-inter w-full relative">
      <div>
        {pricingModelData.map((item, index) => (
          <PricingModelCards
            key={item.title}
            title={item.title}
            // billedSection={item.}
            details={item.details}
            packages={item.packages}
          />
        ))}
      </div>
      <div>
        <DataSetForm />
      </div>
    </div>
  );
};

export default Page;
