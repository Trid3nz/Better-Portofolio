import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Info from "./Components/Info";
import Project from "./Components/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <About />
        <Info />
        <Project />
      </div>
    </>
  );
}

export default App;
