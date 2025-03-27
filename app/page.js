'use client'
import { use, useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {

  const[isdarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(localStorage.theme === "dark" ||
       (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(false);
    }
  }
  ,[])
  useEffect(() => {
    if(isdarkMode){
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isdarkMode])

  return (
    <>
    <Navbar isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isdarkMode={isdarkMode}/>
    <About isdarkMode={isdarkMode}/>  
    <Services isdarkMode={isdarkMode}/>
    <Work isdarkMode={isdarkMode}/>
    <Contact isdarkMode={isdarkMode}/>
    <Footer isdarkMode={isdarkMode}/>
    </>
  );
}
