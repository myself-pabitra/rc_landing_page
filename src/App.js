import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    // <div className="App">
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> */}

          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact" element={<Contact/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // </div>
  );
}

export default App;
