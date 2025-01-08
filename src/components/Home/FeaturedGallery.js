import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FeaturedImg1 from "../../assets/images/featured1.jpg";
import FeaturedImg2 from "../../assets/images/featured2.jpg";
import FeaturedImg3 from "../../assets/images/featured3.jpg";
import FeaturedImg4 from "../../assets/images/featured4.jpg";
import FeaturedImg5 from "../../assets/images/featured5.jpg";
import FeaturedImg6 from "../../assets/images/featured6.jpg";
import FeaturedImg7 from "../../assets/images/featured7.jpg";
import FeaturedImg8 from "../../assets/images/featured8.jpg";

const featuredImages = [
  { image: FeaturedImg1, title: "Conference Opening" },
  { image: FeaturedImg2, title: "Workshop Highlights" },
  { image: FeaturedImg3, title: "Group Activity" },
  { image: FeaturedImg4, title: "Team Building" },
  { image: FeaturedImg5, title: "Community Outreach" },
  { image: FeaturedImg6, title: "Networking" },
  { image: FeaturedImg7, title: "Volunteer Appreciation" },
  { image: FeaturedImg8, title: "Event Closing" },
];

// Custom Arrow Component
function Arrow({ className, style, onClick, direction }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        background: "rgba(0, 132, 255, 0.5)",
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {direction === "left" ? "<" : ">"}
    </div>
  );
}

function FeaturedGallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ my: 5, px: 2, textAlign: "center" }}>
      <Typography variant="h4" textAlign="center" gutterBottom color="primary">
        Featured Moments
      </Typography>
      <Slider {...settings}>
        {featuredImages.map((item, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Card
              sx={{
                margin: "0 auto",
                maxWidth: 300,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/gallery"
        sx={{ mt: "1rem" }}
      >
        See More In Gallery
      </Button>
    </Box>
  );
}

export default FeaturedGallery;
