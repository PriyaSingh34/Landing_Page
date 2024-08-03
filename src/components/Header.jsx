import React, { useState } from "react";
// import { Menu } from '@headlessui/react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="  text-black w-full">
      <div
        className="relative bg-white z-20 h-10 w-full flex
       justify-between items-center px-4 md:px-6 lg:px-10 py-9"
      >
        <div className="w-20 h-20 flex  items-center">
          <img className="w-20 h-20" src={logo} alt="" />
          <p className="text-xl font-semibold md:text-2xl">Techbrick</p>
        </div>
        <div className="md:flex md:gap-4 lg:gap-20 md:items-center">
          <div className="hidden lg:flex text-lg md:gap-6 lg:gap-12">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#process" className="hover:text-gray-400">
              Process
            </a>
            <a href="#works" className="hover:text-gray-400">
              Works
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#faqs" className="hover:text-gray-400">
              FAQs
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="hidden md:flex gap-4 text-lg">
            <button className="hidden md:block text-black hover:text-gray-400 bg-white cursor-pointer ">
              Signin
            </button>
            <button className="hidden md:block p-2 lg:p-3 bg-black text-white rounded-2xl">
              Contact Us
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6 " />
              ) : (
                <FaBars className="w-6 h-6 " />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          !isOpen ? "top-[-500px] " : "top-20"
        } lg:hidden absolute bg-white z-10 w-full transition-all duration-700`}
      >
        <a
          href="#home"
          className="block md:px-6 px-4 py-2 text-base font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          Home
        </a>
        <a
          href="#process"
          className="block md:px-6 px-4 py-2 text-base  font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          Process
        </a>
        <a
          href="#works"
          className="block md:px-6 px-4 py-2 text-base  font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          Works
        </a>
        <a
          href="#services"
          className="block md:px-6 px-4 py-2 text-base  font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          Services
        </a>
        <a
          href="#faqs"
          className="block md:px-6 px-4 py-2 text-base  font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          FAQs
        </a>
      </div>
    </header>
  );
}

export default Header;
