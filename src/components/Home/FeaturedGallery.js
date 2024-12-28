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
          <Box key={index} sx={{ px: 2 }}> {/* Added spacing here */}
            <Card
              sx={{
                margin: "0 auto", // Centers the cards
                maxWidth: 300, // Restricts card width for consistency
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





// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import FeaturedImg1 from "../../assets/images/featured1.jpg";
// import FeaturedImg2 from "../../assets/images/featured2.jpg";
// import FeaturedImg3 from "../../assets/images/featured3.jpg";
// import FeaturedImg4 from "../../assets/images/featured4.jpg";
// import FeaturedImg5 from "../../assets/images/featured5.jpg";
// import FeaturedImg6 from "../../assets/images/featured6.jpg";
// import FeaturedImg7 from "../../assets/images/featured7.jpg";
// import FeaturedImg8 from "../../assets/images/featured8.jpg";

// const featuredImages = [
//   { image: FeaturedImg1, title: "Conference Opening" },
//   { image: FeaturedImg2, title: "Workshop Highlights" },
//   { image: FeaturedImg3, title: "Group Activity" },
//   { image: FeaturedImg4, title: "Team Building" },
//   { image: FeaturedImg5, title: "Community Outreach" },
//   { image: FeaturedImg6, title: "Networking" },
//   { image: FeaturedImg7, title: "Volunteer Appreciation" },
//   { image: FeaturedImg8, title: "Event Closing" },
// ];

// function FeaturedGallery() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, // Enables automatic sliding
//     autoplaySpeed: 3000, // Sets the interval between slides (in ms)
//     pauseOnHover: true, // Pauses sliding when the user hovers over the carousel
//     responsive: [
//       {
//         breakpoint: 768, // For tablets and smaller devices
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480, // For mobile devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ my: 5, px: 2, textAlign: "center" }}>
//       <Typography variant="h4" textAlign="center" gutterBottom color="primary">
//         Featured Moments
//       </Typography>
//       <Slider {...settings}>
//         {featuredImages.map((item, index) => (
//           <Box key={index} sx={{ px: 2 }}> {/* Adjust padding for spacing */}
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={item.image}
//                 alt={item.title}
//               />
//               <CardContent>
//                 <Typography variant="h6" color="textSecondary">
//                   {item.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//       <Button
//         variant="contained"
//         color="primary"
//         component={Link}
//         to="/gallery"
//         sx={{ mt: "1rem" }}
//       >
//         See More In Gallery
//       </Button>
//     </Box>
//   );
// }

// export default FeaturedGallery;
