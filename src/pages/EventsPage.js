import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Container } from "@mui/material";
import Comments from "../components/Home/Comments";

function EventsPage() {
  const events = [
    { title: "Youth Prayer Night", date: "January 25, 2025" },
    { title: "Leadership Training", date: "February 22, 2025" },
    { title: "Annual Youth Conference", date: "August 27-30, 2025" },
  ];

  return (
    <Container>
      <Box>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
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
