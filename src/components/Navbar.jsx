import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import Poke from "../assets/pokebola.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Metaverse Realty</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
              <a href={item.href} className="hover:text-orange-500 transition duration-200">
                {item.label}
              </a>
            </li>
            ))}
          </ul>
          <div className="flex flex-col items-center">
              <span className="text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a2 2 0 012-2H7v11a2 2 0 002 2h9a2 2 0 002-2v-11h4a2 2 0 012 2zM9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2z"
                  />
                </svg>
                123 Main Street, Anytown, CA
              </span>
              <span className="text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a2 2 0 012-2H7v11a2 2 0 002 2h9a2 2 0 002-2v-11h4a2 2 0 012 2zM9 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2z"
                  />
                </svg>
                (555) 555-5555
              </span>
            </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                <a href={item.href} className="hover:text-orange-500 transition duration-200">
                  {item.label}
                </a>
              </li>
              ))}
            </ul>
            <div className="flex flex-col items-center">
              <span className="text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a2 2 0 012-2H7v11a2 2 0 002 2h9a2 2 0 002-2v-11h4a2 2 0 012 2zM9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2z"
                  />
                </svg>
                123 Main Street, Anytown, CA
              </span>
              <span className="text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a2 2 0 012-2H7v11a2 2 0 002 2h9a2 2 0 002-2v-11h4a2 2 0 012 2zM9 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2z"
                  />
                </svg>
                (555) 555-5555
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
