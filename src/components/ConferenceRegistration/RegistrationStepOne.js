import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

function RegistrationStepOne({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    registrationCode: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mx: "auto", mt: 2, maxWidth: 600 }}>
      <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
        Register Now!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Fill the information carefully.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Other Name"
            fullWidth
            name="otherName"
            value={formData.otherName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email Address"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mobile Number"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Box textAlign="right" mt={3}>
        <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mr: 2 }}
                  onClick={onBack} // Navigate to the previous step
                >
                  Back
                </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Paper>
  );
}

export default RegistrationStepOne;
