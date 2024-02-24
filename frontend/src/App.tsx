import { useEffect, useState } from "react";
import "./App.css";
import { LandingPage } from "./components/landingPage";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <LandingPage />
    </div>
  );
}

export default App;
