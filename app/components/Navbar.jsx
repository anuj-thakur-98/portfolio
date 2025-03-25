import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";

const Navbar = ({isdarkMode,setIsDarkMode}) => {
 const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0rem)'
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  };
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    })
  }
  , []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} className="w-full" alt="" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
        isScroll
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
          : ""
      }`}>
        <a href="#top">
          <Image
            src={isdarkMode?assets.logo_dark:assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll?"":"bg-white shadow-sm bg-opacity-50 dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Serdvices
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isdarkMode)} >
            <Image src={isdarkMode?assets.sun_icon:assets.moon_icon} className="w-6" alt="" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image src={isdarkMode?assets.arrow_icon_dark:assets.arrow_icon} className="w-3" alt=""></Image>
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}> 
            <Image src={isdarkMode?assets.menu_white:assets.menu_black} className="w-6" alt="" />
          </button>
        </div>
        {/* mobile menu */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-5 dark:bg-darkHover dark:text-white">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isdarkMode?assets.close_white:assets.close_black} className="w-5" alt="" />
          </div>
          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services" onClick={closeMenu}>
              Serdvices
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
