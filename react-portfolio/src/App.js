import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
