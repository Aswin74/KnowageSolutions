import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

import { disablePageScroll, enablePageScroll } from "scroll-lock"
import { motion } from "framer-motion"

import Button from "./Button"
import { navigation } from "../constants"

import { logo } from "../assets"
import MenuSvg from "../assets/svg/MenuSvg"

function Navbar() {
  const currentLocation = useLocation()
  const currPath = currentLocation.pathname

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false)
      enablePageScroll()
    } else {
      setIsOpen(true)
      disablePageScroll()
    }
  }
  // Nav Item Click
  const handleNavClick = () => {
    enablePageScroll()
    setIsOpen(false)
  }

  // Nav Bg Change on Scroll
  const [navChange, setNavChange] = useState(true)

  const changeBackground = () => {
    {
      window.scrollY >= 80 ? setNavChange(true) : setNavChange(false)
    }
  }

  useEffect(() => {
    if (currPath == "/") {
      changeBackground()
      window.addEventListener("scroll", changeBackground)
      setNavChange(false)
    } else {
      setNavChange(true)
    }
    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [currPath])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          navChange ? "bg-ks-white shadow-md" : "bg-transparent"
        }  transition-all`}
      >
        <div className="flex items-center justify-between px-5 lg:px-7.5">
          <Link to="/" className="flex items-center w-[12rem] lg:mr-8 ml-2">
            <img src={logo} className="h-16 lg:h-20" alt="Knowage Solutions" />
            <p
              className={`${
                !navChange ? "text-ks-white" : "text-ks-primary"
              } font-black uppercase -ml-2 lg:text-lg`}
            >
              Knowage
            </p>
          </Link>

          {/* Responsive Navbar content */}
          <div
            className={`-mt-6 ${
              isOpen ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 ${
              !isOpen
                ? "bg-ks-white"
                : `${
                    !navChange ? "bg-ks-primary/50" : "bg-ks-white/90"
                  } backdrop-blur-sm z-1`
            } lg:flex lg:static lg:m-auto lg:bg-transparent  ease-in-out`}
          >
            <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    `block relative font-code uppercase transition-colors hover:text-ks-primary ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } p-6 lg:-mr-0.25 lg:text-sm ${
                      isActive
                        ? `z-2 ${
                            !navChange ? "text-ks-white" : "text-ks-primary"
                          } font-extrabold`
                        : `${
                            !navChange
                              ? " text-ks-white/60"
                              : "text-ks-primary/60"
                          }  font-semibold`
                    } lg:leading-5`
                  }
                  onClick={handleNavClick}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <Button to="/register" className="uppercase mr-2">
              Register
            </Button>

            <Button className="lg:hidden w-10" onClick={handleToggle}>
              <MenuSvg openNavigation={isOpen} />
            </Button>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
