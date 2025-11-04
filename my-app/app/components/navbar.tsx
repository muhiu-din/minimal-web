"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(): any {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [houseOpen, setHouseOpen] = useState(false);
  const [assesmentOpen, setAssesmentOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const houseRef = useRef<HTMLDivElement | null>(null);
  const assesmentRef = useRef<HTMLDivElement | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);

  // mobile states (kept separate from desktop dropdowns)
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHouseOpen, setMobileHouseOpen] = useState(false);
  const [mobileAssesmentOpen, setMobileAssesmentOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (houseRef.current && !houseRef.current.contains(e.target as Node)) {
        setHouseOpen(false);
      }
      if (assesmentRef.current && !assesmentRef.current.contains(e.target as Node)) {
        setAssesmentOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // close on escape (also closes mobile)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setHouseOpen(false);
        setAssesmentOpen(false);
        setLangOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="w-full bg-[#6cd9b50d] ">
      {/* top thin info row */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex hidden items-center justify-between text-sm text-gray-500 py-2">
          <div className="flex items-center gap-4">
            <span>Mon - Fri 10.00 - 18.00</span>
            <span className="h-4 border-l border-gray-200" />
            <span>Amiralsgatan 86E 214 37 Malmö, Sweden</span>
          </div>

          <div className="flex items-center gap-3">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((s) => !s)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                {/* small UK flag svg */}
                <svg width="20" height="14" viewBox="0 0 60 30" className="block" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <clipPath id="t">
                    <path d="M0 0v30h60V0z" />
                  </clipPath>
                  <g clipPath="url(#t)">
                    <path d="M0 0v30h60V0z" fill="#012169" />
                    <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
                    <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
                  </g>
                </svg>
                <span className="text-sm">English</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    <li>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-50">English</button>
                    </li>
                    <li>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-50">Svenska</button>
                    </li>
                    <li>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-50">اردو</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* main navigation row */}
      <div className=" mx-auto px-2 pr-7 sm:px-4 sm:pr-11 lg:px-8 lg:pr-15">
        <div className="flex items-center justify-between py-4">
          <div className="flex justify-between items-center  w-full">
            {/* logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image className="2xl:h-20 2xl:w-70" src="/images/logo.png" alt="Sweden Relocators" width={200} height={80} />
              </Link>
              <span className="sr-only">Sweden Relocators</span>
            </div>

            {/* nav (desktop) */}
            <nav className="hidden text-black lg:flex 2xl:text-xl items-center gap-6 text-sm font-semibold">
              <Link href="/new">New in Sweden</Link>

              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-2 hover:underline"
                >
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 p-2 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                    <ul >
                      <li className="py-1 hover:bg-gray-100">
                        <Link href="#">Relocation</Link>
                      </li>
                      <li className="py-1  hover:bg-gray-100">
                        <Link href="#">Housing</Link>
                      </li>
                      <li className="py-1 hover:bg-gray-100">
                        <Link href="#">Legal Assistance</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link href="/about">About us</Link>

              <div ref={houseRef} className="relative">
                <button
                  onClick={() => setHouseOpen((s) => !s)}
                  aria-expanded={houseOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-2 hover:underline"
                >
                  Housing
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transform ${houseOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {houseOpen && (
                  <div className="absolute left-0 mt-2 p-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                    <ul >
                      <li className="py-1 hover:bg-gray-100"><Link href="#">Housing 1</Link></li>
                      <li className="py-1 hover:bg-gray-100"><Link href="#">Housing 2</Link></li>
                      <li className="py-1 hover:bg-gray-100"><Link href="#">Housing 3</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              <div ref={assesmentRef} className="relative">
                <button
                  onClick={() => setAssesmentOpen((s) => !s)}
                  aria-expanded={assesmentOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-2 hover:underline"
                >
                  Assessment
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transform ${assesmentOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {assesmentOpen && (
                  <div className="absolute p-2 left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                    <ul >
                      <li className="py-1 hover:bg-gray-100"><Link href="#">Assesment 1</Link></li>
                      <li className="py-1 hover:bg-gray-100"><Link href="#">Assesment 2</Link></li>
                      <li className="py-1 hover:bg-gray-100"><Link href="#">Assesment 3</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              <Link href="/contact">Contact us</Link>
            </nav>

            {/* Book appointment and login div (desktop) */}
            <div className="hidden lg:flex flex-row gap-2">
              <Link href="#"><div className="px-4 py-2 border rounded-lg text-sm 2xl:text-xl font-medium hover:bg-gray-100">Book an Appointment</div></Link>
              <Link href="#"><div className="px-4 py-2 bg-black hover:bg-gray-600 2xl:text-xl text-white rounded-lg text-sm font-medium">Login</div></Link>
            </div>

            {/* MOBILE: hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-md border border-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* right side on desktop is empty since top had language/book/login */}
          <div className="lg:hidden" />
        </div>
      </div>

      {/* ---------------------- MOBILE SIDEBAR (from RIGHT) ---------------------- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* panel: slide in from right */}
          <aside
            className="absolute inset-y-0 right-0 w-80 max-w-full bg-white shadow-xl transform transition-transform duration-500 ease-in-out"
            style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
            aria-modal="true"
            role="dialog"
          >
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Image src="/images/logo.jpg" alt="logo" width={130} height={52} />
                </Link>
              </div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="px-4 space-y-1">
                      <div className="flex flex-row px-3 py-3   items-center gap-4">
            <span className="text-[8px]">Mon - Fri 10.00 - 18.00</span>
            <span className="h-4 border-l border-gray-200" />
            <span className="text-[8px]">Amiralsgatan 86E 214 37 Malmö, Sweden</span>
          </div>
              <Link href="/new"><div className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50">New in Sweden</div></Link>

              {/* Services accordion (mobile) */}
           
             
              <div>
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transform ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-1 space-y-1 pl-4">
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Relocation</div></Link>
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Housing</div></Link>
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Legal Assistance</div></Link>
                  </div>
                )}
              </div>

              <Link href="/about"><div className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50">About us</div></Link>

              {/* Housing accordion (mobile) */}
              <div>
                <button
                  onClick={() => setMobileHouseOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
                  aria-expanded={mobileHouseOpen}
                >
                  <span>Housing</span>
                  <svg className={`w-4 h-4 transform ${mobileHouseOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileHouseOpen && (
                  <div className="mt-1 space-y-1 pl-4">
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Housing 1</div></Link>
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Housing 2</div></Link>
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Housing 3</div></Link>
                  </div>
                )}
              </div>

              {/* Assessment accordion (mobile) */}
              <div>
                <button
                  onClick={() => setMobileAssesmentOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
                  aria-expanded={mobileAssesmentOpen}
                >
                  <span>Assessment</span>
                  <svg className={`w-4 h-4 transform ${mobileAssesmentOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileAssesmentOpen && (
                  <div className="mt-1 space-y-1 pl-4">
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Assesment 1</div></Link>
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Assesment 2</div></Link>
                    <Link href="#"><div className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50">Assesment 3</div></Link>
                  </div>
                )}
              </div>

              <Link href="/contact"><div className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50">Contact us</div></Link>
                {/* Language accordion (mobile) */}
              <div>
                <button
                  onClick={() => setMobileLangOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
                  aria-expanded={mobileLangOpen}
                >
                  <span>Language</span>
                  <svg className={`w-4 h-4 transform ${mobileLangOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileLangOpen && (
                  <div className="mt-1 space-y-1 pl-4">
                    <button className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50">English</button>
                    <button className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50">Svenska</button>
                    <button className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50">اردو</button>
                  </div>
                )}
              </div>

             

              {/* Book & Login buttons (mobile) */}
              <div className="pt-3 border-t border-gray-100">
                <Link href="#"><div className="block w-full text-center px-4 py-2 mb-2 border rounded-md text-sm font-medium hover:bg-gray-50">Book an Appointment</div></Link>
                <Link href="#"><div className="block w-full text-center px-4 py-2 bg-black text-white rounded-md text-sm font-medium">Login</div></Link>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
