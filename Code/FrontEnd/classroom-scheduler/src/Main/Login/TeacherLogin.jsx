import React, { useState } from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid,Box,Typography,Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../Footer/Copyright';
import { useNavigate } from 'react-router-dom';
import {teacherLogin} from '../../Services/user-service'
import { toast } from 'react-toastify';

const theme = createTheme();

export default function TeacherLogin() {
  const [user,setUser]=useState({
    username:'',
    password:'',
  })

  const navigate = useNavigate()
  //const dispatch= useDispatch()

  const handleChange=(e)=>{
    setUser((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    if(user.username.trim()==='' || user.password.trim()===''){
      toast.warning('Field must not be null !');
    return;
    }

    teacherLogin(user).then((response)=>{
      console.log("success log");
      toast.success("user login successfully");
      sessionStorage.setItem('teacher',JSON.stringify(response));
      navigate("/TeacherDashboard")
    }).catch((error)=>{
      console.log(error);
      toast.error("Please input valid credentials");
      console.log('Error Log');
    })

  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height:600,
    bgcolor: "rgb(255, 250, 231)",
    borderRadius:2,
    p: 2,
    flex: 1,
    flexDirection: "center",
  };

  return (
    <Box sx={style}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 0.5, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Teacher
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <label htmlFor="username">Email Address</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="username"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
            <label htmlFor="password">Password</label>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container textAlign={"center"}>
              <Grid item xs>
              <Link href="/ForgotPassword" variant="body2">
                  Forgot password?
                </Link>
                </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Container>
    </ThemeProvider>
    </Box>
  );
}