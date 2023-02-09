import React from "react";
import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/Navbarandfooter/Footer";
import { Navbar } from "./layouts/Navbarandfooter/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

