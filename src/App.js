import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Loader from "./Component/LoaderPage/Loader";
import NewCart from "./Component/NewCart/NewCart";
import Test from "./Component/Test/Test";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/cart" element={<NewCart />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

