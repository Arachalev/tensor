import github from "../../../public/assets/images/experts/github.svg";
import doi from "../../../public/assets/images/experts/doi.svg";
import linkedin from "../../../public/assets/images/experts/linkedin.svg";
import mark from "../../../public/assets/images/experts/mark.svg";
import caspar from "../../../public/assets/images/experts/caspar.svg";
import stanislav from "../../../public/assets/images/experts/stanislav.svg";
import anton from "../../../public/assets/images/experts/anton.svg";

export const expertCardsData = [
  {
    profile: caspar,
    name: "Caspar Schwahn",
    social: [
      {
        img: linkedin,
        name: "linkedin",
        link: "",
      },
      {
        img: doi,
        name: "doi",
        link: "",
      },
      {
        img: github,
        name: "github",
        link: "",
      },
    ],
    title: "Research Engineer",
    details: `
    Caspar, a competitive sailor, holds an MSc in
     Theoretical Physics from the !University of St Andrews!
      and an MPhil in Data-Intensive Science from the !University of Cambridge.!
       His research encompasses Neural Networks for Photonic Crystal Waveguides ![1]!
        and Generative Adversarial Networks ![2]!.
    `,
    links: [
      {
        link: "https://www.st-andrews.ac.uk/",
        text: "University of St Andrews",
      },
      {
        link: "https://www.cam.ac.uk/",
        text: "University of Cambridge.",
      },
      {
        link: "https://research-repository.st-andrews.ac.uk/handle/10023/27979#:~:text=We%20demonstrate%20the%20use%20of,compared%20to%20traditional%20simulation%20methods.",
        text: "[1]",
      },
      {
        link: "https://en.wikipedia.org/wiki/Generative_adversarial_network",
        text: "[2]",
      },
    ],
  },
  {
    profile: stanislav,
    name: "Stanislav Karchenkov",
    social: [
      {
        img: linkedin,
        name: "linkedin",
        link: "",
      },

      {
        img: github,
        name: "github",
        link: "",
      },
    ],
    title: "Data Scientist",
    details: `
    Stanislav specialized in operational data science 
    at !New York University's!  graduating top of his class.
     He has since applied his expertise to early COVID-19 detection ![3]!,
      utilizing Deep Learning and Convolutional Neural Networks.
    `,
    links: [
      {
        link: "https://cds.nyu.edu/",
        text: "New York University's",
      },

      {
        link: "https://en.wikipedia.org/wiki/Deep_learning",
        text: "[3]",
      },
    ],
  },
  {
    profile: mark,
    name: "Mark Rebotunov",
    social: [
      {
        img: linkedin,
        name: "linkedin",
        link: "",
      },
    ],
    title: "Infrastructure Engineer",
    details: `
    A top graduate in Software Engineering from the !University of Glasgow!,
     Mark moved from !Barclays! to infrastructure roles at TwoTensor.
      A passionate skier and wild camper, he skillfully combines his 
      love for adventure and technical innovation in his work.
    `,
    links: [
      {
        link: "https://www.gla.ac.uk/",
        text: "University of Glasgow",
      },
      {
        link: "https://www.cib.barclays/",
        text: "Barclays",
      },
    
    ],
  },
  {
    profile: anton,
    name: "Anton Matskevich",
    social: [
      {
        img: linkedin,
        name: "linkedin",
        link: "",
      },
      {
        img: doi,
        name: "doi",
        link: "",
      },
       
    ],
    title: "Data Acquisition Engineer",
    details: `
    Anton holds dual degrees from the !University of Glasgow!,
     blending legal and software expertise. He excels in 
     acquiring and visualizing novel data sets with rigorous methods. 
     His work on privacy portals for !Pfizer! and !Bayer! has sharpened
      his proficiency in data privacy within sensitive corporate settings.
    `,
    links: [
      {
        link: "https://www.gla.ac.uk/",
        text: "University of Glasgow",
      },
      {
        link: "https://www.pfizer.co.uk/",
        text: "Pfizer",
      },
       
      {
        link: "https://www.bayer.com/en/",
        text: "Bayer",
      },
    ],
  },
];
