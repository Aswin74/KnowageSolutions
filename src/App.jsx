import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar";
import Hero from "./components/contents/Hero";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
