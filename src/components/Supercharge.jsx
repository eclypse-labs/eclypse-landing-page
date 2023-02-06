import React from "react";
import Image from 'next/image'
import illustration from "../images/illustrations/eclypse_supercharge.png";

export default function Hero() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-10 max-w-[1512px]">
        <div className="w-full p-6">
          <Image
          src={illustration}/>
        </div>
        <div className="flex flex-col items-center w-full gap-6">
          <div className="text-3xl font-bold">
            <span className="text-primary3">SUPERCHARGE </span>
            <span className="text-white">YOUR LIQUIDITY</span>
          </div>
          <div className="w-9/12 text-center text-xl">
            <p className="">
            As an upcoming official facilitator of the GHO stablecoin, Eclypse enables liquidity providers of UniswapV3 and ArrakisV2 to use their position as collateral to unlock part of their yield generating liquidity.
            </p>
          </div>
        </div>
      </div>
    )
  }
3