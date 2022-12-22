import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <div className="section-title" id="about">
        <Typography
          variant="h2"
          align="center"
          sx={{ padding: "50px" }}
          color="GrayText"
          fontSize={"5rem"}
        >
          About Us
        </Typography>
      </div>
      <Typography
        variant="body1"
        align="center"
        color={"InfoText"}
        fontSize={"20px"}
        gutterBottom
      >
        Classroom-Scheduler is a free blended learning platform developed by
        CDAC for educational institutions that aims to simplify creating,
        distributing, and grading assignments. The primary purpose of
        Classroom-Scheduler is to streamline the process of sharing files
        between teachers and students
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color={"InfoText"}
        fontSize={"20px"}
        gutterBottom
      >
        Teachers have the option to attach files to the assignment which
        students can view or get an individual copy. Teachers have the option to
        monitor the progress of each student on the assignment where they can
        make comments and edit. Turned in assignments can be graded by the
        teacher and returned with comments to allow the student to revise the
        assignment and turn back in. A sharp increase in usage as a result of
        the COVID-19 pandemic in which many schools shifted to remote education
        options. Specific research programs also used Google Classroom to engage
        in authentic learning from around the world.
      </Typography>
    </Container>
  );
};

export default About;
