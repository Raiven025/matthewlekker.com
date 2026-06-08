import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ImmersiveGallery from "./components/ImmersiveGallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <ImmersiveGallery />
      <Contact />
    </>
  );
}
