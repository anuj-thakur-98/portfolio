import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Footer = ({isdarkMode}) => {
  return (
    <div className="mt-10">
      <div
        className="text-center flex flex-col items-center justify-center 
             border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Anuj Thakur. All rights reserved.</p>

      </div>
    </div>
  );
};
export default Footer;
