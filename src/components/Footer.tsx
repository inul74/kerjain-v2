import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
          <span className="flex text-sm text-gray-500 sm:text-center">
            © 2024💖
            <Link href="/" className="hover:underline font-medium">
              kerja<span className="text-[#07959c]">In</span>
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li className="hover:underline me-4 md:me-6">About</li>
            <li className="hover:underline me-4 md:me-6">Privacy Policy</li>
            <li className="hover:underline me-4 md:me-6">Licensing</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
