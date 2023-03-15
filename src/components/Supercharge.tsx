import React from "react";
import Image from "next/image";
import illustration from "../images/illustrations/ghosbringingghos.svg";

export default function Supercharge() {
  return (
    <div className="flex flex-col md:flex-row items-center px-10 max-w-[1512px]">
      <div className="flex flex-col items-center w-full p-6">
        <Image src={illustration} alt="Ghost Illustration" />
      </div>
      <div className="flex flex-col items-center w-full gap-6">
        <div className="text-3xl font-bold">
          <span className="text-primary3">SUPERCHARGE </span>
          <span className="text-black dark:text-white">YOUR LIQUIDITY</span>
        </div>
        <div className="w-9/12 text-center text-xl">
          <p className="">
            Eclypse enables liquidity providers of Uniswap V3 to use their
            positions as collateral to unlock part of their yield generating
            liquidity in the form of stablecoins. Leverage, earn and hedge your
            positions with Eclypse.
          </p>
        </div>
      </div>
    </div>
  );
}
3;
