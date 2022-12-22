import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import AssignmentTable from "../../../Tables/Assignmnet/AssignmentTable";
import CommonHeader from "../../Components/CommonHeader";

const AAssignment=()=>{
    return(
        <>
        <div className="ATimetable">
            <CommonHeader />

                {/* Assignment Data*/}
        <Box p={5} sx={{mt:10}}>
          <Paper elevation={3}>
            <Box p={5}>
              <Typography
                variant="h3"
                color={"GrayText"}
                sx={{ paddingLeft: "40%", mt: 4, mb: 0 }}
              >
                Assignment Data
              </Typography>
              <AssignmentTable />
            </Box>
          </Paper>
        </Box>
        </div>
        </>
    )
}

export default AAssignment;