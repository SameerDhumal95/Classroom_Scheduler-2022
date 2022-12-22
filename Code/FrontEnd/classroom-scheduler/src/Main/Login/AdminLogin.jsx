import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../Footer/Copyright";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminLogin } from "../../Services/user-service";

const theme = createTheme();

export default function AdminLogin() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.username.trim() === "" || user.password.trim() === "") {
      toast.warning("Field must not be null !");
      return;
    }

    adminLogin(user)
      .then((response) => {
        toast.success("user login successfully");
        sessionStorage.setItem("admin", JSON.stringify(response));
        navigate("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
        toast.error("Please input valid credentials");
      });
  };


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "rgb(255, 250, 231)",
    borderRadius: 2,
    p: 2,
    flex: 1,
    flexDirection: "center",
  };

  return (
    <>
      <Box sx={style}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
              >
                <label htmlFor="username">Email Address</label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  //label="Email Address"
                  name="username"
                  onChange={handleChange}
                  autoComplete="email"
                  autoFocus
                />
                <label htmlFor="password">Password</label><br />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  //label="Password"
                  type="password"
                  onChange={handleChange}
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                  onSubmit={handleSubmit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/ForgotPassword" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/AdminSignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}
