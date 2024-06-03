import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import Button from "./Button";
import { navigation } from "../constants";

import { logo } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";

function Navbar() {
  const currPath = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    } else {
      setIsOpen(true);
      disablePageScroll();
    }
  };

  const handleNavClick = () => {
    enablePageScroll();
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ks-white shadow-md">
        <div className="flex items-center justify-between px-5 lg:px-7.5">
          <a href="#hero" className="block w-[12rem] lg:mr-8 ml-2">
            <img src={logo} className="h-20" alt="Knowage Solutions" />
          </a>

          {/* Responsive Navbar content */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 ${
              !isOpen ? "bg-ks-white" : "bg-ks-white/70 backdrop-blur-sm z-1"
            } lg:flex lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code uppercase transition-colors hover:text-ks-primary ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } p-6 lg:-mr-0.25 lg:text-sm ${
                    item.url === currPath.hash
                      ? "z-2 text-ks-primary font-extrabold"
                      : "text-ks-primary/60  font-semibold"
                  } lg:leading-5`}
                  onClick={handleNavClick}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <Button href="#register" className="uppercase mr-2">
              Register
            </Button>

            <Button className="lg:hidden w-10" onClick={handleToggle}>
              <MenuSvg openNavigation={isOpen} />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
