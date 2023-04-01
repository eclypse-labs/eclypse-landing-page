import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo/eclypse_logo2.svg";
import logosolo from "../images/logo/eclypse_logo_solo.svg";
import twitter from "../images/logo/twitter.svg";
import telegram from "../images/logo/telegram.svg";
import github from "../images/logo/github.svg";
import linkedin from "../images/logo/linkedin.svg";
import discord from "../images/logo/discord.svg";
import medium from "../images/logo/medium.svg";

import { FooterSocial, FooterTitle } from "./Component_bank";

export default function Header() {
  return (
    <div className="md:h-[300px] flex flex-col md:flex-row items-center md:items-start w-full py-12 justify-start md:justify-between px-10 md:px-20 max-w-[1512px] gap-10 lg:gap-32 bg-black/20 z-40 mt-20">
      <div className="flex flex-col gap-0 md:gap-6 w-full md:w-fit">
        <div className="flex flex-col md:flex-row gap-1 md:h-[50px] items-center">
          <Image src={logosolo} alt="logo Eclypse" className="w-40 md:w-14" />
          <Link
            href="/"
            className="text-gray-200 md:text-primary3 font-semibold text-2xl md:text-4xl"
          >
            _ECLYPSE
          </Link>
        </div>
        <span className="md:pl-2 text-sm md:text-base text-center md:text-left">
          The liquidity layer for LPs.
        </span>
      </div>
      <div className="flex flex-col gap-2 text-lg text-center md:text-left">
        <div className="flex flex-col md:flex-row md:h-[50px] items-center">
          <Link href="" className="text-primary3 text-2xl font-medium">
            _Ressources
          </Link>
        </div>
        <FooterTitle
          title="Github"
          href="https://github.com/eclypse-labs"
          target="blank"
        />
        <FooterTitle title="Whitepaper" href="" target="blank" />
      </div>
      <div className="flex flex-col gap-2 text-lg text-center md:text-left">
        <div className="flex flex-col md:flex-row md:h-[50px] items-center">
          <Link href="" className="text-primary3 text-2xl font-medium">
            _Socials
          </Link>
        </div>
        <div className="flex flex-wrap md:flex-row pl-0 gap-5">
          <FooterSocial
            logo={twitter}
            href="https://twitter.com/EclypseProtocol"
            alt="twitter"
          />
          <FooterSocial
            logo={github}
            href="https://github.com/eclypse-labs"
            alt="github"
          />
          <FooterSocial
            logo={telegram}
            href="https://t.me/EclypseFinance"
            alt="telegram"
          />
        </div>
      </div>
    </div>
  );
}
