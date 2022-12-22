import React, { useState } from "react";
import Swal from "sweetalert2";

import StudentTableHeader from "./StudentTableHeader";
import StudentList from "./StudentList";
import StudentAdd from "./StudentAdd";
import StudentEdit from "./StudentEdit";
import { toast } from "react-toastify";
import { StudentData } from "./StudentInfoData";
import { deleteStudentData, getStudentData } from "../../Services/user-service";
import { useEffect } from "react";
import { Box, Paper } from "@mui/material";

function StudentTable() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  useEffect(() => {
    getStudentData(rows)
      .then((response) => {
        setRows(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
        toast.error("Please input valid credentials");
      });
  }, []);

  const handleEdit = (id) => {
    const [data] = rows.filter((data) => data.student_id === id);
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
        const [data] = rows.filter((data) => data.student_id === id);
        console.log("delete:", data);

        deleteStudentData(data.student_id)
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
          text: `${data.first_name} ${data.last_name}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setRows(rows.filter((data) => data.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Box mt={5}>
            <p>Home / StudentData</p>
            <Paper elevation={3}>
              <Box  p={2} height={250+150*rows.length}>
                <StudentTableHeader setIsAdding={setIsAdding} />
                <StudentList
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
        <StudentAdd rows={rows} setRows={setRows} setIsAdding={setIsAdding} />
      )}
      {/* Edit */}
      {isEditing && (
        <StudentEdit
          rows={rows}
          selectedRow={selectedRow}
          setRows={setRows}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default StudentTable;
