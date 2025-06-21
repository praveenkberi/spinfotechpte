import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'; // <-- Import Link from React Router

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/", // use route path, not anchor
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
];

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "left-[-100%]"
        } fixed bottom-0 top-0 w-[65%] transition-all duration-300 shadow-sm pt-16 px-8 bg-white dark:bg-gray-900 z-50
            flex flex-col justify-between pb-4`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
          </div>
        </div>
        {/* Menu Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <Link
                    to={link}
                    className="mb-5 inline-block"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // optional scroll to top
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href="mailto:contact@spinfotech.com">
          <button className="btn-prmary">Get in Touch</button>
        </a>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
