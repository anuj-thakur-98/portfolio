import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = ({isdarkMode}) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mb-10 mt-5 font-Ovo">
        I am a Frontend Developer with over 10 years of experience in the
        industry. I specialize in creating user-friendly and visually appealing
        websites and applications. My expertise includes HTML, CSS, JavaScript,
        React, and Next.js. I am passionate about delivering high-quality work
        that meets the needs of my clients.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-10">
        {serviceData.map((service, index) => (
          <div
            className="border border-gray-400 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            key={index}
          >
            <Image src={service.icon} alt="" className="w-10"/>
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">{service.description}</p>
            <a href={service.link} className="flex items-center gap-2 text-sm mt-5">
                Read more <Image src={assets.right_arrow} alt="arrow" className="w-4"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
