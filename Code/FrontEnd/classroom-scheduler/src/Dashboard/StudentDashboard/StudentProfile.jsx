import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Footer from "../../Footer/footer";
import { addStudentData } from "../../Services/user-service";
import StudentHeader from "./StudentHeader";

function StudentProfile() {
  const studentData = JSON.parse(sessionStorage.getItem("student"));

  const [data, setData] = React.useState({
    classcoordinator_id: studentData.classcoordinator_id,
    student_id:studentData.student_id,
    first_name: studentData.first_name,
    middle_name: studentData.middle_name,
    last_name: studentData.last_name,
    photo: null,
    institute_name: studentData.institute_name,
    username: studentData.username,
    password: studentData.password,
    email_id: studentData.email_id,
    phone: studentData.phone,
  });

  const handleChange = (event) => {
    event.preventDefault();

    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    addStudentData(data)
      .then((response) => {
        sessionStorage.setItem("student", JSON.stringify(response));
        window.location.reload();
        console.log("success log");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });
  };

  return (
    <div>
      <StudentHeader />
      <Box sx={{ flexGrow: 1, mt: "10%" }}>
        <Grid container spacing={35}>
          <Grid item xs={4}>
            <Box>
              <Paper elevation={3} sx={{ height: 600, width: 400, ml: "50%" }}>
                <Box>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      paddingTop: "40%",
                    }}
                  >
                    <Avatar
                      alt={studentData.first_name}
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 200, height: 200 }}
                    />
                  </div>
                  <Typography variant="h4" align="center">
                    {studentData.first_name} {studentData.last_name}
                  </Typography>
                  <Typography align="center">Student</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Paper elevation={3} sx={{ height: 600, width: 800 }}>
                <Box>
                  <Grid container paddingTop={5} paddingLeft={10}>
                    <Grid item xs={12}>
                      <Typography variant="h3" paddingLeft={"15%"}>
                        Welcome
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} paddingTop={5}>
                      <Typography variant="h5">Personal Details</Typography>
                    </Grid>
                    <Grid item xs={6} paddingTop={2}>
                      <TextField
                        helperText="First Name"
                        name="first_name"
                        onChange={(e) => handleChange(e)}
                        defaultValue={studentData.first_name}
                      />
                    </Grid>
                    <Grid item xs={6} paddingTop={2}>
                      <TextField
                        helperText="Last Name"
                        name="last_name"
                        onChange={(e) => handleChange(e)}
                        defaultValue={studentData.last_name}
                      />
                    </Grid>
                    <Grid item xs={6} paddingTop={2}>
                      <TextField
                        name="username"
                        onChange={(e) => handleChange(e)}
                        helperText="Username"
                        defaultValue={studentData.username}
                      />
                    </Grid>
                    <Grid item xs={6} paddingTop={2}>
                      <TextField
                        name="password"
                        onChange={(e) => handleChange(e)}
                        helperText="Password"
                        defaultValue={studentData.password}
                      />
                    </Grid>
                    <Grid item xs={12} paddingTop={5}>
                      <Typography variant="h5">Contact Details</Typography>
                    </Grid>
                    <Grid item xs={6} paddingTop={2}>
                      <TextField
                        name="email_id"
                        onChange={(e) => handleChange(e)}
                        helperText="Email Address"
                        value={studentData.email_id}
                      />
                    </Grid>
                    <Grid item xs={6} paddingTop={2}>
                      <TextField
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        helperText="Phone"
                        defaultValue={studentData.phone}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        align="center"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Edit Profile
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default StudentProfile;
