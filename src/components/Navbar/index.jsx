import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button";

import logo from "../../assets/KS_icon.png";
import MenuSvg from "../../assets/svg/MenuSvg";
import { navigation } from "../../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-n-8 border-b border-n-5">
        <div className="flex items-center justify-between px-5 lg:px-7.5">
          <a href="#hero" className="block w-[12rem] lg:mr-8 ml-2">
            <img src={logo} className="h-20" alt="Knowage Solutions" />
          </a>

          {/* Responsive Navbar content */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 ${
              !isOpen ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
            } lg:flex lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code uppercase transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } p-6 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                    item.url === currPath.hash ? "z-2 text-n-1" : "text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1`}
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

            <Button className="lg:hidden" onClick={handleToggle}>
              <MenuSvg openNavigation={isOpen} />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
