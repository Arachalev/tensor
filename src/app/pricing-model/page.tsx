"use client";
import DataSetForm from "@/components/DataSetForm";
import React, { useRef } from "react";
import { pricingModelData } from "@/store/staticData/pricingModelData";
import PricingModelCards from "@/components/PricingModelCards";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page = () => {
  const router = useRouter();

  const modelContainerRef = useRef(null);
  const containerRef = useRef(null);
  const datasetRef = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.from(modelContainerRef.current, {
        x: 300,
      });
      gsap.from(datasetRef.current, {
        x: -300,
      });

      gsap.from(".priceModelCard", {
        y: 200,
        // delay: 1,
        stagger: { each: 0.2 },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="font-inter flex flex-col xl:flex-row w-full relative min-h-[100vh]"
    >
      <div
        ref={modelContainerRef}
        onClick={() => router.push("/")}
        className="bg-[#F6FFFE] pt-14  sm:pt-20 xl:pt-40 2xl:pt-0 xl:order-2 xl:w-full 2xl:items-center 2xl:justify-center 2xl:flex 2xl:flex-col"
      >
        {pricingModelData.map((item, index) => (
          <PricingModelCards
            key={`${item.title}-${index}`}
            title={item.title}
            category={item.category}
            // billedSection={item.}
            details={item.details}
            packages={item.packages}
          />
        ))}
      </div>
      <div ref={datasetRef} className="xl:order-1">
        <DataSetForm />
      </div>
    </div>
  );
};

export default Page;
