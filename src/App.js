import { React } from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";

import { Footer, LandingPage, EpisodeSection } from "./containers";
import {
  PeopleSection,
  SongsSection,
  Navbar,
  Bts,
  SongTimeline,
} from "./components";

import "./App.css";
import BtsSection from "./components/bts/BtsSection";

function App() {
  return (
    <Router>
      <div className="gradient_bg">
        <div>
          <Navbar />

          <Routes>
            <Route path="/songs" element={<SongsSection />} />
            <Route path="/people" element={<PeopleSection />} />
            <Route path="/bts" element={<BtsSection />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
