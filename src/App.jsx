// import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";
import ProfessionalExperience from "./components/ProfessionalExperience";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <ProfessionalExperience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
