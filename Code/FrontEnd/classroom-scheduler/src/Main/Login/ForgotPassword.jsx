import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {TextField, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright } from '@mui/icons-material';


const theme = createTheme();

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flex:1,
    flexDirection:'center',
    textAlign:'center'
  };

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h3" component="div" paddingTop={"5%"}>
      Forgot Password
      </Typography>
      <Typography variant="body2" paddingTop={"5%"}>
      Enter your email address below and we'll send you a link to reset your password.
        <br />
      </Typography >
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      paddingTop={"10%"}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email ID"
          defaultValue=""
        />
        </div>
        <Button variant="contained">
         Submit
        </Button>
        </Box>
    </CardContent>
   
  </React.Fragment>
);

export default function ForgotPassword() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={style}>
      <Card variant="outlined">{card}</Card>
    </Box>
    <Copyright />
    </ThemeProvider>
  );
}
