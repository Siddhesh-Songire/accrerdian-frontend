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
  // background: "linear-gradient(to right, #4a4a4a, #2b2b2b)",
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

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login Data:", loginData);
  };

  return (
    <Root>
      <Container component="main">
        <CssBaseline />
        <Paper elevation={3}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <Form onSubmit={handleLoginSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username or Email"
                  name="username"
                  variant="outlined"
                  required
                  onChange={handleLoginChange}
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
                  onChange={handleLoginChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ display: "block", margin: "2rem auto" }}
            >
              Login
            </Button>
          </Form>
          <Typography variant="body2" style={{ marginTop: 20, color: "#555" }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Container>
    </Root>
  );
};

export default Login;
