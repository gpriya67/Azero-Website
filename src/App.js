import Header from "./component/Header";
import { Element } from "react-scroll";
import Home from "./pages/Home";
import Services from "./pages/Services";

import Work from "./pages/Work";

import CursorPointer from "./component/CursorPointer";

function App() {
  return (
    <div className=" relative">
      <CursorPointer trailDelay={0.08} />
      <Header />

      <Element name="/" className="">
        <Home />
      </Element>

      <Element name="work">
        <Work />
      </Element>

      <Element name="service">
        <Services />
      </Element>
    </div>
  );
}

export default App;
