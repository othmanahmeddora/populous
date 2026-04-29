import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full z-[-1] px-[1rem]">
      <video
        src="/hero_video.mp4"
        className="fixed top-0 left-0 h-screen w-screen object-cover z-[-1] brightness-50"
        autoPlay
        muted
        loop
      />
      <h1 className="fixed bottom-[9rem] left-[9rem] text-light text-[5rem] font-[400] leading-22 tracking-tighter compress-text-height">
        We design the <br />
        places where people <br />
        love to be together.
      </h1>
    </section>
  );
};

export default Hero;
