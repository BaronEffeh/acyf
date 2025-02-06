import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  InputLabel,
  Paper,
  Grid,
} from "@mui/material";
import Logo from "../assets/images/acyfLogo.jpg";

function Donate() {
  const [donationType, setDonationType] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("Monthly");

  const handleDonationTypeChange = (event) => setDonationType(event.target.value);
  const handleDonationAmountChange = (event) => setDonationAmount(event.target.value);
  const handleCustomAmountChange = (event) => setCustomAmount(event.target.value);
  const handleFrequencyChange = (event) => setDonationFrequency(event.target.value);

  const handleCancel = () => {
    setDonationType("");
    setDonationAmount("");
    setCustomAmount("");
    setDonationFrequency("Monthly");
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              height: "95%",
              bgcolor: "#d1cbcb",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              backgroundImage: `url(${Logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                // color: "yellow",
                textAlign: "center",
              }}
            >
              We Can Build The Youth!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Please Donate to ACYF
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              sx={{ mb: 2 }}
            >
              Welcome to Abuja Christian Youth Forum donation, please fill out the form below. 
              Hopefully, it is blessed.
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Choose a donation type</InputLabel>
              <Select
                value={donationType}
                onChange={handleDonationTypeChange}
              >
                <MenuItem value="Programs and events">Programs and events</MenuItem>
                <MenuItem value="Evangelism">Evangelism</MenuItem>
                <MenuItem value="Cost of education">Cost of education</MenuItem>
                <MenuItem value="Medical support">Medical support</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ mb: 1 }}>
              <strong>Choose a donation amount</strong>
            </Typography>
            <RadioGroup
              value={donationAmount}
              onChange={handleDonationAmountChange}
            >
              <FormControlLabel
                value="1000"
                control={<Radio />}
                label="₦1,000"
              />
              <FormControlLabel
                value="3000"
                control={<Radio />}
                label="₦3,000"
              />
              <FormControlLabel
                value="5000"
                control={<Radio />}
                label="₦5,000"
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Enter a custom donation amount"
              />
            </RadioGroup>
            {donationAmount === "custom" && (
              <TextField
                fullWidth
                placeholder="Enter custom amount (₦)"
                value={customAmount}
                onChange={handleCustomAmountChange}
                sx={{ mt: 2 }}
              />
            )}
            <Typography sx={{ mt: 3, mb: 1 }}>
              <strong>Choose a donation frequency</strong>
            </Typography>
            <RadioGroup
              row
              value={donationFrequency}
              onChange={handleFrequencyChange}
            >
              <FormControlLabel
                value="Monthly"
                control={<Radio />}
                label="Monthly"
              />
              <FormControlLabel
                value="One time"
                control={<Radio />}
                label="One time"
              />
            </RadioGroup>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
              >
                Donate
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Donate;
