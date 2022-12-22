import {
  Button,
  Grid,
  Paper,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useState } from "react";
import { ClockLoader } from "react-spinners";
import Footer from "../../Footer/footer";

import img1 from "../../Assets/images/student.png";
import img2 from "../../Assets/images/Teacher.jpg";
import img3 from "../../Assets/images/s.png";
import img4 from "../../Assets/images/Assignments.jpg";

import {
  getCoordinatorData,
  noOfStudentsData,
  noOfSubjectsData,
  noOfTeachersData,
} from "../../Services/user-service";

import StudentHeader from "./StudentHeader";
import STimetable from "./STimetable";

const StudentDashboard = () => {
  const studentData = JSON.parse(sessionStorage.getItem("student"));
  const [loading, setLoading] = useState(false);
  const [studentCount, setStudentCount] = useState();
  const [teacherCount, setTeacherCount] = useState();
  const [subjectCount, setSubjectCount] = useState();
  const [setAdminData] = useState();

  //use Effect for Count and Admin Data
  useEffect(() => {
    noOfStudentsData(studentData)
      .then((response) => {
        setStudentCount(response);
        console.log("Count ", response, studentCount);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });

    //Teacher Count
    noOfTeachersData(studentData)
      .then((response) => {
        setTeacherCount(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });

    //SubjectCount
    noOfSubjectsData(studentData)
      .then((response) => {
        setSubjectCount(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });

    //Admin Data
    getCoordinatorData(studentData)
      .then((response) => {
        setAdminData(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[500],
    },
  }));

  return (
    <>
      <div>
        {loading ? (
          <div className="preloader">
            <ClockLoader
              color={"rgb(253, 132, 31)"}
              loading={loading}
              size={150}
            />
          </div>
        ) : (
          <>
            <StudentHeader />
            <div
              className="teacher-dashboard"
              style={{
                background: "rgb(239, 239, 239)",
                padding: "0px",
                paddingTop: 10,
              }}
            >
              {/* <Cards /> */}
              <Box style={{ marginTop: "100px" }}>
                <Typography variant="h2" align="center" pb={2}></Typography>
                <Container className="cardGrid" sx={{ mt: 2 }}>
                  <Grid
                    container
                    spacing={5}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Card
                        sx={{
                          maxWidth: 500,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={img1}
                          alt="Student"
                        />
                        <CardContent align={"center"}>
                          <Typography gutterBottom variant="h5" component="div">
                            Students
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            List of Students that have registered in Classroom
                            Schedular app
                          </Typography>
                          <Typography variant="h6" component="div">
                            No. of Student :
                          </Typography>
                          <ColorButton variant="outlined">
                            <Typography variant="h6">{studentCount}</Typography>
                          </ColorButton>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Card
                        sx={{
                          maxWidth: 500,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={img2}
                          alt="Teachers"
                        />
                        <CardContent align={"center"}>
                          <Typography gutterBottom variant="h5" component="div">
                            Teachers
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Number of Teachers associated with the course in
                            Classroom Schedular app
                          </Typography>
                          <Typography variant="h6" component="div">
                            No. of Teacher :
                          </Typography>
                          <ColorButton variant="outlined">
                            <Typography variant="h6">{teacherCount}</Typography>
                          </ColorButton>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Card
                        sx={{
                          maxWidth: 500,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={img3}
                          alt="Subjects"
                        />
                        <CardContent align={"center"}>
                          <Typography gutterBottom variant="h5" component="div">
                            Subjects
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Number of Subjects that have been associated with
                            the Classroom Schedular app
                          </Typography>
                          <Typography variant="h6" component="div">
                            No. of Subjects :
                          </Typography>
                          <ColorButton variant="outlined">
                            <Typography variant="h6">{subjectCount}</Typography>
                          </ColorButton>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Card
                        sx={{
                          maxWidth: 500,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={img4}
                          alt="Student"
                        />
                        <CardContent align={"center"}>
                          <Typography gutterBottom variant="h5" component="div">
                            Assignments
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Nummber of Assignments that have assigned by
                            teachers in Classroom Schedular app
                          </Typography>
                          <Typography variant="h6" component="div">
                            No. of Assignmnets :
                          </Typography>
                          <ColorButton variant="outlined">
                            <Typography variant="h6">0</Typography>
                          </ColorButton>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </Box>

              {/* Subject Data*/}
              <Box p={5} sx={{ mt: 10 }}>
                <Paper elevation={3}>
                  <Box p={5}>
                    <Typography
                      variant="h3"
                      color={"GrayText"}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        mt: 4,
                        mb: 0,
                      }}
                    >
                      Timetable
                    </Typography>
                    <STimetable />
                  </Box>
                </Paper>
              </Box>

              <Footer sx={{ mt: 2, mb: 0 }} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StudentDashboard;
