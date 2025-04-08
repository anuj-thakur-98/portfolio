import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {motion} from "motion/react";

const About = ({isdarkMode}) => {
  return (
    <motion.div id="about" 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
      className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
         initial={{y:-20,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.4,delay:0.2}}
         className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.4,delay:0.4}}
        className="text-center text-5xl font-Ovo">About me</motion.h2>

      <motion.div
        initial={{opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6}}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div 
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.4,delay:0.2}}
          className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.4,delay:0.6}}
          className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I'm a Full Stack Developer with 4+ years of experience, working with React, Angular, and Node.js to build fast and scalable web apps. I love solving problems, optimizing performance, and creating smooth user experiences. Whether it's frontend design or backend logic, I enjoy making things work seamlessly.
          </p>
          <motion.ul   
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}} 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
               <motion.li
                whileInView={{scale:1.05}}
                transition={{ duration: 0.2 }}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                          hover:bg-lightHover hover:-translate-y-1 duration-500 
                          hover:shadow-black dark:border-white  dark:hover:shadow-[5px_5px_0px_0px_lime] 
                          dark:hover:bg-darkHover/50'
             >
                <Image src={isdarkMode?iconDark:icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{y:20,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.4,delay:0.6}}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</motion.h4>
          <motion.ul 
             initial={{y:20,opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{duration:0.4,delay:0.8}}
             className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-7  xl:grid-cols-10 gap-6 max-w-2xl">
             {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{scale:1.05}}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
