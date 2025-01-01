import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
} from "@mui/material";

function OurTeam({ teamMembers }) {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [pageStates, setPageStates] = useState({}); // To track page for each category
  const membersPerPage = 5; // Number of members per page

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  const filteredMembers = teamMembers.filter((member) => {
    const matchesCategory =
      categoryFilter === "" || member.category === categoryFilter;
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categorizedMembers = filteredMembers.reduce((acc, member) => {
    if (!acc[member.category]) acc[member.category] = [];
    acc[member.category].push(member);
    return acc;
  }, {});

  const handlePageChange = (category, newPage) => {
    setPageStates((prev) => ({
      ...prev,
      [category]: newPage,
    }));
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Page Header */}
      <Typography variant="h4" align="center" gutterBottom color="primary">
        Our Team
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
      >
        Meet the passionate team working behind the scenes to make the Abuja
        Christian Youth Forum a success!
      </Typography>

      {/* Search and Filter */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 4,
        }}
      >
        <TextField
          label="Search by Name or Role"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="category-filter-label">Filter by Category</InputLabel>
          <Select
            labelId="category-filter-label"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            label="Filter by Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Executive">Executive</MenuItem>
            <MenuItem value="Central Planning Committee">
              Central Planning Committee
            </MenuItem>
            <MenuItem value="Members">Members</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Team Members by Category */}
      {Object.entries(categorizedMembers).map(([category, members]) => {
        const currentPage = pageStates[category] || 1;
        const startIndex = (currentPage - 1) * membersPerPage;
        const paginatedMembers = members.slice(
          startIndex,
          startIndex + membersPerPage
        );

        return (
          <Box key={category} sx={{ mb: 4 }}>
            {/* Category Heading */}
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold", color: "#1976d2" }}
            >
              {category}
            </Typography>
            {/* Category Members */}
            <Grid container spacing={4}>
              {paginatedMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={member.image}
                      alt={`${member.name}'s photo`}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {member.role}
                      </Typography>
                      <Box display="flex" justifyContent="center">
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            textTransform: "capitalize",
                            backgroundColor: "#1976d2",
                            color: "white",
                            "&:hover": { backgroundColor: "#1565c0" },
                          }}
                          onClick={() => handleOpen(member)}
                        >
                          View Profile
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Pagination */}
            <Box
              display="flex"
              justifyContent="center"
              mt={3}
            >
              <Pagination
                count={Math.ceil(members.length / membersPerPage)}
                page={currentPage}
                onChange={(e, page) => handlePageChange(category, page)}
                color="primary"
              />
            </Box>
          </Box>
        );
      })}

      {/* Modal for Profile Details */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, md: 500 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {selectedMember && (
            <>
              <Box
                component="img"
                src={selectedMember.image}
                alt={`${selectedMember.name}'s photo`}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                  boxShadow: 3,
                }}
              />
              <Typography variant="h5" gutterBottom>
                {selectedMember.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {selectedMember.role}
              </Typography>
              <Typography variant="body1">{selectedMember.bio}</Typography>
              <Box textAlign="right" mt={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default OurTeam;





// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   Modal,
//   TextField,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
// } from "@mui/material";

// function OurTeam({ teamMembers }) {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   const filteredMembers = teamMembers.filter((member) => {
//     const matchesCategory =
//       categoryFilter === "" || member.category === categoryFilter;
//     const matchesSearch =
//       member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       member.role.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const categorizedMembers = filteredMembers.reduce((acc, member) => {
//     if (!acc[member.category]) acc[member.category] = [];
//     acc[member.category].push(member);
//     return acc;
//   }, {});

//   return (
//     <Box sx={{ p: 4 }}>
//       {/* Page Header */}
//       <Typography variant="h4" align="center" gutterBottom color="primary">
//         Our Team
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
//       >
//         Meet the passionate team working behind the scenes to make the Abuja
//         Christian Youth Forum a success!
//       </Typography>

//       {/* Search and Filter */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           gap: 2,
//           mb: 4,
//         }}
//       >
//         <TextField
//           label="Search by Name or Role"
//           variant="outlined"
//           fullWidth
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <FormControl fullWidth>
//           <InputLabel id="category-filter-label">Filter by Category</InputLabel>
//           <Select
//             labelId="category-filter-label"
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             label="Filter by Category"
//           >
//             <MenuItem value="">All Categories</MenuItem>
//             <MenuItem value="Executive">Executive</MenuItem>
//             <MenuItem value="Central Planning Committee">
//               Central Planning Committee
//             </MenuItem>
//             <MenuItem value="Members">Members</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Team Members by Category */}
//       {Object.entries(categorizedMembers).map(([category, members]) => (
//         <Box key={category} sx={{ mb: 4 }}>
//           {/* Category Heading */}
//           <Typography
//             variant="h5"
//             sx={{ mb: 2, fontWeight: "bold", color: "#1976d2" }}
//           >
//             {category}
//           </Typography>
//           {/* Category Members */}
//           <Grid container spacing={4}>
//             {members.map((member, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
//                 <Card
//                   sx={{
//                     borderRadius: 2,
//                     boxShadow: 3,
//                     "&:hover": {
//                       boxShadow: 6,
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={member.image}
//                     alt={`${member.name}'s photo`}
//                   />
//                   <CardContent>
//                     <Typography
//                       variant="h6"
//                       align="center"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       {member.name}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       align="center"
//                       color="text.secondary"
//                       sx={{ mb: 2 }}
//                     >
//                       {member.role}
//                     </Typography>
//                     <Box display="flex" justifyContent="center">
//                       <Button
//                         variant="contained"
//                         size="small"
//                         sx={{
//                           textTransform: "capitalize",
//                           backgroundColor: "#1976d2",
//                           color: "white",
//                           "&:hover": { backgroundColor: "#1565c0" },
//                         }}
//                         onClick={() => handleOpen(member)}
//                       >
//                         View Profile
//                       </Button>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       ))}

//       {/* Modal for Profile Details */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: 300, md: 500 },
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//             textAlign: "center",
//           }}
//         >
//           {selectedMember && (
//             <>
//               <Box
//                 component="img"
//                 src={selectedMember.image}
//                 alt={`${selectedMember.name}'s photo`}
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   borderRadius: "50%",
//                   mx: "auto",
//                   mb: 2,
//                   boxShadow: 3,
//                 }}
//               />
//               <Typography variant="h5" gutterBottom>
//                 {selectedMember.name}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 color="text.secondary"
//                 gutterBottom
//               >
//                 {selectedMember.role}
//               </Typography>
//               <Typography variant="body1">{selectedMember.bio}</Typography>
//               <Box textAlign="right" mt={2}>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={handleClose}
//                 >
//                   Close
//                 </Button>
//               </Box>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </Box>
//   );
// }

// export default OurTeam;
