import React, { useState } from "react";
import Swal from "sweetalert2";

import TimetableHeader from "./TimetableHeader";
import TimetableList from "./TimetableList";
import TimetableAdd from "./TimetableAdd";
import TimetableEdit from "./TimetableEdit";
import { toast } from "react-toastify";
import {
  deleteTimetableData,
  getSubjectData,
  getTeacherData,
  getTimetableData,
} from "../../Services/user-service";
import { useEffect } from "react";
import { Box, Paper } from "@mui/material";

function Timetable() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subjectData, setSubjectData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);

  // const adminData = JSON.parse(sessionStorage.getItem("admin"));

  useEffect(() => {
    getTimetableData(rows)
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
    getTeacherData(teacherData)
      .then((response) => {
        setTeacherData(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });
    getSubjectData(subjectData)
      .then((response) => {
        setSubjectData(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });
  }, []);

  const handleEdit = (id) => {
    const [data] = rows.filter((data) => data.timetable_id === id);
    console.log("edit:", data);
    setSelectedRow(data);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [data] = rows.filter((data) => data.timetable_id === id);
        console.log("delete:", data);

        deleteTimetableData(data.timetable_id)
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
            console.log("Error Log");
          });

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `Timetable's data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setRows(rows.filter((data) => data.timetable_id !== id));
      }
    });
  };

  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Box mt={5} >
            <p>Home / TimetableData</p>
            <Paper elevation={3}>
              <Box p={2} height={250 + 150 * rows.length}>
                <TimetableHeader setIsAdding={setIsAdding} />
                <TimetableList
                  rows={rows}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </Box>
            </Paper>
          </Box>
        </>
      )}
      {/* Add */}
      {isAdding && (
        <TimetableAdd
          rows={rows}
          setRows={setRows}
          setIsAdding={setIsAdding}
          subjectData={subjectData}
          teacherData={teacherData}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <TimetableEdit
          rows={rows}
          selectedRow={selectedRow}
          setRows={setRows}
          setIsEditing={setIsEditing}
          subjectData={subjectData}
          teacherData={teacherData}
        />
      )}
    </div>
  );
}

export default Timetable;
