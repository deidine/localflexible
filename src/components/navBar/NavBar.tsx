"use client";
import { CarIcon } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white text-black relative">
      <Link href="#" className="flex items-center" prefetch={false}>
        <img className="w-16 h-16 md:w-12 md:h-12 sm:w-8 sm:h-8" src="/logo.png" alt="LocalFlexible" />
        <span className="sr-only">localFlexible</span>
      </Link>
      <nav className="hidden md:flex md:items-center md:gap-4">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Truck Parts
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Car Parts
        </Link>
        <Link href="#Services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
      </nav>
      {!isOpen &&  <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-black"
        aria-label="Toggle Navigation"
      >
      
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
}
      {isOpen && <button 
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 text-black"
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>}
      {isOpen && (
        <>
          <div 
            onClick={closeMenu}
            className="fixed inset-0 z-40"
          />
          <div className="fixed inset-0 bg-primary text-primary-foreground shadow-md bg-black w-1/2 h-screen  z-50">
  
            <nav className="flex flex-col items-center py-4">
              <Link href="#" className="text-lg font-medium py-2 hover:underline underline-offset-4" prefetch={false}>
                Truck Parts
              </Link>
              <Link href="#" className="text-lg font-medium py-2 hover:underline underline-offset-4" prefetch={false}>
                Car Parts
              </Link>
              <Link href="#Services" className="text-lg font-medium py-2 hover:underline underline-offset-4" prefetch={false}>
                Services
              </Link>
              <Link href="#" className="text-lg font-medium py-2 hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
