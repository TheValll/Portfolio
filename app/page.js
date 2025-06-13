import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "@/components/Experiences";
import Educations from "@/components/Educations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Presentation></Presentation>
      <About></About>
      <Projects></Projects>
      <Experiences></Experiences>
      <Educations></Educations>
      <Contact></Contact>
    </div>
  );
}
