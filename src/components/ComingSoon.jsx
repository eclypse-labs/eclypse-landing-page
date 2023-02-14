import React from "react";
import { HeroButton } from "./Component_bank";

export default function Header() {
  return (
    <div className="h-[500px] flex flex-row items-start py-12 justify-center items-center px-50 max-w-[1512px] gap-10">
      <div className="w-4/12 flex flex-col h-full gap-8 text-5xl pl-[10vw] justify-center items-start font-bold ">
        <div>
          Coming <span className="text-primary3">soon...</span>
        </div>
      </div>{" "}
    </div>
  );
}
