import { Box, Paper } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCommonTimetableData } from "../../Services/user-service";
import CommonTimetableList from "../Components/CommonTable/Timetable/CommonTimetableList";
import StudentHeader from "./StudentHeader";

function STimetable() {
  const [rows, setRows] = useState([]);

  const studentData = JSON.parse(sessionStorage.getItem("student"));

  useEffect(() => {
    getCommonTimetableData(studentData)
      .then((response) => {
        setRows(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });
  }, []);

  return (
    <div>
      <StudentHeader />
      <div className="container">
        {/* List */}
        <>
          <Box mt={5}>
            <p>Home / TimetableData</p>
            <Paper elevation={3}>
              <Box p={2} height={250 + 150 * rows.length}>
                <CommonTimetableList rows={rows} />
              </Box>
            </Paper>
          </Box>
        </>
      </div>
    </div>
  );
}

export default STimetable;
