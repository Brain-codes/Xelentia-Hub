import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Loader from "./Component/LoaderPage/Loader";
import NewCart from "./Component/NewCart/NewCart";
import Test from "./Component/Test/Test";
import Contact from "./Component/Contact/Contact";
// import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Mail from "./Component/Test/Mail";
import Faq from "./Component/FAQ/Faq";
import About from "./Component/About/About";
import LeftSec from "./Component/Test/LeftSec";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<LeftSec />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

