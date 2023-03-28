import React from "react";
import Image from "next/image";
import logo from "../images/logo/eclypse_logo.svg";
import { HeaderTitle, HeaderButton } from "./Component_bank";

const Header: React.FC = () => {
  return (
    <div className="h-[100px] z-50 font-montserrat bg-black/20 w-full flex items-center justify-center">
      <div className="max-w-[1512px] items-center justify-between flex flex-row w-full px-10">
        <Image src={logo} alt="Eclypse Logo" className="z-50" />
        <div className="hidden flex-row items-center min-[850px]:flex gap-10">
          <HeaderTitle text="Github" href="https://github.com/eclypse-labs" />
          <HeaderTitle text="Documentation" href="" />
          <HeaderButton
            text="Launch App"
            href="https://app.eclypse.finance/"
          />
        </div>
      </div>
    
    </div>
  );
}

export default Header;