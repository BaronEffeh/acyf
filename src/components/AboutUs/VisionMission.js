import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import RocketIcon from "@mui/icons-material/RocketLaunch"; // Replace with an appropriate icon
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Replace with an appropriate icon
import PanoramaIcon from "@mui/icons-material/ThreeSixty"; // Replace with an appropriate icon

function VisionMission() {
  const data = [
    {
      icon: <RocketIcon sx={{ fontSize: 50, color: "#FF3E00" }} />,
      title: "Our Vision",
      description:
        "To raise a generation of young Christians deeply rooted in faith, living with purpose, and influencing the world for Christ.",
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 50, color: "#FF3E00" }} />,
      title: "Our Mission",
      description:
        "To provide a platform for spiritual growth, leadership development, and fostering community among Christian youth.",
    },
    {
      icon: <PanoramaIcon sx={{ fontSize: 50, color: "#FF3E00" }} />,
      title: "Our Core Values",
      description:
        "Faith, Excellence, Unity, and Service—these values drive our mission and vision to build a Christ-centered youth community.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#F5F9FF",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
        //   color: "#FF3E00",
          fontWeight: "bold",
          mb: 1,
        }}
        color="primary"
      >
        WHAT WE STAND FOR
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#333",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Vision and Mission
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
                padding: 2,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#333",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VisionMission;
