import React from "react";
import Image from "next/image";
import hero from "../images/illustrations/eclypse_hero.png";
import { HeroButton } from "./Component_bank";
import Hero3dScene from "./Hero3dScene";
import DesktopOnly from "./DesktopOnly";

export default function Hero() {
  return (
    <div className="md:h-full flex flex-col items-center justify-around gap-0 pb-10 py-10 px-10 max-w-[1512px] z-0 w-full">
      <div className="flex flex-row py-10 items-center justify-center w-full h-full max-w-[1160px] relative overflow-visible">
        <div className="hidden md:flex flex-col h-full w-[40%] gap-4 lg:gap-6 text-6xl justify-center items-start font-bold">
          <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center md:text-4xl lg:text-5xl xl:text-6xl">
            <span>Collect Fees.</span>
            <span>Stay <span className="text-primary6">Liquid</span></span>
            <span>Level up.</span>  
          </div>
          <div className="md:text-sm lg:text-base xl:text-lg font-medium">
          Sign up for early access and exclusive updates from Eclypse. This
          website is still a work in progress so it may appear differently on
          your device.
          </div>
          <div className="text-lg font-medium">
            <HeroButton
            target="blank"
            text="SIGN UP"
            href="https://yq4evf4qrme.typeform.com/to/StUSjVb1?typeform-source=eclypse.finance"/>
          </div>
        </div>
        <div className="flex items-center justify-center w-[60%] h-full relative overflow-visible">
          <DesktopOnly className="flex items-center w-[200px] md:w-[500px] lg:w-[600px] xl:w-[800px] h-[400px] lg:h-[500px] xl:h-[600px] justify-center absolute overflow-visible z-50">
              <Hero3dScene/>
          </DesktopOnly>  
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-4 items-center font-extrabold w-full justify-center md:h-[90px] lg:h-[173px] max-w-[1160px] bg-white/10 rounded-3xl text-primary6">
        <span className="md:text-4xl lg:text-7xl xl:text-8xl">8B$</span><span className="md:mt-3 md:text-base lg:mt-8 xl:text-xl xl:mt-14">tvl</span>
        <span className="md:text-4xl lg:text-7xl xl:text-8xl">5</span><span className="md:mt-3 md:text-base lg:mt-8 xl:text-xl xl:mt-14">networks</span>
        <span className="md:text-4xl lg:text-7xl xl:text-8xl">11</span><span className="md:mt-3 md:text-base lg:mt-8 xl:text-xl xl:mt-14">markets</span>
        <span className="md:text-4xl lg:text-7xl xl:text-8xl">136M$</span><span className="md:mt-3 md:text-base lg:mt-8 xl:text-xl xl:mt-14">treasury</span>
      <div>
        </div>
      </div>
    </div>
  );
}
