import { Box, Paper } from "@mui/material";
import React from "react";
import SpecificTimetable from "../../../TeacherDashboard/SpecificTimetable";

function CommonTimetableData({ rows }) {
  return (
    <div className="container">
      {/* List */}
      <>
        <Box mt={5}>
          <p>Home / TimetableData</p>
          <Paper elevation={3}>
            <Box p={2} height={250 + 150 * rows.length}>
              <SpecificTimetable rows={rows} />
            </Box>
          </Paper>
        </Box>
      </>
    </div>
  );
}

export default CommonTimetableData;
