import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import TeacherTable from "../../../Tables/Teacher/TeacherTable";
import CommonHeader from "../../Components/CommonHeader";

const ATeacher = () => {
  return (
    <>
      <div className="ATeacher">
        <CommonHeader />

        {/* Teacher Data */}
        <Box p={5} sx={{mt:10}}>
          <Paper elevation={3}>
            <Box p={5}>
              <Typography
                variant="h3"
                color={"GrayText"}
                sx={{display:'flex', mt: 4, mb: 0 ,justifyContent:'center'}}
              >
                Teachers Data
              </Typography>
              <TeacherTable />
            </Box>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default ATeacher;
