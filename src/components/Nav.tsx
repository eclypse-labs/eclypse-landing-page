import DesktopOnly from './DesktopOnly';
import eclypse_logo from "../images/logo/eclypse_logo.png";
import { HeroButton } from "./Component_bank";
import MobileOnly from './MobileOnly';
import Image from "next/image";
import { useState } from 'react'

export default function Burger () {
    const [show, setShow] = useState(false)

    return(
        <div>
                <MobileOnly>
                    <button data-collapse-toggle="navbar-hamburger" type="button" onClick={() => setShow(!show)} className="absolute flex items-center justify-center top-0 z-50 h-[100px] w-[100px] right-0 p-4 rounded-sm text-sm text-primary6 text-opacity-50" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-20 h-20" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    {show && <div className="w-screen h-screen absolute top-0 right-0 duration-300" id="navbar-hamburger">
                        <ul className="flex flex-col h-full items-center justify-center p-0 mt-0 pt-[100px] z-10  rounded-sm  md:flex-row md:text-sm md:font-medium bg-gray-800/80 filter backdrop-blur-md ">
                        <li>
                        <a href="#" target="blank" rel="noopener" className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Documentations</a>
                        </li>
                        <li>
                        <a href="https://github.com/eclypse-labs" target="blank" rel="noopener" className="block mt-2 py-2 pl-3 pr-4 rounded md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">GitHub</a>
                        </li>  
                        <li>
                        <div className="block mt-2 py-2 pl-3 pr-4 rounded  md:p-0 text-gray-400 md:hover:text-white hover:text-white md:hover:bg-transparent">
                        <HeroButton text="Sign Up" href="https://yq4evf4qrme.typeform.com/to/StUSjVb1" target="blank"/>
                        </div>
                        </li> 
                        </ul>
                    </div>}  
                </MobileOnly>
                </div>
    );
}