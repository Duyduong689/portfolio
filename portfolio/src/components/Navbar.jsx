import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className=" text-3xl text-white">DuyDev</span>
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/duyduong3659/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Duyduong689">
          <FaGithub />
        </a>
        {/* <FaInstagram /> */}
        {/* <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
};

export default Navbar;
