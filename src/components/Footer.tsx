import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo/eclypse_logo2.svg";
import logo_twitter from "../images/logo/eclypse_twitter.png";
import logo_medium from "../images/logo/eclypse_medium.png";
import logo_github from "../images/logo/eclypse_github.png";
import logo_telegram from "../images/logo/eclypse_telegram.png";
import logo_discord from "../images/logo/eclypse_discord.png";
import logo_linkedin from "../images/logo/eclypse_linkedin.png";
import { FooterSocial, FooterTitle } from "./Component_bank";

export default function Header() {
  return (
    <div className="h-[300px] flex flex-row items-start w-full py-12 justify-start px-20 max-w-[1512px] gap-10">
      <div className="w-[480px] flex flex-col gap-6">
        <Image src={logo} className="" alt="Eclypse Logo"/>
        <span className="pl-6">Supercharge your liquidity.</span>
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
      <div className="flex flex-col gap-2 text-lg">
        <Link href="" className="text-primary3 text-2xl">
          Documentation
        </Link>
        <FooterTitle title="Github" href="https://github.com/eclypse-labs" />
        <FooterTitle title="Whitepaper" href="" />
      </div>
    </div>
  );
}
