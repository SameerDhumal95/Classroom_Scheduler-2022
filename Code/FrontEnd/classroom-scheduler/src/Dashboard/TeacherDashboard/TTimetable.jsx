import { Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getCommonTimetableData } from '../../Services/user-service';
import CommonTimetableData from "../Components/CommonTable/Timetable/CommonTimetableData"
import TeacherHeader from './TeacherHeader'

function TTimetable() {
    const [rows, setRows] = useState([]);

    const teacherData = JSON.parse(sessionStorage.getItem("teacher"));

    useEffect(() => {
        getCommonTimetableData(teacherData)
          .then((response) => {
            console.log("rows: ", response);
            setRows(response);
          })
          .catch((error) => {
            console.log(error);
            console.log("Error Log");
          });
      
      }, []);
    


  return (
    <div>
        <TeacherHeader />
        <header>
            <div style={{ marginTop: '80px', marginBottom: '18px' }}>
                <Typography variant='h2' align='center'>Timetable Data</Typography>
            </div>
        </header>
        <CommonTimetableData rows={rows} />
        
    </div>
  )
}

export default TTimetable