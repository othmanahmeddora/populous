import Navbar from "@/components/Navbar/Navbar";
import { disciplines } from "@/data/disciplines";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Disciplines = () => {
  return (
    <section>
      <Navbar navColor="dark" />

      <section className="flex flex-col gap-[10rem] max-w-[1600px] mx-auto xl:pt-[15rem]">
        <h1 className="flex-2 relative xl:text-[8.75rem] text-[1.7rem] tracking-tighter">
          Disciplines
        </h1>

        <section className="relative flex flex-col xl:text-[5rem] text-[1.55rem]">
          {disciplines.map((discipline) => (
            <Link
              key={discipline.id}
              href={discipline.link}
              className="relative flex items-start justify-between md:gap-[1rem] leading-[4rem] tracking-tighter mb-[1rem] group"
            >
              <p className="group-hover:text-theme transition-all ease-out duration-200">
                {discipline.title}
              </p>

              <div className="xl:absolute top-[60%] xl:translate-y-[-50%] left-[-4%] text-[3.5rem] overflow-hidden w-fit">
                <FaArrowRight className="xl:translate-x-[-100%] group-hover:translate-x-[0] group-hover:text-theme transition-all ease-out duration-200" />
              </div>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Disciplines;
