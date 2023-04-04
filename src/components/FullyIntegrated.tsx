import React from "react";
import { FullyIntegratedCard } from "./Component_bank";

export default function Hero() {
  return (
    <div className="px-10 flex flex-col justify-center items-center max-w-[1512px] w-full text-white">
      <div className="flex flex-col items-center justify-between gap-10 max-w-[1160px] w-full text-center">
        <div className="text-3xl font-bold mt-10 md:mt-0">
          <span className="text-white">FULLY </span>
          <span className="from-primary3 to-primary6 bg-gradient-to-r bg-clip-text text-transparent">
            {" "}
            INTEGRATED{" "}
          </span>
        </div>
        <div className="flex flex-col flex-wrap items-center lg:flex-nowrap md:flex-row md:items-start justify-center w-full gap-8">
          <FullyIntegratedCard
            title="COLLATERALIZE AND MANAGE
            YOUR UNISWAP LP"
            text="Eclypse allows you to deposit and collateralize your liquidity positions from Uniswap V3 natively. You can manage your range, add or remove liquidity all while keeping track of your loans in one place."
          />
          <FullyIntegratedCard
            title="BORROW GHO BY AAVE (AND MORE)"
            text="Eclypse aims to be one of the first third party facilitators for the GHO stablecoin from AAVE to allow maximum flexibility for LPs."
          />
          <FullyIntegratedCard
            title="KEEP ON EARNING"
            text="Eclypse allows you to keep earning fees on your liquidity while you borrow against it. You can also use your borrowed GHO to earn more yield."
          />
        </div>
      </div>
    </div>
  );
}
3;
