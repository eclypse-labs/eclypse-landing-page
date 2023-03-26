import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HrefAndMsgProps{
  href: string;
  message: string;
}
export function HeaderTitle(props : HrefAndMsgProps) {
  return (
    <Link className="hover:text-primary3 duration-200 z-50" href={props.href}>
      {props.message}
    </Link>
  );
}

interface HeaderButton{
  href: string;
  message: string;
}
export function HeaderButton(props : HrefAndMsgProps) {
  return (
    <Link
      className="text-black bg-white hover:bg-primary3 duration-300 py-2 px-7 rounded-full z-50"
      href={props.href}
    >
      {props.message}
    </Link>
  );
}

interface hrefAndTitleProps{
  href: string;
  title: string;
}
export function FooterTitle(props: hrefAndTitleProps) {
  return (
    <Link className="hover:text-primary3 duration-200 z-50" href={props.href}>
      {props.title}
    </Link>
  );
}

interface HeroButton{
  href: string;
  title: string;
}


export function HeroButton(props: HrefAndMsgProps) {
  return (
    <Link
      className="text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white bg-primary3 duration-300 px-6 py-2 rounded-xl"
      href={props.href}
    >
      {props.message}
    </Link>
  );
}

interface FullyIntegratedCardProps{
  title: string;
  text: string;
}

export function FullyIntegratedCard(props : FullyIntegratedCardProps) {
  return (
    <div className="flex flex-col items-center justify-start rounded-lg bg-primary3 bg-opacity-30 p-5 w-[420px] h-full gap-3 text-center">
      <div className="text-xl font-bold">{props.title}</div>
      <div className="text-m text-gray-700 dark:text-gray-200">{props.text}</div>
    </div>
  );
}

interface FooterSocialProps{
  href: string;
  logo: StaticImageData;
  alt: string;
}

export function FooterSocial(props: FooterSocialProps) {
  return (
    <Link href={props.href}>
      <Image src={props.logo} alt={props.alt}/>
    </Link>
  );
}
