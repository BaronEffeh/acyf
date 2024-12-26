import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

function ContactPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <TextField label="Full Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" required />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default ContactPage;
