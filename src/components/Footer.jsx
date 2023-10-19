import React from "react";
import { github, linkedin } from "../assets"; // Import your SVG icons here

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white py-10 sm: px-5">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg font-semibold">Arb Rugova</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/arbrugova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={github}
              className="w-[65px] h-[65px] sm: w-[45px] h-[45px] "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arb-rugova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={linkedin}
              className="w-[65px] h-[65px] sm: w-[45px] h-[45px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
