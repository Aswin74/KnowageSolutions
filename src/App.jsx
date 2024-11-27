import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/contents/hero/Hero"
import Services from "./components/contents/services/Services"
import Courses from "./components/contents/courses/Courses"
import Contact from "./components/contents/contact/Contact"
import Register from "./components/contents/register/Register"
import About from "./components/contents/about/About"
import ErrorPage from "./components/contents/ErrorPage"

const RouterWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

function App() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <div className=" overflow-hidden">
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route index element={<Hero />} />
                        <Route
                            path="/courses"
                            element={
                                <RouterWrapper>
                                    <Courses />
                                </RouterWrapper>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <RouterWrapper>
                                    <Contact />
                                </RouterWrapper>
                            }
                        />
                        <Route
                            path="/services"
                            element={
                                <RouterWrapper>
                                    <Services />
                                </RouterWrapper>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <RouterWrapper>
                                    <Register />
                                </RouterWrapper>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <RouterWrapper>
                                    <About />
                                </RouterWrapper>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <RouterWrapper>
                                    <ErrorPage />
                                </RouterWrapper>
                            }
                        />
                    </Routes>
                </AnimatePresence>

                <Footer />
            </div>
        </>
    )
}

export default App
