import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import Gallery from "./pages/Gallery";
import imageData from "./assets/galleryImgs/imageData";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gallery" element={<Gallery data={imageData} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
