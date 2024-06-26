import "./App.css";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectsPage/ProjectPage";
import Services from "./components/Services";
import FaqSection from "./components/faqsection/FaqSection";
function App() {
  return (
    <>
      <Navbar />
      {/* <div id="box"></div> */}
      <HomePage />
      <div className="outerBackground">
        <Services />
        <ProjectPage />
        <FaqSection/>
        <Contact />
      </div>
    </>
  );
}

export default App;
