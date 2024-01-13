import React from "react";

import { Footer, LandingPage } from "./containers";
import { People, Songs, Navbar, Bts } from "./components";

import './App.css'

function App() {
  return (
    <div className="gradient_bg">
      <div>
        <Navbar />
      </div>
      <LandingPage />
      <Songs />
      <People />
      <Bts />
      <Footer />
    </div>
  );
}

export default App;
