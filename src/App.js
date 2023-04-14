import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { extendTheme } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage/LandingPage";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
