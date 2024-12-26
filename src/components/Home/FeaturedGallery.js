import React from "react";
import { Box, Typography, Grid, Card, CardMedia, Button } from "@mui/material";
import { Link } from "react-router-dom";

const featuredImages = [
  "/assets/images/elijah.jpg",
  "/assets/images/workshop1.jpg",
  "/assets/images/outreach1.jpg",
];

function FeaturedGallery() {
  return (
    <Box sx={{ my: 5, px: 2, textAlign: "center" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Featured Moments
      </Typography>
      <Grid container spacing={2}>
        {featuredImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Featured image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
        
      </Grid>
      <Button 
      variant="contained" 
      color="primary" 
      component={Link} 
      to="/gallery"
      sx={{mt: "1rem"}}
      >
        See More In Gallery
        </Button>
    </Box>
  );
}

export default FeaturedGallery;
