import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Projects from "./components/Projects";
import Sectors from "./components/Sectors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Projects />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
