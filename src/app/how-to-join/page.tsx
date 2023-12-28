import SideNav from "@/components/SideNav";
import React from "react";
import Link from "next/link";
import {
  jobsData,
  applicationFaqData,
} from "@/store/staticData/howToJoinPageData";
import JobPostCard from "@/components/JobPostCard";
import ApplicationFaqCard from "@/components/ApplicationFaqCard";

const Page = () => {
  return (
    <div className="font-inter w-full relative">
      <section className=" px-6 sm:px-10 xl:px-28 py-8 sm:py-[85px] xl:py-28 bg-white text-darkGreen flex flex-col gap-10 sm:gap-28 ">
        <Link
          href="/"
          className="absolute -left-4 top-[20rem] xl:top-[40rem] min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center  "
        >
          <p className=" underline font-serif text-[9px] sm:text-sm xl:text-lg text-[#035F5F] rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </Link>
        <div className="sm:w-[500px] xl:w-[900px]">
          <h4 className="underline font-semibold text-xl sm:text-3xl xl:text-4xl mb-5 xl:mb-10">
            HOW TO JOIN
          </h4>
          <p className="font-medium text-sm sm:text-2xl leading-6 sm:leading-10">
            TwoTensor is a haven for innovators. Upholding strong ethics, we
            revel in tackling complex challenges. Join us and collaborate with a
            diverse, socially-aware, and occasionally geeky team. We celebrate
            diversity in backgrounds, disciplines, and perspectives. Ready to be
            exceptional with us? Apply now. We welcome talent from all walks of
            life.
          </p>
        </div>
        <div className="sm:w-[500px] xl:w-[900px]">
          <h4 className="underline font-semibold text-[8px] sm:text-lg xl:text-xl mb-5 sm:mb-7 xl:mb-10">
            Career Development
          </h4>
          <p className="font-medium text-sm sm:text-2xl leading-6 sm:leading-10">
            &quot;To foster continuous learning among our dedicated team at
            TwoTensor, we provide both in-person and online professional
            development courses. We advocate mentorship and frequently invite
            thought leaders from various sectors to share their insights. Our
            Technical Speaker series, highlighting areas such as computing and
            machine learning, aims to inspire growth through engaging work,
            collaborative peers, and an environment that prioritizes perpetual
            learning.&quot;
          </p>
        </div>
        <div className="mt-5 sm:w-[500px] xl:w-[900px]">
          <h4 className="underline font-semibold text-[8px] sm:text-lg xl:text-xl mb-5 sm:mb-7 xl:mb-10">
            Choose Your Path
          </h4>
          <p className="font-bold text-xl sm:text-4xl xl:text-5xl leading-8 sm:leading-10 xl:leading-[83px] mb-3">
            I am a curious human interested in all available jobs at your
            worldwide offices
          </p>
          <p className="font-medium text-[10px] sm:text-base xl:text-lg text-darkGreen/70">
            Viewing 10 of 32 jobs
          </p>
        </div>

        <div className="hidden sm:block absolute top-[32px] right-[20px] xl:right-[72px]">
          <SideNav showInvestor={true} />
        </div>
      </section>
      <section className="bg-darkGreen pt-7 sm:pt-20 pb-14 px-6 sm:px-10 xl:px-28">
        <div className="flex flex-col gap-3 xl:grid xl:grid-cols-2 xl:gap-x-24 xl:gap-y-8 xl:w-[900px]">
          {jobsData.map((item, index) => (
            <JobPostCard
              key={`${item.role} = ${index}`}
              location={item.location}
              type={item.type}
              role={item.role}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="bg-white text-darkGreen pb-16 sm:py-20 pt-14  px-6 sm:px-10 xl:px-28 flex flex-col gap-10 sm:gap-20 xl:gap-32 ">
        <div className="font-medium  text-sm sm:text-2xl leading-6 sm:leading-10 sm:w-[500px] xl:w-[900px]">
          <h4 className="underline font-semibold text-[8px] sm:text-lg xl:text-xl mb-2 sm:mb-10">
            Interviewing
          </h4>
          <p className="mb-6 sm:mb-10 ">
            TwoTensor harnesses network science to provide real-time insights
            into competitors&apos; commercial flows and industry landscapes,
            revolutionizing strategic business intelligence. As we navigate the
            hiring process together, we value candidates who:
          </p>
          <ul className="mb-6 sm:mb-10 ">
            <li>- Maintain high standards</li>
            <li>- Prioritize rigorous analysis</li>
            <li>- Communicate succinctly</li>
            <li>- Flourish in collaborative settings</li>
            <li>- Exhibit intellectual curiosity</li>
          </ul>
          <p>
            Our hiring journey may encompass an application review, phone and
            virtual interviews, reference discussions, and culminates in an
            offer. Some roles might require a writing or code sample, or a case
            study. For an in-depth understanding of our interviewing ethos,
            refer to our comprehensive guide. Your journey with us may slightly
            vary based on the role.
          </p>
        </div>
        <div className="font-medium text-sm sm:text-2xl leading-6 sm:leading-10 sm:w-[500px] xl:w-[900px] ">
          <h4 className="underline font-semibold text-[8px] sm:text-lg xl:text-xl mb-2 sm:mb-10">
            Internships
          </h4>
          <p>
            We&apos;re inviting top talents from diverse backgrounds to intern
            at TwoTensor. Experience the intersection of network science and
            finance, guided by industry experts, curated learning programs, and
            renowned guest speakers. Engage in enriching interactions with peers
            and team members. Apply now for our Summer 2024 internship and step
            into the future of strategic business intelligence.
          </p>
        </div>
        <div className="font-medium text-sm sm:text-2xl leading-6 sm:leading-10 sm:w-[500px] xl:w-[900px]">
          <h4 className="underline font-semibold text-[8px] sm:text-lg xl:text-xl mb-2 sm:mb-10">
            Fellowship Program
          </h4>
          <p>
            Since 2022, TwoTensor has curated distinct opportunities to
            introduce trailblazing students to our cutting-edge network science
            platform. These sessions offer a deep dive into how we revolutionize
            finance with real-time competitor insights and industry mapping.
            Students of all disciplines, even without a finance background, from
            global universities are encouraged to apply. For the latest on our
            programs, please visit our website.
          </p>
        </div>
      </section>
      <section className="px-6 sm:px-10 xl:px-28 pt-7 sm:pt-14 xl:pt-9 pb-12 bg-darkGreen ">
        <h4 className="text-softBlue font-bold text-[12px] sm:text-xl xl:text-2xl">
          TwoTensor Programs:
        </h4>
        <div className="flex flex-col gap-3 sm:gap-0 mt-7 sm:mt-10 sm:w-[652px] xl:w-[1000px] ">
          <div
            className={`px-8 sm:px-12 h-[132px] sm:h-[212px] xl:h-[286px] sm:w-[435px] xl:w-[587px]
           text-darkGreen bg-[#E3F8F5] border-teal border font-medium flex flex-col justify-center`}
          >
            <h4 className="underline text-xl sm:text-3xl xl:text-[40px] mb-2 xl:mb-5">
              Discovery 
            </h4>
            <p className="text-[9px] sm:text-sm xl:text-xl leading-4 sm:leading-7 xl:leading-9 ">
              A three-day initiative for women in their second year of full-time
              undergrad studies in U.S. institutions.
            </p>
          </div>
          <div
            className={`px-8 sm:px-12 h-[132px] sm:h-[212px] xl:h-[286px] sm:w-[435px] xl:w-[587px] sm:self-end sm:-translate-y-10 sm:z-10
           text-darkGreen bg-[#E3F8F5] border-teal border font-medium flex flex-col justify-center`}
          >
            <h4 className="underline text-xl sm:text-3xl xl:text-[40px] mb-2 xl:mb-5">
              Latitude
            </h4>
            <p className="text-[9px] sm:text-sm xl:text-xl leading-4 sm:leading-7 xl:leading-9 ">
              A three-day initiative for second-year undergrads identifying as
              Native American, Black, Hispanic, or Pacific Islander. 
            </p>
          </div>
          <div
            className={`px-8 sm:px-12 h-[132px] sm:h-[212px] xl:h-[286px] sm:w-[435px] xl:w-[587px] sm:-translate-y-20 xl:z-20
           text-darkGreen bg-[#E3F8F5] border-teal border font-medium flex flex-col justify-center`}
          >
            <h4 className="underline text-xl sm:text-3xl xl:text-[40px] mb-2 xl:mb-5">
              Momentum
            </h4>
            <p className="text-[9px] sm:text-sm xl:text-xl leading-4 sm:leading-7 xl:leading-9 ">
              A three-day initiative for second-year undergrads identifying as
              LGBTQIA+.  
            </p>
          </div>
          <div
            className={`px-8 sm:px-12 h-[132px] sm:h-[212px] xl:h-[286px] sm:w-[435px] xl:w-[587px] sm:self-end sm:-translate-y-28 sm:z-10 xl:z-30
           text-darkGreen bg-[#E3F8F5] border-teal border font-medium flex flex-col justify-center`}
          >
            <h4 className="underline text-xl sm:text-3xl xl:text-[40px] mb-2 xl:mb-5">
              Nexus
            </h4>
            <p className="text-[9px] sm:text-sm xl:text-xl leading-4 sm:leading-7 xl:leading-9 ">
              A three-day initiative open to all second-year undergraduates in
              U.S. institutions.
            </p>
          </div>
        </div>
      </section>
      <section className="text-darkGreen bg-white px-6 sm:px-10 xl:px-28 pt-11 sm:pt-28 pb-14 sm:pb-20 xl:pb-48">
        <div>
          <p className="text-softBlue font-bold text-[12px] sm:text-lg mb-3 sm:mb-5">
            Application FAQ
          </p>
          <h4 className="font-bold text-[10px] sm:text-2xl">
            TwoTensor Application FAQ
          </h4>
        </div>
        <div className="mt-7 sm:mt-16 flex flex-col gap-3 sm:gap-8 xl:gap-14">
          {applicationFaqData.map((item, index) => (
            <ApplicationFaqCard
              key={`${index} ${item.answer}`}
              answer={item.answer}
              question={item.question}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
