import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

const Sustainability = () => {
  return (
    <section>
      <Navbar />

      <section className="flex flex-col gap-[10rem]">
        <section className="relative bg-[url(/img/10014.jpg)] bg-cover before:absolute before:inset-0 before:bg-black/35">
          <section className="relative z-10 max-w-[1600px] px-[1rem] mx-auto pt-[25rem] pb-[2rem] flex flex-col justify-between gap-[30rem]">
            <h1
              className="text-center text-light text-[8.75rem] tracking-tighter leading-[9rem]"
              data-scroll
              data-scroll-speed={0.1}
            >
              Creating a Sustainable Future
            </h1>

            <section className="flex items-start justify-between w-full">
              <p
                className="flex-1 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.1}
              >
                Every day, our work at Populous tells the world a story about
                who we are and what we believe.
              </p>

              <section className="flex-1"></section>
            </section>

            <section className="flex items-start justify-between w-full">
              <section className="flex-1"></section>

              <p
                className="flex-1 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.05}
              >
                As designers, we have the unique privilege of reimagining the
                world we share, and we see firsthand the power that our work can
                have toward the betterment of people, places and the planet.
              </p>
            </section>
          </section>
        </section>

        {/* About */}
        <section className="max-w-[1600px] mx-auto w-full px-[1rem] z-10">
          <p className="text-[2.25rem] text-left w-[55rem] tracking-tighter leading-[2.75rem]">
            Populous has been at the forefront of environmentally sustainable
            design solutions for public assembly venues since the formation of
            our practice. The future of venue design and events is an
            environmentally sustainable one, and we are committed to producing
            outcomes that are world-leading in reducing their impact on our
            environment, with an end goal of regenerative and climate-positive
            venues.
          </p>
        </section>

        {/* Video */}
        <section className="max-w-[1600px] mx-auto px-[1rem]">
          <video
            src="/videos/hero_video.mp4"
            className="rounded-[.6rem]"
            controls
          ></video>
        </section>

        {/* Sustainable Legacy */}
        <section className="w-full max-w-[1600px] mx-auto px-[1rem] flex flex-col xl:gap-[4rem] gap-[2rem]">
          <Link
            href="/"
            className="flex xl:flex-row flex-col items-start justify-between xl:gap-[1rem] gap-[2rem] group"
          >
            <h2 className="flex-1 text-[1.7rem]">Our Sustainable Legacy</h2>

            <section className="flex-1">
              <Image
                src="/img/10030.jpg"
                alt="KAi Tak Sports Park"
                width={500}
                height={500}
                className="w-full rounded-[.2rem]"
              />

              <section className="flex items-start justify-between mt-[.5rem]">
                <p className="group-hover:underline">KAi Tak Sports Park</p>
                <p>2025</p>
              </section>
            </section>
          </Link>

          <Link
            href="/"
            className="flex xl:flex-row flex-col items-start justify-between group"
          >
            <section className="flex-1">
              <Image
                src="/img/10012.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full rounded-[.2rem]"
              />
              <section className="flex items-start justify-between mt-[.5rem]">
                <p className="group-hover:underline">
                  Tottenham Hotspur Stadium
                </p>
                <p>2019</p>
              </section>
            </section>

            <section className="flex-1"></section>
          </Link>

          <Link
            href="/"
            className="flex flex-col items-start justify-between group"
          >
            <Image
              src="/img/10013.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full rounded-[.2rem]"
            />

            <section className="flex items-start justify-between w-full mt-[.5rem]">
              <p className="group-hover:underline">BMO Center</p>
              <p>2024</p>
            </section>
          </Link>
        </section>

        {/* Commitment */}
        <section className="px-[2rem]">
          <section className="rounded-[1rem] bg-theme">
            <section className="max-w-[1600px] mx-auto text-light">
              <section className="w-full flex items-center justify-center pt-[2rem] pb-[5rem]">
                <h2 className="text-center text-[5rem] w-[50rem] leading-[5rem] tracking-tighter">
                  Commitment to Zero Carbon Projects
                </h2>
              </section>

              <section className="flex flex-col gap-[2rem] px-[1rem] py-[5rem]">
                <section className="flex flex-col xl:flex-row items-start justify-between">
                  <section className="flex-1"></section>

                  <section className="flex-1">
                    <p className="max-w-[18rem] leading-[1.4rem]">
                      We&#39;re dedicated to delivering zero carbon projects by
                      2030. Learn how we&#39;re measuring and tracking the
                      environmental impact of our projects and utilizing
                      recognized frameworks to achieve this goal.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between w-full border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.325rem] max-w-[18rem] leading-[1.8rem] tracking-tighter">
                      Zero Carbon Certification for Climate Pledge Arena
                    </h3>
                  </section>

                  <section className="flex-1">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      Populous has already achieved zero carbon certification
                      from the International Living Future Institute (ILFI) for
                      Climate Pledge Arena. It&#39;s also the first arena and
                      largest building in the world to receive ILFI&#39;s Zero
                      Carbon Certification and sets a precedent in the industry.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.325rem] max-w-[18rem] leading-[1.8rem] tracking-tighter">
                      Environmental Impact Measurement and Tracking
                    </h3>
                  </section>

                  <section className="flex-1">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      We are accounting for both operational carbon – the amount
                      of carbon emitted during the operational phase of the
                      project, also known as the total energy needed to operate
                      the project over its life – and embodied carbon, the
                      amount of carbon emitted in producing the materials needed
                      for construction.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.325rem] max-w-[18rem] leading-[1.8rem] tracking-tighter">
                      Utilizing Recognized Frameworks
                    </h3>
                  </section>

                  <section className="flex-1">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      We are using the definitions set forth by the U.S. Green
                      Building Council (USGBC), the World Green Building Council
                      (WGBC), the International Living Future Institute (ILFI)
                      or the ASHRAE Standard 228 as the framework to deliver
                      zero carbon and zero energy projects.
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        {/* Leading by Example */}
        <section className="max-w-[1600px] mx-auto w-full">
          <section className=" flex xl:flex-row flex-col items-start justify-between gap-[1rem]">
            <Image
              src="/img/10015.webp"
              alt="Populous project"
              width={500}
              height={500}
              className="flex-1 rounded-[.2rem]"
            />

            <section className="relative flex-1">
              <h2 className="text-[2.25rem] leading-[2.5rem] font-[400] 2xl:mb-0 mb-[1rem]">
                Leading by <br /> Example
              </h2>

              <section className="2xl:absolute top-[500%] left-[50%]">
                <p className="max-w-[18rem] mb-[1rem] leading-[1.4rem]">
                  Sustainability at Populous means ensuring we lead by example.
                  We strive to operate our offices in an environmentally
                  responsible way and have been awarded Climate Active
                  Certification in recognition of achieving carbon neutrality in
                  the operations of our Brisbane, Sydney, and Melbourne offices.
                </p>

                <Link
                  href="/"
                  className="w-fit flex items-center gap-[1rem] px-[.5rem] py-[.5rem] text-[.8rem] font-[500] bg-dark text-light hover:bg-theme hover:text-white rounded-[.2rem]"
                >
                  <RiCornerDownRightLine className="text-[1rem]" />
                  Read the article
                </Link>
              </section>
            </section>
          </section>
        </section>

        {/* Road Map */}
        <section className="max-w-[1600px] mx-auto w-full px-[1rem] z-10 flex flex-col gap-[10rem]">
          <p className="text-[2rem] text-left w-[32rem] tracking-tighter leading-[2.25rem]">
            Our Road Map: We are now tracking our firm’s ‘global’ operational
            emissions (scopes 1, 2, and select scope 3*) annually. The primary
            intent of this exercise is to be transparent. <br /> We will find
            areas to make reductions and then purchase credible and verifiable
            offsets each year accordingly. By 2030, we will expand GHG emissions
            tracking to account for all applicable scope 3 emissions.
          </p>

          <section>
            <section className="flex flex-col xl:flex-row items-start justify-between w-full border-t pt-[1rem] pb-[5rem]">
              <section className="flex-1">
                <h3 className="text-[8.75rem] text-theme leading-[5rem] max-w-[18rem]">
                  1
                </h3>
              </section>

              <section className="flex-1">
                <p className="max-w-[20rem] leading-[1.4rem] text-[1.25rem]">
                  Direct emissions owned or controlled by Populous
                </p>
              </section>
            </section>

            <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem] pb-[5rem]">
              <section className="flex-1">
                <h3 className="text-[8.75rem] text-theme leading-[5rem] max-w-[18rem]">
                  2
                </h3>
              </section>

              <section className="flex-1">
                <p className="max-w-[20rem] leading-[1.4rem] text-[1.25rem]">
                  Indirect emissions from purchased electricity to operate our
                  offices
                </p>
              </section>
            </section>

            <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem] pb-[5rem]">
              <section className="flex-1">
                <h3 className="text-[8.75rem] text-theme leading-[5rem] max-w-[18rem]">
                  3
                </h3>
              </section>

              <section className="flex-1">
                <p className="max-w-[20rem] leading-[1.4rem] text-[1.25rem]">
                  Indirect emissions that occur in the value chain of our
                  company
                </p>
              </section>
            </section>
          </section>

          <section className="flex items-start justify-between">
            <section className="flex-1"></section>
            <section className="flex-1">
              <p className="text-[1.7rem] leading-[2rem] max-w-[29.5rem]">
                Populous is a signatory to Architects Declare Australia,
                Architects Declare UK, and the AIA 2030 Commitment. In the UK,
                we are a member of the British Association for Sustainability in
                Sport (BASIS). Our EMEA region and Australian offices have
                achieved ISO 14001 certification. Additionally, our Australian
                offices’ operations are Climate Active carbon-neutral certified
                and have committed to a carbon reduction strategy, which has a
                target of 75% reduction by 2030 (scopes 1, 2 and 3). We will
                continue to adapt our workflows and educate our staff so the
                decisions we make are informed and help mitigate the realities
                of climate change.
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Sustainability;
