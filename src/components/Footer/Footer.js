import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 3,
        textAlign: "center",
        mt: "1rem",
      }}
    >
      {/* Footer Text */}
      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Abuja Christian Youth Forum. All rights reserved.
      </Typography>

      {/* Privacy Policy */}
      <Box sx={{ mb: 2 }}>
        <Link href="/privacy-policy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
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
    </Box>
  );
}

export default Footer;





// import React from "react";
// import { Box, Typography, Link } from "@mui/material";

// function Footer() {
//   return (
//     <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, textAlign: "center", mt: "1rem" }}>
//       <Typography variant="body2">
//         © {new Date().getFullYear()} Abuja Christian Youth Forum. All rights reserved.
//       </Typography>
//       <Link href="/privacy-policy" color="inherit">
//         Privacy Policy
//       </Link>
//     </Box>
//   );
// }

// export default Footer;
