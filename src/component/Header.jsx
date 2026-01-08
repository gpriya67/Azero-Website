import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Work", path: "work" },
    /*  { id: 4, name: "Carrier", path: "carrier" }, */
    { id: 5, name: "Services", path: "service" },
  ];

  const linkClass = (id) =>
    active === id
      ? "bg-gradient-to-r from-[#FB1E01] via-[#FEC007] to-[#FF6A00] bg-clip-text text-transparent"
      : "hover:border-b-2 hover:border-white transition";

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="px-6 lg:px-20 flex justify-between items-center py-7">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/azero-logo.svg"
              className="w-[50px] md:w-[70px]"
              alt="azero-logo"
            />
            <div className=" hidden md:block">
              <img
                src="/assets/azero-text.svg"
                className="w-[100px]"
                alt="azero-text"
              />
            </div>
          </div>

          <ul className="hidden md:flex gap-6">
            {navItem.map((itm) => (
              <li
                key={itm.id}
                className="cursor-pointer font-semibold font-aileron text-[16px] text-[#8D8D8D]"
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

          <div className="hidden md:block w-[189px] h-[52px]">
            <ScrollLink
              to="enquiry"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActive(6)}
              className="cursor-pointer w-full h-full"
            >
              <button className="bg-primary w-full h-full px-4 py-3 rounded-xl text-white font-semibold">
                Enquiry Now
              </button>
            </ScrollLink>
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
          <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl">
              <ul className="flex flex-col items-center gap-5 py-8 px-6">
                {navItem.map((itm) => (
                  <li key={itm.id} className="w-full text-center">
                    <Link
                      to={itm.path}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => {
                        setActive(itm.id);
                        setMenuOpen(false);
                      }}
                      className={`
                block w-full py-3 rounded-xl font-semibold text-lg
                transition-all duration-300
                ${
                  active === itm.id
                    ? "inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
                    >
                      {itm.name}
                    </Link>
                  </li>
                ))}

                <div className="w-full h-px bg-gray-200 my-2" />

                <ScrollLink
                  to="enquiry"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(6);
                  }}
                  className="w-full"
                >
                  <button className="w-full bg-primary py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                    Enquiry Now
                  </button>
                </ScrollLink>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className=" fixed justify-between flex bottom-6 left-0 w-full z-40 md:px-20 px-4 ">
        <h4 className=" font-normal font-aileron  text-[14px]">
          Sat,Sep 20th,
          <br />
          <p className=" flex gap-2">
            <div className="w-3 h-3 rounded-full bg-primary  mt-1"></div>
            7,am,Indian
          </p>
        </h4>
        <div className=" flex gap-3">
          <div className=" w-[44px] h-[44px]">
            <img
              src="/assets/phone.svg"
              className=" w-full h-auto  object-cover"
              alt="phone"
            />
          </div>
          <div className=" w-[44px] h-[44px]">
            <img
              src="/assets/notification.svg"
              alt="notification"
              className=" w-full h-auto object-cover"
            />
          </div>
          <div className=" w-[44px] h-[44px]">
            <img
              src="/assets/email.svg"
              alt="email"
              className=" w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
