import { Box, Paper } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { addSubjectData } from "../../Services/user-service";

function SubjectAdd({ rows, setRows, setIsAdding }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  
const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const textInput = useRef(null);
  const arr=[];
  if(rows.length==0) rows={...arr};

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !duration) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = rows.length + 1;
    const newSubject = {
      id,
      name,
      duration,
    };
     //rows.push(newSubject);
    const unewSubject = { ...newSubject, classcoordinator_id:adminData.classcoordinator_id };
    console.log("Add", unewSubject);

    addSubjectData(unewSubject)
      .then((response) => {
        console.log(response);
        console.log("success log");
        window.location.reload();
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
      text: `${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Box mt={25}>
      <p>Home / Subject / AddSubject</p>
      <Paper elevation={3}>
        <Box paddingTop={5}>
          <div className="small-container">
            <form onSubmit={handleAdd}>
              <h1>Add Subject</h1>
              <label htmlFor="name">Module Name</label>
              <input
                id="name"
                type="text"
                ref={textInput}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                type="text"
                ref={textInput}
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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

export default SubjectAdd;
