import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Paper } from "@mui/material";
import eventsData from "../../assets/data/eventsData";

function DetailedEventPage() {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(eventId));

  if (!event) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Event not found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: "1200px", margin: "0 auto" }}>
      {/* Event Header */}
      <Box
        sx={{
          position: "relative",
          height: "400px",
          overflow: "hidden",
          borderRadius: 2,
          mb: 4,
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          image={event.image}
          alt={event.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(70%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", textShadow: "2px 2px 5px rgba(0,0,0,0.8)" }}>
            {event.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
            {event.date}
          </Typography>
        </Box>
      </Box>

      {/* Event Content */}
      <Grid container spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "primary.main" }}>
              About the Event
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {event.description}
            </Typography>

            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", color: "secondary.main" }}>
              Event Theme:
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {event.theme}
            </Typography>

            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", color: "secondary.main" }}>
              Hosted By:
            </Typography>
            <Typography variant="body1">{event.host}</Typography>
          </Paper>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image={event.image}
              alt={event.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Event Details
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Date:</strong> {event.date}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Host:</strong> {event.host}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Theme:</strong> {event.theme}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{mt: 4, alignContent: "center", alignItems: "center"}}>
        <img src={event.image} alt={event.title} style={{ width: "250px", marginBottom: "16px" }} />
        </Box>
    </Box>
  );
}

export default DetailedEventPage;





// import React from "react";
// import { useParams } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import eventsData from "../../assets/data/eventsData";

// function DetailedEventPage() {
//   const { eventId } = useParams();
//   const event = eventsData.find((e) => e.id === parseInt(eventId));

//   if (!event) {
//     return <Typography variant="h6">Event not found!</Typography>;
//   }

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         {event.title}
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 2 }}>
//         {event.date}
//       </Typography>
//       <img src={event.image} alt={event.title} style={{ width: "250px", marginBottom: "16px" }} />
//       <Typography variant="body1">{event.theme}</Typography>
//       <Typography variant="h4">{event.host}</Typography>
//       <Typography variant="body1">{event.description}</Typography>
//     </Box>
//   );
// }

// export default DetailedEventPage;
