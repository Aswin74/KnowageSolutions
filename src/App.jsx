import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/contents/hero/Hero";
import Services from "./components/contents/services/Services";
import Courses from "./components/contents/courses/Courses";
import Contact from "./components/contents/contact/Contact";

import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
