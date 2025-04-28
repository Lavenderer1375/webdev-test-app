"use client";

import Link from "next/link";
import { navTexts } from "./texts";
import { icons } from "@/constants/icons";
import { useState } from "react";

const navLinks = [
  { href: "/home", label: navTexts.home },
  { href: "/webDesign", label: navTexts.webDesign },
  { href: "/", label: navTexts.campaigns },
  { href: "/automation", label: navTexts.automation },
  { href: "/contentCreator", label: navTexts.contentCreator },
  { href: "/seo", label: navTexts.seo },
  { href: "/contactUs", label: navTexts.contactUs },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative flex items-center justify-between bg-white px-8 py-4">
      {/* Right - Logo */}
      <div className="text-lg font-semibold bg-gray-100 p-2 rounded-2xl hover:bg-gray-300 hover:cursor-pointer">
        <button>Logo</button>
      </div>

      {/* Center - Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-black">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Left - Icons */}
      <div className="flex items-center gap-4">
        {["profileCircle", "searchNormal"].map((iconKey) => (
          <button
            key={iconKey}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-100 hover:cursor-pointer"
          >
            {icons[iconKey]}
          </button>
        ))}
      </div>

      {/* Mobile - Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="absolute right-4 top-4 flex flex-col gap-1 md:hidden"
        aria-label="Toggle Menu"
      >
        <span className="block h-0.5 w-6 bg-gray-600" />
        <span className="block h-0.5 w-6 bg-gray-600" />
        <span className="block h-0.5 w-6 bg-gray-600" />
      </button>

      {/* Mobile - Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 bg-white p-6 text-base font-medium text-gray-700 shadow-md md:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
