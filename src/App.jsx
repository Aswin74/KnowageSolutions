import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Courses from "./components/contents/Courses";

import Hero from "./components/contents/Hero";
import Services from "./components/contents/Services";
import Contact from "./components/contents/contact/Contact";

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
