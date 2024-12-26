import React from "react";
import { Container } from "@mui/material";
import Milestone from "../components/Home/Milestone";
import OurTeam from "../components/Home/OurTeam";
import Review from "../components/Home/Review";
import Highlights from "../components/Home/Highlights";
import Intro from "../components/Home/Intro";
import FeaturedGallery from "../components/Home/FeaturedGallery";

function HomePage() {
  return (
    <>
      <Intro />
    <Container>

      <FeaturedGallery />

        <Highlights />

      <Milestone />

      <OurTeam />

      <Review />

      {/* </Box> */}
    </Container>
    </>
  );
}

export default HomePage;
