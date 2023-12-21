import ExpertsCard from "@/components/ExpertsCard";
import Image from "next/image";
import React from "react";
import { expertCardsData } from "@/store/staticData/expertsCardsData";
import community2 from "../../../public/assets/images/who-we-are/community2.png";
import community1 from "../../../public/assets/images/who-we-are/community.png";
import founder from "../../../public/assets/images/who-we-are/founder.png";
import Link from "next/link";
const Page = () => {
  return (
    <div>
      <section>
        <div className="min-w-[24px] h-20 sm:min-w-[60px] xl:w-[158px] self-center relative">
          <p className="  absolute -left-4 underline font-serif text-[9px] sm:text-sm xl:text-lg text-darkGreen rotate-[90deg] scale-y-[-1] scale-x-[-1]">
            TwoTensor
          </p>
        </div>
        <div>
          <h4 className="underline">WHO WE ARE</h4>
          <p>
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
      <section>
        <h4>Research</h4>
        <p>
          Guided by a trio of researchers, our team holds degrees in Physics,
          Theoretical Physics, and Data Science from prestigious institutions
          like Cambridge, St Andrews, and NYU. This collaborative expertise
          defines our unique approach and embodies our foundational values. For
          us, three informed minds collaborating to drive innovative research
          are more potent than one.
        </p>
      </section>
      <section>
        <h4>Founder</h4>
        <Image src={founder} alt="image of founder" />
        <div>
          <p>
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
        <div>
          <h4>Our People</h4>
          <p>
            We tirelessly scout the world for gifted minds. We place our trust
            in those with innovative thinking, unwavering logic, and the
            humility to prioritize accuracy over ego. In our fold, we nurture
            them, allowing them the liberty to showcase the unique facets of
            their character while delivering outstanding results.
          </p>
        </div>
      </section>
      <section>
        <h4>Our Engineering Team</h4>
        <div>
          <p>5/5</p>
          <p>Hold STEM Degrees</p>
        </div>
        <div>
          <p>2/5</p>
          <p>Hold Data Science Degrees</p>
        </div>
        <div>
          <p>8</p>
          <p>Languages spoken by our team</p>
        </div>
        <div>
          <p>2/5</p>
          <p>Published Researchers</p>
        </div>
        <div>
          <p>10</p>
          <p>Data Analysts</p>
        </div>
      </section>
      <section>
        <div>
          <h4>OUR EXPERTS</h4>
          <h2>Meet TwoTensor</h2>
          <p>
            We operate in a sophisticated team tailored to specialist private
            equity challenges. Learning from one another, we advance AI
            boundaries while acquiring broader, more rounded insights.
          </p>
        </div>

        <div>
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
      <section>
        <h4>Diversity</h4>
        <p>Our Commitment to Global Synergy and Inclusion</p>
        <p>
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
        <p>
          Daily interactive sessions, bridging gaps between senior and junior
          roles Regular team meetings to ensure alignment and collaboration
        </p>
        We strive to make TwoTensor a platform where every individual feels
        valued and can achieve their utmost potential.
      </section>
      <section>
        <h4>Core Principles</h4>
        <p>
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
        <div>
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
        <p>
          TwoTensor&apos;s foundation is rooted in embarking on ventures others
          deemed unattainable or didn&apos;t conceive. A lone groundbreaking
          idea that materializes might outweigh numerous failed attempts. The
          gamble of multiple setbacks is counterbalanced by the reward of a
          single monumental win. When an elite squad sets sky-high objectives,
          groundbreaking successes become the norm.
        </p>
        <p>
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
      <section>
        <div>
          <h4>Community Impact</h4>
          <Image src={community1} alt="woman sitting" />
          <p>
            Fiona Hill is a British-American foreign affairs specialist, known
            for her expertise in Russian and European affairs. She served on the
            U.S. National Security Council from 2017 to 2019, and as a national
            intelligence officer for Russia and Eurasia at The National
            Intelligence Council from 2006 to 2009.
          </p>
          <Link href="https://www.instagram.com/uniofstandrews/guide/fiona-hill/17979859387364414/?utm_campaign=&utm_medium=&utm_source=ig_web_copy_link">
            https://www.instagram.com/uniofstandrews/guide/fiona-hill/17979859387364414/?utm_campaign=&utm_medium=&utm_source=ig_web_copy_link
          </Link>
        </div>
        <div>
          <Image src={community2} alt="abstract art" />
          <p>
            Fiona Hill is a British-American foreign affairs specialist, known
            for her expertise in Russian and European affairs. She served on the
            U.S. National Security Council from 2017 to 2019, and as a national
            intelligence officer for Russia and Eurasia at The National
            Intelligence Council from 2006 to 2009.
          </p>
          <Link href="https://news.st-andrews.ac.uk/archive/students-art-exhibition-to-showcase-ukrainian-unity/">
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
