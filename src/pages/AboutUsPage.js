import React from "react";
import { Typography, Box, Container } from "@mui/material";
import AboutUsIntro from "../components/AboutUs/AboutUsIntro";
import VisionMission from "../components/AboutUs/VisionMission";
import AboutUsOverview from "../components/AboutUs/AboutUsOverview";

function AboutUsPage() {
  return (
    <>
      <AboutUsIntro />
    <Container>

      <AboutUsOverview />

      <VisionMission />

      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ textAlign: "justify" }}>
        <Typography variant="body1" gutterBottom>
          The Abuja Christian Youth Forum is a vibrant community of young believers
          dedicated to fostering spiritual growth, leadership development, and unity
          among Christian youth in Abuja. Our mission is to empower young people to
          live purpose-driven lives rooted in Christ.
        </Typography>
        <Typography variant="body1">
          Join us in our journey to build a stronger and more impactful Christian youth
          community!
        </Typography>
      </Box>
    </Container>
    </>
  );
}

export default AboutUsPage;
