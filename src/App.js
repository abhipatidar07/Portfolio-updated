import React from "react";
import Navbar from "./comonents/Navbar/navbar";
import Intro from "./comonents/Intro/intro";
import Skills from "./comonents/Skills/skills";
import Works from "./comonents/Works/works";
import Myskills from "./comonents/Myskills/myskills";
import Contact from "./comonents/Contact/contact";
import Footer from "./comonents/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Myskills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
