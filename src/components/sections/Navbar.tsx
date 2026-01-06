"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { AnimatedThemeToggler } from "../ui/themeToggle";
export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Hero", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Features", link: "/#features" },
    { name: "Testimonials", link: "/#testimonials" },
    { name: "CTA", link: "/#cta" },
  ];

  return (
    <Navbar className="pt-4 top-0 overflow-visible backdrop-blur">
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="ml-auto relative z-50 -mr-4 flex items-center">
          <AnimatedThemeToggler className="px-5 rounded-full  hover:text-neutral-800 dark:hover:text-neutral-200 text-white transition-colors" />
        </div>

      </NavBody>



      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-neutral-600 dark:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
