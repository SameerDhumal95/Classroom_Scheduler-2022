import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CommonHeader from "../../Components/CommonHeader";
import Timetable from "../../../Tables/Timetable/Timetable";
import { Container } from "react-bootstrap";

const ATimetable = () => {
  return (
    <>
      <div
        className="ATimetable"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CommonHeader />
    
          <Container>
            <Box sx={{ mt: 10 }}>
              <Paper elevation={3} sx={{ width: 1200 }}>
                <Box>
                  <Typography
                    variant="h3"
                    color={"GrayText"}
                    sx={{
                      display: "flex",
                      mt: 4,
                      mb: 0,
                      justifyContent: "center",
                      pt:5,
                    }}
                  >
                    Timetable
                  </Typography>
                  <Timetable />
                </Box>
              </Paper>
            </Box>
          </Container>
        </div>
    </>
  );
};

export default ATimetable;
