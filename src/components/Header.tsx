import React from "react";
import Image from "next/image";
import logo from "../images/logo/eclypse_logo.svg";
import { HeaderTitle, HeaderButton } from "./Component_bank";

const Header: React.FC = () => {
  return (
    <div className="h-[100px] flex flex-wrap flex-row items-center justify-between px-10 max-w-[1512px] z-50">
      <Image src={logo} alt="Eclypse Logo" className="z-50" />
      <div className="flex flex-row items-center gap-10">
        <HeaderTitle message="Github" href="https://github.com/eclypse-labs" />
        <HeaderTitle message="Documentation" href="" />
        <HeaderButton
          message="Launch App"
          href="https://app.eclypse.finance/"
        />
      </div>
    </div>
  );
}

export default Header;