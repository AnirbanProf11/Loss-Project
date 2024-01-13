import React from "react";

import { Footer, LandingPage } from "./containers";
import { PeopleSection, SongsSection, Navbar, Bts } from "./components";

import './App.css'

function App() {
  return (
    <div className="gradient_bg">
      <div>
        <Navbar />
      </div>
      <LandingPage />
      <SongsSection />
      <PeopleSection />
      <Bts />
      <Footer />
    </div>
  );
}

export default App;
