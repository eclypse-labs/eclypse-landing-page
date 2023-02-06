import React from "react";
import Image from 'next/image'
import Link from 'next/link'
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
      <div className="h-[300px] flex flex-row items-start py-12 justify-start px-20 max-w-[1512px] gap-10">
        <div className="w-[480px] flex flex-col gap-6">
          <Image 
          src={logo}
          className=""
          />
          <span className="pl-6">Unleashing the power of your liquidity.</span>
          <div className="flex flex-row pl-6 gap-5">
            <FooterSocial
            logo={logo_twitter}
            href=""/>
            <FooterSocial
            logo={logo_medium}
            href=""/>
            <FooterSocial
            logo={logo_github}
            href=""/>
            <FooterSocial
            logo={logo_telegram}
            href=""/>
            <FooterSocial
            logo={logo_discord}
            href=""/>
            <FooterSocial
            logo={logo_linkedin}
            href=""/>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <Link href="" className="text-primary3 text-2xl">Documentation</Link>
          <FooterTitle title="Developers" href=""/>
          <FooterTitle title="Github" href=""/>
          <FooterTitle title="Whitepaper" href=""/>
          <FooterTitle title="Branding" href=""/>
        </div>
      </div>
    )
  }
