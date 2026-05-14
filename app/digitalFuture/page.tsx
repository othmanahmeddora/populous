import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const DigitalFuture = () => {
  return (
    <section>
      <Navbar />

      <section className="flex flex-col xl:gap-[10rem] gap-[5rem]">
        <section className="relative bg-[url(/img/10180.jpg)] bg-cover before:absolute before:inset-0 before:bg-black/35">
          <section className="relative z-10 max-w-[1600px] px-[1rem] mx-auto pt-[25rem] pb-[2rem] flex flex-col justify-between gap-[10rem] xl:gap-[30rem]">
            <h1
              className="text-center text-light xl:text-[8.75rem] text-[4rem] tracking-tighter xl:leading-[9rem] leading-[4.5rem] mb-[20rem] xl:mb-0"
              data-scroll
              data-scroll-speed={0.1}
            >
              Digital Future
            </h1>

            <section className="flex items-start w-full">
              <p
                className="w-full xl:w-1/2 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.1}
              >
                Our projects are often vast in scale, which means they can take
                years to reach completion. With the speed at which technology
                advances, there is a danger that these venues might be outdated
                before the first visitors have even taken their seat.
              </p>
            </section>

            <section className="flex items-start justify-end w-full">
              <p
                className="w-full xl:w-1/2 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.05}
              >
                Our Digital Futures team is a collection of forward-thinking
                designers who explore and create new technologies that propel
                our designs into exciting new frontiers, and result in buildings
                that not only stand the test of time but define the future.
              </p>
            </section>
          </section>
        </section>

        {/* About */}
        <section className="max-w-[1600px] mx-auto w-full px-[1rem] flex flex-col gap-[3rem] z-10">
          <p className="text-[2.25rem] text-left max-w-[55rem] tracking-tighter leading-[2.75rem]">
            For over 40 years, Populous has been a driving force for innovation
            in sports and entertainment, consistently raising the bar with each
            new venue, space and event that we create. Through our ongoing
            exploration of the digital realm, we have maintained a position of
            leadership, while propelling the advancement of technology in our
            industry.
          </p>

          <p className="text-[2.25rem] text-left max-w-[55rem] tracking-tighter leading-[2.75rem]">
            Our team is focused on cutting-edge digital products, leveraging our
            Intellectual Property through big data management, analysis-driven
            design, and the incorporation of new generative processes.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="w-full max-w-[1600px] mx-auto px-[1rem] flex flex-col xl:gap-[4rem] gap-[2rem]">
          <section className="flex xl:flex-row flex-col items-start justify-between xl:gap-[1rem] gap-[2rem] group">
            <h2 className="flex-1 text-[1.7rem]">Featured Projects</h2>

            <Link href="" className="flex-1">
              <Image
                src="/img/10182.jpg"
                alt="KAi Tak Sports Park"
                width={500}
                height={500}
                className="w-full rounded-[.2rem]"
              />

              <section className="flex items-start justify-between mt-[.5rem]">
                <p className="group-hover:underline">KAi Tak Sports Park</p>
                <p>2025</p>
              </section>
            </Link>
          </section>

          <section className="flex xl:flex-row flex-col items-start justify-between group">
            <Link href="" className="flex-1">
              <Image
                src="/img/10181.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full rounded-[.2rem]"
              />
              <section className="flex items-start justify-between mt-[.5rem]">
                <p className="group-hover:underline">Sphere</p>
                <p>2023</p>
              </section>
            </Link>

            <section className="flex-1"></section>
          </section>
        </section>

        {/* Digital Innovation */}
        <section className="2xl:px-[1rem]">
          <section className="rounded-[1rem] bg-theme">
            <section className="max-w-[1600px] mx-auto text-light">
              <section className="w-full flex items-center justify-center xl:pt-[2rem] pt-[5rem] xl:pb-[5rem] pb-[2rem]">
                <h2 className="text-center xl:text-[5rem] text-[3rem] w-[50rem] xl:leading-[5rem] leading-[3rem] tracking-tighter">
                  Areas of Digital <br /> Innovations
                </h2>
              </section>

              <section className="flex flex-col gap-[2rem] px-[1rem] py-[5rem]">
                <section className="flex flex-col xl:flex-row items-start justify-between">
                  <section className="flex-1"></section>

                  <section className="flex-1">
                    <p className="max-w-[18rem] leading-[1.4rem]">
                      The goal of the Digital team is simple: to keep driving
                      Populous forward, offering new products, services and
                      insights that boost revenue for our clients and enhance
                      the experience of their fans. With that aim, we focus our
                      attention in four key areas.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between w-full border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.5rem] max-w-[18rem] leading-[1.8rem] tracking-tighter mb-[1rem]">
                      Data and Analytics
                    </h3>
                  </section>

                  <section className="flex-1 flex flex-col gap-[1rem]">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      When you’re dealing with an audience of thousands in a
                      live venue — and millions watching at home — you have
                      access to a huge amount of data. Understand how to analyze
                      that data effectively and it becomes a very powerful tool.
                    </p>
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      Through our work, we generate and process a staggering
                      amount of information collected from millions of data
                      points across all our projects. We use that information to
                      gain a deeper understanding of the venues we design, as
                      well as the changing needs and habits of the people who
                      visit them, throughout all phases of the building’s life
                      cycle. At its simplest, this improves our own knowledge,
                      but it also allows us to help our clients and our
                      partners.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.5rem] max-w-[18rem] leading-[1.8rem] tracking-tighter mb-[1rem]">
                      Scenario Modeling
                    </h3>
                  </section>

                  <section className="flex-1 flex flex-col gap-[1rem]">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      When a client approaches us at the very earliest stages of
                      a project — possibly before they even know what it is they
                      actually need — we’re able to use our resources to analyze
                      the facilities they already have. Based on this data, and
                      data gathered from our other projects, we help them
                      identify the route forward that’s most suitable for them
                      and for their budget. We do this by anticipating several
                      potential future opportunities for development.
                    </p>
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      At the smaller end of the scale, we might suggest simple
                      upgrades, like enhancing premium hospitality spaces, or
                      more significant additions, such as a new stand or a
                      retractable roof, all the way up to complete venue-wide
                      renovation, or even an entirely new stadium. We supply
                      costs and timeframes for each scenario, as well as
                      detailed data that predicts future changes in revenue and
                      enhancements to the fan experience. This helps eliminate
                      risk so that our clients can make decisions with
                      confidence.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.5rem] max-w-[18rem] leading-[1.8rem] tracking-tighter mb-[1rem]">
                      Digital Products
                    </h3>
                  </section>

                  <section className="flex-1 flex flex-col gap-[1rem]">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      Our knowledge of the sports and entertainment sector is
                      our most valuable asset, and our Digital Products team
                      draws on that strength to create products that will
                      benefit the other designers in our practice, as well as
                      our partners and collaborators.
                    </p>
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      This might include custom programs, plug-ins for our
                      platforms, and tools to increase the quality and
                      efficiency of our work. Some of these new tools have had a
                      dramatic impact. For example, we have built a new tool
                      that lets us calculate all the 3D C-values of a
                      50,000-seat stadium in under a minute — something that
                      only a few years ago would take our team about three days.
                    </p>
                  </section>
                </section>

                <section className="flex flex-col xl:flex-row items-start justify-between border-t pt-[1rem]">
                  <section className="flex-1">
                    <h3 className="text-[1.5rem] max-w-[18rem] leading-[1.8rem] tracking-tighter mb-[1rem]">
                      Digital Delivery
                    </h3>
                  </section>

                  <section className="flex-1 flex flex-col gap-[1rem]">
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      The sheer size and complexity of our projects means that
                      we have to constantly push the boundaries of what
                      industry-standard software can do, as well as improving
                      the efficiency of standard delivery methodologies so that
                      they work at the scales we require. To do this, we’re
                      constantly developing innovative new tools and workflows
                      for ourselves and for our partners.
                    </p>
                    <p className="max-w-[24rem] leading-[1.4rem]">
                      During the design and delivery of Kai Tak Sports Park, an
                      enormous project covering a 28-hectare site in Hong Kong,
                      we worked with hundreds of consultants and partners to
                      develop a brand new methodology of BIM management for
                      large projects. We were able to combine all the BIM models
                      used by our collaborators — a staggering 800+ models —
                      into a single model. This has streamlined the delivery
                      process and drastically improved the efficiency of our
                      collaborative workflows.
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default DigitalFuture;
