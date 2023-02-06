import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import logo from "../images/logo/eclypse_logo.svg";
import { HeaderTitle, HeaderButton } from "../components/Component_bank";

export default function Header() {
    return (
      <div className="h-[100px] flex flex-row items-center justify-between px-10 max-w-[1512px] z-50">
        <Image 
        src={logo}
        className="z-50"
        />
        <div className="flex flex-row items-center gap-10">
            <HeaderTitle
            message="Documentation"
            href="/"
            />
            <HeaderTitle
            message="Team"
            href="/"
            />
            <HeaderTitle
            message="Blog"
            href="/"
            />
            <HeaderTitle
            message="FAQ"
            href="/"
            />
            <HeaderButton
            message="Launch App"
            href="/"
            />
        </div>
      </div>
    )
  }
