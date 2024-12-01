"use client";

import React, { useState } from "react";
import { productiveList } from "@/lib/data";

const Productivity = () => {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div className="px-[10%]">
      <p>
        kerja<span className="text-[#07959c]">In</span> 101
      </p>
      <h1 className="font-semibold text-4xl">Sebuah kekuatan produktivitas</h1>
      <p className="w-full lg:w-1/2 text-xl my-3">
        Sederhana, fleksibel, dan efisien. Yang dibutuhkan hanyalah papan daftar
        dan kartu tugas untuk mendapatkan gambaran jelas tentang siapa yang
        melakukan apa dan apa yang perlu dilakukan. Lihat panduan kami untuk
        informasi lebih lanjut.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-6">
        <div className="flex flex-col justify-between py-2 leading-normal">
          {productiveList?.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer py-3 px-3 rounded-md ${
                index == itemIndex
                  ? "bg-white md:border-l-4 md:border-[#00c7e5]"
                  : ""
              }`}
              onClick={() => setItemIndex(index)}
            >
              <h5 className="text-base font-semibold tracking-tight">
                {item.title}
              </h5>
              <p className="font-normal text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <img
          src={`/productive_${itemIndex + 1}.jpg`}
          className="object-cover w-full rounded-t-lg h-auto"
          alt="productive"
        />
      </div>
    </div>
  );
};

export default Productivity;
