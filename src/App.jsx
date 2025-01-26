import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <Services />
      <Portfolio />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
