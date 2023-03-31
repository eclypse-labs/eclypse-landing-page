import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo/eclypse_logo2.svg";
import logosolo from "../images/logo/eclypse_logo_solo.png";
import logo_twitter from "../images/logo/eclypse_twitter.png";
import logo_medium from "../images/logo/eclypse_medium.png";
import logo_github from "../images/logo/eclypse_github.png";
import logo_telegram from "../images/logo/eclypse_telegram.png";
import logo_discord from "../images/logo/eclypse_discord.png";
import logo_linkedin from "../images/logo/eclypse_linkedin.png";
import { FooterSocial, FooterTitle } from "./Component_bank";

export default function Header() {
  return (
    <div className="h-[300px] flex flex-row items-start w-full py-12 justify-between px-20 max-w-[1512px] gap-10 lg:gap-32 bg-black/20 z-40 mt-20">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-row gap-1 h-[50px] items-center">
          <Image src={logosolo} alt="logo Eclypse"/>
          <Link href="/" className="text-primary3 font-medium text-4xl">
          _ECLYPSE
        </Link>
        </div>
        <span className="pl-6">Unleashing the power of <br/> your liquidity.</span>
      </div>
      <div className="flex flex-col gap-2 text-lg ">
        <div className="flex flex-row h-[50px] items-center">
        <Link href="" className="text-primary3 text-2xl font-medium">
          _Ressources
        </Link>
        </div>
        <FooterTitle title="Github" href="https://github.com/eclypse-labs" target="blank"/>
        <FooterTitle title="Whitepaper" href="" target="blank"/>
      </div>
      <div className="flex flex-col gap-2 text-lg ">
        <div className="flex flex-row  h-[50px] items-center">
          <Link href="" className="text-primary3 text-2xl font-medium">
            _Socials
          </Link>
        </div>
        <div className="flex flex-row pl-6 gap-5">
          <FooterSocial
            logo={logo_twitter}
            href="https://twitter.com/EclypseProtocol"
            alt="twitter"
          />
          <FooterSocial
            logo={logo_github}
            href="https://github.com/eclypse-labs"
            alt="github"
          />
          <FooterSocial
            logo={logo_telegram}
            href="https://t.me/EclypseFinance"
            alt="telegram"
          />
        </div>
      </div>
    </div>
  );
}
