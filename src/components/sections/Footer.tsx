"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className="w-full flex justify-center">
      <div
        className={cn(
          `
          w-[90%] lg:w-[65%]
          rounded-t-xl
          border border-b-0
          border-gray-200 dark:border-gray-800
          backdrop-blur-md
          px-6 py-12
          flex flex-col items-center
          transition-colors duration-500
          `,
          className
        )}
      >
        {/* Logo */}
        <img src="/logo.svg" alt="Logo" className="h-10 mb-6" />

        {/* Social Icons */}
        <div className="flex gap-4">
          <Social href="https://x.com/KomalKumawat112">
            <FaTwitter className="text-gray-500" size={20}/>
          </Social>
          <Social href="https://github.com/komal-kumawat">
            <FaGithub  className="text-gray-500" size={20}/>
          </Social>
          <Social href="https://www.linkedin.com/in/komal-kumawat-7032662a0/">
            <FaLinkedin  className="text-gray-500"size={20}/>
          </Social>
          <Social href="https://instagram.com">
            <FaInstagram className="text-gray-500 " size={22}/>
          </Social>
        </div>

        {/* Divider */}
        <div className="mt-10 w-[70%] border-t border-gray-200 dark:border-gray-800" />

        {/* Copyright */}
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          © 2026 KOMAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const Social = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-2 rounded-md
      border border-gray-200 dark:border-gray-700
      text-gray-800 dark:text-gray-300
      hover:text-black dark:hover:text-white
      transition-colors duration-200
    "
  >
    {children}
  </a>
);
