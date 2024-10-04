import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/contents/hero/Hero"
import Services from "./components/contents/services/Services"
import Courses from "./components/contents/courses/Courses"
import Contact from "./components/contents/contact/Contact"

import ButtonGradient from "./assets/svg/ButtonGradient"
import Register from "./components/contents/register/Register"

function App() {
    return (
        <>
            <div className=" overflow-hidden">
                <Navbar />
                <Routes>
                    <Route index element={<Hero />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                <Footer />
            </div>

            <ButtonGradient />
        </>
    )
}

export default App
