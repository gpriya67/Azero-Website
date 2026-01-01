import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Element } from "react-scroll";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Work from "./pages/Work";
import Carrier from "./pages/Carrier";
import CursorPointer from "./component/CursorPointer";

function App() {
  return (
    <div className=" relative">
      
  <CursorPointer trailDelay={0.08} />
      <Header />

      <Element name="/"  className="">
        <Home />
      </Element>

      <Element name="work" >
        <Work />
      </Element>

      <Element name="service" >
        <Services />
      </Element>

     {/*  <Element name="about" className="min-h-screen justify-center items-center bg-gray-300">
        <About />
      </Element> */}

      

     {/*  <Element name="carrier" className="min-h-screen justify-center items-center bg-gray-300">
        <Carrier />
      </Element> */}
    </div>
  );
}

export default App;
