"use client";

import Image from "next/image";
import UnitedLogo from "@/assets/icons/united_logo-removebg-preview.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Upcoming Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={UnitedLogo}
                className="h-9 w-auto"
                width={32}
                height={32}
                alt="United Hearts Logo"
              />
              <span className="self-center uppercase text-2xl font-bold whitespace-nowrap">
                United
              </span>
              <span className="font-bold text-xl lobster-regular">Hearts</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 bg-stone-200 rounded-full inline-flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <button className="bg-green-700 h-11 px-6 rounded-xl text-white border border-green-700 uppercase font-bold hidden md:inline-flex items-center">
              Donated now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
