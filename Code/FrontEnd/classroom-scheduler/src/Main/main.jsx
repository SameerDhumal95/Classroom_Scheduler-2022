import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";

import FAQ from "./FAQ/FAQ";
import { makeStyles } from "@mui/styles";
import cs from "../Assets/videos/cs.mp4";

const useStyles = makeStyles({
  rootcontainer: {
    paddingLeft: 0,
    width: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(239, 239, 239)",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div id="main" className={classes.rootcontainer} p={0}>
        <video className={classes.video} src={cs} autoPlay loop muted />
        <div className={classes.content}>
          <Typography
            variant="h1"
            color={"rgb(255, 250, 231)"}
            fontSize="6rem"
            align="center"
          >
            Classroom Scheduler
          </Typography>
          <Typography
            variant="h6"
            color={"rgb(0, 0, 0)"}
            fontSize={"30px"}
            align="center"
          >
            Be educated so that you can change the world!
          </Typography>
        </div>
      </div>
      <Container>
        <About></About>
      </Container>
      <Container>
        <Contact></Contact>
      </Container>
      <Container>
        <FAQ></FAQ>
      </Container>
    </div>
  );
};

export default Main;
