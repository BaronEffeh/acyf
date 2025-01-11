import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Container } from "@mui/material";
import Comments from "../components/Home/Comments";
import UpComingEvents from "../components/Events/UpComingEvents";
import LatestEvents from "../components/Events/LatestEvents";

function EventsPage() {
  const events = [
    { title: "Youth Prayer Night", date: "January 25, 2025" },
    { title: "Leadership Training", date: "February 22, 2025" },
    { title: "Annual Youth Conference", date: "August 27-30, 2025" },
  ];

  return (
    <Container>

      <UpComingEvents />

      <LatestEvents />
      
      <Box>
      <Typography variant="h4" gutterBottom>
        Other Events
      </Typography>
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={event.title}
              secondary={`Date: ${event.date}`}
            />
          </ListItem>
        ))}
      </List>

      <Comments />
      </Box>
    </Container>
  );
}

export default EventsPage;
