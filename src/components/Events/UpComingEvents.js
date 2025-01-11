import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import EventCard from "./EventCard";
import eventsData from "../../assets/data/eventsData";

function UpComingEvents() {
  const upcomingEvents = eventsData.filter((event) => event.type === "upcoming");

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Up Coming Events
      </Typography>
      <Grid container spacing={3}>
        {upcomingEvents.map((event) => (
          <Grid item xs={12} sm={6} md={3} key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UpComingEvents;
