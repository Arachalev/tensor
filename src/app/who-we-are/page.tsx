import ExpertsCard from "@/components/ExpertsCard";
import Image from "next/image";
import React from "react";
import { expertCardsData } from "@/store/staticData/expertsCardsData";
import community2 from "../../../public/assets/images/who-we-are/community2.png";
import community1 from "../../../public/assets/images/who-we-are/community1.png";
import founder from "../../../public/assets/images/who-we-are/founder.png";
import Link from "next/link";
 

const Page = () => {
  return (
    <div className="font-inter w-full relative 2xl:w-[1400px]">
      <section className=" px-6 sm:px-10 xl:px-28 py-8 sm:py-[85px] xl:py-28 bg-white text-darkGreen  ">
        {/* <Link
          href="/"
          className="absolute -left-4 top-[20rem] xl:top-[70rem] min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center  "
        >
          <p className=" underline font-serif text-[9px] sm:text-sm xl:text-lg text-[#035F5F] rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </Link> */}
        <div className="sm:w-[480px] xl:w-[900px]" id="leadership">
          <h4 className="underline font-semibold text-xl sm:text-3xl xl:text-4xl mb-5 xl:mb-10">
            WHO WE ARE
          </h4>
          <p className="font-medium text-sm sm:text-2xl leading-6 sm:leading-10">
            Established in 2022 in the quaint golfing town of St Andrews,
            Scotland, TwoTensor began as a vision of Daniel Afshar, a Physics
            student at The University of St Andrews with a passion for data
            science. Daniel, having declined a prestigious role at 468 Capital,
            united with fellow researchers from the heart of academia, including
            the brilliant Caspar Schwahn with dual masters in Theoretical
            Physics and Data Science, and Mark Rebotunov, a former data systems
            specialist at Barclays. Together, they expanded the team to
            encompass talents like Stanislav Karchenko, a standout graduate in
            large language models from New York University. From analyzing
            satellite imagery for a client investing $150m annually, today, our
            team of seven, boasting 85% engineers, oversees projects deploying
            over $500m annually across London, Cambridge, New York, Istanbul,
            and the Philippines. Our roots are academic, our reigour remarkable,
            and our spirit undying.
          </p>
        </div>
         
      </section>
      <section className=" px-6 sm:px-10 xl:px-28 py-11 xl:py-28 text-darkGreen bg-fadedBlue">
        <h4 className="underline text-[8px] sm:text-xl font-bold mb-3 sm:mb-5  ">
          Research
        </h4>
        <div className="text-sm sm:text-2xl font-medium leading-6 sm:leading-10 sm:w-[480px] xl:w-[900px]">
          <p>
            Guided by a trio of researchers, our team holds degrees in Physics,
            Theoretical Physics, and Data Science from prestigious institutions
            like Cambridge, St Andrews, and NYU. This collaborative expertise
            defines our unique approach and embodies our foundational values.
          </p>
          <p className="mt-5 sm:mt-8">
            For us, three informed minds collaborating to drive innovative
            research are more potent than one.
          </p>
        </div>
      </section>
      <section id="founder" className="bg-darkGreen text-softBlue px-6 sm:px-10 xl:px-28 pt-9 sm:pt-14 pb-11 sm:pb-32 xl:pt-40 ">
        <h4 className="underline text-[8px] sm:text-xl font-bold mb-7 xl:mb-12">
          Founder
        </h4>
        <Image src={founder} className="xl:w-[485px]" alt="image of founder" />
        <div className="font-medium text-sm sm:text-2xl leading-6 sm:leading-10 mt-10 sm:mt-14 sm:w-[480px] xl:w-[900px]">
          <p className="mb-5 sm:mb-6 xl:mb-8">
            Daniel Malikzade Afshar holds a Physics degree from The University
            of St Andrews, the top-ranking institution in the subject during
            2021-2022. His acumen in investment banking led him to be the
            preferred choice of Deutsche Bank&apos;s ECM division led by Raymond
            Daamen and Saadi Soudevar at the time. Daniel&apos;s Physics
            background has honed his skills in critical problem-solving using a
            first principles approach. Prior to graduating, he received an offer
            from 468 Capital for their data science initiatives but chose to
            dedicate his time to TwoTensor. His interest lies in applying data
            and network science to decipher private investments, especially the
            underlying human elements within.
          </p>
          <p>
            He co-founded SOSA at St Andrews, bridging students and notable
            figures, including NASA and ESA scientists and presidential advisors
            including President Obama and President Bush. While initially
            contributing code, Daniel now steers the business and research
            operations. His team, including Mark Rebotunov, Anton Matksevich,
            and Stanislav Karchenko, crafts core offerings for our investment
            clients.
          </p>
        </div>
        <div id="our-people" className="mt-14 sm:mt-20 xl:mt-24 font-medium text-sm sm:text-2xl leading-6 sm:leading-10 sm:w-[480px] xl:w-[900px]">
          <h4 className="underline text-[8px] sm:text-xl font-bold mb-4 sm:mb-8 xl:mb-10">
            Our People
          </h4>
          <p className="">
            We tirelessly scout the world for gifted minds. We place our trust
            in those with innovative thinking, unwavering logic, and the
            humility to prioritize accuracy over ego. In our fold, we nurture
            them, allowing them the liberty to showcase the unique facets of
            their character while delivering outstanding results.
          </p>
        </div>
      </section>
      <section   className="bg-white text-darkGreen px-6 sm:px-10 xl:px-28 pt-5 pb-10 sm:py-24">
        <h4 className="underline font-semibold text-[8px] sm:text-xl mb-3 sm:mb-10">
          Our Engineering Team
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 xl:w-[1200px]">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 sm:gap-3">
              <p className=" border-b-2 sm:border-b-4 border-b-darkGreen  font-bold text-xl sm:text-4xl xl:text-[40px]">
                5/5
              </p>

              <p className="font-medium text-[9px] sm:text-[15px] leading-[16px]">
                Hold STEM <br /> Degrees
              </p>
            </div>
            <div className="h-7 sm:h-12 w-[1px] bg-darkGreen/20 mr-5" />
          </div>
          <div className="flex justify-between items-center sm:col-span-2 xl:col-span-1 ">
            <div className="flex items-center gap-2 sm:gap-3 ">
              <p className=" border-b-2 sm:border-b-4 border-b-darkGreen font-bold text-xl sm:text-4xl xl:text-[40px]">
                2/5
              </p>
              <p className="font-medium text-[9px]sm:text-[15px] leading-[16px]">
                Hold Data <br /> Science Degrees
              </p>
            </div>
            <div className="hidden xl:block h-7 sm:h-12 w-[1px] bg-darkGreen/20 " />
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 sm:gap-3">
              <p className=" border-b-2 sm:border-b-4 border-b-darkGreen  font-bold text-xl sm:text-4xl xl:text-[40px]">
                8
              </p>
              <p className="font-medium text-[9px] sm:text-[15px] leading-[16px]">
                {" "}
                Languages spoken <br /> by our team
              </p>
            </div>
            <div className="h-7 sm:h-12 w-[1px] bg-darkGreen/20 mr-5" />
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 sm:gap-3">
              <p className=" border-b-2 sm:border-b-4 border-b-darkGreen  font-bold text-xl sm:text-4xl xl:text-[40px]">
                2/5
              </p>
              <p className="font-medium text-[9px] sm:text-[15px] leading-[16px]">
                Published <br /> Researchers
              </p>
            </div>
            <div className="hidden sm:block h-7 sm:h-12 w-[1px] bg-darkGreen/20 mr-5" />
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 sm:gap-3">
              <p className=" border-b-2 sm:border-b-4 border-b-darkGreen  font-bold text-xl sm:text-4xl xl:text-[40px]">
                {" "}
                10
              </p>
              <p className="font-medium text-[9px] sm:text-[15px] leading-[16px]">
                Data <br /> Analysts
              </p>
            </div>
          </div>
        </div>
      </section>
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

        <div className="pt-9 xl:pt-16 flex flex-col xl:flex-row sm:grid sm:grid-cols-[305px_305px] xl:flex sm:justify-center sm:items-start xl:gap-7 sm:justify-items-center gap-7 sm:gap-x-5 sm:gap-y-20 items-center">
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
      <section id="diversity"
        className={`px-6 sm:px-10 xl:px-28 pt-14 sm:py-24 xl:pt-28 pb-11  bg-white text-darkGreen text-sm sm:text-2xl 
      font-medium flex flex-col gap-6 sm:gap-10 leading-6 sm:leading-10`}
      >
        <h4 className="font-semibold text-[8px] sm:text-xl underline">
          Diversity
        </h4>
        <p className=" sm:w-[480px] xl:w-[900px]">
          Our Commitment to Global Synergy and Inclusion
        </p>
        <p className="sm:w-[480px] xl:w-[900px]">
          At TwoTensor, we are proud that our engineering team of 6 represents
          heritage from 6 different countries. We advocate for a workplace where
          40% of our members are women, and we take pride in our lateral company
          structure. This promotes open communication, allowing daily breakouts
          where team members can freely interact, irrespective of seniority.
          Furthermore, we firmly believe that such a diverse and inclusive
          environment not only propels innovation and performance but also
          mirrors the global community we serve. Our dedication to fostering an
          inclusive atmosphere is manifested in:
        </p>
        <p className="sm:w-[480px] xl:w-[900px]">
          Daily interactive sessions, bridging gaps between senior and junior
          roles Regular team meetings to ensure alignment and collaboration
        </p>
        <p className="sm:w-[480px] xl:w-[900px]">
          We strive to make TwoTensor a platform where every individual feels
          valued and can achieve their utmost potential.
        </p>
      </section>
      <section id="priciples"
        className={`px-6 sm:px-10 xl:px-28 pt-11 sm:pt-24 xl:pt-32 xl:pb-24 py-14 bg-darkGreen text-softBlue text-sm sm:text-2xl
       font-medium leading-6 sm:leading-10 flex flex-col gap-6 sm:gap-10 `}
      >
        <h4 className="underline text-[8px] sm:text-xl font-semibold">
          Core Principles
        </h4>
        <p className="sm:w-[480px] xl:w-[900px]">
          At TwoTensor&apos;s heart lie five foundational principles that
          delineate our ethos and inform our choices. These principles are woven
          into our very fabric. Recruit and Nurture Outstanding Talent The
          excellence of our team largely dictates TwoTensor&apos;s triumph and
          stature. It&apos;s pivotal in attracting the best in the industry. Our
          recruitment and development processes are uncompromising in sourcing
          and fostering unparalleled talent. We pay particular heed to
          individuals with unmatched innate aptitude and enduring potential. A
          diverse team, in various aspects, is instrumental in our success.
        </p>
        <div className="sm:w-[480px] xl:w-[900px]">
          <p>Prioritize Ethical Standards</p>
          <p>
            Our unwavering commitment is to uphold supreme ethical and legal
            benchmarks and to engage with peers with deference and
            professionalism. This stance safeguards our repute; more crucially,
            it&apos;s fundamentally the right course. In our operations, we
            emphasize both the explicit and implicit mandates of the law.
            Establish Exceptionally High Targets
          </p>
        </div>
        <p className="sm:w-[480px] xl:w-[900px]">
          TwoTensor&apos;s foundation is rooted in embarking on ventures others
          deemed unattainable or didn&apos;t conceive. A lone groundbreaking
          idea that materializes might outweigh numerous failed attempts. The
          gamble of multiple setbacks is counterbalanced by the reward of a
          single monumental win. When an elite squad sets sky-high objectives,
          groundbreaking successes become the norm.
        </p>
        <p className="sm:w-[480px] xl:w-[900px]">
          Champion Collective Endeavors Our ethos is anchored in fostering a
          spirit of collaboration where individuals and teams unite to further
          shared goals and those of TwoTensor. The collective efforts of staff
          and teams are treasured for their aggregate contributions to our
          overarching achievements. Assess Meticulously and Articulate Precisely
          We assign an unparalleled premium on methodical evaluation and lucid
          articulation. We adopt an especially thorough and regimented strategy
          for planning, reviewing, prognostication, and decision-making. This
          approach has notably propelled our accomplishments over time.
        </p>
      </section>
      <section id="community" className="px-6 sm:px-10 xl:px-28 pt-11 sm:py-32 xl:pt-36 pb-14 xl:pb-28 bg-white text-sm sm:text-2xl text-darkGreen font-medium leading-6 sm:leading-10">
        <div className="flex flex-col gap-8 sm:gap-16 xl:gap-20 sm:w-[480px] xl:w-[900px]">
          <h4 className="text-[8px] sm:text-xl font-semibold underline ">
            Community Impact
          </h4>
          <Image
            src={community1}
            className="w-[272px] h-[277px] sm:w-[467px] sm:h-[476px] xl:w-[560px] xl:h-[570px]"
            alt="woman sitting"
          />
          <p>
            Fiona Hill is a British-American foreign affairs specialist, known
            for her expertise in Russian and European affairs. She served on the
            U.S. National Security Council from 2017 to 2019, and as a national
            intelligence officer for Russia and Eurasia at The National
            Intelligence Council from 2006 to 2009.
          </p>
          <Link
            className="underline whitespace-normal mt-2"
            href="https://www.instagram.com/uniofstandrews/guide/fiona-hill/17979859387364414/?utm_campaign=&utm_medium=&utm_source=ig_web_copy_link"
          >
            <p>
              https://www.instagram.com/uniofstandrews
              <br />
              /guide/fiona-hill/17979859387364414/ ? <br />
              utm_campaign=&utm_mediu8
              <br />
              =&utm_source=ig_web_copy_link
            </p>
          </Link>
        </div>
        <div className="mt-20 sm:mt-32 flex flex-col gap-8 sm:gap-16 xl:gap-20 sm:w-[480px] xl:w-[900px]">
          <Image
            src={community2}
            className="w-[283px] h-[194px] sm:w-[551px] sm:h-[378px] xl:w-[750px] xl:h-[515px] "
            alt="abstract art"
          />
          <p>
            Fiona Hill is a British-American foreign affairs specialist, known
            for her expertise in Russian and European affairs. She served on the
            U.S. National Security Council from 2017 to 2019, and as a national
            intelligence officer for Russia and Eurasia at The National
            Intelligence Council from 2006 to 2009.
          </p>
          <Link
            className="underline mt-2"
            href="https://news.st-andrews.ac.uk/archive/students-art-exhibition-to-showcase-ukrainian-unity/"
          >
            https://news.st-andrews.ac.uk/archive/students-art-exhibition-to-showcase-ukrainian-unity/
          </Link>
          <p>
            Our Student Support Initiative (SSI) was established in support of
            student-led endeavors, recognizing them as the future of industry
            innovation. We are avid backers of the SOSA (Students of St Andrews)
            initiative, which fosters connections between diverse students and
            alumni, aiming to enhance diversity and inclusivity regardless of
            socio-economic standing. Notable guest speakers have been invited,
            including renowned policy advisors and public figures.
          </p>

          <p>
            Furthermore, we extend our support internationally, notably to
            Ukraine. We champion various initiatives in the country, such as
            sponsoring exhibitions that showcase contemporary artists. Our
            mission is to uplift communities locally and globally, driving
            change through education, art, and collaboration. 
          </p>

          <p>Organizations we&apos;re currently supporting include:</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
