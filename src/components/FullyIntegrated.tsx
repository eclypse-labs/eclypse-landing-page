import React from "react";
import { FullyIntegratedCard } from "./Component_bank";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-between px-10 gap-10 max-w-[1512px] w-full text-center">
      <div className="text-3xl font-bold mt-10 md:mt-0">
        <span className="text-black dark:text-white">FULLY </span>
        <span className="text-primary3"> INTEGRATED </span>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8">
        <FullyIntegratedCard
          title="COLLATERALIZE AND MANAGE
          YOUR UNISWAP LP"
          text="Eclypse will allow you to deposit and collateralize your liquidity positions from leading decentralized exchange Uniswap V3 natively. You can manage range, add or remove liquidity all while keeping track of your loans in one place."
        />
        <FullyIntegratedCard
          title="BORROW GHO BY AAVE (AND OTHERS)"
          text="Eclypse aims to be one of the first third party facilitators for the GHO stablecoin from AAVE as well as other stablecoins to allow maximum flexibility for LPs. Simply choose which one you would prefer to borrow and how much, we do the rest."
        />
        <FullyIntegratedCard
          title="A BRAND NEW LIQUIDATION MODEL"
          text="We are building a new liquidation mechanism for complex assets such as Uniswap LPs. Based off of the stability pool design, this architecture will allow for deep liquidity and capital efficiency at it’s finest. All while guaranteeing the best yield for stability providers. "
        />
      </div>
      <div className="w-[1318px] bg-primary3 bg-opacity-80 rounded-2xl h-[3px]"></div>
    </div>
  );
}
3;
