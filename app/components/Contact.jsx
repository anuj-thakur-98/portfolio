import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaCode } from "react-icons/fa";


const Contact = ({isdarkMode}) => {
  return (
    <div id="contact" className="mt-10">
      <div className="text-center">
        <Image src={isdarkMode?assets.logo_dark:assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
        <motion.a
          href="https://linkedin.com/in/anuj-thakur-0a9250298"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-black-100 rounded-full shadow-[2px_2px_2px_2px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:bg-lime-300 transition duration-300  dark:hover:bg-darkHover/80  dark:border-none dark:shadow-[2px_2px_1px_1px_lime] dark:hover:shadow-[3px_3px_0px_0px_lime] dark:hover:border-lime-100"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin className="text-3xl" />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:anuj.thakur363798@gmail.com"
          className="p-4 border border-black-100 rounded-full shadow-[2px_2px_2px_2px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:bg-lime-300 transition duration-300  dark:hover:bg-darkHover/80  dark:border-none dark:shadow-[2px_2px_1px_1px_lime] dark:hover:shadow-[3px_3px_0px_0px_lime] dark:hover:border-lime-100"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope className="text-3xl" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/anuj-thakur-98/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-black-100 rounded-full shadow-[2px_2px_2px_2px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:bg-lime-300 transition duration-300  dark:hover:bg-darkHover/80  dark:border-none dark:shadow-[2px_2px_1px_1px_lime] dark:hover:shadow-[3px_3px_0px_0px_lime] dark:hover:border-lime-100"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub className="text-3xl" />
        </motion.a>
        <motion.a
          href="https://wa.me/8194974530"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-black-100 rounded-full shadow-[2px_2px_2px_2px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:bg-lime-300 transition duration-300  dark:hover:bg-darkHover/80  dark:border-none dark:shadow-[2px_2px_1px_1px_lime] dark:hover:shadow-[3px_3px_0px_0px_lime] dark:hover:border-lime-100"
          whileHover={{ scale: 1.1 }}
        >
          <FaWhatsapp className="text-3xl" />
        </motion.a>

        <motion.a
          href="https://leetcode.com/u/thakuranuj1998/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-black-100 rounded-full shadow-[2px_2px_2px_2px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:bg-lime-300 transition duration-300  dark:hover:bg-darkHover/80  dark:border-none dark:shadow-[2px_2px_1px_1px_lime] dark:hover:shadow-[3px_3px_0px_0px_lime] dark:hover:border-lime-100"
          whileHover={{ scale: 1.1 }}
        >
          <FaCode className="text-3xl" />
        </motion.a>
          {/* <Image src={isdarkMode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6" />
          <a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a> */}
        </div>
      </div>
    </div>
  );
};
export default Contact;
