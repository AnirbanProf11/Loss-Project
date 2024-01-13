import React from "react";

import { Footer, LandingPage } from "./containers";
import { People, SongsSection, Navbar, Bts } from "./components";

import './App.css'

function App() {
  return (
    <div className="gradient_bg">
      <div>
        <Navbar />
      </div>
      <LandingPage />
      <SongsSection />
      <People />
      <Bts />
      <Footer />
    </div>
  );
}

export default App;
