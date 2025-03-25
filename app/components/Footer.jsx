import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = ({isdarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isdarkMode?assets.logo_dark:assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isdarkMode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6" />
          greatstackdev@gmail.com
        </div>
      </div>
      <div
        className="text-center sm:flex items-center justify-between 
                border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 William Mark. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://instagram.com/"
              className="greatstackdev"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/"
              className="greatstackdev"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/"
              className="greatstackdev"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
