import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import EventCard from "./EventCard";
import eventsData from "../../assets/data/eventsData";

function LatestEvents() {
  const latestEvents = eventsData.filter((event) => event.type === "latest");

  return (
    <Box sx={{ p: 4, bgcolor: "#F0F4F3" }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Latest Events
      </Typography>
      <Grid container spacing={3}>
        {latestEvents.map((event) => (
          <Grid item xs={12} sm={6} md={3} key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LatestEvents;
