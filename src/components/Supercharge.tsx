import React from "react";
import Image from "next/image";
import illustration from "../images/illustrations/ghosbringingghos.svg";

export default function Supercharge() {
  return (
    <div className="flex flex-col md:flex-row items-center px-10 xl:px-0 max-w-[1160px] w-full my-10">
      <div className="flex flex-col items-center p-4 lg:p-10 w-[40%]">
        <Image src={illustration} alt="Ghost Illustration" className="" />
      </div>
      <div className="flex flex-col items-center text-center gap-6 w-[60%] px-2 lg:px-4">
        <div className="text-2xl lg:text-4xl font-bold">
          <span className="text-primary6">SUPERCHARGE </span>
          <span className="text-black dark:text-white">YOUR LIQUIDITY</span>
        </div>
        <div className="w-full text-center text-sm sm:text-base md:text-base lg:text-xl xl:text-2xl">
          <p>
              As an upcoming official facilitator of the <br/> GHO stablecoin, Eclypse enables liquidity <br/> providers of UniswapV3 and ArrakisV2 to use <br/> their position as collateral to unlock part of <br/> their yield generating liquidity.<br/>
          </p>
        </div>
      </div>
    </div>
  );
}
3;
