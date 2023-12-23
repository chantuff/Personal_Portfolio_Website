import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    
    <div className="container">
      <h1 className="header">Chan's Portfolio</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <img src="web-development-banner.jpg"></img>
    </div>
  );
}

export default App;
