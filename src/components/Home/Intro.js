import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import BgImg from "../../assets/images/woman-in-orange-coat-with-black-and-brown-scarf.jpg";

function Intro() {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: 0,
        py: 5,
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        color: "white",
        height: "80vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
            textAlign: "left",
            px: 5,
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography 
        variant="h5"
        sx={{
            fontStyle: "italic"
            }}
            >
        Welcome to
        </Typography>
        <Typography variant="h2" gutterBottom 
        sx={{
            fontStyle: "bold",
            fontWeight: "700"
            }}
            >
        Abuja Christian Youth Forum
        </Typography>
        <Typography variant="h6" gutterBottom>
          Building a stronger Christian community for youth in Abuja.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register-conference"
        >
          Register for the 2025 Conference
        </Button>
      </Box>
    </Box>
  );
}

export default Intro;
