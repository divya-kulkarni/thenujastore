import { useEffect, useState } from "react";
import "./App.css";
import { Welcome } from "./components/welcome";
import { LandingPage } from "./components/landingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navbar";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          <LandingPage />
        </>
      )}
    </div>
  );
}

export default App;
