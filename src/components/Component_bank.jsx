import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function HeaderTitle(props) {
  return (
    <Link className="hover:text-primary3 duration-200 z-50" href={props.href}>
      {props.message}
    </Link>
  );
}

export function HeaderButton(props) {
  return (
    <Link
      className="text-black bg-white hover:bg-primary3 duration-300 py-2 px-7 rounded-full z-50"
      href={props.href}
    >
      {props.message}
    </Link>
  );
}

export function FooterTitle(props) {
  return (
    <Link className="hover:text-primary3 duration-200 z-50" href={props.href}>
      {props.title}
    </Link>
  );
}

export function HeroButton(props) {
  return (
    <Link
      className="text-white hover:text-black hover:bg-white bg-primary3 duration-300 py-2 px-5 rounded-full"
      href={props.href}
    >
      {props.message}
    </Link>
  );
}

export function FullyIntegratedCard(props) {
  return (
    <div className="flex flex-col items-center justify-start rounded-lg bg-primary3 bg-opacity-30 p-5 w-[420px] h-[235px] gap-3 text-center">
      <div className="text-xl font-bold">{props.title}</div>
      <div className="text-m text-gray-200">{props.text}</div>
    </div>
  );
}

export function FooterSocial(props) {
  return (
    <Link href={props.href}>
      <Image src={props.logo} />
    </Link>
  );
}
