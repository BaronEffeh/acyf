import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  TextField,
  MenuItem,
  Pagination,
  Container,
} from "@mui/material";

function Gallery({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page on category change
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const filteredData = data.map((section) => ({
    ...section,
    images: section.images.filter(
      (img) =>
        (category === "All" || img.category === category) &&
        img.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Gallery
        </Typography>

        {/* Search and Filter */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ flex: 1, marginRight: 2 }}
          />
          <TextField
            select
            label="Category"
            variant="outlined"
            size="small"
            value={category}
            onChange={handleCategoryChange}
            sx={{ width: 200 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
            <MenuItem value="Workshops">Workshops</MenuItem>
            <MenuItem value="Outreach">Outreach</MenuItem>
          </TextField>
        </Box>

        {/* Gallery Sections */}
        {filteredData.map(
          (section, index) =>
            section.images.length > 0 && (
              <Box key={index} sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>
                  {section.section}
                </Typography>
                <Grid container spacing={2}>
                  {section.images
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((image, idx) => (
                      <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="200"
                            image={image.src}
                            alt={image.title}
                          />
                        </Card>
                      </Grid>
                    ))}
                </Grid>

                {/* Pagination */}
                <Pagination
                  count={Math.ceil(section.images.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                />
              </Box>
            )
        )}
      </Box>
    </Container>
  );
}

export default Gallery;





// import React from "react";
// import { Box, Typography, Grid, Card, CardMedia, Container } from "@mui/material";

// const galleryData = [
//   {
//     section: "Conference Highlights",
//     images: [
//       "/assets/images/conference1.jpg",
//       "/assets/images/conference2.jpg",
//       "/assets/images/conference3.jpg",
//     ],
//   },
//   {
//     section: "Workshops",
//     images: [
//       "/assets/images/workshop1.jpg",
//       "/assets/images/workshop2.jpg",
//       "/assets/images/workshop3.jpg",
//     ],
//   },
//   {
//     section: "Community Outreach",
//     images: [
//       "/assets/images/outreach1.jpg",
//       "/assets/images/outreach2.jpg",
//       "/assets/images/outreach3.jpg",
//     ],
//   },
// ];

// function Gallery() {
//   return (
//     <Container>
//     <Box sx={{ my: 5 }}>
//       <Typography variant="h4" textAlign="center" gutterBottom>
//         Our Gallery
//       </Typography>
//       {galleryData.map((section, index) => (
//         <Box key={index} sx={{ my: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             {section.section}
//           </Typography>
//           <Grid container spacing={2}>
//             {section.images.map((image, idx) => (
//               <Grid item xs={12} sm={6} md={4} key={idx}>
//                 <Card>
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={image}
//                     alt={`${section.section} image ${idx + 1}`}
//                   />
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       ))}
//     </Box>
//     </Container>
//   );
// }

// export default Gallery;
