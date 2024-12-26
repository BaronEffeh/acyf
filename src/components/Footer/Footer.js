import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, textAlign: "center", mt: "1rem" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Abuja Christian Youth Forum. All rights reserved.
      </Typography>
      <Link href="/privacy-policy" color="inherit">
        Privacy Policy
      </Link>
    </Box>
  );
}

export default Footer;
