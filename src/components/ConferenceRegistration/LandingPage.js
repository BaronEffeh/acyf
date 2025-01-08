import React, { useState } from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel, Dialog, DialogTitle, DialogContent } from "@mui/material";

function LandingPage({ onRegister }) {
  const [showRules, setShowRules] = useState(false);
  const [rulesAccepted, setRulesAccepted] = useState(false);

  const handleOpenRules = () => setShowRules(true);
  const handleCloseRules = () => setShowRules(false);
  const handleCheckboxChange = (event) => setRulesAccepted(event.target.checked);

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 4,
        bgcolor: "#f8f8f8",
        height: "60vh",
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        2025 ACYF Annual Conference
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        The 11th Annual National Conference of the Abuja Christian Youth Forum
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Please register to be a part of the event.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          textTransform: "none",
          fontSize: "1rem",
          padding: "0.5rem 2rem",
          mb: 2,
        }}
        onClick={handleOpenRules}
      >
        View Rules and Regulations
      </Button>
      <br />
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          fontSize: "1rem",
          padding: "0.5rem 2rem",
        }}
        onClick={onRegister}
        disabled={!rulesAccepted} // Disable the button unless the checkbox is checked
      >
        Register Now
      </Button>

      {/* Rules and Regulations Dialog */}
      <Dialog open={showRules} onClose={handleCloseRules} fullWidth maxWidth="sm">
        <DialogTitle variant="h4">2025 Camp Rules and Regulations</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            1. Participants must adhere to the schedule of events. <br />
            2. Respectful behavior is expected toward all attendees and speakers. <br />
            3. Mobile devices should be on silent during sessions. <br />
            4. No unauthorized recordings of sessions are permitted. <br />
            5. Participation certificates will only be issued to attendees present for training sessions. <br />
            6. Please adhere to all venue policies and guidelines. <br />
            7. Any violation of these rules may lead to removal from the event.
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={rulesAccepted}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="I have read and agree to the rules and regulations"
          />
          <Box textAlign="right" mt={2}>
            <Button variant="contained" color="primary" onClick={handleCloseRules}>
              Continue
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default LandingPage;
