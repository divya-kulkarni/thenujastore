import "../styling/landingPage.css";
import { Bestsellers } from "../components/bestseller";
import { Category } from "../components/category";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar";
import { Spotlight } from "../components/spotlight";
import { Testimonials } from "../components/testimonials";

export const LandingPage = () => {
  return (
    <div className="landing">
      <NavBar />
      <Hero />
      <Bestsellers />
      <Spotlight />
      <Testimonials />
      <Category />
      <Footer />
    </div>
  );
};
