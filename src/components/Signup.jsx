// src/Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import image from "../assets/image1.jpg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup Data:", signupData);
  };

  const CustomFeatures = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    ".outside-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".inner-container": {
      // background: "red",
      height: "80vh",
      display: "flex",
      // flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0px 3px 5px 2px rgba(0,0,0,0.75)",
      border: "1px solid black",
    },

    ".imgbackground": {
      objectFit: "cover",
      width: "50%",
      height: "100%",
      background: "blue",
      ".img": {
        width: "100%",
        height: "100%",
      },
    },

    ".left-side": {
      padding: "3rem",
    },
  }));

  return (
    <CustomFeatures>
      <Container className="outside-coontainer">
        <Grid container className="inner-container">
          <Grid item xs={6} className="left-side">
            <Typography variant="h5" gutterBottom>
              Sign Up
            </Typography>
            <form onSubmit={handleSignupSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    variant="outlined"
                    required
                    onChange={handleSignupChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                    onChange={handleSignupChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    required
                    onChange={handleSignupChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    required
                    onChange={handleSignupChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
              >
                Sign Up
              </Button>
            </form>
            <Typography variant="body2" style={{ marginTop: 20 }}>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Grid>
          <Grid item xs={6} className="imgbackground">
            <img src={image} alt="fafd" className="img" />
          </Grid>
        </Grid>
      </Container>
    </CustomFeatures>
  );
};

export default Signup;

//
