import Work from "./components/Work";
import Footer from "./components/Footer";
import About from "./components/About";
import Intro from "./components/Intro";
import Header from "./components/Header";

import { useState } from "react";
import Experience from "./components/Experience";

function App() {
  const [classname, setClassName] = useState("");

  let lastScrollY = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    scrollY > lastScrollY ? setClassName("disappear") : setClassName("appear");
    lastScrollY = scrollY;
  });

  return (
    <div className="App">
      <Header classname={classname} />
      <Intro />
      <About />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
