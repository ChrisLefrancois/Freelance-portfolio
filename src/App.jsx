

// import './App.css'
import NavBar from "./components/navbar"
import Banner from "./components/banner"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Services />
      <Pricing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
