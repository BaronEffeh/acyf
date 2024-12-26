import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

function RegistrationPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Conference Registration
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
        <TextField label="Phone Number" variant="outlined" required />
        <TextField label="Church/Organization" variant="outlined" required />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default RegistrationPage;
