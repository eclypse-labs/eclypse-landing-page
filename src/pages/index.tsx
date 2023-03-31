import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Supercharge from "../components/Supercharge";
import FullyIntegrated from "../components/FullyIntegrated";
import Footer from "../components/Footer";
import Nav from "@/components/Nav";
import MobileOnly from "@/components/MobileOnly";
import DesktopOnly from "@/components/DesktopOnly";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="bg-[url('../images/illustrations/background_gradient.svg')] md:transform-none">
    <Nav/>

    <MobileOnly>
      <div className="top-14 "> 
        <Hero />
        <Supercharge />
        <FullyIntegrated />
        <Footer />
      </div>
    </MobileOnly>

    <DesktopOnly>
      <div className="top-0 "> 
        <Hero />
        <Supercharge />
        <FullyIntegrated />
        <Footer />
      </div>
    </DesktopOnly>

    </div>
  );
}
