import { Box, Paper } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { addStudentData } from "../../Services/user-service";

function StudentAdd({ rows, setRows, setIsAdding }) {
  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [email_id, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const textInput = useRef(null);
  const arr=[];
  if(rows.length==0) rows={...arr};

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!first_name || !email_id || !username || !password || !phone) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = rows.length + 1;
    const newStudent = {
      id,
      first_name,
      middle_name,
      last_name,
      username,
      password,
      email_id,
      phone,
    };
     //rows.push(newStudent);
    const unewStudent = { ...newStudent, classcoordinator_id: adminData.classcoordinator_id };
    console.log("Add", unewStudent);

    addStudentData(unewStudent)
      .then((response) => {
        console.log(response);
        window.location.reload();
        console.log("success log");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });

    setRows(rows);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${first_name} ${last_name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Box mt={25}>
      <p>Home / Student / AddStudent</p>
      <Paper elevation={3}>
        <Box paddingTop={5}>
          <div className="small-container">
            <form onSubmit={handleAdd}>
              <h1>Add Student</h1>
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                ref={textInput}
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="middle_name">Middle Name</label>
              <input
                id="middle_name"
                type="text"
                ref={textInput}
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
                ref={textInput}
                name="username"
                value={username}
                onChange={(e) => setUserame(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                ref={textInput}
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
              {/* <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                /> */}
              <div style={{ marginTop: "30px" }}>
                <input type="submit" value="Add" />
                <input
                  style={{ marginLeft: "12px" }}
                  className="muted-button"
                  type="button"
                  value="Cancel"
                  onClick={() => setIsAdding(false)}
                />
              </div>
            </form>
          </div>
        </Box>
      </Paper>
    </Box>
  );
}

export default StudentAdd;
