import React from "react";
import Image from "next/image";
import hero from "../images/illustrations/eclypse_hero.png";
import { HeroButton } from "./Component_bank";
import Hero3dScene from "./Hero3dScene";
import DesktopOnly from "./DesktopOnly";

export default function Hero() {
  return (
    <div className="md:h-screen flex flex-col items-center justify-around pb-10 px-10 max-w-[1512px] z-0">
      <div className="flex flex-row items-center justify-center w-full h-full">
        <div className="hidden md:flex flex-wrap flex-col h-full w-[35%] gap-8 text-5xl pl-[10vw] justify-center items-start font-bold ">
          <div>
            Collect Fees.
          </div>
          <div>
            Stay <span className="text-primary3">Liquid</span>
          </div>
          <div>
            Level up.
            </div>
        </div>
        <div className="flex items-center justify-center w-[65%]">
          <DesktopOnly className="flex items-center w-full h-[400px] lg:h-[600px] justify-center">
              <Hero3dScene/>
          </DesktopOnly>  
        </div>
      </div>
      <div className="flex flex-wrap flex-col gap-4 items-center w-full justify-center">
        <div className="text-lg w-[80%] md:w-full text-center">
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
