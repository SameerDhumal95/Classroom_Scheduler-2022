import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { editStudentData } from "../../Services/user-service";

function StudentEdit({ rows, selectedRow, setRows, setIsEditing }) {
  const student_id = selectedRow.id;

  const [first_name, setFirstName] = useState(selectedRow.first_name);
  const [middle_name, setMiddleName] = useState(selectedRow.middle_name);
  const [last_name, setLastName] = useState(selectedRow.last_name);
  const [username, setUserame] = useState(selectedRow.username);
  const [password, setPassword] = useState(selectedRow.password);
  const [email_id, setEmail] = useState(selectedRow.email_id);
  const [phone, setPhone] = useState(selectedRow.phone);

  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!first_name || !email_id || !username || !password || !phone) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const data = {
      student_id,
      first_name,
      middle_name,
      last_name,
      username,
      password,
      email_id,
      phone,
    };

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === student_id) {
        rows.splice(i, 1, data);
        break;
      }
    }

    

    setIsEditing(false);

    let udata = {
      ...data,
      classcoordinator_id: adminData.classcoordinator_id,
      student_id: selectedRow.student_id,
    };
    
    editStudentData(udata)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: `${data.first_name} ${data.last_name}'s data has been updated.`,
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
      <p>Home / Student / Edit</p>
      <Paper elevation={3}>
        <Box pt={5}>
          <div className="small-container">
            <form onSubmit={handleUpdate}>
              <h1>Edit Employee</h1>
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="middle_name">Middle Name</label>
              <input
                id="middle_name"
                type="text"
                name="middle_name"
                value={middle_name}
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUserame(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="email_id">Email</label>
              <input
                id="email_id"
                type="email"
                name="email_id"
                value={email_id}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

export default StudentEdit;
