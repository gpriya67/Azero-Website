import Header from "./component/Header";
import { Element } from "react-scroll";
import Home from "./pages/Home";
import Services from "./pages/Services";

import Work from "./pages/Work";

import CursorPointer from "./component/CursorPointer";
import About from "./pages/About";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <div className=" relative overflow-hidden">
      <CursorPointer trailDelay={0.08} />
      <Header />

      <Element name="/" className="">
        <Home />
      </Element>
      <Element name="about" >
        <About />
      </Element>

      <Element name="work">
        <Work />
      </Element>

      <Element name="service">
        <Services />
      </Element>

      <Element name="enquiry">
      <Enquiry />
      </Element>
    </div>
  );
}

export default App;


/*  "scripts": {
  "build": "CI=false react-scripts build"
}, */