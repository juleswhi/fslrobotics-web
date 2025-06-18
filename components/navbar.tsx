"use client";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  Logo,
  MenuBurger
} from "@/components/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return(
    <>
      <nav className="sticky bg-black w-full top-0 inset-x-0 border-b border-white z-20">
        <div className="flex justify-between max-w-screen-md m-auto text-white items-center mx-auto p-4">

          <div className="">
            <Logo className="justify-start"/>
          </div>

          <ul className="hidden sm:flex gap-4 justify-center w-full">
            {siteConfig.navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white hover:text-red-500">{item.label}</a>
              </li>
            ))}
          </ul>

          <div>
            <a className="hidden sm:flex" href={siteConfig.links.github}><GithubIcon size={29}/></a>
            <button type="button" className="flex sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <span><MenuBurger isOpen={menuOpen}/></span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("w-full h-screen bg-black md:hidden pt-24 z-10", menuOpen ? "fixed" : "hidden")}>
        <ul className="flex flex-col gap-4 items-center">
          {siteConfig.navItems.map((item) => (
            <li
            key={item.label}
            onClick={() => {
              setMenuOpen(!menuOpen);
              router.push(item.href);
            }}
            >
              <p className="text-white active:text-red-500">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
