import { assets, serviceData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Services = ({isdarkMode}) => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.3}}
        className="text-center mb-2 text-lg font-Ovo">What i offer</motion.h4>
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className="text-center text-5xl font-Ovo">My Services</motion.h2>

      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className="text-center max-w-2xl mx-auto mb-10 mt-5 font-Ovo">
        I provide full-stack development services, specializing in React, Angular, and Node.js to build scalable, secure, and high-performance web apps. My expertise includes API development, database optimization, cloud deployment, and UI/UX design, ensuring seamless and efficient digital solutions.
      </motion.p>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.9}}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-10">
        {serviceData.map((service, index) => (
          <motion.div
            whileHover={{scale: 1.05}}
            className="border border-gray-400 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            key={index}
          >
            <Image src={service.icon} alt="" className="w-10"/>
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">{service.description}</p>
            {/* <a href={service.link} className="flex items-center gap-2 text-sm mt-5">
                Read more <Image src={assets.right_arrow} alt="arrow" className="w-4"/>
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
