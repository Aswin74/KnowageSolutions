import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar";
import Contact from "./components/contents/Contact";
import Courses from "./components/contents/Courses";
import Hero from "./components/contents/Hero";
import Services from "./components/contents/Services";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Courses />
        <Contact />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
