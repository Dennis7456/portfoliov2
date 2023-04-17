import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Milestones from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Home from "./components/Home/Home";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
