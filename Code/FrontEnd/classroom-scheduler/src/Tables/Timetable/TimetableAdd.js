import { Box, MenuItem, Paper, Select } from "@mui/material";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { addTimetableData } from "../../Services/user-service";

function TimetableAdd({
  rows,
  setRows,
  setIsAdding,
  subjectData,
  teacherData,
}) {
  const [subject_name, setSubjectName] = useState("");
  const [teacher_name, setTeacherName] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [date, setDate] = useState("");

  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  console.log("teacher: ", teacherData);

  const arr = [];
  if (rows.length === 0) rows = { ...arr };

  useEffect(() => {}, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!subject_name || !teacher_name || !start_time || !end_time || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = rows.length + 1;
    const newTimetable = {
      id,
      subject_name,
      teacher_name,
      start_time,
      end_time,
      date,
    };

    const unewTimetable = {
      ...newTimetable,
      classcoordinator_id: adminData.classcoordinator_id,
    };
    console.log("Add", unewTimetable);

    addTimetableData(unewTimetable)
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
      text: `Timetable data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Box mt={25}>
      <p>Home / Timetable / AddTimetable</p>
      <Paper elevation={3}>
        <Box paddingTop={5}>
          <div className="small-container">
            <form onSubmit={handleAdd}>
              <h1>Add Timetable</h1>
              <label htmlFor="subject_name">Subject Name</label>
              <br />
              <Select
                fullWidth
                value={subject_name}
                label="Subject Name"
                onChange={(e) => setSubjectName(e.target.value)}
              >
                {subjectData.map((data, val) => (
                  <MenuItem value={data.name} key={val}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <label htmlFor="teacher_name">Teacher Name</label>
              <br />
              <Select
                fullWidth
                value={teacher_name}
                label="Teacher Name"
                onChange={(e) => setTeacherName(e.target.value)}
              >
                {teacherData.map((data, val) => (
                  <MenuItem value={data.first_name} key={val}>
                    {data.first_name}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <label htmlFor="start_time">Start Time</label>
              <input
                id="start_time"
                type="time"
                name="start_time"
                value={start_time}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <label htmlFor="end_time">End Time</label>
              <input
                id="end_time"
                type="time"
                name="end_time"
                value={end_time}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
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

export default TimetableAdd;
