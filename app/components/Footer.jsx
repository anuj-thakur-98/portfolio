import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Footer = ({isdarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isdarkMode?assets.logo_dark:assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
        <motion.a
          href="https://linkedin.com/in/YOUR_PROFILE"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin className="text-3xl" />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:your.email@example.com"
          className="p-4 bg-gray-800 rounded-full hover:bg-red-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope className="text-3xl" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub className="text-3xl" />
        </motion.a>
          {/* <Image src={isdarkMode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6" />
          <a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a> */}
        </div>
      </div>
      <div
        className="text-center sm:flex items-center justify-between 
                border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Anuj Thakur. All rights reserved.</p>

      </div>
    </div>
  );
};
export default Footer;
