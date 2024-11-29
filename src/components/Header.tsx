import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="px-[10%] py-16 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-teal-700 to-blue-500">
      <div className="text-white p-2">
        <h1 className="font-extrabold text-5xl">
          Kerjain menyatukan semua tugas, rekan satu tim, dan alat Anda.
        </h1>
        <p className="text-lg mt-2 leading-8">
          Sederhana, fleksibel, dan efisien. Yang diperlukan hanyalah papan
          daftar tugas, dan kartu untuk mendapatkan gambaran jelas tentang siapa
          yang melakukan apa dan apa yang perlu dilakukan.
        </p>
        <h3 className="text-xl font-semibold mt-6">
          APA YANG ANDA DAPATKAN DALAM PAKET GRATIS:
        </h3>
        <ul className="my-2 leading-6">
          <li>Kartu tidak terbatas</li>
          <li>Tidak ada batasan peningkatan per tugas</li>
        </ul>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="email"
            autoComplete="email"
          />
          <Button type="submit" className="bg-blue-700 text-white">
            Daftar - gratis!
          </Button>
        </div>
      </div>
      <div>
        <img src="/header_img.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
