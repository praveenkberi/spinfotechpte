import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/", 
  }, 
  {
    id: 2,
    name: "About",
    link: "/about", 
  }, 
  {
    id: 3,
    name: "Service",
    link: "/service",
  },
  //{
  //  id: 4,
  //  name: "Projects",
  //  link: "/projects",
  //},
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav className="bg-white w-full fixed top-0 flex justify-center shadow-md z-50">
        <div className="container mx-auto py-3 md:py-2">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-9" />
                <span className="text-2xl sm:text-3xl font-semibold">
                  SP INFOTECH
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <Link to={link}
                      onClick={() => {
                        if (isHome) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                        className="text-lg font-medium hover:text-blue-800 py-2
                            hover:border-b-2 hover:border-blue-800
                            transition-all duration-300"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
                <a href="mailto:contact@spinfotech.com">
                  <button className="btn-prmary">Get in Touch</button>
                </a>
              </ul>
            </div>
            {/* Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl" />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-2xl" />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu Section */}
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
