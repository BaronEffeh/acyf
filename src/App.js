import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* slick carousel styles */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
// import RegistrationPage from "./pages/RegistrationPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import Gallery from "./pages/Gallery";
import imageData from "./assets/galleryImgs/imageData";
import OurTeam from "./pages/OurTeam";
import { teamMembers } from "./assets/teamImgs/teamMembers";
import Registration from "./pages/Registration";
import Donate from "./pages/Donate";
import JoinUs from "./pages/JoinUs";
import UpComingEvents from "./components/Events/UpComingEvents";
import LatestEvents from "./components/Events/LatestEvents";
import DetailedEventPage from "./components/Events/DetailedEventPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register-conference" element={<RegistrationPage />} /> */}
        <Route path="/register-conference" element={<Registration />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gallery" element={<Gallery data={imageData} />} />
        <Route path="/our-team" element={<OurTeam teamMembers={teamMembers} />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/upcoming-events" element={<UpComingEvents />} />
        <Route path="/latest-events" element={<LatestEvents />} />
        <Route path="/events/:eventId" element={<DetailedEventPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
