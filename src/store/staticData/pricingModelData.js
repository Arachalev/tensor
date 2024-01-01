import userIcon from "../../../public/assets/icons/priceModel/user.svg";
import portfolioIcon from "../../../public/assets/icons/priceModel/portfolio.svg";
import calendarIcon from "../../../public/assets/icons/priceModel/calendar.svg";
import dbIcon from "../../../public/assets/icons/priceModel/db.svg";

export const pricingModelData = [
  {
    title: "Pay As You Go/Trial",
    category: "",
    details: `The Trial package is !billed monthly with a commitment of £620.!
     It provides 1 user seat, allows for 1 fund portfolio, has a PCM price/fund of £620 and a PCM price/user of £620. However, it does not include a dedicated analyst or database query feature.`,

    packages: [
      {
        icon: userIcon,
        text: "1 user seat",
      },
      {
        icon: portfolioIcon,
        text: "1 fund portfolio",
      },
      {
        icon: calendarIcon,
        text: "1 week",
      },
    ],
  },
  {
    title: "Small Fund",
    category: "Most Requested",
    details: `The Starter package is !billed quaterly with a commitment of £9,920.! 
    It provides 3 user seats, allows for 10 fund portfolios, has a PCM price/fund
     of £330 and a PCM price/user of £1,100. This package includes up-to 10 curated deals per week but doesn’t have the database query feature.`,

    packages: [
      {
        icon: userIcon,
        text: "3 user seat",
      },
      {
        icon: portfolioIcon,
        text: "10 fund portfolio",
      },
      {
        icon: calendarIcon,
        text: "1 week",
      },
    ],
  },
  {
    title: "Growing Fund",
    category: "Best Value",
    details: `The Professional package has a
     !6-month billing cycle with a commitment of £24,000.!
      It provides 10 user seats, accommodates  25 fund portfolios, 
      has a PCM price/fund of £160 and a PCM price/user of £400.
       Additionally, This package includes up-to 10 curated deals per
        week and database query feature.`,

    packages: [
      {
        icon: userIcon,
        text: "10 user seat",
      },
      {
        icon: portfolioIcon,
        text: "25 fund portfolio",
      },
      {
        icon: calendarIcon,
        text: "1 week",
      },
      {
        icon: dbIcon,
        text: "Data Query Feature",
      },
    ],
  },
];
