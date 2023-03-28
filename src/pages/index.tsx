import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Supercharge from "../components/Supercharge";
import FullyIntegrated from "../components/FullyIntegrated";
import Footer from "../components/Footer";
import bg from "../images/bg/gradient.png";
import bigbg from "../images/bg/bigGradient.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden font-montserrat">
      <div className="absolute w-full h-full flex">
        <Image alt="gradient" src={bg} className="w-full h-full"/>
      </div>
      <Header />
      <Hero />
      <Supercharge />
      <FullyIntegrated />
      <Footer />
    </div>
  );
}
