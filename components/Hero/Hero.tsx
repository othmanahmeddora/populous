import React from "react";

const Hero = () => {
  return (
    <section className="sticky top-0 h-screen w-full z-[-1] px-[1rem] overflow-hidden">
      <video
        src="/hero_video.mp4"
        className="absolute top-0 left-0 h-full w-full object-cover brightness-50"
        autoPlay
        muted
        loop
      />
      <h1 className="absolute 4xl:bottom-[9rem] bottom-[1rem] 4xl:left-[9rem] left-[1rem] text-light 4xl:text-[5rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2.25rem] text-[2rem] 4xl:font-[400] font-[500] 4xl:leading-22 3xl:leading-[4rem] xl:leading-[3.5rem] leading-[2.5rem] tracking-tighter compress-text-height">
        We design the <br />
        places where people <br />
        love to be together.
      </h1>
    </section>
  );
};

export default Hero;
