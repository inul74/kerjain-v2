"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { Logo } from "./logo";

const Navbar = () => {
  const { status } = useSession();

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>

        {status !== "authenticated" ? (
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in
          </Link>
        ) : (
          <div className="flex gap-6">
            <Link
              href="/organizations"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Organizations
            </Link>
            <div
              onClick={(event) => {
                event.preventDefault();
                signOut();
              }}
              className="font-semibold text-sm leading-6 cursor-pointer"
            >
              Logout
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
