import React, { useState } from "react";
import Swal from "sweetalert2";

import TeacherTableHeader from "./TeacherTableHeader";
import TeacherList from "./TeacherList";
import TeacherAdd from "./TeacherAdd";
import TeacherEdit from "./TeacherEdit";
import { toast } from "react-toastify";
import { TeacherData } from "./TeacherInfoData";
import { deleteTeacherData, getTeacherData } from "../../Services/user-service";
import { useEffect } from "react";
import { Box, Paper } from "@mui/material";

function TeacherTable() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

 // const adminData = JSON.parse(sessionStorage.getItem("admin"));

  useEffect(() => {
    getTeacherData(rows)
      .then((response) => {
        console.log("rows: ", response);
        setRows(response);
        // sessionStorage.setItem("teacher", JSON.stringify(response));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
        toast.error("Please input valid credentials");
      });
  }, []);

  const handleEdit = (id) => {
    const [data] = rows.filter((data) => data.teacher_id === id);
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
        const [data] = rows.filter((data) => data.teacher_id === id);
        console.log("delete:", data);

        deleteTeacherData(data.teacher_id)
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
            <p>Home / TeacherData</p>
            <Paper elevation={3}>
              <Box  p={2} height={250+150*rows.length}>
                <TeacherTableHeader setIsAdding={setIsAdding} />
                <TeacherList
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
        <TeacherAdd rows={rows} setRows={setRows} setIsAdding={setIsAdding} />
      )}
      {/* Edit */}
      {isEditing && (
        <TeacherEdit
          rows={rows}
          selectedRow={selectedRow}
          setRows={setRows}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default TeacherTable;
