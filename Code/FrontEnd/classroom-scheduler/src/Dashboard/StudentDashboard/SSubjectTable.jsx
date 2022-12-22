import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCommonSubjectData } from "../../Services/user-service";
import CommonSubjectList from "../Components/CommonTable/Subject/CommonSubjectList";
import StudentHeader from "./StudentHeader";

function SSubjectTable() {
  const [rows, setRows] = useState([]);

  const studentData = JSON.parse(sessionStorage.getItem("student"));

  useEffect(() => {
    getCommonSubjectData(studentData)
      .then((response) => {
        console.log("rows: ", response);
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
      <Box p={5} sx={{ mt: 10 }}>
        <Paper elevation={3}>
          <Box p={5}>
            <header>
              <div style={{ marginTop: "80px", marginBottom: "18px" }}>
                <Typography variant="h2" align="center">
                  Subject Data
                </Typography>
              </div>
            </header>
            <Box mt={5}>
              <Paper elevation={3}>
                <Box p={2} height={120 + 80 * rows.length}>
                  <CommonSubjectList rows={rows} />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default SSubjectTable;
