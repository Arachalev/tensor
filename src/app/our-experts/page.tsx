"use client";
import DataSetForm from "@/components/DataSetForm";
import React, { useEffect, useRef } from "react";
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

  const pricingTl = gsap.timeline({ paused: false });
  const { contextSafe } = useGSAP(
    () => {
      const containerTween = gsap.from(modelContainerRef.current, {
        x: 300,
      });
      const dataSetTween = gsap.from(datasetRef.current, {
        x: -300,
      });
      const cardTween = gsap.from(".priceModelCard", {
        y: 200,
        // delay: 1,
        stagger: { each: 0.2 },
      });
      pricingTl.add(containerTween).add(dataSetTween, "<").add(cardTween, "<");
    },
    { scope: containerRef }
  );

  const handleRouteChange = contextSafe(() => {
    const duration = pricingTl.duration();
    pricingTl.reverse().call(
      () => {
        gsap.to(containerRef.current, { opacity: 0 });
        router.push("/");
      },
      [],
      duration - 0.4
    );
  });

  return (
    <div
      ref={containerRef}
      className="font-inter flex flex-col xl:flex-row w-full relative min-h-[100vh]"
    >
      <div
        ref={modelContainerRef}
        onClick={handleRouteChange}
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
        <DataSetForm closeFunction={handleRouteChange} />
      </div>
    </div>
  );
};

export default Page;
