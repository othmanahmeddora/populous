import About from "@/components/About/About";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/Hero/Hero";
import NewsPerspective from "@/components/NewsPerspective/NewsPerspective";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <NewsPerspective />
      <Explore />
    </div>
  );
}
