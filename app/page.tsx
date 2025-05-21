import Education from "./components/Education";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";

export default function Home() {
  return (
   <>
    <Hero/>
    <Projects/>
    <Languages/>
    <Education/>
    <Thoughts/>
   </>
  );
}
