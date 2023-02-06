import React from "react";
import { FullyIntegratedCard } from "./Component_bank";

export default function Hero() {
    return (
      <div className="flex flex-col items-center justify-between px-10 gap-10 max-w-[1512px]">
        <div className="text-3xl font-bold">
            <span className="text-white">FULLY </span>
            <span className="text-primary3"> INTEGRATED </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          <FullyIntegratedCard
          title="DEPOSIT & COLLATERALIZE
          YOUR LP"
          text="Eclypse allows you to deposit and collateralize your liquidity positions from major leading liquidity pools such as Uniswap V3 and Arrakis natively. "
          />
          <FullyIntegratedCard
          title="BORROW GHO BY AAVE"
          text="Eclypse allows you to deposit and collateralize your liquidity positions from major leading liquidity pools such as Uniswap V3 and Arrakis natively. "
          />
          <FullyIntegratedCard
          title="A NEW LIQUIDATION ARCHITECTURE"
          text="A brand new liquidation mechanism for complex assets such as LPs. Based off of the stability pool mechanism, this architecture will allow for deep liquidity and capital efficiency at it’s finest. All while guaranteeing the best yield for stability providers. "
          />
        </div>
        <div className="w-[1318px] bg-primary3 bg-opacity-80 rounded-2xl h-[3px]">
        
        </div>
      </div>
    )
  }
3