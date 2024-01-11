"use client";
import DataSetForm from "@/components/DataSetForm";
import React from "react";
import { pricingModelData } from "@/store/staticData/pricingModelData";
import PricingModelCards from "@/components/PricingModelCards";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="font-inter flex flex-col xl:flex-row w-full relative min-h-[100vh]">
      <div
        onClick={() => router.push("/")}
        className="bg-[#F6FFFE] pt-14  sm:pt-20 xl:pt-40 2xl:pt-0 xl:order-2 xl:w-full 2xl:items-center 2xl:justify-center 2xl:flex 2xl:flex-col"
      >
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
