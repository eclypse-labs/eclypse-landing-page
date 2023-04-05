import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Supercharge from "../components/Supercharge";
import FullyIntegrated from "../components/FullyIntegrated";
import Footer from "../components/Footer";
import bg from "../images/bg/gradient2.webp";
import bigbg from "../images/bg/bigGradient.png";
import Bg from "../components/Background";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden font-montserrat bg-black z-30">
      <Bg/>
      <Header />
      <Hero />
      <Supercharge />
      <FullyIntegrated />
      <Footer />
    </div>
  );
}
