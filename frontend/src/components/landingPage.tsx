import "../styling/landingPage.css";
import { Bestsellers } from "./bestseller";
import { Category } from "./category";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NavBar } from "./navbar";
import { Social } from "./social";
import { Spotlight } from "./spotlight";

export const LandingPage = () => {
  return (
    <div className="landing">
      <NavBar />
      <Hero />
      <Bestsellers />
      <Spotlight />
      <Category />
      {/* <Social /> */}
      <Footer />
    </div>
  );
};
