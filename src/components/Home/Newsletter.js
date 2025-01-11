import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

function Newsletter() {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        bgcolor: "#0A192F",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        {/* Header */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Stay Updated with Our Newsletter
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#AAB2C2" }}>
            Subscribe to receive the latest updates, events, and exclusive content from the 
            Abuja Christian Youth Forum directly in your inbox!
          </Typography>
        </Grid>

        {/* Subscription Form */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                placeholder="Enter your email address"
                variant="outlined"
                sx={{
                  bgcolor: "#1F2A3A",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#1F2A3A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#AAB2C2",
                    },
                    input: {
                      color: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#007BFF",
                  color: "#fff",
                  textTransform: "none",
                  height: "100%",
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#0056CC",
                  },
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Newsletter;
