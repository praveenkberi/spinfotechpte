import React from "react";
import { Link } from "react-router-dom"; 
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Footer component for the website.
 * 
 * This component displays the footer section of the website, featuring
 * company branding, contact information, and quick access links to
 * various pages and social media handles. It includes multiple sections:
 * 
 * - Branding and Address: Displays the company name, brief description,
 *   physical address, and contact number.
 * 
 * - Important Links: Provides navigation links to the Home, About, and
 *   Services pages.
 * 
 * - Additional Links: Contains links for Privacy Policy, Services, and
 *   About us.
 * 
 * - Social Links: Links to social media platforms like Instagram,
 *   Facebook, and LinkedIn.
 * 
 * The component is styled with Tailwind CSS classes for a responsive
 * design and smooth transitions.
 */

/******  6aae0766-436d-41ee-a2d6-e0fa2e5244d1  *******/
const Footer = () => {
  
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-cyan-500 to-cyan-400 selection:bg-cyan-200 selection:text-black">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                SP 
                <span className="inline-block font-bold text-primary"> INFOTECH</span>
              </a>
            </h1>
            <p className="">
            Designing cutting-edge digital solutions that future-proof global organizations and propel them ahead of the competition.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>17 LIMBOK TERRACE,</p>
            </div>
            <p>PARRY GREEN,</p>
  <p>SINGAPORE - 546181</p>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 76396-21877</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`} >
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to="/" className="text-white hover:underline ">
                      Home
                    </Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to="/about" className="text-white hover:underline ">
                      About
                    </Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to="/service" className="text-white hover:underline">
                    Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                     
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                     
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright SP INFOTECH PVT LTD
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;