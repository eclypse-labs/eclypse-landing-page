import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Supercharge from "../components/Supercharge";
import FullyIntegrated from "../components/FullyIntegrated";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function Soon() {
  return (
    <div className="w-full">
      <Header />
      <ComingSoon />
      <Footer />
    </div>
  );
}
