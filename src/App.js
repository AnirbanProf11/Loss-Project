import { React } from "react";

import { Footer, LandingPage, EpisodeSection } from "./containers";
import {
  PeopleSection,
  SongsSection,
  Navbar,
  Bts,
  SongTimeline,
} from "./components";

import "./App.css";

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
