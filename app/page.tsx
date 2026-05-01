import About from "@/components/About/About";
import Discipline from "@/components/Discipline/Discipline";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/Hero/Hero";
import NewsPerspective from "@/components/NewsPerspective/NewsPerspective";
import Projects from "@/components/Projects/Projects";
import Sphere from "@/components/Sphere/Sphere";
import Vision from "@/components/Vision/Vision";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <NewsPerspective />
      <Explore />
      <Projects />
      <Sphere />
      <Discipline />
      <Vision />
    </div>
  );
}
