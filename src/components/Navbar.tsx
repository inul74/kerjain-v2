"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>

        <Link
          href="/login"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
