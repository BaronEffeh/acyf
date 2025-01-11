import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={event.image}
        alt={event.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {event.date}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {event.theme}
        </Typography>
      </CardContent>
      <Button component={Link} to={`/events/${event.id}`} sx={{ m: 2 }}>
        View Details
      </Button>
    </Card>
  );
}

export default EventCard;
