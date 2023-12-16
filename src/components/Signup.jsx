import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Root = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "rgb(238,174,202)",
  background:
    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
});

const Paper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
  borderRadius: "10px",
  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
  background: "#fff",
  height: "70vh",
  width: "100%",
});

const Form = styled(Box)({
  width: "100%", // Fix IE 11 issue.
  marginTop: 1,
});

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
    <Root>
      <Container component="main">
        <CssBaseline />
        <Paper elevation={3}>
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
              style={{ display: "block", margin: "2rem auto" }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: 20 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Paper>
      </Container>
    </Root>
  );
};

export default Signup;
