import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import StudentTable from "../../../Tables/Student/StudentTable";
import CommonHeader from "../../Components/CommonHeader";

const AStudent = () => {
  return (
    <>
      <div className="AStudent">
        <CommonHeader />

        {/* Student Data*/}
        <Box p={5}  sx={{mt:10}}>
          <Paper elevation={3}>
            <Box p={5}>
              <Typography
                variant="h3"
                color={"GrayText"}
                sx={{ display: "flex", mt: 4, mb: 0, justifyContent: "center" }}
              >
                Students Data
              </Typography>
              <StudentTable />
            </Box>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default AStudent;
