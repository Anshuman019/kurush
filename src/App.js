import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Hero />
        <About />
        <Product />
        <Contact />
      </div>
    </>
  );
}


export default App;
