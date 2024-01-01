import Image from "next/image";
import React from "react";

interface PricingModelCardsProps {
  title: string;
  category?: string;
  billedSection: string;
  details: string;
  packages: {
    icon: string;
    text: string;
  }[];
}

const PricingModelCards = (props: PricingModelCardsProps) => {
  const { title, billedSection, category, details, packages } = props;

  //   const packageDetails = details

  return (
    <div>
      <h4>{title}</h4>
      <p>{category}</p>
      <div>
        {packages.map((item, index) => (
          <div key={`${item.text}--${index}`}>
            <Image src={item.icon} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <p>{details}</p>
      <button>Pay Now</button>
    </div>
  );
};

export default PricingModelCards;
