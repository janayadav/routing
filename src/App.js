import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Course from "./Course";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Course" element={<Course />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/NavBar" element={<NavBar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
