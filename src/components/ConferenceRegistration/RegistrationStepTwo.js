import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";

function RegistrationStepTwo({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    districtAddress: "",
    currentAddress: "",
    chamberDistrict: "",
    chamberAddress: "",
    institutionName: "",
    photo: null,
    covidCert: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mx: "auto", mt: 2, maxWidth: 600 }}>
      <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
        Register Now!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Fill the information carefully.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Current State of Residence</InputLabel>
            <Select
              name="stateOfResidence"
              value={formData.stateOfResidence}
              onChange={handleChange}
            >
              <MenuItem value="State 1">State 1</MenuItem>
              <MenuItem value="State 2">State 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Church/Congregation (where do you worship?)"
            fullWidth
            name="churchCongregation"
            value={formData.churchCongregation}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Name of Preacher/Elder/Church Leader"
            fullWidth
            name="churchLeaderName"
            value={formData.churchLeaderName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number of Church Leader"
            fullWidth
            name="churchLeaderPhone"
            value={formData.churchLeaderPhone}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>Attarch your image here:</InputLabel>
          <TextField
            type="file"
            fullWidth
            name="photo"
            onChange={handleFileChange}
            required
          />
        </Grid>
      </Grid>
      <Box textAlign="right" mt={3}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mr: 2 }}
          onClick={onBack} // Navigate to the previous step
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Box>
    </Paper>
  );
}

export default RegistrationStepTwo;





// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Paper,
// } from "@mui/material";

// function RegistrationStepTwo({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     districtAddress: "",
//     currentAddress: "",
//     chamberDistrict: "",
//     chamberAddress: "",
//     institutionName: "",
//     photo: null,
//     covidCert: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: files[0] }));
//   };

//   const handleSubmit = () => {
//     onSubmit(formData);
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 4, mx: "auto", maxWidth: 600 }}>
//       <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
//         Register Now!
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4 }}>
//         Fill the information carefully.
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <InputLabel>Current District Address</InputLabel>
//             <Select
//               name="districtAddress"
//               value={formData.districtAddress}
//               onChange={handleChange}
//             >
//               <MenuItem value="District 1">District 1</MenuItem>
//               <MenuItem value="District 2">District 2</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Current Address"
//             fullWidth
//             name="currentAddress"
//             value={formData.currentAddress}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <InputLabel>Current Chamber District</InputLabel>
//             <Select
//               name="chamberDistrict"
//               value={formData.chamberDistrict}
//               onChange={handleChange}
//             >
//               <MenuItem value="District A">District A</MenuItem>
//               <MenuItem value="District B">District B</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Institution Name"
//             fullWidth
//             name="institutionName"
//             value={formData.institutionName}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             type="file"
//             fullWidth
//             name="photo"
//             onChange={handleFileChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             type="file"
//             fullWidth
//             name="covidCert"
//             onChange={handleFileChange}
//             required
//           />
//         </Grid>
//       </Grid>
//       <Box textAlign="right" mt={3}>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleSubmit}
//         >
//           Register
//         </Button>
//       </Box>
//     </Paper>
//   );
// }

// export default RegistrationStepTwo;
