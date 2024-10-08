"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollPos = window.addEventListener("scroll", () => {
      setHeader(window.scrollY > 50);
    });

    return () => {
      window.removeEventListener("scroll", scrollPos);
    };
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#f9fcfd]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerClassName="hidden md:flex gap-x-8 items-center"
              linkClassName="relative hover:text-primary transition-all"
              underlineClassName="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
