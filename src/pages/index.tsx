import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Supercharge from "../components/Supercharge";
import FullyIntegrated from "../components/FullyIntegrated";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Supercharge />
      <FullyIntegrated />
      <Footer />
    </div>
  );
}
