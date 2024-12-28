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
  Modal,
  IconButton,
} from "@mui/material";
import { Close, ArrowBack, ArrowForward } from "@mui/icons-material";

function Gallery({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
  const itemsPerPage = 6;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const handleImageClick = (sectionIndex, imageIndex) => {
    setSelectedSectionIndex(sectionIndex);
    setSelectedImageIndex(imageIndex);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
    setSelectedSectionIndex(null);
  };

  const handleNext = () => {
    const currentSection = filteredData[selectedSectionIndex];
    if (selectedImageIndex < currentSection.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
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
          (section, sectionIndex) =>
            section.images.length > 0 && (
              <Box key={sectionIndex} sx={{ my: 4 }}>
                <Typography variant="h5" gutterBottom>
                  {section.section}
                </Typography>
                <Grid container spacing={2}>
                  {section.images
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((image, imageIndex) => (
                      <Grid item xs={12} sm={6} md={4} key={imageIndex}>
                        <Card
                          sx={{
                            transform: "scale(1)",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                          onClick={() =>
                            handleImageClick(sectionIndex, imageIndex)
                          }
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={image.src}
                            alt={image.title}
                          />
                          <Typography
                            sx={{ textAlign: "center", mt: 1 }}
                            variant="subtitle1"
                          >
                            {image.title}
                          </Typography>
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

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && selectedSectionIndex !== null && (
        <Modal open onClose={handleClose}>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
              outline: "none",
              maxWidth: "90%",
              maxHeight: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ position: "absolute", top: 10, right: 10 }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={handlePrevious} disabled={selectedImageIndex === 0}>
                <ArrowBack />
              </IconButton>
              <img
                src={
                  filteredData[selectedSectionIndex].images[selectedImageIndex]
                    .src
                }
                alt={
                  filteredData[selectedSectionIndex].images[selectedImageIndex]
                    .title
                }
                style={{
                  maxHeight: "80vh",
                  maxWidth: "80vw",
                  objectFit: "contain",
                }}
              />
              <IconButton
                onClick={handleNext}
                disabled={
                  selectedImageIndex ===
                  filteredData[selectedSectionIndex].images.length - 1
                }
              >
                <ArrowForward />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "center", fontWeight: "bold" }}
            >
              {
                filteredData[selectedSectionIndex].images[selectedImageIndex]
                  .title
              }
            </Typography>
          </Box>
        </Modal>
      )}
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
