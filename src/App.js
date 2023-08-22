import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";




function App() {
  return (
  <Router>

<Routes>

    <Route exact path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="services" element={<Services/>} />
    <Route path="blog" element={<Blog/>} />
    <Route path="contact" element={< Contact/>} />
    
</Routes>

  </Router>
  

  );
}

export default App;
