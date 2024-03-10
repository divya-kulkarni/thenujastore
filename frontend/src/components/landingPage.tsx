import "../styling/landingPage.css";
import { Bestsellers } from "./bestseller";
import { Category } from "./category";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NavBar } from "./navbar";
import { Spotlight } from "./spotlight";
import { Testimonials } from "./testimonials";

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
