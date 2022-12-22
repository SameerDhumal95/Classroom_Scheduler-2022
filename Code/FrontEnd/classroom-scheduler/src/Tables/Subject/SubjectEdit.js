import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { editSubjectData } from "../../Services/user-service";

function SubjectEdit({ rows, selectedRow, setRows, setIsEditing }) {
  const subject_id = selectedRow.subject_id;
  console.log("Subject Edit",selectedRow);

  const [name, setName] = useState(selectedRow.name);
  const [duration, setDuration] = useState(selectedRow.duration);
  
  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !duration ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const data = {
      subject_id,
      name,
      duration,
    };

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === subject_id) {
        rows.splice(i, 1, data);
        break;
      }
    }

    setRows(rows);

    setIsEditing(false);

    let udata = {
      ...data,
      classcoordinator_id: adminData.classcoordinator_id,
      subject_id: selectedRow.subject_id,
    };
    
    editSubjectData(udata)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: `${data.name} 's data has been updated.`,
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });
  };

  return (
    <Box mt={25}>
      <p>Home / Subject / Edit</p>
      <Paper elevation={3}>
        <Box pt={5}>
          <div className="small-container">
            <form onSubmit={handleUpdate}>
              <h1>Edit Subject</h1>
              <label htmlFor="name">Module Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                type="number"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <div style={{ marginTop: "30px" }}>
                <input type="submit" value="Update" />
                <input
                  style={{ marginLeft: "12px" }}
                  className="muted-button"
                  type="button"
                  value="Cancel"
                  onClick={() => setIsEditing(false)}
                />
              </div>
            </form>
          </div>
        </Box>
      </Paper>
    </Box>
  );
}

export default SubjectEdit;
