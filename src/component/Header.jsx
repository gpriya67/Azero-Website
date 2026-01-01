import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Work", path: "work" },
    { id: 4, name: "Carrier", path: "carrier" },
    { id: 5, name: "Services", path: "service" },
  ];

  const linkClass = (id) =>
    active === id
      ? "bg-gradient-to-r from-[#FB1E01] to-white bg-clip-text text-transparent"
      : "hover:border-b-2 hover:border-white transition";

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="px-6 lg:px-20 flex justify-between items-center py-3">
        <div className="flex gap-2 items-center">
          <img
            src="/assets/azero-logo.svg"
            className="w-[70px]"
            alt="azero-logo"
          />
          <img
            src="/assets/azero-text.svg"
            className="w-[100px]"
            alt="azero-text"
          />
        </div>

        <ul className="hidden md:flex gap-6">
          {navItem.map((itm) => (
            <li
              key={itm.id}
              className="cursor-pointer font-semibold text-[16px] text-[#8D8D8D]"
            >
              <Link
                to={itm.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActive(itm.id)}
                className={linkClass(itm.id)}
              >
                {itm.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="bg-primary px-4 py-2 rounded-xl text-white font-semibold">
            Enquiry Now
          </button>
        </div>

        <div className="md:hidden text-3xl cursor-pointer">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 cursor-pointer">
            {navItem.map((itm) => (
              <li key={itm.id} className="text-[#8D8D8D] font-semibold text-lg">
                <Link
                  to={itm.path}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setActive(itm.id);
                    setMenuOpen(false);
                  }}
                  className={linkClass(itm.id)}
                >
                  {itm.name}
                </Link>
              </li>
            ))}
            <button className="bg-primary px-6 py-2 rounded-xl text-white font-semibold">
              Enquiry Now
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
