import Image from "next/image";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Presentation></Presentation>
      <About></About>
    </div>
  );
}
