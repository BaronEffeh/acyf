import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

function Milestone() {
  const milestones = [
    { title: "Years Active", value: 10 },
    { title: "Conferences Held", value: 20 },
    { title: "Youth Empowered", value: "5,000+" },
    { title: "Church Partnerships", value: 50 },
  ];

  return (
    <Box sx={{ my: 5, px: 2, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Our Milestones
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {milestones.map((milestone, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" color="primary">
                {milestone.value}
              </Typography>
              <Typography variant="subtitle1">{milestone.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Milestone;
