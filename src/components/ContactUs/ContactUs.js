import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import ContactImg from "../../assets/images/acyfLogo.jpg";

function ContactUs() {
  return (
    <Box
      sx={{
        bgcolor: "#F8F9F8",
        padding: 6,
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section (Image) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 2,
              overflow: "hidden",
              img: {
                width: "100%",
                height: "auto",
              },
            }}
          >
            <img
              src={ContactImg}
              alt="Contact Us"
            />
          </Box>
        </Grid>

        {/* Right Section (Form & Info) */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Contact Us
          </Typography>

          {/* Form Fields */}
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#CBD5E0" },
                "&:hover fieldset": { borderColor: "#A0AEC0" },
              },
            }}
          />
          <TextField
            fullWidth
            label="E-mail"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#CBD5E0" },
                "&:hover fieldset": { borderColor: "#A0AEC0" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#CBD5E0" },
                "&:hover fieldset": { borderColor: "#A0AEC0" },
              },
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            // sx={{
            //   bgcolor: "#2D3748",
            //   color: "#fff",
            //   textTransform: "none",
            //   px: 4,
            //   py: 1,
            //   "&:hover": { bgcolor: "#1A202C" },
            // }}
          >
            Contact Us
          </Button>

          {/* Contact Info */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ color: "#1A202C", mb: 1 }}>
              <strong>Contact:</strong> hi@acyf.com
            </Typography>
            <Typography variant="body1" sx={{ color: "#1A202C" }}>
              <strong>Based in:</strong> Abuja, Nigeria
            </Typography>
          </Box>

          {/* Social Media Links */}
          <Box sx={{mt: 3}}>
            <Typography>
                Follow us on Social Media.
            </Typography>
            </Box>
          <Box sx={{display: "flex", gap: 2 }}>            
            <IconButton
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                    >
                      <Instagram />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                    >
                      <YouTube />
                    </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
