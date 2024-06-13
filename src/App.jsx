import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/hero/Hero";
import Services from "./components/contents/services/Services";
import Courses from "./components/courses/Courses";
import Contact from "./components/contents/contact/Contact";

import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Courses />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
