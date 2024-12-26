import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  { name: "Alice Johnson", feedback: "Attending the conference was life-changing! I felt spiritually renewed." },
  { name: "Michael Lee", feedback: "The events are so well-organized, and the team is truly inspiring!" },
  { name: "Grace Adams", feedback: "I’ve met amazing people and grown in my faith through this forum." },
  { name: "Robert Carter", feedback: "This forum brings us closer to God and to one another." },
  { name: "Emily Davis", feedback: "An incredible experience! Can't wait for next year's conference." },
  { name: "Daniel White", feedback: "The sessions were engaging and very insightful." },
  { name: "Sophia Brown", feedback: "A great initiative for empowering youth through faith." },
  { name: "Chris Walker", feedback: "Highly recommended for anyone seeking spiritual growth!" },
];

// Custom Arrow Component
function Arrow({ className, style, onClick, direction }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        background: "rgba(0, 132, 255, 0.5)", // Semi-transparent background
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 2, // Ensure the arrow is above other elements
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {direction === "left" ? "<" : ">"}
    </div>
  );
}

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ my: 5, px: 2 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        What People Are Saying
      </Typography>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                "{review.feedback}"
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 2, fontWeight: "bold", textAlign: "right" }}
              >
                - {review.name}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Review;





// import React from "react";
// import { Box, Grid, Typography, Paper } from "@mui/material";

// const reviews = [
//   {
//     name: "Alice Johnson",
//     feedback: "Attending the conference was life-changing! I felt spiritually renewed.",
//   },
//   {
//     name: "Michael Lee",
//     feedback: "The events are so well-organized, and the team is truly inspiring!",
//   },
//   {
//     name: "Grace Adams",
//     feedback: "I’ve met amazing people and grown in my faith through this forum.",
//   },
// ];

// function Review() {
//   return (
//     <Box sx={{ my: 5, px: 2 }}>
//       <Typography variant="h4" textAlign="center" gutterBottom>
//         What People Are Saying
//       </Typography>
//       <Grid container spacing={4}>
//         {reviews.map((review, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="body1" sx={{ fontStyle: "italic" }}>
//                 "{review.feedback}"
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{ mt: 2, fontWeight: "bold", textAlign: "right" }}
//               >
//                 - {review.name}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Review;
