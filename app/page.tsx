import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ImmersiveGallery from "./components/ImmersiveGallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Testimonials />
      <ImmersiveGallery />
      <Contact />
    </>
  );
}
