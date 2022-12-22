import React, { useState } from "react";
import Swal from "sweetalert2";

import SubjectTableHeader from "./SubjectTableHeader";
import SubjectList from "./SubjectList";
import SubjectAdd from "./SubjectAdd";
import SubjectEdit from "./SubjectEdit";
import { toast } from "react-toastify";
//import { SubjectData } from "./SubjectInfoData";
import { deleteSubjectData, getSubjectData } from "../../Services/user-service";
import { useEffect } from "react";
import { Box, Paper } from "@mui/material";

function SubjectTable() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

 const adminData = JSON.parse(sessionStorage.getItem("admin"));

  useEffect(() => {
    getSubjectData(rows)
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

  const handleEdit = (id) => {
    const [data] = rows.filter((data) => data.subject_id === id);
  
    setSelectedRow(data);
    setIsEditing(true);
  };

  const handleDelete = (subject_id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [data] = rows.filter((data) => data.subject_id === subject_id);
        console.log("delete:", data);

        deleteSubjectData(data.subject_id)
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
          text: `${data.name}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setRows(rows.filter((data) => data.subject_id !== subject_id));
      }
    });
  };

  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Box mt={5} >
            <Paper elevation={3}>
              <Box  p={2} height={120+80*rows.length} >
                <SubjectTableHeader setIsAdding={setIsAdding} />
                <SubjectList
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
        <SubjectAdd rows={rows} setRows={setRows} setIsAdding={setIsAdding} />
      )}
      {/* Edit */}
      {isEditing && (
        <SubjectEdit
          rows={rows}
          selectedRow={selectedRow}
          setRows={setRows}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default SubjectTable;
