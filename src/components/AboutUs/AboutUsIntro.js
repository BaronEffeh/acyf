import React from "react";
import { Box, Typography } from "@mui/material";
import BackgroundImage from "../../assets/images/about-us-img.jpg";

function AboutUsIntro() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "30vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ zIndex: 2, px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto" }}>
          Explor more about the Abuja Christian Youth Forum
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUsIntro;
