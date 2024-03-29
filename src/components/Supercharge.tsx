import React from "react";
import Image from "next/image";
import illustration from "../images/illustrations/ghosbringingghos.svg";

export default function Supercharge() {
  return (
    <div className="flex flex-col md:flex-row items-center px-10 xl:px-0 max-w-[1160px] w-full my-10 text-white">
      <div className="hidden md:flex flex-col items-center p-4 lg:p-10 w-[40%]">
        <Image src={illustration} alt="Ghost Illustration" className="" />
      </div>
      <div className="flex flex-col items-center text-center gap-2 md:gap-6 w-full md:w-[60%] px-2 lg:px-4">
        <div className="text-2xl lg:text-4xl font-bold">
          <span className="text-primary6">SUPERCHARGE </span>
          <span className="text-white">YOUR LIQUIDITY</span>
        </div>
        <div className="w-full text-center text-base sm:text-base md:text-base lg:text-xl xl:text-2xl">
          <p>
            Eclypse enables liquidity providers from Uniswap V3 to use their
            positions as collateral to unlock their yield generating liquidity.
          </p>
        </div>
      </div>
      <div className="flex md:hidden flex-col items-center p-4 lg:p-10 w-full">
        <Image src={illustration} alt="Ghost Illustration" className="" />
      </div>
    </div>
  );
}
3;
