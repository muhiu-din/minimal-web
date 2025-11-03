"use client";

import React from "react";
import Image from "next/image";
import { SiSpotify, SiLyft, SiHbo, SiAmazon } from "react-icons/si";


export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#ECF6FF] via-[#F5FAFF] to-[#DFF3F7]" />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <span className="absolute top-16 left-[52%] h-3 w-3 rounded-full bg-[#E9C657] opacity-80" />
        <span className="absolute top-10 right-[18%] h-3 w-3 rounded-full bg-[#B78BFF] opacity-80" />
        <span className="absolute bottom-40 left-[6%] h-2 w-2 rounded-full bg-[#A6D8FF] opacity-70" />
      </div>

      {/* Content container */}
       <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-12 pt-12 pb-28 lg:pt-16 lg:pb-36">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 xl:gap-16">
        {/* Left Text Block */}
        <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8">
          <h1 className="font-extrabold tracking-tight leading-tight">
            <span className="block text-[28px] sm:text-[32px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] text-[#0A0A0A]">
              Relocate To Sweden
            </span>
            <span className="block text-[32px] sm:text-[36px] md:text-[42px] xl:text-[48px] 2xl:text-[54px] text-[#2F7DF7]">
              With an Expert Advise
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-relaxed text-[#5F6B7A]">
            We provide comprehensive relocation and immigration support for
            individuals, employees, and companies—covering residence permits,
            housing, school placements, and integration—all seamlessly managed
            through our secure web and mobile platform across Sweden, Denmark,
            and the wider Nordic region.
          </p>

          <div className="mt-8 flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-5">
            <button className="px-5 py-3 rounded-lg bg-[#0B0B0B] text-white text-[12px] sm:text-[15px] font-semibold shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20">
              Our Services
            </button>
            <button className="px-5 py-3 rounded-lg bg-[#0B0B0B] text-white text-[12px] sm:text-[15px] font-semibold shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right Media Card */}
        <div className="lg:col-span-5 h-full">
          <div className="relative rounded-2xl backdrop-blur-[2px] overflow-hidden p-0.5 bg-linear-to-b from-[#f7f7f7]/30 to-transparent">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop"
                alt="Team planning session"
                width={1380}
                height={820}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Play Button */}
              <button
                aria-label="Play"
                className="absolute inset-0 m-auto flex h-14 w-14 rounded-full bg-white/90 shadow-md items-center justify-center hover:bg-white transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-[#2F7DF7]"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Brand Strip */}
            <div className="absolute bottom-0 w-full flex flex-wrap justify-center items-center gap-2.5 sm:gap-5 md:gap-7 px-1 sm:px-4 md:px-10 py-3 sm:py-4 bg-linear-to-t from-black/50 via-black/20 to-transparent">

  {/* IBM */}
  <div className="shrink-0">
    <Image
      src="/images/ibm.png"
      alt="IBM"
      width={30}  
      height={32}
      className="invert brightness-200 opacity-90 h-6 sm:h-8 md:h-8 object-contain"
    />
  </div>

  {/* Lyft */}
  <SiLyft className="text-white opacity-90 w-7 h-4 sm:w-10 sm:h-6 md:w-6 md:h-7 shrink-0" />

  {/* Spotify */}
  <div className="flex items-center gap-1 sm:gap-2 opacity-90 shrink-0">
    <SiSpotify className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-5  md:h-6" />
    <span className="font-semibold text-white text-[11px] sm:text-[12px] md:text-[12px] tracking-tight">
      Spotify
    </span>
  </div>

  {/* Netflix */}
  <span className="font-bold text-white opacity-90 text-[12px] sm:text-[14px] md:text-[12px] tracking-tight shrink-0">
    Netflix
  </span>

  {/* HBO */}
  <SiHbo className="text-white opacity-90 w-8 h-5 sm:w-10 sm:h-6 md:w-6  md:h-6 shrink-0" />

  {/* Amazon */}
  <SiAmazon className="text-white opacity-90 w-8 h-5 sm:w-10 sm:h-6 md:w-6 md:h-6 shrink-0" />
</div>

          </div>
        </div>
      </div>
    </div>

      {/* Wave curve at bottom */}
     <div className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10">
    <svg
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className="block h-20 sm:h-[90px] md:h-[100px] w-full"
    >
      {/* The inverted "U" or Parabola shape */}
      <path
        /*           M0,40: Start at (0, 40) - the top-left corner is at 40px down. This controls the height.
          Q720,110: The control point is at the bottom edge (110) in the center (720). This pulls the curve down.
          1440,40: End at (1440, 40). 
          L1440,110 L0,110 Z: Draws the straight lines to close the shape at the bottom.
        */
        d="M0,40 Q720,110 1440,40 L1440,110 L0,110 Z"
        fill="#FFFF" 
      />
    </svg>
</div>
    </section>
  );
}
