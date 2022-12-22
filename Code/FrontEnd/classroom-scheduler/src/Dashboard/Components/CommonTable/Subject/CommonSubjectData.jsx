import React from "react";

import { toast } from "react-toastify";
//import { SubjectData } from "./SubjectInfoData";
import { getCommonSubjectData } from "../../../../Services/user-service";
import { useEffect } from "react";
import { Box, Paper } from "@mui/material";
import { useState } from "react";
import CommonSubjectList from "./CommonSubjectList";

function CommonSubjectData({user}) {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCommonSubjectData(user)
          .then((response) => {
            console.log("rows: ", response);
            setRows(response);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            console.log("Error Log");
            toast.error("Please input valid credentials");
          });
      }, []);


  return (
    <div className="container">
      {/* List */}

      <>
        <Box mt={5}>
          <Paper elevation={3}>
            <Box p={2} height={120 + 80 * rows.length}>
              <CommonSubjectList rows={rows} />
            </Box>
          </Paper>
        </Box>
      </>
    </div>
  );
}

export default CommonSubjectData;
