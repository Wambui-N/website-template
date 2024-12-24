"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropDown from "./Dropdown";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="responsive absolute left-0 right-0 top-0 z-50 flex flex-row items-center justify-between py-4 px-0">
      <Link href="/" className="">
        <Image src="/WD Icon.svg" alt="Logo" width={45} height={45} />
      </Link>
      <div className="flex flex-row items-center gap-4">
        <Button
          variant="default"
          className="bg-black text-white hover:bg-black"
          title="Sign Up"
        />
        <DropDown />
      </div>
    </nav>
  );
};

export default Navbar;