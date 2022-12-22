import { Box, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { editTimetableData } from "../../Services/user-service";

function TimetableEdit({ rows, selectedRow, setRows, setIsEditing,subjectData,teacherData }) {
  const timetable_id = selectedRow.timetable_id;
  console.log("Timetable Edit",selectedRow);

  const [date, setDate] = useState(selectedRow.date);
  const [start_time, setStartTime] = useState(selectedRow.start_time);
  const [end_time, setEndTime] = useState(selectedRow.end_time);
  const [subject_name, setSubjectName] = useState(selectedRow.subject_name);
  const [teacher_name, setTeacherName] = useState(selectedRow.teacher_name);


  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!date || !start_time || !end_time || !subject_name || !teacher_name) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const data = {
      timetable_id,
      date,
      start_time,
      end_time,
      subject_name,
      teacher_name,
    };

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === timetable_id) {
        rows.splice(i, 1, data);
        break;
      }
    }

    setRows(rows);

    setIsEditing(false);

    let udata = {
      ...data,
      classcoordinator_id: adminData.classcoordinator_id,
      timetable_id: selectedRow.timetable_id,
    };
    console.log("in edit: ", udata);
    editTimetableData(udata)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: `Timetable data has been updated.`,
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
      <p>Home / Timetable / Edit</p>
      <Paper elevation={3}>
        <Box pt={5}>
          <div className="small-container">
            <form onSubmit={handleUpdate}>
              <h1>Edit Timetable</h1>
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
                    onChange={e => setStartTime(e.target.value)}
                />
              <label htmlFor="end_time">End Time</label>
                <input
                    id="end_time"
                    type="time"
                    name="end_time"
                    value={end_time}
                    onChange={e => setEndTime(e.target.value)}
                />
              <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
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

export default TimetableEdit;
