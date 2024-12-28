import React from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: <PeopleIcon sx={{ fontSize: 50, color: "primary.main" }} />,
    title: "Community Engagement",
    description: "Connect with like-minded individuals and build a supportive faith community.",
  },
  {
    icon: <LocalLibraryIcon sx={{ fontSize: 50, color: "secondary.main" }} />,
    title: "Spiritual Growth",
    description: "Gain deeper insights into your faith and enhance your spiritual journey.",
  },
  {
    icon: <EventIcon sx={{ fontSize: 50, color: "success.main" }} />,
    title: "Exciting Events",
    description: "Participate in conferences, workshops, and other engaging activities.",
  },
];

function Highlights() {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#f5f5f5", justifyItems: "center" }}>
      <Typography variant="h4" textAlign="center" gutterBottom color="primary">
        Why Join Us?
      </Typography>
      <Grid container spacing={4}>
        {highlights.map((highlight, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              {highlight.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {highlight.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                {highlight.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" component={Link} to="/join-us" sx={{mt: "1rem"}}>
        Join Us
      </Button>
    </Box>
  );
}

export default Highlights;
