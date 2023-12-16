import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

import image from "../assets/image1.jpg";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Add your validation rules here
    if (!signupData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!signupData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!signupData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (signupData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!signupData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (signupData.confirmPassword !== signupData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with signup logic
      console.log("Signup Data:", signupData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Container className="outside-container">
      <Grid container className="inner-container" spacing={2}>
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
                  error={Boolean(errors.username)}
                  helperText={errors.username}
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
                  error={Boolean(errors.email)}
                  helperText={errors.email}
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
                  error={Boolean(errors.password)}
                  helperText={errors.password}
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
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
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
        <Grid item xs={12} className="imgbackground">
          <img src={image} alt="fafd" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
