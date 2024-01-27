import { React } from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";

import {
  Footer,
  LandingPage,
  EpisodeSection,
  Teams,
  BTS,
  SongTimeline,
} from "./containers";
import { PeopleSection, SongsSection, Navbar, Bts } from "./components";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="gradient_bg">
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/songs" element={<SongsSection />} />
            <Route path="/people" element={<Teams />} />
            <Route path="/bts" element={<Bts />} />
            <Route path="/home" element={<LandingPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
