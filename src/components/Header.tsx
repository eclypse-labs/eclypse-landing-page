import React from "react";
import Image from "next/image";
import logo from "../images/logo/eclypse_logo.svg";
import logosolo from "../images/logo/eclypse_logo_solo.png";
import { HeaderTitle, HeaderButton } from "./Component_bank";
import Burger from "./Nav";

const Header: React.FC = () => {
  return (
    <div className="h-[100px] z-50 font-montserrat bg-black/20 w-full flex items-center justify-center md:relative fixed top-0">
      <div className="max-w-[1512px] items-center justify-between flex flex-row w-full px-0 sm:px-4 md:px-10">
        <Image src={logo} alt="Eclypse Logo" className="z-50 hidden md:flex" />
        <Image src={logosolo} alt="Eclypse Logo" className="ml-[20px] md:hidden"/>
        <div className="hidden flex-row items-center min-[850px]:flex gap-10">
          <HeaderTitle text="Github" href="https://github.com/eclypse-labs" />
          <HeaderTitle text="Documentation" href="" />
          <HeaderButton
            text="Launch App"
            href="https://app.eclypse.finance/"
          />
        </div>
        <div className="flex md:hidden items-center justify-center bg-green-300 relative h-[100px]">
          <Burger/>
        </div>
      </div>
    
    </div>
  );
}

export default Header;