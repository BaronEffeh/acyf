import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import JoinUsImg from "../assets/images/join-us-image.png";

function JoinUs() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0A192F",
        padding: 4,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: 900,
          bgcolor: "#0D213C",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url(${JoinUsImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            {isLogin ? "Welcome Back 👋" : "Join us today 👋"}
          </Typography>
          <Typography variant="body1" sx={{ color: "#AAB2C2", mb: 3 }}>
            {isLogin
              ? "Login to your account to continue exploring ACYF."
              : "ACYF gives you the platform to build and strengthen your faith in a Christian community of the youth!"}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              color: "#fff",
              borderColor: "#1F2A3A",
              textTransform: "none",
              mb: 3,
              "&:hover": {
                borderColor: "#AAB2C2",
              },
            }}
          >
            {isLogin ? "Login with Google" : "Sign up with Google"}
          </Button>

          {!isLogin && (
            <TextField
              fullWidth
              label="First & Last Name"
              placeholder="i.e. Davon Lean"
              variant="outlined"
              InputLabelProps={{ style: { color: "#AAB2C2" } }}
              sx={{
                mb: 2,
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1F2A3A",
                  },
                  "&:hover fieldset": {
                    borderColor: "#AAB2C2",
                  },
                },
              }}
            />
          )}
          <TextField
            fullWidth
            label="Email Address"
            placeholder="i.e. davon@mail.com"
            variant="outlined"
            InputLabelProps={{ style: { color: "#AAB2C2" } }}
            sx={{
              mb: 2,
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1F2A3A",
                },
                "&:hover fieldset": {
                  borderColor: "#AAB2C2",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="********"
            variant="outlined"
            InputLabelProps={{ style: { color: "#AAB2C2" } }}
            sx={{
              mb: 2,
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1F2A3A",
                },
                "&:hover fieldset": {
                  borderColor: "#AAB2C2",
                },
              },
            }}
          />

          {isLogin && (
            <FormControlLabel
              control={<Checkbox sx={{ color: "#AAB2C2" }} />}
              label={
                <Typography variant="body2" sx={{ color: "#AAB2C2" }}>
                  Remember me
                </Typography>
              }
              sx={{ mb: 3 }}
            />
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              bgcolor: "#007BFF",
              color: "#fff",
              py: 1.5,
              "&:hover": {
                bgcolor: "#0056CC",
              },
            }}
          >
            {isLogin ? "Login" : "Create Account"}
          </Button>

          <Typography
            variant="body2"
            sx={{
              color: "#AAB2C2",
              textAlign: "center",
              mt: 2,
            }}
          >
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <Link
                  href="#"
                  onClick={toggleForm}
                  sx={{ color: "#007BFF", textDecoration: "none" }}
                >
                  Create free account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  href="#"
                  onClick={toggleForm}
                  sx={{ color: "#007BFF", textDecoration: "none" }}
                >
                  Login
                </Link>
              </>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JoinUs;
