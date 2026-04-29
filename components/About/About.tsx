import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-light w-full">
      <section className="max-w-[1600px] flex items-start justify-between mx-auto pt-[2rem] pb-[10rem] px-[1rem]">
        <p className="flex-1 max-w-[30rem] text-[1.75rem] font-[400] leading-[2rem]">
          We’re a global design firm with colleagues spanning four continents
          creating experiences that amplify the joy felt in shared human
          moments.
        </p>

        <button>
          <section className="relative overflow-hidden group">
            <video
              src="/hero_video.mp4"
              className="w-[25rem] brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all ease-out duration-200"
            ></video>

            <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[1rem] bg-light rounded-[.25rem] cursor-pointer">
              <FaPlay className="w-[.75rem] h-[.75rem]" />
            </button>
          </section>

          <section className="flex items-center justify-between">
            <p className="font-[500] text-[.8rem]">
              watch our mission in action
            </p>
            <p className="font-[400] text-[.75rem]">60 sec.</p>
          </section>
        </button>
      </section>
    </section>
  );
};

export default About;
