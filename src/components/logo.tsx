import Image from "next/image";
import localFont from "next/font/local";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export const Logo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="hover:opacity-80 transition items-center gap-x-1 flex">
      <Image
        src="/logo.svg"
        className="size-8"
        alt="Logo"
        height={28}
        width={28}
        priority
      />
      <p
        className={cn(
          "text-2xl text-gray-800 pt-2 font-bold",
          headingFont.className
        )}
      >
        kerja<span className="text-[#07959c]">In</span>
      </p>
    </div>
  );
};
