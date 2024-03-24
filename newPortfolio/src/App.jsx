import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import {  Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster/>
    </>
  );
}

export default App;
