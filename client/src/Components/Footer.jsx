import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" py-4 px-5 mt-20 border-t border-gray-700 pt-10 pb-6 text-center text-gray-300">
      {/* Heading */}
      <h2 className="scroll-animation text-3xl font-bold  mb-3 bg-gradient-to-r from-white to-[#979797] bg-clip-text text-transparent">
        Let’s Connect
      </h2>
      <p className="scroll-animation text-gray-400 text-sm max-w-xl mx-auto mb-8">
        Thanks for visiting! Connect with me on social media or send a message  I’ll get back soon!
      </p>

      {/* Social Icons */}
      <div className=" flex justify-center space-x-6 mb-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F34F1C] transition">
          <FaInstagram size={22} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F34F1C] transition">
          <FaLinkedin size={22} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F34F1C] transition">
          <FaXTwitter size={22} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F34F1C] transition">
          <FaGithub size={22} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F34F1C] transition">
          <FaFacebook size={22} />
        </a>
        <a href="https://wa.me/919037062976" target="_blank" rel="noopener noreferrer" className="hover:text-[#F34F1C] transition">
          <FaWhatsapp size={22} />
        </a>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-gray-500 mb-4">
        <p>adhilp3156@gmail.com | +91 9037062976</p>
      </div>

      {/* Footer Line */}
      <div className="text-xs text-gray-600 mt-6">
        © {new Date().getFullYear()} <span className="text-[#F34F1C] font-semibold">adhil</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
