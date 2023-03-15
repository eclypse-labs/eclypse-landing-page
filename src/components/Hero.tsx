import React from "react";
import Image from "next/image";
import hero from "../images/illustrations/eclypse_hero.png";
import { HeroButton } from "./Component_bank";
import Hero3dScene from "./Hero3dScene";
import DesktopOnly from "./DesktopOnly";

export default function Hero() {
  return (
    <div className="md:h-screen flex flex-col items-center justify-around py-10 px-10 max-w-[1512px] -mt-[100px] z-0">
      <div className="flex flex-row  w-full h-full">
        <div className="w-4/12 flex flex-col h-full gap-8 text-5xl pl-[10vw] justify-center items-start font-bold ">
          <div>Collect Fees.</div>
          <div>
            Stay <span className="text-primary3">Liquid</span>
          </div>
          <div>Level up.</div>
        </div>
        <DesktopOnly className="flex items-center justify-center w-full">
            <Hero3dScene />
        </DesktopOnly>  
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-lg">
          Sign up for early access and exclusive updates from Eclypse. This
          website is still a work in progress so it may appear differently on
          your device.
        </div>
        <div>
          <HeroButton
            message="JOIN WAITLIST"
            href="https://yq4evf4qrme.typeform.com/to/StUSjVb1"
          />
        </div>
      </div>
    </div>
  );
}
