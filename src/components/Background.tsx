import bg from "../images/bg/gradient2.webp";
import Image from "next/image";
import bigbg from "../images/bg/bigGradient.png";


export default function Bg() {
    return (
        <div className="absolute w-full h-full flex">
          <Image alt="gradient" src={bg} className="w-full h-full z-0"/>
        </div>
    );
  }