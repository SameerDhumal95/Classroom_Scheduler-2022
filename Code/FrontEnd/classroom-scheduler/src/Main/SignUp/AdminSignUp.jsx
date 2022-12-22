import * as React from 'react';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Box,Typography,Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../Footer/Copyright';
import {signUp} from '../../Services/user-service'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const theme = createTheme();

export default function AdminSignUp() {

  const [data,setData]=React.useState(
    {
      first_name:"",
      middle_name:"",
      last_name:"",
      photo:null,
      institute_name:"",
      username:"",
      password:"",
      email_id:"",
      phone:"",
    }
  )

    const [error,setError]=React.useState({
      errors:{},
      isError:false
    })

    const handleChange=(event)=>{
      event.preventDefault();
      console.log(event.target.name,event.target.value);
      setData((prevState)=>
      ({...prevState,
      [event.target.name]:event.target.value}))
    }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    if(error.isError){
      toast.error("Form data invalid!");
      setError({
        errors:{},
        isError:false
      })
      return;
    }

    signUp(data).then((response)=>{
      console.log("success log");
      toast.success("user registered successfully");
    }).catch((error)=>{
      console.log(error);
      console.log('Error Log');
      setError({
        errors:error,
        isError:true
      })
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" textAlign={'center'}>
           Class-Coordinator <br/> Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                {/* First Name */}
                <TextField
                  error={error.errors?.response?.data?.first_name?true:false}
                  variant='outlined'
                  helperText={error.errors?.response?.data?.first_name}
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e)=>handleChange(e)}
                  autoFocus
                />
              </Grid>
              {/* Middle Name */}
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="middleName"
                  label="Middle Name"
                  name="middle_name"
                  onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              {/* Institue Name */}
              <Grid item xs={12}>
                <TextField
                  error={error.errors?.response?.data?.institute_name?true:false}
                  helperText={error.errors?.response?.data?.institute_name}
                  required
                  fullWidth
                  id="institute_name"
                  label="Institute Name"
                  onChange={(e)=>handleChange(e)}
                  name="institute_name"
                />
              </Grid>
              {/* UserName */}
              <Grid item xs={12}>
                <TextField
                  error={error.errors?.response?.data?.username?true:false}
                  helperText={error.errors?.response?.data?.username}
                  required
                  fullWidth
                  id="username"
                  label="UserName"
                  name="username"
                  onChange={(e)=>handleChange(e)}
                  autoComplete="email"
                />
              </Grid>
              {/* Password */}
              <Grid item xs={12}>
                <TextField
                  error={error.errors?.response?.data?.password?true:false}
                  helperText={error.errors?.response?.data?.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e)=>handleChange(e)}
                  autoComplete="new-password"
                />
              </Grid>
              {/* Email address */}
              <Grid item xs={12}>
                <TextField
                  error={error.errors?.response?.data?.email_id?true:false}
                  helperText={error.errors?.response?.data?.email_id}
                  required
                  fullWidth
                  id="email_id"
                  label="Email Address"
                  name="email_id"
                  onChange={(e)=>handleChange(e)}
                  autoComplete="email"
                />
              </Grid>
              {/* Phone No */}
              <Grid item xs={12}>
                <TextField
                  error={error.errors?.response?.data?.phone?true:false}
                  helperText={error.errors?.response?.data?.phone}
                  required
                  fullWidth
                  id="phone"
                  label="Phone No."
                  name="phone"
                  onChange={(e)=>handleChange(e)}
                  autoComplete="phone"
                />
              </Grid>
            </Grid>
            {/* Button */}
            <Grid container spacing={"2"} justifyContent="center">
              <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Grid>
            <Grid item>
            <Button
              type="reset"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
            </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/AdminLogin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}