import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import OverviewImage from "../../assets/images/ecyf-excos.jpg";

function HomeOverview() {
  return (
    <Box
      sx={{
        my: 5,
        px: 2,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={OverviewImage}
              alt="Overview"
              style={{
                maxWidth: "100%",
                height: "35rem",
                borderRadius: 8,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="primary">
            Welcome to
          </Typography>
          <Typography variant="h3" gutterBottom sx={{fontWeight: "700"}}>
            Abuja Christian Youth Forum
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
          The Abuja Christian Youth Forum (ACYF) is a vibrant community of young believers
          dedicated to fostering spiritual growth, leadership development, and unity
          among Christian youth in Abuja. Our mission is to empower young people to
          live purpose-driven lives rooted in Christ.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
            We are committed to building a vibrant and 
            supportive Christian community for the youth in Abuja. Join us as we 
            create a space for growth, faith, and fellowship. Explore our various 
            events, workshops, and outreach programs designed to inspire and empower.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
            We are committed to building a vibrant and 
            supportive Christian community for the youth in Abuja. Join us as we 
            create a space for growth, faith, and fellowship. Explore our various 
            events, workshops, and outreach programs designed to inspire and empower.
          </Typography>
            <Typography>Have a question? <Button component={Link} to="/contact">Contact Us</Button></Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeOverview;
